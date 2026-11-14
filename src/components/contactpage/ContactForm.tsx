"use client";

import React, { useState } from "react";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-sm border border-gray-100 p-8 sm:p-9">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-950">Send Us a Message</h2>
        <p className="text-sm text-gray-500 mt-1">
          Have an inquiry, feedback, or need order support? Reach out and we&apos;ll be in touch shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xs font-semibold text-gray-700 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-4 py-3 rounded-md bg-neutral-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xs font-semibold text-gray-700 mb-1.5">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-4 py-3 rounded-md bg-neutral-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-xs font-semibold text-gray-700 mb-1.5">
              Your Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              required
              className="px-4 py-3 rounded-md bg-neutral-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-xs font-semibold text-gray-700 mb-1.5">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message or inquiry here in detail..."
            rows={6}
            required
            className="px-4 py-3 rounded-md bg-neutral-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
          />
        </div>

        {submitted && (
          <div className="flex items-center gap-2.5 p-4 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm animate-in fade-in duration-200">
            <FiCheckCircle className="text-lg shrink-0" />
            <span>Thank you! Your message has been sent successfully. We will contact you soon.</span>
          </div>
        )}

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2.5 px-10 py-3.5 bg-red-500 hover:bg-red-600 active:scale-[0.98] text-white font-medium text-sm rounded-md shadow-sm transition-all focus:outline-none disabled:opacity-70 cursor-pointer"
          >
            {loading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <FiSend className="text-base" />
            )}
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
