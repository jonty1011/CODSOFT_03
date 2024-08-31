import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="container mx-auto p-4">
        <p className="text-center font-bold">
          &copy; {new Date().getFullYear()} All rights reserved | Jay Bhatt
        </p>
      </div>
    </footer>
  );
};

export default Footer;
