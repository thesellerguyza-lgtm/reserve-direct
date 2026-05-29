import { useState } from "react";
import { ChevronLeft, ChevronRight, Users, BedDouble, Maximize2, Check } from "lucide-react";
import { ReserveButton } from "./ReserveButton";
import type { Suite } from "@/lib/lodge-data";

export function SuiteCard({ suite }: { suite: Suite }) {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % suite.images.length);
  const prev = () => setI((p) => (p - 1 + suite.images.length) % suite.images.length);

  const message = `Hello Matjulu Kruger Lodge, I'd like to reserve the ${suite.name} (R${suite.price} / night). Could you confirm availability?`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-xl">
      {/* Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {suite.images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${suite.name} – photo ${idx + 1}`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {suite.images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {suite.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Show photo ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-6 bg-background" : "w-1.5 bg-background/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-2xl text-foreground">{suite.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{suite.description}</p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> Up to {suite.guests}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BedDouble className="h-3.5 w-3.5" /> {suite.bed}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize2 className="h-3.5 w-3.5" /> {suite.size}
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {suite.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="h-3.5 w-3.5 text-primary" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">From</div>
            <div className="font-display text-3xl text-foreground">
              R{suite.price.toLocaleString("en-ZA")}
              <span className="ml-1 text-sm font-normal text-muted-foreground">/ night</span>
            </div>
          </div>
          <ReserveButton message={message} size="md" className="w-full sm:w-auto" />
        </div>
      </div>
    </article>
  );
}
