import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  MapPin,
  Maximize,
  Bed,
  Bath,
  BadgeCheck,
  Calendar,
  Building,
  ArrowLeft,
  Share2,
  Heart,
} from 'lucide-react';
import { properties } from '@/data/properties';
import ImageGallery from '@/components/ImageGallery';
import ContactCard from '@/components/ContactCard';
import PropertyCard from '@/components/PropertyCard';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return {
      title: 'Property Not Found',
    };
  }

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.images[0]],
    },
  };
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailsPage({ params }: Props) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.type === property.type)
    .slice(0, 3);

  return (
    <>
      <section className="pt-20 sm:pt-24 pb-6 sm:pb-8 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <Link
              href="/properties"
              className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-primary transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Properties
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="p-2 sm:p-3 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="p-2 sm:p-3 rounded-full border border-gray-200 hover:border-red-500 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <ImageGallery images={property.images} title={property.title} />

              <div className="mt-6 sm:mt-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="bg-primary text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                    {property.typeLabel}
                  </span>
                  {property.verified && (
                    <span className="bg-accent text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 sm:py-1.5 rounded-full flex items-center gap-1">
                      <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Verified
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {property.title}
                </h1>

                <div className="flex items-center gap-2 text-gray-600 mb-4 sm:mb-6">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-base sm:text-lg">
                    {property.location}, {property.city}, {property.state}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-bold text-primary mb-6 sm:mb-8">
                  {property.priceFormatted}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
                  <div className="text-center">
                    <Maximize className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 text-primary" />
                    <p className="text-xs sm:text-sm text-gray-500">Area</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      {property.area.toLocaleString()} {property.areaUnit}
                    </p>
                  </div>
                  {property.bedrooms && (
                    <div className="text-center">
                      <Bed className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 text-primary" />
                      <p className="text-xs sm:text-sm text-gray-500">Bedrooms</p>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{property.bedrooms}</p>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center">
                      <Bath className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 text-primary" />
                      <p className="text-xs sm:text-sm text-gray-500">Bathrooms</p>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">{property.bathrooms}</p>
                    </div>
                  )}
                  <div className="text-center">
                    <Building className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 text-primary" />
                    <p className="text-xs sm:text-sm text-gray-500">Type</p>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{property.typeLabel}</p>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{property.description}</p>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Features & Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                    {property.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2.5 sm:p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Location</h2>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden h-60 sm:h-80">
                    <iframe
                      src={`https://www.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Property Location"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Listed on {new Date(property.createdAt).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <ContactCard propertyTitle={property.title} />
            </div>
          </div>
        </div>
      </section>

      {similarProperties.length > 0 && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {similarProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
