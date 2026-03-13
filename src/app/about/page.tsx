import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Strip from "../components/Strip";
import ImageWithText from "../components/ImageWithText";
import WhyChooseUs from "../components/WhyChooseUs";
import PestsWeTreat from "../components/PestsWeTreat";
import TrustedCertified from "../components/TrustedCertified";
import Testimonials from "../components/Testimonials";
import QuoteFormSection from "../components/QuoteFormSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | Pest Patrol | Your Local Pest Experts",
  description: "Learn more about Pest Patrol, our history, and our commitment to providing safe and effective pest control solutions.",
  keywords: ["about pest patrol", "local pest control company", "pest control experts", "safe pest treatments"],
};

export default function About() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero 
          ads={false} 
          title="About Us."
          imageSrc="/assets/hero_background_van.png"
          imageAlt="Pest Patrol Service Van"
          caption="Locally Owned & Operated"
        />
        <Strip variant="navy" />
        
        {/* Section 1: About Pest Patrol */}
        <ImageWithText
          imagePosition="right"
          backgroundColor="bg-cream"
          title={
            <>
              <span className="text-navy-dark">About </span>
              <span className="text-sunflower">Pest Patrol</span>
            </>
          }
          description={
            <>
              <h3 className="text-2xl font-bold text-navy-dark">Your Local Pest Problem Solvers</h3>
              <p>
                Pest Patrol is a locally owned pest control company helping Auckland homeowners and businesses keep their properties pest-free.
              </p>
              <p>
                We understand how frustrating pests can be. Whether it’s ants in the kitchen, rodents in the roof, or wasps around your home, the problem can quickly become stressful.
              </p>
              <p>
                That’s why our goal is simple: <strong className="text-navy-dark">solve the problem properly so you can enjoy your home again.</strong>
              </p>
              <p>
                Our team uses safe, proven pest treatment methods designed for New Zealand homes and conditions. We focus on identifying the source of the infestation, treating it effectively, and preventing pests from coming back.
              </p>
            </>
          }
          imageSrc="/assets/worker_technician.png"
          imageAlt="Pest Patrol Technician at Work"
          actions={[
            { label: "GET A QUOTE", href: "#quote", variant: "navy" },
            { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
          ]}
        />

        {/* Section 2: A Local Team You Can Trust */}
        <ImageWithText
          imagePosition="left"
          backgroundColor="bg-white"
          title={
            <>
              <span className="text-sunflower">A Local </span>
              <span className="text-navy-dark">Team You Can Trust</span>
            </>
          }
          description={
            <>
              <p>
                At Pest Patrol, we believe pest control should be straightforward and reliable.
              </p>
              <p>
                When you call us, you’re dealing with a local team that genuinely cares about doing the job right.
              </p>
              <p className="font-bold text-navy-dark">We take pride in delivering:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Friendly and professional service</li>
                <li>Safe and effective pest treatments</li>
                <li>Honest advice and clear communication</li>
                <li>Reliable results you can trust</li>
              </ul>
              <p>
                Our reputation is built on helping homeowners across Auckland solve pest problems quickly and professionally.
              </p>
            </>
          }
          imageSrc="/assets/pest-patrol_sr_01.png"
          imageAlt="Pest Patrol Expert Service"
          actions={[
            { label: "VIEW SERVICES", href: "/services", variant: "navy" },
            { label: "CONTACT US", href: "/contact", variant: "yellow" }
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

        {/* QUOTE SECTION */}
        <QuoteFormSection />
      </main>
      <Footer />
    </>
  );
}
