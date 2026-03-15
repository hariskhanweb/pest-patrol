import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocial {
  icon: React.ReactNode;
  href: string;
}

export interface FooterProps {
  links?: FooterLink[];
  companyName?: string;
  phone?: string;
  email?: string;
  logoSrc?: string;
  logoAlt?: string;
  socials?: FooterSocial[];
  attribution?: React.ReactNode;
}

export default function Footer({
  links = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Review Us", href: "/reviews" },
    { label: "Contact", href: "/contact" }
  ],
  companyName = "Pest Patrol Limited",
  phone = "027 943 0777",
  email = "james@tbpm.co.nz",
  logoSrc = "/assets/logo.svg", // Using the existing header logo as placeholder
  logoAlt = "Pest Patrol Logo",
  socials = [
    {
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 10.2V13h2.6l-.4 3H14v8h-4v-8H7v-3h3V9.7c0-3.47 2.18-5.7 5.89-5.7 1.78 0 3.3.13 3.74.19v4.33h-2.56c-1.68 0-2.01.8-2.01 1.97z" />
        </svg>
      )
    }
  ],
  attribution = (
    <>
      Proudly Local. Website Developed by <a href="https://pinpoint.digital/" target="_blank" rel="noopener noreferrer" className="hover:text-navy-dark transition-colors">Pinpoint Digital</a>
    </>
  )
}: FooterProps) {
  return (
    <footer className="w-full bg-cream pt-16 md:pt-20 lg:pt-24 pb-9 border-t border-navy-dark/10">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 border-b border-navy-dark/10 pb-16">
          {/* Left Column: Navigation Links */}
          <nav className="flex flex-col gap-4 text-center md:text-left">
            {links.map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href} 
                className="font-inter type-sm font-normal text-navy-dark hover:text-sunflower transition-colors"
                id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Center Column: Logo Placeholder */}
          <div className="flex justify-center order-first md:order-0 grow">
            <div className="relative w-full h-32 md:h-44 lg:h-52">
              <Image
                src={logoSrc}
                alt={logoAlt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Contact & Socials */}
          <div className="flex flex-col gap-4 text-center md:text-right">
            <h3 className="font-inter type-sm font-bold text-navy-dark">
              {companyName}
            </h3>
            <div className="flex flex-col gap-2">
              <a 
                href={`tel:${phone.replace(/\s+/g, '')}`} 
                className="font-inter type-sm font-normal text-navy-dark hover:text-sunflower transition-colors"
                id="footer-contact-phone"
              >
                Call: {phone}
              </a>
              <a 
                href={`mailto:${email}`} 
                className="font-inter type-sm font-normal text-navy-dark hover:text-sunflower transition-colors"
                id="footer-contact-email"
              >
                Email: {email}
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-end gap-4 mt-2">
              {socials.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="text-navy-dark hover:text-sunflower transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  id={`footer-social-${idx}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Attribution Row */}
        <div className="pt-8 text-center">
          <p className="font-inter text-[10px] md:text-xs font-medium text-navy-dark/40 tracking-wider">
            {attribution}
          </p>
        </div>
      </div>
    </footer>
  );
}
