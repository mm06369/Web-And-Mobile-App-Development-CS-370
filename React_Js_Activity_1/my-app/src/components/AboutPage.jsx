
import React from "react";
import "./AboutPage.css";

function About() {
  const date = new Date().toLocaleDateString();
  return (
    <div className="about">
      <h1 className="heading">About</h1>
      <p className="date">Today's Date: {date}</p>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        ullamcorper, nulla sit amet laoreet vulputate, lorem eros tempor
        ipsum, nec dapibus mauris ex non nisi. Sed aliquam arcu eu mauris
        pulvinar, eget ullamcorper quam tincidunt. Duis feugiat enim vel
        mauris fringilla, non tincidunt neque pellentesque. Nullam
        tincidunt ante ut leo lacinia, a bibendum velit rhoncus. Nullam
        pulvinar, purus nec bibendum ullamcorper, ipsum quam euismod felis,
        ac fermentum nulla lectus in risus. Sed aliquet tincidunt
        condimentum. Proin quis ligula sapien. Duis vehicula, risus in
        lobortis convallis, nulla nulla pharetra lectus, vel volutpat enim
        est non elit. Donec consequat, dolor non dapibus ultrices, nunc
        sapien viverra velit, nec dapibus ante metus ac dolor. In hac
        habitasse platea dictumst. In hac habitasse platea dictumst. In
        hac habitasse platea dictumst.
      </p>
    </div>
  );
}

export default About;
