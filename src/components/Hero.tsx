'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, IndianRupee, Building } from 'lucide-react';

export default function Hero() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (budget) params.set('budget', budget);
    if (propertyType) params.set('type', propertyType);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-svh flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-navy/80" />
      </div>

      <div className="relative z-10 container-custom text-center pt-20 pb-10 sm:pt-20 sm:pb-0">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <span className="inline-block bg-accent/20 text-accent px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Trusted by 3,500+ Happy Clients
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Premium Plots & Properties
            <br />
            <span className="text-accent">You Can Trust</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Discover verified land and property listings with transparent pricing. Your dream property is just a search away.
          </p>

          <form
            onSubmit={handleSearch}
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl max-w-4xl mx-auto animate-slide-up"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 text-sm sm:text-base"
                />
              </div>

              <div className="relative">
                <IndianRupee className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 appearance-none bg-white cursor-pointer text-sm sm:text-base"
                >
                  <option value="">Budget</option>
                  <option value="0-5000000">Under 50 Lakhs</option>
                  <option value="5000000-10000000">50 Lakhs - 1 Cr</option>
                  <option value="10000000-50000000">1 Cr - 5 Cr</option>
                  <option value="50000000+">Above 5 Cr</option>
                </select>
              </div>

              <div className="relative">
                <Building className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 appearance-none bg-white cursor-pointer text-sm sm:text-base"
                >
                  <option value="">Property Type</option>
                  <option value="plot">Residential Plot</option>
                  <option value="villa">Villa</option>
                  <option value="apartment">Apartment</option>
                  <option value="farmhouse">Farmhouse</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 py-3 sm:py-4 sm:col-span-2 lg:col-span-1"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </form>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 sm:mt-12 text-white/80 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full" />
              <span>100% Verified Listings</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full" />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full" />
              <span>Legal Assistance</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}
