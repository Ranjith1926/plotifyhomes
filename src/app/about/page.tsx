import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, Heart, Award, Users, Building, CheckCircle, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Stats from '@/components/Stats';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about PlotifyHomes - your trusted partner in finding premium plots and properties with verified listings and transparent pricing.',
};

const values = [
  {
    icon: CheckCircle,
    title: 'Integrity',
    description: 'We believe in complete transparency and honesty in every transaction.',
  },
  {
    icon: Users,
    title: 'Client-First',
    description: 'Your satisfaction is our top priority. We go above and beyond for our clients.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every property we list and every service we provide.',
  },
  {
    icon: Heart,
    title: 'Trust',
    description: 'Building lasting relationships through trust and reliable service.',
  },
];

const milestones = [
  { year: '2014', event: 'PlotifyHomes was founded with a vision to transform real estate' },
  { year: '2016', event: 'Expanded to 10 cities across Karnataka' },
  { year: '2018', event: 'Crossed 1000+ successful property transactions' },
  { year: '2020', event: 'Launched digital verification system for all listings' },
  { year: '2022', event: 'Expanded to 50+ cities across South India' },
  { year: '2024', event: 'Serving 3500+ happy clients with 5000+ verified listings' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About PlotifyHomes"
        subtitle="Your trusted partner in finding the perfect property since 2014."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <span className="text-primary font-medium mb-2 block text-sm sm:text-base">Our Story</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Building Dreams, One Property at a Time
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  Founded in 2014, PlotifyHomes began with a simple mission: to make property buying a transparent, trustworthy, and hassle-free experience for everyone.
                </p>
                <p>
                  What started as a small team of passionate real estate professionals in Bangalore has grown into one of South India&apos;s most trusted property platforms, serving thousands of happy clients across 50+ cities.
                </p>
                <p>
                  We understand that buying a property is one of the most significant decisions in life. That&apos;s why we personally verify every listing, ensure transparent pricing, and provide end-to-end support throughout your property journey.
                </p>
              </div>
              <Link
                href="/properties"
                className="btn-primary inline-flex items-center gap-2 mt-6 sm:mt-8"
              >
                Explore Properties
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-75 sm:h-100 lg:h-125 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                  alt="PlotifyHomes Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-accent text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="text-2xl sm:text-4xl font-bold">10+</div>
                <div className="text-xs sm:text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To democratize real estate by providing verified, transparent, and accessible property listings to everyone. We aim to eliminate the complexities and uncertainties in property buying, making it a joyful experience for our clients.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To become India&apos;s most trusted real estate platform where every property transaction is backed by complete transparency, verified documentation, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-primary font-medium mb-2 block text-sm sm:text-base">What We Stand For</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              These values guide everything we do at PlotifyHomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 border border-gray-100 rounded-2xl hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-primary font-medium mb-2 block text-sm sm:text-base">Our Journey</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Milestones</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A decade of growth, trust, and countless happy homeowners.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
                    {milestone.year}
                  </div>
                  {index !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-2" />
                  )}
                </div>
                <div className="pb-6 sm:pb-8">
                  <p className="text-gray-700 text-base sm:text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-linear-to-r from-primary to-navy rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
            <Building className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let our experts help you navigate the property market and find the perfect home or investment opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/properties" className="btn-accent">
                Browse Properties
              </Link>
              <Link
                href="/contact"
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
