import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Add paths where we want the navigation to always have a background
  const pathsWithBackground = ['/contact', '/login', '/signup'];
  const shouldHaveBackground = pathsWithBackground.includes(location.pathname) || isScrolled;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        shouldHaveBackground ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <Heart className={`w-8 h-8 ${shouldHaveBackground ? 'text-purple-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${shouldHaveBackground ? 'text-gray-800' : 'text-white'}`}>
                CareSpacez
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`${
                    shouldHaveBackground ? 'text-gray-600 hover:text-purple-600' : 'text-white/90 hover:text-white'
                  } transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/login"
                className={`px-6 py-2 rounded-full ${
                  shouldHaveBackground
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-white text-purple-600 hover:bg-gray-100'
                } transition-colors duration-300`}
              >
                Sign In
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${shouldHaveBackground ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${shouldHaveBackground ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-purple-600 hover:text-purple-700 hover:bg-purple-50 rounded-md"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className={`${shouldHaveBackground ? 'pt-16' : ''}`} />
    </>
  );
};

export default Navigation; 