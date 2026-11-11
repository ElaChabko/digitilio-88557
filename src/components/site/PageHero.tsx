import type { ReactNode } from "react";

import { GradientField } from "./GradientField";
import { Pill } from "./motion";

/**
 * Nagłówek podstron: fiolet marki na całą szerokość z płynnym gradientem.
 */
export const PageHero = ({
  pill,
  title,
  lead,
  children,
  size = "default",
}: {
  pill?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  size?: "default" | "article";
}) => {
  return (
    <section className="relative bg-white">
      <div className="relative overflow-hidden text-white">
        <GradientField />

        <div
          className={`relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 ${
            size === "article" ? "pb-16 pt-32 sm:pb-20 sm:pt-40" : "pb-20 pt-36 sm:pb-28 sm:pt-44 lg:pb-32"
          }`}
        >
          {pill && (
            <div className="hero-fade-up">
              <Pill tone="light">{pill}</Pill>
            </div>
          )}
          <h1
            className={`hero-slide-in mt-6 max-w-4xl font-semibold tracking-[-0.045em] ${
              size === "article"
                ? "text-[clamp(1.6rem,7.4vw,2.1rem)] leading-[1.05] sm:text-5xl lg:text-[3.8rem]"
                : "text-[clamp(1.8rem,8.6vw,2.6rem)] leading-[1] sm:text-6xl lg:text-[5.2rem]"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h1>
          {lead && (
            <div
              className="hero-fade-up mt-7 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
              style={{ animationDelay: "0.35s" }}
            >
              {lead}
            </div>
          )}
          {children && (
            <div className="hero-fade-up mt-8" style={{ animationDelay: "0.5s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
