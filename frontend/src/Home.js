import React from 'react';
import './Home.css'; // Import CSS file

function Home() {
  return (
    <div>
      <nav>
        <div className="left-align">
          <a href="Home">CULTURA LANG</a>
        </div>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <div className="dropdown">
              <a href="Chatpage">Chat</a>
            </div>
          </li>
          <li>
            <a href="Information.htm">Information</a>
          </li>
          <li>
            <div className="dropdown">
              <a href="Contact.htm">Contact</a>
            </div>
          </li>
        </ul>
      </nav>
      <img className="image" src="logo.png" alt="logo" />
      <div className="about">
        <div className="column">
          <h3>About Us: Cultura Lang - Empowering Communities</h3>
          <p>Welcome to Cultura Lang, a platform dedicated to fostering connections among students in grades 6th to 10th who share common interests and passions. We understand the challenges that students find when it comes to finding like-minded peers and the importance of creating a sense of belonging within the school community. At Cultura Lang, our mission is simple yet powerful. To bridge the gap between students who often feel excluded by providing a safe and welcoming space where they can connect with others who share their interests. We believe that fostering these connections not only enriches the lives of individual students but also strengthens the entire school community. We have developed a user-friendly website specifically designed to cater to the needs of students in your age group. We chose a website as our platform because we understand that downloading applications might not always be an option for students your age. With Cultura Lang, you can easily access our platform from any device with an internet connection. We invite you to join Interest and become part of a community that values inclusion, friendship, and shared interests. Together, we can break down the barriers of social exclusion! Let's connect minds, empower communities, and make school a place where every student feels like they truly belong. Our website offers a range of features designed to help you connect with like-minded individuals within your school community.</p>
        </div>
      </div>
      <div className="container">
        <div className="column">
          <h3>Chat Feature</h3>
          <p>Engaging in real-time conversations within chat communities centered around your interests, hobbies, or passions on a social inclusion website is a great experience. These communities serve as vibrant hubs where individuals with shared enthusiasms gather to connect and converse. By joining various chat communities, you can instantly discover your group of people who resonate with your specific interests. This immediate connection fosters a sense of belonging and inclusion that can be immensely fulfilling. This diversity enhances your ability to connect with people from various backgrounds and appreciate the beauty of inclusivity. In essence, these chat communities are more than just online spaces—they are catalysts for social inclusion, personal empowerment, and meaningful connections. They remind us that, in the digital age, we can find our place and our people, no matter how unique our interests may be.</p>
          <img src="CH.jfif" alt="Chat Feature" />
        </div>
        <div className="column">
          <h3>Chatbot</h3>
          <p>This chabot helps in navigating the online chat rooms. It is designed to make your virtual social experiences more enjoyable and accessible. It simplifies the process of finding and joining chat rooms of your interest, even those that require passwords. It helps connect you with like-minded individuals in a diverse array of chat rooms. Whether you're into gaming, cooking, fitness, or just about any other hobby or interest, Itcan help you discover the perfect community. The main feature is its password assistance. For chat rooms that require a passwords that may grant you access.It's a powerful tool for expanding your online network and finding communities that resonate with your interests and passions. Overall this chabot provides you with specific instruction to join a specific chat room and provides you with various conversation starters to make the interaction among chatroom easier. This chatbot is located to the bottom right corner.</p>
          <img src="C.jfif" alt="Chatbot" />
        </div>
        <div className="column">
          <h3>Intuitive Search Bar</h3>
          <p>Our intuitive search bar is a powerful tool designed to help you discover and connect with chat communities that align with your interests. Whether you're passionate about sports, music, dance, mathematics, science, technology, or any other topic, our search bar makes it easy to find relevant chat groups. Simply enter keywords related to your interests, and our platform will promptly display a list of communities that match your query. However, we understand that not every niche or specific interest may have a dedicated community already established. In such cases, we offer an alternative solution. If you can't find a community related to your keyword of interest, we encourage you to engage with our chatbot. The chatbot will guide you on how to join our general chat group by logging in, where you can post your inquiry or express your interest in starting a new community. An admin will reply and get back to you.</p>
          <img src="S.jfif" alt="Intuitive Search Bar" />
        </div>
      </div>
    </div>
  );
}

export default Home;

