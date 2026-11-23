import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ImageIcon } from "lucide-react";

import { SYSTEMS_PATH, areaById, systemsCopy, type SystemExample } from "@/content/systems";
import { PlaceholderTag } from "@/components/site/motion";
import { track } from "@/lib/track";

const c = systemsCopy.examples;

/** Karta przykładu w galerii (szablon z briefu) */
export const ExampleCard = ({ example }: { example: SystemExample }) => {
  const area = areaById(example.area);
  const href = `${SYSTEMS_PATH}/${example.slug}`;
  const hasDemo = example.proof === "demo" && Boolean(example.demoUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-sys/15 transition-shadow duration-300 hover:shadow-[0_30px_60px_-30px_hsl(263_50%_25%/0.35)]">
      {/* Zrzut ekranu lub GIF 16:10 */}
      <Link to={href} className="relative block aspect-[16/10] overflow-hidden bg-sys-soft" tabIndex={-1} aria-hidden="true">
        {example.image ? (
          <img
            src={example.image}
            alt={example.imageAlt ?? ""}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 border-b-2 border-dashed border-sys/15">
            <ImageIcon className="h-10 w-10 text-sys-deep/30" strokeWidth={1.25} />
            <PlaceholderTag>Zrzut ekranu 16:10</PlaceholderTag>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-sys px-3 py-1 text-white">{area.name}</span>
          {example.industry && (
            <span className="rounded-full bg-sys-soft px-3 py-1 text-sys-deep">{example.industry}</span>
          )}
        </div>

        <h3 className="mt-5 text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground sm:text-[1.35rem]">
          <Link to={href} className="hover:text-sys-deep">
            {example.name}
          </Link>
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">{example.effect}</p>

        <p className="mt-4 text-sm font-medium text-sys-deep/80">{c.proof[example.proof]}</p>
        {example.draft && (
          <div className="mt-3">
            <PlaceholderTag>{systemsCopy.example.draftTag}</PlaceholderTag>
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
          {example.proof === "demo" ? (
            hasDemo ? (
              <a
                href={example.demoUrl}
                target="_blank"
                rel="noopener"
                onClick={() => track("demo_open", { demo_name: example.slug, demo_place: "card" })}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-sys px-5 text-sm font-semibold text-white transition-colors hover:bg-sys-deep"
              >
                {c.open}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : (
              <span className="inline-flex min-h-[44px] items-center rounded-full border border-dashed border-sys/30 px-5 text-sm font-semibold text-sys-deep/60">
                {c.soon}
              </span>
            )
          ) : (
            <Link
              to={href}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-sys px-5 text-sm font-semibold text-white transition-colors hover:bg-sys-deep"
            >
              {c.describe}
            </Link>
          )}
          <Link
            to={href}
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-sys-deep hover:gap-2.5"
          >
            {c.how}
            <ArrowRight className="h-4 w-4 transition-all" />
          </Link>
        </div>
      </div>
    </article>
  );
};
