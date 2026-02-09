import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with PlotifyHomes. We are here to help you find your dream property. Contact us via phone, email, or visit our office.',
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Office',
    details: ['123 Brigade Road', 'Ashok Nagar', 'Bangalore - 560025'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 84381 61073', '+91 80 4567 8900'],
    links: ['tel:+918438161073', 'tel:+918045678900'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@plotifyhomes.com', 'support@plotifyhomes.com'],
    links: ['mailto:info@plotifyhomes.com', 'mailto:support@plotifyhomes.com'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday', '9:00 AM - 7:00 PM', 'Sunday: Closed'],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have questions? We'd love to hear from you. Get in touch with our team."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {info.links ? (
                            <a
                              href={info.links[i]}
                              className="hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-linear-to-br from-primary to-primary-dark rounded-2xl p-5 sm:p-6 text-white">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Connect</h3>
                <p className="text-gray-200 text-xs sm:text-sm mb-4 sm:mb-6">
                  Prefer instant messaging? Connect with us on WhatsApp for quick responses.
                </p>
                <a
                  href="https://wa.me/918438161073?text=Hi,%20I%27m%20interested%20in%20your%20properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-green-500 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=12.9716,77.5946&z=15&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PlotifyHomes Office Location"
              className="sm:h-112.5"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">
              Find answers to common questions about our services.
            </p>

            <div className="space-y-3 sm:space-y-4 text-left">
              {[
                {
                  question: 'How do I schedule a property visit?',
                  answer:
                    'You can schedule a property visit by contacting us via phone, WhatsApp, or filling out the enquiry form on any property page. Our team will coordinate a convenient time for your visit.',
                },
                {
                  question: 'Are all properties verified?',
                  answer:
                    'Yes, every property listed on PlotifyHomes is personally verified by our team. We check documentation, legal status, and physical condition before listing.',
                },
                {
                  question: 'Do you help with legal documentation?',
                  answer:
                    'Absolutely! Our legal team assists with title verification, documentation review, and the complete registration process to ensure a smooth transaction.',
                },
                {
                  question: 'What are your service charges?',
                  answer:
                    'Our service charges vary based on the property value and services required. Contact us for a detailed quote tailored to your specific needs.',
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer font-medium text-gray-900 hover:text-primary transition-colors text-sm sm:text-base">
                    {faq.question}
                    <span className="ml-3 sm:ml-4 text-xl sm:text-2xl text-gray-400 group-open:rotate-45 transition-transform shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-gray-600 text-sm sm:text-base">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
