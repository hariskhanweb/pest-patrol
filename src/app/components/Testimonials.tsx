"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export interface Testimonial {
  text: string;
  author: string;
  rating?: number;
}

export interface TestimonialsProps {
  title?: React.ReactNode;
  testimonials?: Testimonial[];
}

export default function Testimonials({
  title = (
    <>
      <span className="text-sunflower">What our </span>
      <span className="text-navy-dark">customers </span>
      <span className="text-sunflower">are saying...</span>
    </>
  ),
  testimonials = [
    {
      text: "I can't believe the transformation of my home. What a fast and effective service & a friendly, efficient team. Should have done this earlier!",
      author: "KATE BRITTEN",
      rating: 5
    },
    {
      text: "Pest Patrol did an amazing job. No more ants and the team was professional and polite. Highly recommend!",
      author: "JOHN SMITH",
      rating: 5
    },
    {
      text: "Great experience with the termites inspection. Detailed report and prompt treatment. Peace of mind restored!",
      author: "SARAH WILLIAMS",
      rating: 5
    }
  ]
}: TestimonialsProps) {
  return (
    <section className="w-full bg-cream py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 flex flex-col items-center">
        {/* Title */}
        {title && (
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-montserrat type-xl font-bold leading-tight tracking-wide max-w-xl">
              {title}
            </h2>
          </div>
        )}

        {/* Testimonials Swiper Card */}
        <div className="relative w-full bg-white rounded-2xl shadow-sm py-12 md:py-16 px-6 md:px-20 overflow-visible group">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-btn-next-testimonial',
              prevEl: '.swiper-btn-prev-testimonial',
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center text-center gap-8 md:gap-10">
                  {/* Stars */}
                  <div className="flex gap-1 text-sunflower">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-inter type-lg font-normal text-navy-dark leading-relaxed px-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="font-montserrat type-xs font-bold tracking-[0.2em] text-navy-dark/60 uppercase mt-4">
                    {testimonial.author}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="swiper-btn-prev-testimonial absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-light flex items-center justify-center text-navy-dark hover:bg-sunflower hover:text-navy-dark transition-all cursor-pointer group/btn">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="swiper-btn-next-testimonial absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-light flex items-center justify-center text-navy-dark hover:bg-sunflower hover:text-navy-dark transition-all cursor-pointer group/btn">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
