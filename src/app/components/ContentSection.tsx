import React from 'react';
import Image from 'next/image';
import Button from './Button';

export interface ContentSectionAction {
  label: string;
  href: string;
  variant?: 'solid' | 'outline' | 'white' | 'navy';
}

export interface ContentSectionProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  actions?: ContentSectionAction[];
  imageSrc?: string;
  imageAlt?: string;
  badgeSrc?: string;
  badgeAlt?: string;
}

export default function ContentSection({
  title,
  content,
  actions = [],
  imageSrc,
  imageAlt = "Image",
  badgeSrc,
  badgeAlt = "Guarantee Badge",
}: ContentSectionProps) {
  return (
    <section className="w-full bg-cream py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Title row */}
        {title && (
          <div className="text-center mb-12 md:mb-16 flex justify-center">
            <h2 className="font-montserrat type-xl font-extrabold leading-tight max-w-260 mx-auto md:mx-0">
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-16 text-slate type-base font-medium leading-relaxed">
            <div className="flex flex-col gap-6">{content}</div>
            
            {actions && actions.length > 0 && (
              <div className="flex-wrap items-center gap-4 mt-6 hidden md:flex">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    href={action.href}
                    variant={action.variant || "solid"}
                    rounded="full"
                    className="px-8 py-3 min-w-44"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Image */}
          {(imageSrc || badgeSrc) && (
            <div className="relative mx-auto w-full max-w-md md:max-w-xl flex justify-end flex-col gap-12">
              {/* Main Image Container */}
              {imageSrc && (
                <div className="relative flex justify-end w-full lg:max-w-5/6 aspect-4/5 object-cover rounded-sm border border-navy-dark/10 shadow-lg">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                   {badgeSrc && (
                        <div className="absolute -bottom-6 -left-6 md:-bottom-16 md:-left-16 w-32 h-32 md:w-48 md:h-48 z-10 drop-shadow-xl transition-transform duration-300">
                        <Image
                            src={badgeSrc}
                            alt={badgeAlt}
                            fill
                            className="object-contain"
                        />
                        </div>
                    )}
                </div>
              )}
              {actions && actions.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 mt-6 md:hidden">
                  {actions.map((action, index) => (
                    <Button
                      key={index}
                      href={action.href}
                      variant={action.variant || "solid"}
                      rounded="full"
                      className="px-8 py-3 min-w-44"
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}     
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
