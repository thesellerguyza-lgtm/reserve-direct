import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Wifi, Car, UtensilsCrossed, Waves, Sparkles, Plane, Coffee } from "lucide-react";
import { SuiteCard } from "@/components/SuiteCard";
import { ReserveButton } from "@/components/ReserveButton";
import { HERO_IMAGES, SUITES, GALLERY, WHATSAPP_NUMBER } from "@/lib/lodge-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matjulu Kruger Lodge — Reserve on WhatsApp" },
      {
        name: "description",
        content:
          "Boutique lodge near Kruger National Park. Suites with mountain views, infinity pool & spa. Reserve directly on WhatsApp.",
      },
      { property: "og:title", content: "Matjulu Kruger Lodge" },
      { property: "og:description", content: "Comfortable suites near Kruger. Reserve on WhatsApp." },
      { property: "og:image", content: HERO_IMAGES[0] },
    ],
  }),
  component: Home,
});

function Home() {
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const generalMsg =
    "Hello Matjulu Kruger Lodge, I'd like to enquire about availability and make a reservation.";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex flex-col leading-tight">
            <span className="font-display text-lg text-primary sm:text-xl">Matjulu</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Kruger Lodge
            </span>
          </a>
          <nav className="hidden gap-7 text-sm text-foreground/80 md:flex">
            <a href="#suites" className="hover:text-primary">Suites</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#amenities" className="hover:text-primary">Amenities</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <ReserveButton message={generalMsg} size="md" />
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
        {HERO_IMAGES.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt="Matjulu Kruger Lodge"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${
              idx === heroIdx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-end px-5 pb-20 text-center sm:pb-28">
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white backdrop-blur">
            Matsulu · Mpumalanga
          </span>
          <h1 className="font-display text-5xl leading-[1.05] text-white drop-shadow-lg sm:text-6xl md:text-7xl">
            Where the Lowveld <br className="hidden sm:block" /> meets stillness.
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Boutique lodge minutes from Kruger National Park. Mountain-view suites, an infinity pool, and a spa to slow time down.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <ReserveButton message={generalMsg} size="lg" />
            <a
              href="#suites"
              className="rounded-full border border-white/40 px-7 py-3.5 text-base text-white backdrop-blur transition hover:bg-white/10"
            >
              View suites
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-accent">About the Lodge</span>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">
              A quiet luxury, rooted in the bushveld.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Matjulu Kruger Lodge is a small collection of suites set against the Mpumalanga
              mountains, just 24 miles from Kruger Mpumalanga International Airport. Each room
              opens onto views of forested hillsides and offers air-conditioning, modern bathrooms
              and a private terrace.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Spend the morning on safari, swim in the infinity pool by afternoon, and finish your
              day with a cocktail at the bar — service, comfort and warm South African hospitality
              throughout.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-6 border-t pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">From</dt>
                <dd className="font-display text-2xl text-primary">R850</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">To Kruger</dt>
                <dd className="font-display text-2xl text-primary">24 mi</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Suites</dt>
                <dd className="font-display text-2xl text-primary">4</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src={GALLERY.pool}
              alt="Infinity pool with mountain view"
              className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <img
              src={GALLERY.bar}
              alt="Cocktail bar"
              className="aspect-square w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <img
              src={GALLERY.villaExterior}
              alt="Villa exterior"
              className="aspect-square w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Suites */}
      <section id="suites" className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-accent">Stay With Us</span>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Our suites</h2>
            <p className="mt-4 text-muted-foreground">
              Four distinct suites, each with private bathroom, terrace and that unmistakable lowveld light.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SUITES.map((s) => (
              <SuiteCard key={s.id} suite={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-accent">On The Property</span>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Amenities</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
          {[
            { icon: Waves, label: "Infinity pool" },
            { icon: Sparkles, label: "Spa & wellness" },
            { icon: UtensilsCrossed, label: "Restaurant & bar" },
            { icon: Coffee, label: "Full English breakfast" },
            { icon: Wifi, label: "Free Wi-Fi" },
            { icon: Car, label: "Free parking" },
            { icon: Plane, label: "Free airport shuttle" },
            { icon: MapPin, label: "Mountain views" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center transition hover:border-primary/40 hover:shadow-md"
            >
              <Icon className="h-7 w-7 text-primary" />
              <span className="text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={GALLERY.pool}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <h2 className="font-display text-4xl md:text-5xl">Ready when you are.</h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Skip the forms — message us on WhatsApp and we'll confirm your stay personally. Same number for questions, special requests and shuttle bookings.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ReserveButton message={generalMsg} size="lg" />
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-base text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              +27 82 676 4239
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
            <MapPin className="h-4 w-4" />
            1203 Matjulu Street, Matsulu, South Africa
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Matjulu Kruger Lodge</div>
          <div>Reservations via WhatsApp · +27 82 676 4239</div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generalMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reserve on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg shadow-whatsapp/30 transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.05 4.91A9.82 9.82 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.02zM12.05 20.15h-.01a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.17 8.17 0 012.42 5.83c0 4.54-3.7 8.23-8.26 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.07-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.56.12.17 1.74 2.65 4.21 3.71.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
        </svg>
      </a>
    </div>
  );
}
