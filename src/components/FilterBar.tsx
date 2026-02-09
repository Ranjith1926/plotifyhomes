'use client';

import { MapPin, IndianRupee, Building, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  location: string;
  budget: string;
  propertyType: string;
  onLocationChange: (value: string) => void;
  onBudgetChange: (value: string) => void;
  onPropertyTypeChange: (value: string) => void;
}

export default function FilterBar({
  location,
  budget,
  propertyType,
  onLocationChange,
  onBudgetChange,
  onPropertyTypeChange,
}: FilterBarProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 md:p-6 mb-6 sm:mb-8">
      <div className="flex items-center gap-2 mb-3 sm:mb-4 md:mb-0 md:hidden">
        <SlidersHorizontal className="w-5 h-5 text-primary" />
        <span className="font-medium text-gray-700 text-sm sm:text-base">Filters</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search location..."
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 text-sm sm:text-base"
          />
        </div>

        <div className="relative">
          <IndianRupee className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <select
            value={budget}
            onChange={(e) => onBudgetChange(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 appearance-none bg-white cursor-pointer text-sm sm:text-base"
          >
            <option value="">All Budgets</option>
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
            onChange={(e) => onPropertyTypeChange(e.target.value)}
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 appearance-none bg-white cursor-pointer text-sm sm:text-base"
          >
            <option value="">All Types</option>
            <option value="plot">Residential Plot</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="farmhouse">Farmhouse</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        <button
          onClick={() => {
            onLocationChange('');
            onBudgetChange('');
            onPropertyTypeChange('');
          }}
          className="py-2.5 sm:py-3 px-4 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base sm:col-span-2 md:col-span-1"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
