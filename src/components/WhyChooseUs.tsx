import { ShieldCheck, Tag, FileText, Users } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    description: 'Every property is personally verified by our team to ensure authenticity and accuracy.',
  },
  {
    icon: Tag,
    title: 'Transparent Pricing',
    description: 'No hidden charges. What you see is what you pay. Complete transparency in all dealings.',
  },
  {
    icon: FileText,
    title: 'Legal Assistance',
    description: 'Our legal team helps you with documentation, title verification, and registration process.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Our experienced property consultants guide you through every step of your property journey.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-medium mb-2 block text-sm sm:text-base">Why PlotifyHomes</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Your Trusted Property Partner
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            We combine technology with personalized service to make your property buying experience seamless and trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 text-primary mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
