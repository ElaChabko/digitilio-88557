import { Fragment, ReactNode } from "react";
import { motion } from "framer-motion";

import { ArticleSection as SectionType } from "@/content/blogs/types";

type Props = {
  section?: SectionType;
  level?: 2 | 3 | 4;
};

const renderInlineText = (text: string): ReactNode[] => {
  const pattern =
    /(\*\*(.*?)\*\*|\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))/g;

  const result: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result.push(
        <Fragment key={key++}>
          {text.slice(lastIndex, match.index)}
        </Fragment>
      );
    }

    if (match[2]) {
      result.push(
        <strong key={key++}>
          {match[2]}
        </strong>
      );
    } else if (match[3] && match[4]) {
      result.push(
        <a
          key={key++}
          href={match[4]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          {match[3]}
        </a>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    result.push(
      <Fragment key={key++}>
        {text.slice(lastIndex)}
      </Fragment>
    );
  }

  return result;
};

export const ArticleSection = ({
  section,
  level = 2,
}: Props) => {
  if (
    !section ||
    !section.blocks ||
    section.blocks.length === 0
  ) {
    return null;
  }

  return (
    <section className="py-4 sm:py-6 md:py-3">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="space-y-4"
      >
        {section.heading &&
          (() => {
            const HeadingTag = (
              `h${level ?? 2}` as keyof JSX.IntrinsicElements
            );

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

        <div className="space-y-2 text-base leading-relaxed text-muted-foreground sm:text-lg [&_strong]:font-semibold">
          {section.blocks.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={i}>
                    {renderInlineText(block.text)}
                  </p>
                );

              case "list":
                return (
                  <ul
                    key={i}
                    className="list-disc space-y-2 pl-6"
                  >
                    {block.items.map((item, idx) => (
                      <li key={idx}>
                        {renderInlineText(item)}
                      </li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-primary pl-6 italic text-foreground"
                  >
                    {renderInlineText(block.text)}
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
                        {renderInlineText(
                          block.caption
                        )}
                      </figcaption>
                    )}
                  </figure>
                );

              case "subheading":
                return (
                  <h3
                    key={i}
                    className="pt-6 text-base font-semibold tracking-tight text-foreground sm:text-lg md:text-xl"
                  >
                    {renderInlineText(block.text)}
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
