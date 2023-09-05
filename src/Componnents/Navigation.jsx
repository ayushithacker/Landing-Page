import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/images/ucisious.png" alt="logo"></img>
      </div>

      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Blog</li>
        <li href="#">Contact Us</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navigation;
