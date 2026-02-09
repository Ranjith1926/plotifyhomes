'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Maximize, Bed, Bath, BadgeCheck } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link href={`/properties/${property.id}`}>
      <article className="card group cursor-pointer h-full flex flex-col">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 skeleton" />
          )}
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
            <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 sm:px-3 rounded-full">
              {property.typeLabel}
            </span>
            {property.verified && (
              <span className="bg-accent text-white text-xs font-medium px-2.5 py-1 sm:px-3 rounded-full flex items-center gap-1">
                <BadgeCheck className="w-3 h-3" />
                Verified
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <p className="text-white text-xl sm:text-2xl font-bold">
              {property.priceFormatted}
            </p>
          </div>
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-base sm:text-lg text-gray-800 mb-1.5 sm:mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {property.title}
          </h3>

          <div className="flex items-center gap-1 text-gray-500 mb-3 sm:mb-4">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
            <span className="text-xs sm:text-sm truncate">{property.location}, {property.city}</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-gray-600 text-xs sm:text-sm border-t border-gray-100 pt-3 sm:pt-4 mt-auto">
            <div className="flex items-center gap-1">
              <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>{property.area.toLocaleString()} {property.areaUnit}</span>
            </div>
            {property.bedrooms && (
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms && (
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
