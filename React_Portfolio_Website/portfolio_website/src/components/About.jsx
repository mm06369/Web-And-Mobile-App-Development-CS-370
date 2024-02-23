import React from 'react';
import './stylesheets/About.css';
import Header from './Header';

//This is an about component that is an about page in the application.

function About() {
  return (
    <div>
    <Header/>
    <div className="about-container">
      <h1>About This Website</h1>
      <p>Welcome to my portfolio website! This site was created to showcase my work and provide information about my skills and experience as a web developer.</p>
      <p>The website is built using React.js, a popular JavaScript library for building user interfaces, and is designed to be responsive and mobile-friendly.</p>
      <p>You can browse my portfolio to see examples of my work, read more about me on the About page, and get in touch with me on the Contact page if you're interested in working together.</p>
      <p>Thank you for visiting, and I look forward to hearing from you!</p>
    </div>
    </div>
  );
}

export default About;
