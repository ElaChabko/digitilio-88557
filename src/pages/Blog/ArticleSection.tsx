import { motion } from "framer-motion";
import { ArticleSection as SectionType } from "@/content/blogs/types";

type Props = {
  section?: SectionType;
  level?: 2 | 3 | 4;
};

export const ArticleSection = ({ section, level = 2 }: Props) => {
  if (!section || !section.blocks || section.blocks.length === 0) {
    return null;
  }

  return (
    <section className="py-4 sm:py-6 md:py-3">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        {/* heading jest OPCJONALNY */}
        {section.heading && (() => {
          const HeadingTag = (`h${level ?? 2}` as keyof JSX.IntrinsicElements);

         return (
            <HeadingTag
            className={
                        level === 2
                        ? "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
                      : "text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight"
      }
    >
      {section.heading}
    </HeadingTag>
  );
})()}

        <div className="space-y-2 text-base sm:text-lg text-muted-foreground leading-relaxed [&_strong]:font-semibold">
          {section.blocks.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                  key={i}
                  dangerouslySetInnerHTML={{
                  __html: block.text.replace(
                  /\*\*(.*?)\*\*/g,
                  "<strong>$1</strong>"
                ),
              }}
            />
            );
              case "list":
  return (
    <ul key={i} className="list-disc pl-6 space-y-2">
      {block.items.map((item, idx) => (
        <li
          key={idx}
          dangerouslySetInnerHTML={{
            __html: item.replace(
              /\*\*(.*?)\*\*/g,
              "<strong>$1</strong>"
            ),
          }}
        />
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
                case "image":
                return (
                  <figure key={i} className="my-8">
                    <img
                      src={block.src}
                      alt={block.alt ?? ""}
                      className="w-full rounded-2xl border border-border/50"
                      loading="lazy"
                    />
                    {block.caption && (
                      <figcaption className="mt-3 text-sm text-muted-foreground">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
                case "subheading":
                return (
                  <h3 key={i} className="text-base sm:text-lg md:text-xl font-semibold text-foreground tracking-tight pt-6">
                    {block.text}
                  </h3>
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
