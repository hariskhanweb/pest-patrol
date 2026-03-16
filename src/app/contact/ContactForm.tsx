"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      
      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setSuccess(false);
        setErrorMsg(result.error || "Something went wrong.");
      }
    } catch (error) {
      setIsSubmitting(false);
      setSuccess(false);
      setErrorMsg("A network error occurred.");
    }
  };

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      {success === true && (
        <div className="bg-green-50 text-green-700 p-4 rounded-md border border-green-200">
          Thank you! Your message has been sent successfully. We will get back to you soon.
        </div>
      )}
      
      {success === false && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md border border-red-200">
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col">
        <label className="text-navy-dark mb-1 font-bold text-sm">Full Name *</label>
        <input name="name" type="text" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" required />
      </div>
      
      <div className="flex flex-col">
        <label className="text-navy-dark mb-1 font-bold text-sm">Phone *</label>
        <input name="phone" type="tel" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" required />
      </div>
      
      <div className="flex flex-col">
        <label className="text-navy-dark mb-1 font-bold text-sm">Email Address *</label>
        <input name="email" type="email" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" required />
      </div>
      
      <div className="flex flex-col">
        <label className="text-navy-dark mb-2 font-bold text-sm">Choose Service(s) *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-1">
          {[
            { id: 'ants', label: 'Ant Control' },
            { id: 'cockroaches', label: 'Cockroach Control' },
            { id: 'rodents', label: 'Rodent Control' },
            { id: 'fleas', label: 'Flea Treatment' },
            { id: 'wasps', label: 'Wasp Nest Removal' },
            { id: 'spiders', label: 'Spider Control' },
            { id: 'borer', label: 'Borer Treatment' },
            { id: 'bed-bugs', label: 'Bed Bug Treatment' },
            { id: 'birds', label: 'Bird Control' },
            { id: 'flies', label: 'Flies Treatment' },
            { id: 'organic', label: 'Organic Pest Solutions' },
            { id: 'other', label: 'Other/Not Sure' },
          ].map((service) => (
            <label key={service.id} className="flex items-center gap-2 cursor-pointer group">
              <input 
                type="checkbox" 
                name="services" 
                value={service.id}
                className="w-4 h-4 text-sunflower bg-white border-gray-300 rounded focus:ring-sunflower focus:ring-2 cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-navy-dark transition-colors">{service.label}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col">
        <label className="text-navy-dark mb-1 font-bold text-sm">Address</label>
        <input name="address" type="text" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" />
      </div>
      
      <div className="flex flex-col">
        <label className="text-navy-dark mb-1 font-bold text-sm">Comment</label>
        <textarea name="comment" rows={3} className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all resize-none shadow-sm"></textarea>
      </div>
      
      <div className="flex justify-start mt-4">
          <button type="submit" disabled={isSubmitting} className="bg-sunflower text-navy-dark relative inline-flex items-center justify-center font-montserrat font-bold italic tracking-wide uppercase transition-all duration-300 rounded-full px-10 py-3 shadow-lg hover:translate-y-[-2px] hover:shadow-xl hover:bg-yellow-400 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg">
            {isSubmitting ? "SENDING..." : "SEND ME A QUOTE"}
          </button>
      </div>
    </form>
  );
}
