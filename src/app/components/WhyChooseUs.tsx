import React from 'react';
import Image from 'next/image';
import Button from './Button';

export interface WhyChooseUsAction {
  label: string;
  href: string;
  variant?: 'solid' | 'outline' | 'white' | 'navy';
}

export interface WhyChooseUsFeature {
  iconSrc?: string;
  iconAlt?: string;
  title: string;
  description: string;
}

export interface WhyChooseUsProps {
  titleLine1?: React.ReactNode;
  titleLine2?: React.ReactNode;
  features?: WhyChooseUsFeature[];
  actions?: WhyChooseUsAction[];
}

export default function WhyChooseUs({
  titleLine1 = "WHY CHOOSE THE",
  titleLine2 = "PEST PATROL TEAM?",
  features = [
    {
      title: "LOCALLY OWNED & OPERATED",
      description: "We're here to help you enjoy your home and view without pests."
    },
    {
      title: "FULLY LICENSED & INSURED",
      description: "Instant credibility + peace of mind."
    },
    {
      title: "SAFE & PROVEN TREATMENT METHODS",
      description: "Shows professionalism without sounding technical."
    },
    {
      title: "RELIABLE RESULTS, GUARANTEED",
      description: "Outcome-focused. What customers actually care about."
    }
  ],
  actions = [
    { label: "GET A QUOTE", href: "/quote", variant: "navy" },
    { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "solid" }
  ]
}: WhyChooseUsProps) {
  return (
    <section className="w-full bg-cream py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          {titleLine1 && (
            <h2 className="font-montserrat type-xl md:type-2xl font-bold text-sunflower uppercase leading-tight tracking-wide max-w-xl">
              {titleLine1} <span className='text-navy-dark'>{titleLine2}</span>
            </h2>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-16 w-full mb-16 md:mb-24">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-sm mx-auto">
              {/* Icon Circle */}
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center mb-2 lg:mb-8">
                {feature.iconSrc ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.iconSrc}
                      alt={feature.iconAlt || feature.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-20 h-20 bg-cream/80 border border-sunflower/30 rounded-full flex items-center justify-center shadow-inner">
                    <span className="text-navy-dark/40 font-bold type-xs text-center leading-tight">Image<br/>Placeholder</span>
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="font-inter type-base font-bold text-sunflower uppercase tracking-wide leading-snug mb-4 min-h-auto lg:min-h-12 flex items-center justify-center px-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="font-inter type-sm font-medium text-navy-dark leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Actions */}
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            {actions.map((action, index) => (
              <Button
                key={index}
                href={action.href}
                variant={action.variant || "solid"}
                rounded="full"
                className="px-8 py-3"
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
