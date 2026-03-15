import React from "react";
import Image from "next/image";
import Button from "./Button";

export interface HeroAction {
  label: string;
  href: string;
  variant?: "solid" | "outline" | "white";
}

interface HeroProps {
  ads?: boolean;
  size?: "full" | "half";
  title?: React.ReactNode;
  offerHighlight?: React.ReactNode;
  offerText?: React.ReactNode;
  actions?: HeroAction[];
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  description?: React.ReactNode;
  titleClassName?: string;  
  columnClassName?: string;
}

export default function Hero({
  ads = false,
  size = "full",
  title = (
    <>
      Your Local Pest<br className="hidden sm:block" /> Problem Solvers.
    </>
  ),
  offerHighlight = "SAVE 50%",
  offerText = (
    <>
      On Complete Insect Treatment With Extended Warranty
    </>
  ),
  actions = [
    { label: "GET A QUOTE", href: "/contact", variant: "white" },
    { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "solid" },
  ],
  imageSrc,
  imageAlt,
  caption = "Operating Auckland Wide",
  description,
  titleClassName = "type-2xl",
  columnClassName = "max-w-2xl",
}: HeroProps) {
  // Use specific images based on variant if no custom image is provided
  const activeImageSrc = imageSrc || (ads ? "/assets/hero_background_van.png" : "/assets/hero_technicians.png");
  const activeImageAlt = imageAlt || (ads ? "Pest Patrol Technicians" : "Pest Patrol Service Van");
  const minHeightClass = size === "half" ? "min-h-[40vh] md:min-h-[50vh]" : "min-h-[calc(100vh-140px)]";

  if (!ads) {
    return (
      <section className={`relative w-full ${minHeightClass} flex items-center py-16 md:py-24 overflow-hidden`}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-navy-dark">
          <Image
            src={activeImageSrc}
            alt={activeImageAlt}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent z-10" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
          <div className={`${columnClassName} flex flex-col items-start text-left gap-8`}>
            {title && (
              <h1 className={`font-inter font-bold italic text-sunflower leading-tight drop-shadow-lg ${titleClassName}`}>
                {title}
              </h1>
            )}

            {description && (
              <div className="font-inter type-md font-light italic text-white/90 leading-relaxed drop-shadow-md">
                {description}
              </div>
            )}

            {actions && actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 w-full">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    href={action.href}
                    variant={action.variant || "solid"}
                    rounded="full"
                    className="px-8 py-3 min-w-52"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}

            {(offerHighlight || offerText) && (
              <div className="mt-2 flex flex-col gap-1">
                {offerHighlight && (
                  <p className="font-inter type-xl font-extrabold italic text-sunflower drop-shadow-md">
                    {offerHighlight}
                  </p>
                )}
                {offerText && (
                  <p className="font-inter type-sm font-bold italic text-white drop-shadow-md max-w-76 leading-snug">
                    {offerText}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Variant: ads={true}
  return (
    <section className={`w-full bg-navy-dark py-16 md:py-24 ${minHeightClass}`}>
      <div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start text-left gap-8">
          {title && (
            <h1 className={`font-inter font-bold italic text-sunflower leading-tight ${titleClassName}`}>
              {title}
            </h1>
          )}

          {description && (
            <div className="font-inter type-sm font-medium text-white/90 max-w-xl leading-relaxed">
              {description}
            </div>
          )}

          {actions && actions.length > 0 && (
            <div className="flex flex-wrap items-center gap-4">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  href={action.href}
                  variant={action.variant || "solid"}
                  rounded="full"
                  className="px-8 py-3 min-w-52"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}

          {(offerHighlight || offerText) && (
            <div className="mt-2 flex flex-col gap-1">
              {offerHighlight && (
                <p className="font-inter type-xl font-extrabold italic text-sunflower">
                  {offerHighlight}
                </p>
              )}
              {offerText && (
                <p className="font-inter type-sm font-bold italic text-white max-w-76 leading-snug">
                  {offerText}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Image */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-full max-w-lg lg:max-w-none aspect-4/3 rounded-sm overflow-hidden shadow-2xl">
            <Image
              src={activeImageSrc}
              alt={activeImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          {caption && (
            <p className="font-montserrat type-sm font-bold italic text-sunflower text-center mt-2">
              {caption}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
