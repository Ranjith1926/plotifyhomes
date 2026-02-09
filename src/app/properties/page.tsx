'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import FilterBar from '@/components/FilterBar';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

export default function PropertiesPage() {
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [budget, setBudget] = useState(searchParams.get('budget') || '');
  const [propertyType, setPropertyType] = useState(searchParams.get('type') || '');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      if (location) {
        const searchTerm = location.toLowerCase();
        const matchesLocation =
          property.location.toLowerCase().includes(searchTerm) ||
          property.city.toLowerCase().includes(searchTerm) ||
          property.state.toLowerCase().includes(searchTerm);
        if (!matchesLocation) return false;
      }

      if (budget) {
        const [min, max] = budget.split('-').map((v) => parseInt(v.replace('+', '')) || 0);
        if (budget.includes('+')) {
          if (property.price < min) return false;
        } else {
          if (property.price < min || property.price > max) return false;
        }
      }

      if (propertyType && property.type !== propertyType) {
        return false;
      }

      return true;
    });
  }, [location, budget, propertyType]);

  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProperties.length;

  return (
    <>
      <PageHeader
        title="Our Properties"
        subtitle="Explore our curated collection of verified plots and properties across prime locations."
        breadcrumbs={[{ label: 'Properties' }]}
      />

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <FilterBar
            location={location}
            budget={budget}
            propertyType={propertyType}
            onLocationChange={setLocation}
            onBudgetChange={setBudget}
            onPropertyTypeChange={setPropertyType}
          />

          {filteredProperties.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
              <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base">
                We could not find any properties matching your criteria. Try adjusting your filters or browse all our listings.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  Showing <span className="font-medium text-gray-900">{visibleProperties.length}</span> of{' '}
                  <span className="font-medium text-gray-900">{filteredProperties.length}</span> properties
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {visibleProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {hasMore && (
                <div className="text-center mt-8 sm:mt-12">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="btn-secondary"
                  >
                    Load More Properties
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
