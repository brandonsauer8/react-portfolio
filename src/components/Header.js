import React, { useState } from 'react';
import Navigation from "./Nav";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <nav className="nav content is-large has-text-weight-bold">
        <div className="nav-head">
          <a
            className="nav-item"
            rel="noreferrer"
            href="https://github.com/brandonsauer8?tab=repositories"
          >
            <span className="content is-large">Brandon Sauer</span>
          </a>
        </div>
      </nav>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;