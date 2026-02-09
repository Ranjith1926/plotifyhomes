'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Home } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const showTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className={`p-1.5 sm:p-2 rounded-lg ${showTransparent ? 'bg-white' : 'bg-primary'}`}>
              <Home className={`w-5 h-5 sm:w-6 sm:h-6 ${showTransparent ? 'text-primary' : 'text-white'}`} />
            </div>
            <span className={`text-xl sm:text-2xl font-bold ${showTransparent ? 'text-white' : 'text-primary'}`}>
              Plotify<span className="text-accent">Homes</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${
                  pathname === link.href
                    ? showTransparent ? 'text-accent' : 'text-primary'
                    : showTransparent ? 'text-white' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918438161073"
              className={`flex items-center gap-2 font-medium ${
                showTransparent ? 'text-white' : 'text-gray-700'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+91 84381 61073</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showTransparent ? 'text-white' : 'text-gray-700'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed top-16 sm:top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3.5 px-4 font-medium rounded-lg transition-colors ${
                pathname === link.href
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <hr className="my-4 border-gray-100" />

          <a
            href="tel:+918438161073"
            className="py-3.5 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-lg flex items-center gap-3"
          >
            <Phone className="w-5 h-5 text-primary" />
            +91 84381 61073
          </a>

          <Link
            href="/contact"
            className="btn-primary text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
