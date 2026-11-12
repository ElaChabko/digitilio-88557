import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Pill, EASE } from "@/components/site/motion";
import {
  decisionGroups,
  decisionsIntro,
  type PracticeDecision,
} from "@/content/decisions";

const parts: { key: keyof Pick<PracticeDecision, "situation" | "decision" | "why">; label: string }[] = [
  { key: "situation", label: "Sytuacja" },
  { key: "decision", label: "Decyzja" },
  { key: "why", label: "Dlaczego" },
];

const DecisionCard = ({
  item,
  number,
  isOpen,
  onToggle,
}: {
  item: PracticeDecision;
  number: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div
    className={`rounded-[1.8rem] border bg-white transition-colors duration-300 ${
      isOpen ? "border-violet/40 shadow-sm" : "border-border hover:border-violet/30"
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`decyzja-${item.id}`}
      className="flex w-full items-start gap-5 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 sm:p-8"
    >
      <span className="mt-1 text-sm font-semibold text-violet">{number}</span>

      <h4 className="flex-1 text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-2xl">
        {item.title}
      </h4>

      <ChevronDown
        aria-hidden="true"
        className={`mt-1 h-6 w-6 shrink-0 text-violet transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`decyzja-${item.id}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="overflow-hidden"
        >
          <dl className="grid gap-6 border-t border-border px-6 pb-8 pt-6 sm:px-8 lg:grid-cols-3 lg:gap-10">
            {parts.map((part) => (
              <div key={part.key}>
                <dt className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-violet">
                  {part.label}
                </dt>
                <dd className="text-base leading-relaxed text-muted-foreground">
                  {item[part.key]}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const PracticeDecisions = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  let counter = 0;

  return (
    <section className="bg-lilac-soft px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Pill>Decyzje z praktyki</Pill>

          <h2 className="mt-6 max-w-3xl text-[2.2rem] font-semibold tracking-[-0.045em] text-foreground sm:text-6xl">
            Decyzje z mojej praktyki
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            {decisionsIntro}
          </p>
        </motion.div>

        <div className="mt-14 space-y-14">
          {decisionGroups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-violet">
                {group.title}
              </h3>

              <div className="space-y-4">
                {group.decisions.map((item) => {
                  counter += 1;
                  const number = String(counter).padStart(2, "0");

                  return (
                    <DecisionCard
                      key={item.id}
                      item={item}
                      number={number}
                      isOpen={openId === item.id}
                      onToggle={() =>
                        setOpenId((current) =>
                          current === item.id ? null : item.id
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
