// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-10 dark:bg-slate-900">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Hernando Abella. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
