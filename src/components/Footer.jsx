import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-lg py-10 px-4 mt-10 bottom-0 w-screen ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} NexTech. All rights reserved.</p>
        <div className="space-x-4">
          <h2>Help Center</h2>
          <p className="hover:text-white">Privacy</p>
          <p className="hover:text-white">Terms</p>
          <p className="hover:text-white">FAQs</p>
          <p className="hover:text-white">Corporate Information</p>
          <p className="hover:text-white">Legal Notices</p>
        </div>
        <div className="space-x-4">
          <h2>Follow us</h2>
          <p className="hover:text-white">Instagram</p>
          <p className="hover:text-white">Facebook</p>
          <p className="hover:text-white">Twitter</p>
          <p className="hover:text-white">LinkedIn</p>
          <p className="hover:text-white">Tiktok</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
