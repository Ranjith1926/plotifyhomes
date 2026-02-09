import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { properties } from '@/data/properties';

export default function FeaturedProperties() {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-primary font-medium mb-2 block text-sm sm:text-base">Featured Listings</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Handpicked Properties
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-3 max-w-xl text-sm sm:text-base">
              Explore our carefully curated selection of premium properties that offer exceptional value and prime locations.
            </p>
          </div>
          <Link
            href="/properties"
            className="btn-secondary inline-flex items-center gap-2 self-start sm:self-auto whitespace-nowrap"
          >
            View All Properties
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
