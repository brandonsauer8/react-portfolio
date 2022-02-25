import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div>
      <nav className="nav has-text-white">
        <div className="nav-head has-text-white">
          <a
            className="nav-item"
            href="https://github.com/brandonsauer8?tab=repositories"
          >
            <span className="content is-large"> Brandon Sauer </span>
          </a>

        </div>
      </nav>

      <Nav></Nav>
    </div>
  );
}

export default Header;