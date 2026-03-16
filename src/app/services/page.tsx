import type { Metadata } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Strip from "../components/Strip";
import ImageWithText from "../components/ImageWithText";
import PestsWeTreat from "../components/PestsWeTreat";
import WhyChooseUs from "../components/WhyChooseUs";
import TrustedCertified from "../components/TrustedCertified";
import Testimonials from "../components/Testimonials";

import Footer from "../components/Footer";
import ServiceBox from "../components/ServiceBox";

export const metadata: Metadata = {
  title: "Our Services | Pest Patrol | Termite, Rodent & Pest Control",
  description: "Explore our comprehensive pest control services including termite inspection, rodent removal, and general pest treatments.",
  keywords: ["termite inspection", "rodent removal", "pest treatments", "pest control services", "insect control", "spider treatment"],
};

export default function Services() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero 
          ads={false} 
          title="Pest Control Services For Auckland Homes & Businesses"
          titleClassName="type-xl"  
          columnClassName="max-w-3xl"
          description="From ants and cockroaches to rodents and wasps, Pest Patrol provides safe and effective pest treatments designed for New Zealand homes."
          imageSrc="/assets/hero_background_van.png"
          imageAlt="Pest Patrol Service Van"
          caption="Locally Owned & Operated"
        />
        <Strip variant="navy" />
        
        <ImageWithText
          title={
            <>
              <span className="text-sunflower">Common </span>
              <span className="text-navy-dark">Pest </span>
              <span className="text-navy-dark">Problems </span>
              <span className="text-sunflower">We Solve</span>
            </>
          }
          description={
            <>
              <p>Pest Problems? We've Got It Covered.</p>
              <p>Pests can quickly turn a comfortable home into a stressful place to live.</p>
              <p>Whether it's ants in the kitchen, rodents in the roof, or wasps in the garden, the problem rarely goes away on its own.</p>
              <p>Our pest control services are designed to identify the source, eliminate the infestation, and prevent pests from returning.</p>
            </>
          }
          imageSrc="/assets/pest-patrol_sr_01.png"
          imageAlt="Common Pest Problems Collage"
          actions={[
            { label: "GET A QUOTE", href: "/contact", variant: "navy" },
            { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
          ]}
        />
        

        <section className="w-full flex flex-col pt-16 gap-20">
            <div className="w-full text-left mx-auto max-w-7xl px-6">
                <h2 className="font-montserrat type-xl font-extrabold tracking-wide uppercase">
                    <span className="text-navy-dark">PESTS</span>
                    <span className="text-sunflower">WE TREAT</span>
                </h2>
            </div>

        <ServiceBox 
            id="ants"
            title="Ant Control"
            imagePosition="right"
            imageSrc="/assets/pest-patrol_sr_02.png"
            description="Ants are one of the most common household pests in Auckland. Our treatments eliminate the nest and stop ants returning to your kitchen and outdoor areas."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="cockroaches"
            title="Cockroach Control"
            imagePosition="left"
            imageSrc="/assets/pest-patrol_sr_03.png"
            description="Cockroaches hide in warm areas like kitchens, laundries, and bathrooms. Our professional treatments eliminate infestations and prevent them spreading."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="rodents"
            title="Rodent Control"
            imagePosition="right"
            imageSrc="/assets/pest-patrol_sr_04.png"
            description="Rats and mice can cause serious damage and health risks. We locate entry points, remove rodents, and implement prevention solutions."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="fleas"
            title="Flea Treatment"
            imagePosition="left"
            imageSrc="/assets/pest-patrol_sr_05.png"
            description="Fleas can quickly spread through carpets, pets, and furniture. Our treatment removes fleas at every stage of their life cycle."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="wasps"
            title="Wasp Nest Removal"
            imagePosition="right"
            imageSrc="/assets/pest-patrol_sr_06.png"
            description="Wasps can become aggressive and dangerous around homes and outdoor areas. Our technicians safely remove nests and treat areas to stop them returning."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="spiders"
            title="Spider Control"
            imagePosition="left"
            imageSrc="/assets/pest-patrol_sr_07.png"
            description="Spiders often enter homes looking for food and shelter. Our treatments reduce spider populations and prevent new infestations."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="borer"
            title="Borer Treatment"
            imagePosition="right"
            imageSrc="/assets/pest-patrol_sr_08.png"
            description="Borer insects damage timber structures and furniture. Our specialised treatments help protect your property from further damage."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="bed-bugs"
            title="Bed Bug Treatment"
            imagePosition="left"
            imageSrc="/assets/pest-patrol_sr_09.png"
            description="Bed bugs are difficult to eliminate without professional help. We use targeted treatments designed to remove infestations completely."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="birds"
            title="Bird Control"
            imagePosition="right"
            imageSrc="/assets/pest-patrol_sr_10.png"
            description="Birds nesting in roofs and gutters can cause mess and property damage. We provide humane solutions to stop birds returning."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        <ServiceBox 
            id="organic-solutions"
            title="Organic Pest Solutions"
            imagePosition="left"
            imageSrc="/assets/pest-patrol_sr_11.png"
            description="For customers looking for lower-toxicity treatments, we offer organic pest control options where suitable."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />
        
        <ServiceBox 
            id="flies"
            title="Flies Treatment"
            imagePosition="right"
            imageSrc="/assets/flies-unsplash.jpg"
            description="Flies can quickly become a nuisance in homes and businesses, contaminating food and surfaces while spreading harmful bacteria. Our professional fly treatment targets breeding sites and resting areas, helping to reduce fly populations and prevent future infestations. We use safe and effective methods to keep your environment clean, hygienic, and comfortable."
            actions={[
                { label: "GET A QUOTE", href: "/contact", variant: "navy" },
                { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" }
            ]}
        />

        </section>

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
