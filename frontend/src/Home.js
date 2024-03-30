import React from 'react';
import './Home.css'; // Import CSS file

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`;

const Nav = styled.nav`
  background-color: #67c462;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 30px;
  padding: 2px 8px;
  border-radius: 15px;
  font-family: Segoe UI;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
`;

const MenuItem = styled.li`
  margin-right: 20px;
`;

const Dropdown = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #67c462;
  min-width: 160px;
  z-index: 1;
`;

const DropdownToggle = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: Segoe UI;
  cursor: pointer;

  &:hover + ${DropdownContent} {
    display: block;
  }
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;

const AboutColumn = styled.div`
  background-color: #67c462;
  border: 1px solid #67c462;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgb(33, 58, 33);
  color: #f6f4eb;
  font-size: 17px;
`;

const AboutTitle = styled.h3`
  font-family: Montserrat;
`;

const AboutParagraph = styled.p`
  font-family: Garmond;
`;

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
