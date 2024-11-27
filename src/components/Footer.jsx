import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">About Us</h4>
            <p className="text-sm">
              We are committed to helping you achieve your goals with personalized guidance and a unique partnership.
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:text-white transition">Home</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition ">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
