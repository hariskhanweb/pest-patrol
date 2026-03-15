"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

export interface PestItem {
  label: string;
  href?: string;
}

export interface PestsWeTreatAction {
  label: string;
  href: string;
  variant?: 'solid' | 'outline' | 'white' | 'navy';
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export interface PestsWeTreatProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  pests?: (string | PestItem)[];
  images?: string[];
  actions?: PestsWeTreatAction[];
}

export default function PestsWeTreat({
  title = (
    <>
      <span className="text-navy-dark">PESTS</span> <span className="text-sunflower">WE TREAT</span>
    </>
  ),
  subtitle = "RESIDENTIAL & COMMERCIAL",
  pests = [
    { label: "Ants", href: "/services#ants" },
    { label: "Cockroaches", href: "/services#cockroaches" },
    { label: "Bed-Bugs", href: "/services#bed-bugs" },
    { label: "Fleas", href: "/services#fleas" },
    { label: "Birds", href: "/services#birds" },
    { label: "Flies", href: "/services#flies" },
    { label: "Borer", href: "/services#borer" },
    { label: "Rodents", href: "/services#rodents" },
    { label: "Spiders", href: "/services#spiders" },
    { label: "Wasps", href: "/services#wasps" },
    { label: "Organic Solutions", href: "/services#organic-solutions" }
  ],
  images = [
    "/assets/pest-patrol_sr_02.png ",
    "/assets/pest-patrol_sr_03.png",
    "/assets/pest-patrol_sr_04.png",
    "/assets/pest-patrol_sr_05.png",
    "/assets/pest-patrol_sr_06.png",
    "/assets/pest-patrol_sr_07.png",
    "/assets/pest-patrol_sr_08.png",
    "/assets/pest-patrol_sr_09.png",
    "/assets/pest-patrol_sr_10.png",
    "/assets/pest-patrol_sr_11.png",
  ],
  actions = [
    { label: "GET A QUOTE", href: "/quote", variant: "navy" },
    { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "solid" }
  ]
}: PestsWeTreatProps) {
  return (
    <section className="w-full bg-cream py-16 md:py-24 overflow-hidden">
      {/* Centered Top Title */}
      {title && (
        <div className="w-full text-center mb-16 md:mb-24 px-6">
          <h2 className="font-montserrat type-xl font-extrabold tracking-wide uppercase">
            {title}
          </h2>
        </div>
      )}

      <div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Pests List */}
        <div className="flex flex-col gap-8 w-full">
          {/* Subtitle & Header Line */}
          {subtitle && (
            <div className="flex flex-col gap-4">
              <h3 className="font-montserrat type-base font-extrabold tracking-[0.2em] text-sunflower uppercase">
                {subtitle}
              </h3>
              <hr className="border-t border-navy-dark/10" />
            </div>
          )}

          {/* List of Pests mapped into 2 columns */}
          {pests && pests.length > 0 && (
            <ul className="flex flex-wrap gap-x-8 gap-y-6">
              {pests.map((pest, idx) => {
                const label = typeof pest === 'string' ? pest : pest.label;
                const href = typeof pest === 'string' ? undefined : pest.href;

                return (
                  <li key={idx} className="flex items-center gap-4 w-[calc(50%-16px)] md:w-[calc(50%-16px)] grow">
                    {/* Custom SVG Checkmark matching the brand design */}
                    <div className="relative shrink-0 w-6 h-6">
                      {/* Dark underlying square shadow-offset */}
                      <div className="absolute inset-0 bg-navy-dark rounded-md translate-y-[2px] -translate-x-[2px] pointer-events-none" />
                      {/* Front yellow box with check */}
                      <div className="absolute inset-0 bg-sunflower rounded-md flex items-center justify-center text-navy-dark shadow-sm">
                        <svg
                          className="w-4 h-4 ml-0.5 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Text Label */}
                    {href ? (
                      <Link 
                        href={href} 
                        className="font-inter type-lg font-bold text-navy-dark leading-tight grow hover:text-navy transition-colors decoration-navy-dark/30 hover:decoration-navy decoration-2 underline-offset-4"
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="font-inter type-lg font-bold text-navy-dark leading-tight grow">
                        {label}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Right Column: Image Swiper Carousel */}
        {images && images.length > 0 && (
          <div className="w-full relative flex items-center justify-center lg:justify-end">
            {/* Aspect container for the slider */}
            <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl mx-auto lg:ml-auto lg:mr-4">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: '.swiper-btn-next-pests',
                  prevEl: '.swiper-btn-prev-pests',
                }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full rounded-2xl overflow-hidden pointer-events-auto"
              >
                {images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full h-full bg-navy/10">
                      <Image
                        src={img}
                        alt={`Pests treating image ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom floating Navigation Buttons (Half inside half outside) */}
              <button className="swiper-btn-prev-pests absolute top-1/2 -left-4 md:-left-6 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-cream text-navy-dark hover:bg-navy-dark hover:text-white transition-colors border-2 border-white cursor-pointer group">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button className="swiper-btn-next-pests absolute top-1/2 -right-4 md:-right-6 z-20 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-cream text-navy-dark hover:bg-navy-dark hover:text-white transition-colors border-2 border-white cursor-pointer group">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Center Call To Action Buttons */}
      {actions && actions.length > 0 && (
        <div className="mx-auto mt-16 md:mt-24 px-6 flex flex-wrap justify-center items-center gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              href={action.href}
              variant={action.variant || "solid"}
              rounded="full"
              className="px-10 py-3 min-w-52 whitespace-nowrap"
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </section>
  );
}
