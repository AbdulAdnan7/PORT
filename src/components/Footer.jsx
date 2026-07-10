import React from 'react';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react'; // optional icons

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Copyright */}
        <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} Abdul Adnan. All rights reserved.</p>
        
        {/* Right: Social links */}
        <div className="flex gap-4">
          <a href="https://github.com/AbdulAdnan7" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-rose-400 transition" />
          </a>
          <a href="https://linkedin.com/in/peerabduladnan" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-rose-400 transition" />
          </a>
          <a href="mailto:peerabduladnan.com">
            <Mail className="w-6 h-6 hover:text-rose-400 transition" />
          </a>
          <a href="https://instagram.com/peerabduladnan" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-rose-400 transition" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
