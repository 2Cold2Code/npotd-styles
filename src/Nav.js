import React from "react";

export default function Nav() {
  return (
    <div>
      <a className="home" href="#">
        Home
      </a>
      <a className="about" href="#">
        About
      </a>
      <a className="complain" href="#">
        {"Tell us about\nhow you feel\nabout our nav\n not working!"}
      </a>
    </div>
  );
}
