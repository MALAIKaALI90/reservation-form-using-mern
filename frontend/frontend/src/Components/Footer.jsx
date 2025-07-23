import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 text-sm md:text-base mb-4 md:mb-0">
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/menu" className="hover:text-gray-400">Menu</a></li>
          <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-lg">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} YourWebsiteName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

