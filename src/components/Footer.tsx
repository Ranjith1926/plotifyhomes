import Link from 'next/link';
import { Home, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">
                Plotify<span className="text-accent">Homes</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Your trusted partner in finding the perfect property. We bring transparency, trust, and expertise to every real estate transaction.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="/" className="hover:text-accent transition-colors text-sm sm:text-base">Home</Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-accent transition-colors text-sm sm:text-base">Properties</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors text-sm sm:text-base">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors text-sm sm:text-base">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Property Types</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="/properties?type=plot" className="hover:text-accent transition-colors text-sm sm:text-base">Residential Plots</Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="hover:text-accent transition-colors text-sm sm:text-base">Villas</Link>
              </li>
              <li>
                <Link href="/properties?type=apartment" className="hover:text-accent transition-colors text-sm sm:text-base">Apartments</Link>
              </li>
              <li>
                <Link href="/properties?type=farmhouse" className="hover:text-accent transition-colors text-sm sm:text-base">Farmhouses</Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="hover:text-accent transition-colors text-sm sm:text-base">Commercial</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact Info</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">123 Brigade Road, Ashok Nagar, Bangalore - 560025</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+918438161073" className="hover:text-accent transition-colors text-sm sm:text-base">
                  +91 84381 61073
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@plotifyhomes.com" className="hover:text-accent transition-colors text-sm sm:text-base break-all">
                  info@plotifyhomes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm">
            {currentYear} PlotifyHomes. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
