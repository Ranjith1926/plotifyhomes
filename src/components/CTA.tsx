import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=600&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/95 to-navy/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10">
            Let our experts help you discover the perfect plot or property. Schedule a free consultation today and take the first step towards your dream home.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/properties"
              className="btn-accent flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              Browse Properties
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+918438161073"
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100 flex items-center justify-center gap-2 text-base sm:text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <p className="mt-6 sm:mt-8 text-gray-300 text-xs sm:text-sm">
            Or email us at{' '}
            <a href="mailto:info@plotifyhomes.com" className="text-accent hover:underline">
              info@plotifyhomes.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
