import React from "react";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome! You're logged in</h2>

        <button onClick={handleLogout}>Logout</button>
      </nav>
    </section>
  );
};

export default Hero;
