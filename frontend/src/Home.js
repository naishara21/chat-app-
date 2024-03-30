import React from 'react';
import './Home.css'; // Import CSS file

// React component
function Home() {
  return (
    <Container>
      <Nav>
        <Title href="#">CULTURA LANG</Title>
        <Menu>
          <MenuItem>
            <a href="#">Home</a>
          </MenuItem>
          <MenuItem>
            <Dropdown>
              <DropdownToggle>Chat</DropdownToggle>
              <DropdownContent>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                {/* Add more dropdown links as needed */}
              </DropdownContent>
            </Dropdown>
          </MenuItem>
          <MenuItem>
            <a href="#">Information</a>
          </MenuItem>
          <MenuItem>
            <Dropdown>
              <DropdownToggle>Contact</DropdownToggle>
              <DropdownContent>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                {/* Add more dropdown links as needed */}
              </DropdownContent>
            </Dropdown>
          </MenuItem>
        </Menu>
      </Nav>
      <img src="logo.png" alt="logo" />
      <AboutContainer>
        <AboutColumn>
          <AboutTitle>About Us: Cultura Lang - Empowering Communities</AboutTitle>
          <AboutParagraph>
            Welcome to Cultura Lang, a platform dedicated to fostering connections among students in grades 6th to 10th who share common interests and passions...
          </AboutParagraph>
        </AboutColumn>
        {/* Add more AboutColumns as needed */}
      </AboutContainer>
    </Container>
  );
}

export default Home;
