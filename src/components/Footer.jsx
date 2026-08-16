import React from 'react';
import { Instagram, Github, Linkedin, Mail } from 'lucide-react'; // optional icons

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Left — name + tagline */}
          <div>
            <p className="font-semibold text-lg">peer abdul adnan.</p>
            <p className="text-text-secondary text-sm mt-1">Building the web, one line at a time.</p>
          </div>

          {/* Right — links */}
          <div className="flex gap-4">
            <a href="https://github.com/AbdulAdnan7" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-text-secondary hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/in/peerabduladnan" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-text-secondary hover:text-white transition" />
            </a>
            <a href="https://instagram.com/peerabduladnan" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-text-secondary hover:text-white transition" />
            </a>
            <a href="mailto:peerabduladnan@gmail.com">
              <Mail className="w-5 h-5 text-text-secondary hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} Peer Abdul Adnan. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs">
            Designed & built by <span className="text-white">Adnan</span> · Hyderabad, India
          </p>
        </div>

      </div>
    </footer>
  )
}
export default Footer;
