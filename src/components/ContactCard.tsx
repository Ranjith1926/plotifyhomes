'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Mail, User, Send } from 'lucide-react';

interface ContactCardProps {
  propertyTitle: string;
}

export default function ContactCard({ propertyTitle }: ContactCardProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(`Hi, I'm interested in "${propertyTitle}". Please share more details.`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(`Name: ${name}\nPhone: ${phone}\n\n${message}`);
    window.open(`https://wa.me/918438161073?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 sticky top-24">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Interested in this property?</h3>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        <div className="relative">
          <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 text-sm sm:text-base"
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <input
            type="tel"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 text-sm sm:text-base"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 sm:left-4 top-3.5 sm:top-4 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700 resize-none text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center gap-2 text-sm sm:text-base"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          Send Enquiry
        </button>
      </form>

      <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-100">
        <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4 text-center">Or contact us directly</p>

        <div className="flex gap-2 sm:gap-3">
          <a
            href="https://wa.me/918438161073"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 sm:px-4 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors text-xs sm:text-sm"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            WhatsApp
          </a>
          <a
            href="tel:+918438161073"
            className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 sm:px-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors text-xs sm:text-sm"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            Call
          </a>
        </div>
      </div>

      <div className="mt-5 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg">
        <p className="text-xs sm:text-sm text-gray-600 text-center">
          Our property experts are available <br />
          <span className="font-medium text-gray-800">Mon - Sat, 9:00 AM - 7:00 PM</span>
        </p>
      </div>
    </div>
  );
}
