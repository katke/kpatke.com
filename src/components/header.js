import React from 'react';
import '../styles/header.css';
import Navigation from "./navigation";

function Header() {
  return (
      <header className="top-header">
          <h1 id="name">Katherine Patke</h1>
          <aside className="title">Chicago-based software developer</aside>
        <Navigation />
      </header>
  );
}

export default Header;
