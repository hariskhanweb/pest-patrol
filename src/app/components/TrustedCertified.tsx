import React from 'react';
import Image from 'next/image';
import Button from './Button';

export interface TrustedCertifiedAction {
  label: string;
  href: string;
  variant?: 'solid' | 'outline' | 'white' | 'navy';
}

export interface TrustedCertifiedFeature {
  iconSrc?: string;
  iconAlt?: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface TrustedCertifiedProps {
  title?: React.ReactNode;
  title2?: React.ReactNode;
  badgeSrc?: string;
  badgeAlt?: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: React.ReactNode;
  features?: TrustedCertifiedFeature[];
  actions?: TrustedCertifiedAction[];
}

export default function TrustedCertified({
  title = "Well Trusted",  
  title2 = "& Certified",
  badgeSrc,
  badgeAlt = "Trusted Badge",
  imageSrc,
  imageAlt = "Trusted Image",
  icon,
  features = [
    {
      title: "100% New Zealand Made",
      description: "Our insecticides are manufactured in NZ and specially formulated to perform in local conditions.",
      iconSrc: "/assets/icon_05.png"
    },
    {
      title: "Certified Experts",
      description: "Our technicians hold internationally recognised IICRC certifications, ensuring professional and safe treatment.",
      iconSrc: "/assets/icon_06.png"
    },
    {
      title: "Easy & Secure Payment",
      description: "Our vans carry mobile EFTPOS, and we accept all major credit cards for your convenience.",
      iconSrc: "/assets/icon_07.png"
    }
  ],
  actions = [
    { label: "GET A QUOTE", href: "/quote", variant: "white" },
    { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "solid" }
  ]
}: TrustedCertifiedProps) {
  return (
    <section className="w-full bg-navy-dark py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-16 flex flex-col items-center">
          {badgeSrc && (
            <div className="relative w-32 h-32 mb-8 drop-shadow-xl">
              <Image
                src={badgeSrc}
                alt={badgeAlt}
                fill
                className="object-contain"
              />
            </div>
          )}
          {icon && <div className="mb-6">{icon}</div>}
          {title && (
            <h2 className="font-montserrat type-xl md:type-2xl font-light text-sunflower leading-tight tracking-wide drop-shadow-sm">
              {title} <span className='font-semibold'>{title2}</span>
            </h2>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 w-full mb-16 md:mb-20 max-w-6xl">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center max-w-[320px] mx-auto">
              {/* Icon Circle or Image */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-6 lg:mb-8">
                {feature.imageSrc ? (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt || feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : feature.icon ? (
                  <div className="w-full h-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                ) : feature.iconSrc ? (
                  <div className="relative w-full h-full bg-cream rounded-full flex items-center justify-center shadow-md">
                    <div className="relative w-full h-full">
                      <Image
                        src={feature.iconSrc}
                        alt={feature.iconAlt || feature.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-cream border-2 border-dashed border-navy-dark/20 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-navy-dark/40 font-bold type-xs text-center leading-tight">Image<br/>Placeholder</span>
                  </div>
                )}
              </div>
              
              {/* Title */}
              <h3 className="font-montserrat type-base font-bold text-sunflower mb-4 min-h-auto lg:min-h-12 flex items-center justify-center leading-snug">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="font-inter type-sm text-white leading-relaxed">
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
                variant={action.variant || "white"}
                rounded="full"
                className="px-10 py-3"
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
