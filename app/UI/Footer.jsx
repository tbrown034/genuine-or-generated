import React from "react";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="flex justify-center">
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
