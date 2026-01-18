import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/riyanshitomar48/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a
        href="https://x.com/2Riyanshi30079"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/riyanshi-tomar-808ab7318/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
