import { motion } from "framer-motion";
import { Check } from "lucide-react";

import type { HomeCopy } from "@/content/home";
import { EASE, FadeUp, Pill, ScrollText } from "@/components/site/motion";

const TILES = ["bg-violet", "bg-orchid", "bg-indigo", "bg-violet-bright"];

/** Korzyści: wiersze z „ptaszkami”, które wskakują po kolei */
export const Benefits = ({ copy }: { copy: HomeCopy["benefits"] }) => (
  <section id="benefits" className="bg-lilac-soft px-5 py-24 sm:px-8 sm:py-32 lg:py-40">
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <FadeUp>
          <Pill>{copy.pill}</Pill>
        </FadeUp>
        <ScrollText
          as="h2"
          text={copy.title}
          className="mx-auto mt-6 max-w-4xl text-[2.3rem] font-semibold leading-[1.03] tracking-[-0.045em] text-violet sm:text-6xl lg:text-[4.5rem]"
        />
      </div>

      <ul className="mt-16 divide-y divide-violet/15 border-y border-violet/15 lg:mt-24">
        {copy.items.map((item, i) => (
          <li key={item.title} className="grid grid-cols-1 items-center gap-4 py-8 sm:grid-cols-[auto_1fr_1fr] sm:gap-8 sm:py-10">
            <motion.span
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.05 }}
              className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white sm:h-14 sm:w-14 ${TILES[i % TILES.length]}`}
            >
              <Check className="h-6 w-6" strokeWidth={3} />
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {item.description}
            </motion.p>
          </li>
        ))}
      </ul>

      <FadeUp className="mx-auto mt-14 max-w-3xl text-center">
        <p className="text-xl leading-relaxed text-foreground/80 sm:text-2xl">{copy.closing}</p>
      </FadeUp>
    </div>
  </section>
);
