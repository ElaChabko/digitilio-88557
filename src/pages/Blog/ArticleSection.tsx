import { motion } from "framer-motion";
import { ArticleSection as SectionType } from "@/content/blogs/types";

type Props = {
  section?: SectionType;
};

export const ArticleSection = ({ section }: Props) => {
  if (!section || !section.blocks || section.blocks.length === 0) {
    return null;
  }

  return (
    <section className="py-6 sm:py-8 md:py-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
        {/* heading jest OPCJONALNY */}
        {section.heading && (
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {section.heading}
          </h2>
        )}

        <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {section.blocks.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                return <p key={i}>{block.text}</p>;

              case "list":
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-primary pl-6 italic text-foreground"
                  >
                    {block.text}
                  </blockquote>
                );

              default:
                return null;
            }
          })}
        </div>
      </motion.div>
    </section>
    <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={openContactForm}
                  size="lg"
                  className="text-base md:text-lg lg:text-xl px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group shadow-[0_0_40px_hsl(263_33%_35%/0.3)] hover:shadow-[0_0_60px_hsl(263_33%_35%/0.5)] transition-all duration-500"
                >
                  <Mail className="mr-3 w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  Napisz do mnie
                </Button>
              </motion.div>
  );
};
