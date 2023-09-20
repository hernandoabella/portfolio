// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <h1>Hernando Abella</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
