import React from 'react';
import './Home.css'; // Import CSS file

function Home() {
  return (
    <div className="Container">
      <nav className="Nav">
        <a className="Title" href="#">CULTURA LANG</a>
        <ul className="Menu">
          <li className="MenuItem">
            <a href="#">Home</a>
          </li>
          <li className="MenuItem">
            <div className="Dropdown">
              <a className="DropdownToggle">Chat</a>
              <div className="DropdownContent">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                {/* Add more dropdown links as needed */}
              </div>
            </div>
          </li>
          <li className="MenuItem">
            <a href="#">Information</a>
          </li>
          <li className="MenuItem">
            <div className="Dropdown">
              <a className="DropdownToggle">Contact</a>
              <div className="DropdownContent">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                {/* Add more dropdown links as needed */}
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <img src="logo.png" alt="logo" />
      <div className="AboutContainer">
        <div className="AboutColumn">
          <h3 className="AboutTitle">About Us: Cultura Lang - Empowering Communities</h3>
          <p className="AboutParagraph">
            Welcome to Cultura Lang, a platform dedicated to fostering connections among students in grades 6th to 10th who share common interests and passions...
          </p>
        </div>
        {/* Add more AboutColumns as needed */}
      </div>
    </div>
  );
}

export default Home;

