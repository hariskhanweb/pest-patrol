import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Strip from "../components/Strip";
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
          size="half"
          title="Contact Us Today."
          imageSrc="/assets/hero_background_van.png"
          imageAlt="Pest Patrol Service Van"
          actions={[]}
          offerHighlight={null}
          offerText={null}
        />
        <Strip variant="navy" />
        
        <div className="py-16 bg-gray-50 flex flex-col items-center flex-1">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row gap-12 lg:gap-20">
            {/* Form Section (First on mobile, Left on desktop) */}
            <div className="w-full md:w-1/2 flex flex-col items-start bg-gray-50/50 p-2 md:p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-16 h-16 text-navy-dark">
                   <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                   </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-navy-dark">Contact form</h3>
              </div>
              <p className="text-sm text-gray-700 mb-6 max-w-sm">
                Complete the quick form below and one of our experts will get back to you as soon as we can. We will never share your information with third parties. All fields are required unless indicated as optional.
              </p>
              
              <div className="w-full">
                <form className="w-full flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="text-navy-dark mb-1 font-bold text-sm">Full Name *</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" required />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-navy-dark mb-1 font-bold text-sm">Phone *</label>
                    <input type="tel" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" required />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-navy-dark mb-1 font-bold text-sm">Email Address *</label>
                    <input type="email" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" required />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-navy-dark mb-1 font-bold text-sm">Choose Service *</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all appearance-none shadow-sm" required>
                        <option value="">Select Service</option>
                        <option value="insect">Insect Treatment</option>
                        <option value="rodent">Rodent Control</option>
                        <option value="termite">Termite Inspection</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy-dark/40">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-navy-dark mb-1 font-bold text-sm">Address</label>
                    <input type="text" className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all shadow-sm" />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-navy-dark mb-1 font-bold text-sm">Comment</label>
                    <textarea rows={3} className="w-full bg-white border border-gray-200 rounded px-4 py-3 font-inter type-sm text-navy-dark placeholder:text-navy-dark/40 outline-none focus:border-sunflower focus:ring-1 focus:ring-sunflower transition-all resize-none shadow-sm"></textarea>
                  </div>
                  
                  <div className="flex justify-start mt-4">
                     <button type="submit" className="bg-sunflower text-navy-dark relative inline-flex items-center justify-center font-montserrat font-bold italic tracking-wide uppercase transition-all duration-300 rounded-full px-10 py-3 shadow-lg hover:translate-y-[-2px] hover:shadow-xl hover:bg-yellow-400 cursor-pointer">
                        SEND ME A QUOTE
                     </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Section (Second on mobile, Right on desktop) */}
            <div className="w-full md:w-1/2 flex flex-col items-start mt-8 md:mt-4">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-16 h-16 text-navy-dark bg-sunflower/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.051.864l.535 3.21c.085.514-.14.99-.54 1.255L4.855 8.95c1.889 3.493 4.707 6.311 8.2 8.2l1.375-2.063c.265-.4.741-.625 1.255-.54l3.21.535c.513.085.864.535.864 1.051V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg>
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-navy-dark mb-1">Talk to us today</h3>
                   <p className="text-sm text-gray-600">Opening hours: 9am - 5pm</p>
                 </div>
               </div>
               
               <div className="flex flex-wrap gap-4 pl-0 md:pl-21">
                  <div className="flex flex-col">
                     <span className="text-xs font-bold text-navy-dark mb-1">Call Us</span>
                     <a href="tel:0279430777" className="border border-[#0070bc] text-[#0070bc] px-5 py-2 font-bold text-base hover:bg-[#0070bc] hover:text-white transition-colors text-center inline-block min-w-36 cursor-pointer">027 943 0777</a>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-xs font-bold text-navy-dark mb-1">Email Us</span>
                     <a href="mailto:james@tbpm.co.nz" className="border border-[#0070bc] text-[#0070bc] px-5 py-2 font-bold text-base hover:bg-[#0070bc] hover:text-white transition-colors text-center inline-block min-w-36 cursor-pointer">james@tbpm.co.nz</a>
                  </div>
               </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
