"use client";

import React from 'react';
import Button from './Button';

export interface QuoteFormSectionProps {
  title?: React.ReactNode;
  submitLabel?: string;
  backgroundColor?: string;
}

export default function QuoteFormSection({
  title = "Contact us for a quote.",
  submitLabel = "SEND ME A QUOTE",
  backgroundColor = "bg-navy-dark"
}: QuoteFormSectionProps) {
  return (
    <section id="quote" className={`w-full ${backgroundColor} py-16 md:py-24`}>
      <div className="mx-auto w-full max-w-4xl px-6 flex flex-col items-center">
        {/* Title */}
        {title && (
          <h2 className="font-montserrat type-xl font-bold text-sunflower text-center mb-12">
            {title}
          </h2>
        )}

        {/* Form */}
        <form className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white rounded-md px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:ring-2 focus:ring-sunflower transition-all"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-white rounded-md px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:ring-2 focus:ring-sunflower transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white rounded-md px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:ring-2 focus:ring-sunflower transition-all"
            />
            <div className="relative">
              <select className="w-full bg-white rounded-md px-4 py-3 font-inter type-sm text-navy-dark/40 outline-none appearance-none focus:ring-2 focus:ring-sunflower transition-all">
                <option value="">Choose Service</option>
                <option value="insect">Insect Treatment</option>
                <option value="rodent">Rodent Control</option>
                <option value="termite">Termite Inspection</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy-dark/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <input
            type="text"
            placeholder="Address"
            className="w-full bg-white rounded-md px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:ring-2 focus:ring-sunflower transition-all"
          />

          <textarea
            placeholder="Comment"
            rows={2}
            className="w-full bg-white rounded-md px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:ring-2 focus:ring-sunflower transition-all resize-none"
          />

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <Button
              type="submit"
              variant="solid"
              rounded="full"
              className="px-10 py-3 shadow-lg hover:translate-y-[-2px]"
            >
              {submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
