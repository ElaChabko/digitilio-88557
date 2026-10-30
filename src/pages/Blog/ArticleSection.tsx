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
          className="font-medium text-violet underline decoration-violet/40 underline-offset-4 transition-colors hover:decoration-violet"
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
    <section className="py-2">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
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
                    ? "text-[1.7rem] font-semibold leading-tight tracking-[-0.035em] text-violet sm:text-4xl"
                    : "text-2xl font-semibold leading-tight tracking-[-0.03em] text-violet sm:text-[2rem]"
                }
              >
                {section.heading}
              </HeadingTag>
            );
          })()}

        <div className="space-y-4 text-[17px] leading-[1.75] text-foreground/80 sm:text-lg [&_strong]:font-semibold [&_strong]:text-foreground">
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
                    className="space-y-3 pl-1 [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-[0.6em] [&>li]:before:h-2.5 [&>li]:before:w-2.5 [&>li]:before:rounded-full [&>li]:before:bg-violet"
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
                    className="my-10 rounded-[1.8rem] bg-lilac-soft px-7 py-8 text-xl font-medium leading-snug tracking-[-0.015em] text-violet sm:px-10 sm:text-2xl"
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
                      className="w-full rounded-[1.6rem]"
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
                    className="pt-6 text-lg font-semibold tracking-[-0.01em] text-foreground sm:text-xl"
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
