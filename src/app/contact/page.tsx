import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Strip from "../components/Strip";
import QuoteFormSection from "../components/QuoteFormSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Pest Patrol | Get a Free Quote",
  description: "Contact Pest Patrol for all your pest control needs. Get a free quote for termite inspection, rodent removal, and more.",
  keywords: ["contact pest patrol", "pest control quote", "pest control contact", "get in touch"],
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero 
          ads={false} 
          title="Contact Us Today."
          imageSrc="/assets/hero_background_van.png"
          imageAlt="Pest Patrol Service Van"
          caption="Locally Owned & Operated"
        />
        <Strip variant="navy" />
        
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy-dark mb-6">
              How Can We <span className="text-sunflower">Help You?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Whether you have a specific pest problem or just want a routine inspection, our team is ready to assist you. Fill out the form below or give us a call to get started.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
              <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-navy-dark mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">Direct line for urgent inquiries and bookings:</p>
                <a href="tel:0279430777" className="text-2xl font-extrabold text-navy-dark hover:text-sunflower transition-colors">
                  027 943 0777
                </a>
              </div>
              <div className="p-8 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-navy-dark mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions or service requests:</p>
                <a href="mailto:james@tbpm.co.nz" className="text-2xl font-extrabold text-navy-dark hover:text-sunflower transition-colors">
                  james@tbpm.co.nz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* QUOTE SECTION (Acting as the primary contact form) */}
        <QuoteFormSection />
      </main>
      <Footer />
    </>
  );
}
