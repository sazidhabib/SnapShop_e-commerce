import React from "react";
import { FiPhoneCall, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-sm border border-gray-100 p-8 sm:p-9">
      {/* Call To Us */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <FiPhoneCall className="text-lg" />
          </div>
          <h3 className="text-base font-semibold text-gray-900">Call To Us</h3>
        </div>
        <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
          <p>We are available 24/7, 7 days a week.</p>
          <a
            href="tel:+8801611112222"
            className="text-gray-900 font-medium hover:text-red-500 transition-colors inline-block"
          >
            Phone: +880 1611-112222
          </a>
        </div>
      </div>

      <div className="my-6 border-b border-gray-200" />

      {/* Write To Us */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <FiMail className="text-lg" />
          </div>
          <h3 className="text-base font-semibold text-gray-900">Write To Us</h3>
        </div>
        <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <a
            href="mailto:customer@snapshop.com"
            className="text-gray-900 font-medium hover:text-red-500 transition-colors"
          >
            Email: customer@snapshop.com
          </a>
          <a
            href="mailto:support@snapshop.com"
            className="text-gray-900 font-medium hover:text-red-500 transition-colors"
          >
            Email: support@snapshop.com
          </a>
        </div>
      </div>

      <div className="my-6 border-b border-gray-200" />

      {/* Visit Us */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <FiMapPin className="text-lg" />
          </div>
          <h3 className="text-base font-semibold text-gray-900">Visit Us</h3>
        </div>
        <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-600">
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium pt-1">
            <FiClock className="text-sm" />
            <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
