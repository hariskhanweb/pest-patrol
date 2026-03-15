import React from "react";
import Image from "next/image";
import Button from "./Button";

export interface ServiceBoxAction {
  label: string;
  href: string;
  variant?: "solid" | "outline" | "white" | "navy" | "yellow";
}

interface ServiceBoxProps {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  actions?: ServiceBoxAction[];
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}

export default function ServiceBox({
  id,
  title = "Ant Control",
  description = "Ants are one of the most common household pests in Auckland. Our treatments eliminate the nest and stop ants returning to your kitchen and outdoor areas.",
  imageSrc = "/assets/ant_control.png",
  imageAlt = "Ant Control Service",
  actions = [
    { label: "GET A QUOTE", href: "/contact", variant: "navy" },
    { label: "CALL 027 943 0777", href: "tel:0279430777", variant: "yellow" },
  ],
  imagePosition = "right",
  backgroundColor = "bg-cream",
}: ServiceBoxProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section id={id} className={`w-full ${backgroundColor}`}>
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text Content Column */}
          <div className={`flex flex-col gap-6 md:gap-8 order-2 ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
            {title && (
              <div className="w-fit">
                <h3 className="font-inter type-lg md:type-xl font-bold text-navy-dark border-b-4 border-navy-dark pb-1 leading-tight">
                  {title}
                </h3>
              </div>
            )}
            
            {description && (
              <div className="text-slate type-base font-medium leading-relaxed max-w-xl">
                {typeof description === 'string' ? <p>{description}</p> : description}
              </div>
            )}

            {actions && actions.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 mt-2">
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
          <div className={`relative w-full order-1 ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
            <div className="relative w-full aspect-square md:aspect-4/3 rounded-sm overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
