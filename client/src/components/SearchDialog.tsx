import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { Search, ArrowRight, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ALL_SUB_SERVICES, CATEGORIES, subServicePath } from "@/content/services";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Result {
  url: string;
  title: string;
  excerpt: string;
}

// Static pages searchable even when the Pagefind index isn't available
// (dev server). In production Pagefind (built post-prerender) searches the
// full text of every page; this list is the fallback.
const STATIC_PAGES: Result[] = [
  { url: "/emergency", title: "Emergency Dentist in Dubai", excerpt: "Same-day relief for toothache, broken teeth, swelling and dental trauma." },
  { url: "/implants", title: "Dental Implants in Dubai", excerpt: "Single implants to All-on-4 / All-on-6 with lifetime implant warranty." },
  { url: "/veneers", title: "Veneers in Dubai", excerpt: "No-prep ceramic veneers and Hollywood smile design." },
  { url: "/crowns-bridges", title: "Crowns & Bridges in Dubai", excerpt: "Zirconia, porcelain and same-day crowns; implant-supported bridges." },
  { url: "/cosmetic", title: "Cosmetic Dentistry in Dubai", excerpt: "Complete smile transformations and Hollywood smile makeovers." },
  { url: "/orthodontics", title: "Orthodontics & Invisalign in Dubai", excerpt: "Clear aligners, ceramic and metal braces." },
  { url: "/whitening", title: "Teeth Whitening in Dubai", excerpt: "Laser, in-office and take-home whitening." },
  { url: "/dental-surgery", title: "Oral & Dental Surgery in Dubai", excerpt: "Wisdom teeth, extractions, bone grafting, sinus lift." },
  { url: "/restorative", title: "Restorative Dentistry in Dubai", excerpt: "Inlays, onlays and overlays." },
  { url: "/general-preventive", title: "General & Preventive Dentistry", excerpt: "Check-ups, cleanings, fillings, gum care, kids." },
  { url: "/xray-opg", title: "Digital X-Ray, OPG & CBCT", excerpt: "In-clinic 2D and 3D dental imaging." },
  { url: "/at-home", title: "Private At-Home Dental Visit", excerpt: "Dental care at your home or office in Dubai." },
  { url: "/dental-tourism", title: "Dental Tourism in Dubai", excerpt: "Treatment-only and all-inclusive packages for international patients." },
  { url: "/gallery", title: "Smile Transformation Gallery", excerpt: "Before and after results." },
  { url: "/doctors", title: "Our Dentists", excerpt: "Meet the team." },
  { url: "/about", title: "About the Clinic", excerpt: "Your Smile Advanced Dental Center, JLT Dubai." },
  { url: "/contact", title: "Contact & Opening Hours", excerpt: "Address, phone, WhatsApp and working hours." },
  { url: "/faq", title: "Frequently Asked Questions", excerpt: "Common questions about treatments and visits." },
  { url: "/blog", title: "Blog & News", excerpt: "Dental health articles." },
];

const LOCAL_INDEX: Result[] = [
  ...STATIC_PAGES,
  ...ALL_SUB_SERVICES.map((s) => ({
    url: subServicePath(s),
    title: `${s.name} — ${CATEGORIES[s.category].shortName}`,
    excerpt: s.heroSubtitle,
  })),
];

type Pagefind = {
  init?: () => Promise<void>;
  search: (q: string) => Promise<{ results: Array<{ data: () => Promise<{ url: string; meta: { title?: string }; excerpt: string }> }> }>;
};

let pagefindPromise: Promise<Pagefind | null> | null = null;
function loadPagefind(): Promise<Pagefind | null> {
  if (!pagefindPromise) {
    pagefindPromise = (async () => {
      try {
        // Built by `npx pagefind --site dist/public` after prerender. Absent in
        // dev. The URL lives in a variable so Vite's import analysis skips it.
        const pagefindUrl = "/pagefind/pagefind.js";
        const mod = (await import(/* @vite-ignore */ pagefindUrl)) as Pagefind;
        await mod.init?.();
        return mod;
      } catch {
        return null;
      }
    })();
  }
  return pagefindPromise;
}

function localSearch(q: string): Result[] {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return LOCAL_INDEX.filter((r) => {
    const hay = `${r.title} ${r.excerpt} ${r.url}`.toLowerCase();
    return terms.every((t) => hay.includes(t));
  }).slice(0, 8);
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery("");
      setResults([]);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    let cancelled = false;
    setLoading(true);
    const t = setTimeout(async () => {
      const pf = await loadPagefind();
      let out: Result[] = [];
      if (pf) {
        try {
          const res = await pf.search(query);
          const top = await Promise.all(res.results.slice(0, 8).map((r) => r.data()));
          out = top.map((d) => ({
            url: d.url.replace(/\/index\.html$/, "/").replace(/\/$/, "") || "/",
            title: d.meta.title?.replace(/\s*\|\s*Your Smile.*$/, "") ?? d.url,
            excerpt: d.excerpt.replace(/<[^>]+>/g, ""),
          }));
        } catch {
          out = localSearch(query);
        }
      } else {
        out = localSearch(query);
      }
      if (!cancelled) {
        setResults(out);
        setLoading(false);
      }
    }, 180);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [query]);

  const suggestions = useMemo(() => STATIC_PAGES.slice(0, 6), []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-0 overflow-hidden rounded-2xl" aria-describedby="search-description">
        <DialogHeader className="px-5 pt-5 pb-3 border-b border-border">
          <DialogTitle className="sr-only">Search the website</DialogTitle>
          <DialogDescription id="search-description" className="sr-only">
            Type to search treatments, pages and articles.
          </DialogDescription>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search treatments, e.g. wisdom tooth, Invisalign, veneers…"
              className="pl-10 h-12 rounded-xl text-base"
              data-testid="input-search"
            />
            {loading && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />}
          </div>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === "" ? (
            <div className="p-3">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Popular</p>
              <ul className="space-y-1">
                {suggestions.map((r) => (
                  <ResultRow key={r.url} r={r} onSelect={() => onOpenChange(false)} />
                ))}
              </ul>
            </div>
          ) : results.length === 0 && !loading ? (
            <p className="p-6 text-center text-muted-foreground">
              No results for "{query}". Try a treatment name, or{" "}
              <Link href="/contact" onClick={() => onOpenChange(false)} className="text-primary underline">
                ask us directly
              </Link>
              .
            </p>
          ) : (
            <ul className="space-y-1">
              {results.map((r) => (
                <ResultRow key={r.url} r={r} onSelect={() => onOpenChange(false)} />
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ResultRow({ r, onSelect }: { r: Result; onSelect: () => void }) {
  return (
    <li>
      <Link
        href={r.url}
        onClick={onSelect}
        className="group flex items-start justify-between gap-3 rounded-xl px-3 py-3 hover:bg-muted transition-colors"
      >
        <div className="min-w-0">
          <p className="font-semibold text-secondary group-hover:text-primary transition-colors truncate">{r.title}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </Link>
    </li>
  );
}
