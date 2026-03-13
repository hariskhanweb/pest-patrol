import React from "react";
import Image from "next/image";
import Button from "./Button";

export interface ImageWithTextAction {
  label: string;
  href: string;
  variant?: "solid" | "outline" | "white" | "navy" | "yellow";
}

interface ImageWithTextProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  actions?: ImageWithTextAction[];
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}

export default function ImageWithText({
  title = (
    <>
      <span className="text-sunflower">Common </span>
      <span className="text-navy-dark">Pest </span>
      <span className="text-navy-dark">Problems </span>
      <span className="text-sunflower">We Solve</span>
    </>
  ),
  description = (
    <>
      <p>Pest Problems? We've Got It Covered.</p>
      <p>Pests can quickly turn a comfortable home into a stressful place to live.</p>
      <p>Whether it's ants in the kitchen, rodents in the roof, or wasps in the garden, the problem rarely goes away on its own.</p>
      <p>Our pest control services are designed to identify the source, eliminate the infestation, and prevent pests from returning.</p>
    </>
  ),
  imageSrc = "/assets/pest_collage.png",
  imageAlt = "Common Pest Problems Collage",
  actions = [
    { label: "GET A QUOTE", href: "#quote", variant: "navy" },
    { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" },
  ],
  imagePosition = "right",
  backgroundColor = "bg-cream",
}: ImageWithTextProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className={`w-full ${backgroundColor} py-16 md:py-24 overflow-hidden`}>
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content Column */}
          <div className={`flex flex-col gap-8 md:gap-12 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}>
            {title && (
              <h2 className="font-montserrat type-xl font-extrabold leading-tight tracking-tight">
                {title}
              </h2>
            )}

            {description && (
              <div className="flex flex-col gap-6 text-slate type-base font-medium leading-relaxed max-w-2xl">
                {description}
              </div>
            )}

            {actions && actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    href={action.href}
                    variant={action.variant || "solid"}
                    rounded="full"
                    className="px-8 py-3 min-w-44 text-sm font-bold tracking-wider"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className={`relative w-full ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
            <div className="relative w-full aspect-square md:aspect-4/3 lg:aspect-6/5 overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
