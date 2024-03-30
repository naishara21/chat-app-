import React, { useState, useEffect, useContext } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  Button,
  Box,
  useDisclosure,
  Text,
  Link,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Spinner,
} from "@chakra-ui/react";
import ProfileModal from "./ProfileModal";
import axios from "axios";
import { Store } from "../../Store";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const router = useRouter();
  const { dispatch } = useContext(Store);

  const logoutHandler = () => {
    removeCookie("user");
    ctxDispatch({ type: "USER_LOGOUT" });
    dispatch({ type: "USER_LOGOUT" });
    router.push("/");
  };

  const handleSearch = async () => {
    if (!search) {
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.get(`/api/users?search=${search}`);
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error fetching users",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const handleSearchResultClick = (user) => {
    onClose();
    router.push(`/chat?id=${user._id}`);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="teal.500"
        color="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Box d="flex" alignItems="center">
          <Text fontSize="2xl" fontFamily="Work sans">
            CulturaLang
          </Text>
          <Box ml="4">
            <Link href="/" color="white">
              Home
            </Link>
          </Box>
          <Box ml="4">
            <Link href="/about" color="white">
              About
            </Link>
          </Box>
          <Box ml="4">
            <Link href="/contact" color="white">
              Contact
            </Link>
          </Box>
        </Box>

        <Box d="flex" alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              bg="white"
              rightIcon={<ChevronDownIcon />}
            >
              <Avatar
                size="sm"
                cursor="pointer"
                name={userInfo.name}
                src={userInfo.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={userInfo}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Drawer placement="left" size="sm" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Users</DrawerHeader>
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
              <Spinner ml="auto" d="flex" />
            ) : (
              searchResults.map((user) => (
                <Box
                  key={user._id}
                  onClick={() => handleSearchResultClick(user)}
                  cursor="pointer"
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  w="100%"
                  d="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  px={3}
                  py={2}
                  borderRadius="lg"
                >
                  <Box>
                    <Avatar size="sm" src={user.pic} />
                    <Text fontWeight="bold" ml={2}>
                      {user.name}
                    </Text>
                  </Box>
                  <Box>
                    <Text>{user.email}</Text>
                  </Box>
                </Box>
              ))
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
