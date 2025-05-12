import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-lg py-10 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} NexTech. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
