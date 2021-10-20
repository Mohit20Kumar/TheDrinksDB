import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">About</h1>
      <p style={{ textAlign: "center" }}>
        This is just a simple Drinks Database Website, made by MohitKumar using
        React for learning purpose.
        <br /> This Website uses the The Cocktails DB API to fetch the Drinks.
        <br />
        Also, Special thanks to John Smilga for the React Tutorials.
      </p>
    </section>
  );
};

export default About;
