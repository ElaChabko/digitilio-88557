import { motion } from "framer-motion";
import { ArticleSection as SectionType } from "@/content/blogs/types";

export const ArticleSection = ({ section }: { section: SectionType }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
          {section.heading}
        </h2>

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
  );
};
