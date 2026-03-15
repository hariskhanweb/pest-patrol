import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Strip from "../components/Strip";
import ContentSection from "../components/ContentSection";
import PestsWeTreat from "../components/PestsWeTreat";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustedCertified from "../components/TrustedCertified";
import Testimonials from "../components/Testimonials";

import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pest Patrol LP | Expert Pest Management Solutions",
  description: "Trusted pest patrol landing page for expert pest management. Fast, reliable, and guaranteed results.",
  keywords: ["pest management", "expert pest control", "pest patrol landing page", "guaranteed pest removal", "reliable exterminator"],
  robots: {
    index: false,
    follow: true,
  },
};

export default function PestPatrolLP() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero 
          ads={true} 
          title="Fast & Reliable Termite Control."
          imageSrc="/assets/hero_background_van.png"
          imageAlt="Pest Patrol Service Van"
          caption="Locally Owned & Operated"
        />
        <Strip variant="yellow" />
        
        <ContentSection
          title={
            <>
              <span className="text-sunflower">At </span>
              <span className="text-navy-dark">Pest Patrol, </span>
              <span className="text-sunflower">we work on a high level<br className="hidden md:block"/> of trust with </span>
              <span className="text-navy-dark">our valued customers.</span>
            </>
          }
          content={
            <>
              <p>
                We're proud of our track record caring for our clients across the region. That's why we're all too happy to guarantee our work and stand by it. When you choose us for your pest control needs, you can trust that we understand the challenges and have the expertise to solve them.
              </p>
              <p>
                We know that a pest-free home not only improves your comfort but also your quality of life. That's why we offer top-quality services that leave your home safe and clean.
              </p>
              <p>
                We are known for the <strong className="text-navy-dark font-extrabold">best residential and commercial pest services</strong>. Whether you need termite inspection or rodent removal, we are the local experts you can count on.
              </p>
            </>
          }
          imageSrc="/assets/worker_technician.png"
          badgeSrc="/assets/guarantee_badge.png"
          actions={[
            { label: "GET A QUOTE", href: "/quote", variant: "navy" },
            { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "solid" }
          ]}
        />

        {/* PESTS WE TREAT CAROUSEL */}
        <PestsWeTreat />

        {/* WHY CHOOSE US */}
        <WhyChooseUs 
          features={[
            {
              title: "LOCALLY OWNED & OPERATED",
              description: "We're here to help you enjoy your home and view without pests.",
              iconSrc: "/assets/icon_01.png"
            },
            {
              title: "FULLY LICENSED & INSURED",
              description: "Instant credibility + peace of mind.",
              iconSrc: "/assets/icon_02.png"
            },
            {
              title: "SAFE & PROVEN TREATMENT METHODS",
              description: "Shows professionalism without sounding technical.",
              iconSrc: "/assets/icon_03.png"
            },
            {
              title: "RELIABLE RESULTS, GUARANTEED",
              description: "Outcome-focused. What customers actually care about.",
              iconSrc: "/assets/icon_04.png"
            }
          ]}
        />

        {/* TRUSTED & CERTIFIED */}
        <TrustedCertified />

        {/* CUSTOMER TESTIMONIALS */}
        <Testimonials />


      </main>
      <Footer />
    </>
  );
}
