import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { Button, Link, Box, Text, Menu, MenuButton, MenuItem, MenuList, Avatar, MenuDivider, Spinner } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

function SideDrawer({ user }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const toast = useToast();
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: "Failed to load the search results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessProfile = async (userId) => {
    try {
      setLoadingChat(true);

      // Fetch user profile based on userId
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user/${userId}`, config);

      setLoadingChat(false);
      // Redirect to user profile page or display in modal
      history.push(`/user/${userId}`);
    } catch (error) {
      setLoadingChat(false);
      toast({
        title: "Error fetching the user profile",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#67C462"
        color="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Text fontSize="2xl" fontFamily="Work sans">
          CulturaLang
        </Text>
        <Link href="https://6608effdcac64574ad72e488--serene-meringue-71882f.netlify.app/home" ml={4} color="white">Home</Link>
        <Link href="https://6608effdcac64574ad72e488--serene-meringue-71882f.netlify.app/Information.htm" ml={4} color="white">Information</Link>
        <Link href="https://culturalang.onrender.com" ml={4} color="white">Chat</Link>
        <Link href="https://6608effdcac64574ad72e488--serene-meringue-71882f.netlify.app/contact" ml={4} color="white">Contact</Link>
        <Button variant="ghost" onClick={handleSearch}>
          <i className="fas fa-search"></i>
          <Text d={{ base: "none", md: "flex" }} px={4}>
            Search User
          </Text>
        </Button>
        <div>
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <MenuItem color="black">My Profile</MenuItem>
              <MenuDivider />
              <MenuItem color="black" onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
      <Drawer placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box d="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <Spinner />
            ) : (
              searchResult ? (
                <Box>
                  <Text mb={2}>Search Result:</Text>
                  <Box onClick={() => accessProfile(searchResult._id)}>
                    <Avatar
                      size="sm"
                      name={searchResult.name}
                      src={searchResult.pic}
                    />
                    <Text ml={2} cursor="pointer">{searchResult.name}</Text>
                  </Box>
                </Box>
              ) : (
                <Text>No results found</Text>
              )
            )}
            {loadingChat && <Spinner />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
