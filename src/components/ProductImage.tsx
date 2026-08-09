import type { ProductCategory } from "@/lib/types";

type Props = {
  category: ProductCategory;
  colorHex: string;
  handle: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders a stylized SVG garment illustration in the product's color.
 * Keeps the storefront fully self-contained — no external image hosting.
 */
export default function ProductImage({
  category,
  colorHex,
  handle,
  className,
}: Props) {
  const shade = shadeColor(colorHex, -18);
  const highlight = shadeColor(colorHex, 16);
  const bg = backgroundFor(category);

  return (
    <div
      className={className}
      style={{ background: bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 480"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        role="img"
      >
        <defs>
          <linearGradient id={`grad-${handle}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={highlight} />
            <stop offset="100%" stopColor={shade} />
          </linearGradient>
          <filter id={`soft-${handle}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodOpacity="0.14" />
          </filter>
        </defs>
        <g
          fill={`url(#grad-${handle})`}
          stroke={shade}
          strokeWidth="2"
          strokeLinejoin="round"
          filter={`url(#soft-${handle})`}
        >
          {renderGarment(category, handle, shade)}
        </g>
      </svg>
    </div>
  );
}

function renderGarment(
  category: ProductCategory,
  handle: string,
  line: string,
) {
  if (handle.includes("beanie")) return beanie();
  if (handle.includes("tote")) return tote(line);
  if (handle.includes("card-holder")) return cardHolder(line);
  if (handle.includes("trouser") || handle.includes("chino")) return pants(line);

  switch (category) {
    case "Tees":
      return tee(handle, line);
    case "Knitwear":
      return sweater(line);
    case "Outerwear":
      return jacket(line);
    case "Bottoms":
      return pants(line);
    case "Accessories":
      return tote(line);
    default:
      return tee(handle, line);
  }
}

/* ---------- Garment paths ---------- */

function tee(handle: string, line: string) {
  return (
    <>
      <path d="M150 110 L110 130 L88 185 L120 205 L132 175 L132 380 L268 380 L268 175 L280 205 L312 185 L290 130 L250 110 C240 138 160 138 150 110 Z" />
      <path
        d="M150 110 C160 138 240 138 250 110"
        fill="none"
        stroke={line}
        strokeWidth="3"
      />
      {handle.includes("pocket") && (
        <rect x="168" y="205" width="46" height="52" rx="3" fill="none" stroke={line} strokeWidth="2.5" />
      )}
    </>
  );
}

function sweater(line: string) {
  return (
    <>
      <path d="M150 108 L96 132 L70 210 L104 228 L120 195 L120 388 L280 388 L280 195 L296 228 L330 210 L304 132 L250 108 C242 136 158 136 150 108 Z" />
      <path d="M150 108 C158 136 242 136 250 108" fill="none" stroke={line} strokeWidth="3" />
      <path d="M120 372 L280 372" fill="none" stroke={line} strokeWidth="3" strokeDasharray="1 7" />
      <path d="M110 220 L110 366" fill="none" stroke={line} strokeWidth="2" strokeDasharray="1 8" opacity="0.6" />
      <path d="M290 220 L290 366" fill="none" stroke={line} strokeWidth="2" strokeDasharray="1 8" opacity="0.6" />
    </>
  );
}

function jacket(line: string) {
  return (
    <>
      <path d="M150 104 L92 130 L66 214 L100 234 L118 198 L118 392 L282 392 L282 198 L300 234 L334 214 L308 130 L250 104 L206 128 L162 128 Z" />
      <path d="M200 128 L200 392" fill="none" stroke={line} strokeWidth="2.5" strokeDasharray="4 6" />
      <path d="M162 128 L150 104 M238 128 L250 104" fill="none" stroke={line} strokeWidth="3" />
      <rect x="150" y="300" width="34" height="42" rx="3" fill="none" stroke={line} strokeWidth="2.5" />
      <rect x="216" y="300" width="34" height="42" rx="3" fill="none" stroke={line} strokeWidth="2.5" />
    </>
  );
}

function pants(line: string) {
  return (
    <>
      <path d="M132 96 L268 96 L262 200 L214 200 L200 420 L156 420 L150 250 L144 420 L100 420 L138 200 L132 96 Z" transform="translate(0,-4)" />
      <path d="M132 120 L268 120" fill="none" stroke={line} strokeWidth="3" />
      <path d="M200 116 L200 196" fill="none" stroke={line} strokeWidth="2" strokeDasharray="3 6" opacity="0.6" />
    </>
  );
}

function beanie() {
  return (
    <>
      <path d="M120 300 C120 190 280 190 280 300 Z" />
      <rect x="112" y="298" width="176" height="46" rx="14" />
      <path d="M120 300 L120 240 M160 300 L160 214 M200 300 L200 206 M240 300 L240 214 M280 300 L280 240" fill="none" stroke="#00000022" strokeWidth="4" />
    </>
  );
}

function tote(line: string) {
  return (
    <>
      <path d="M132 190 L268 190 L282 400 L118 400 Z" />
      <path d="M164 190 C164 130 236 130 236 190" fill="none" stroke={line} strokeWidth="8" strokeLinecap="round" />
      <path d="M118 232 L282 232" fill="none" stroke={line} strokeWidth="2.5" opacity="0.5" />
    </>
  );
}

function cardHolder(line: string) {
  return (
    <>
      <rect x="118" y="196" width="164" height="118" rx="12" />
      <rect x="140" y="220" width="120" height="70" rx="6" fill="none" stroke={line} strokeWidth="2.5" opacity="0.7" />
      <path d="M170 220 L170 290 M200 220 L200 290 M230 220 L230 290" fill="none" stroke={line} strokeWidth="2" opacity="0.5" />
    </>
  );
}

/* ---------- Helpers ---------- */

function backgroundFor(category: ProductCategory): string {
  const map: Record<ProductCategory, string> = {
    Tees: "linear-gradient(160deg,#F4EFE6,#EAE2D3)",
    Knitwear: "linear-gradient(160deg,#F1ECE2,#E4DAC8)",
    Outerwear: "linear-gradient(160deg,#ECEBE6,#DCD9CF)",
    Bottoms: "linear-gradient(160deg,#F3EFE8,#E7DECE)",
    Accessories: "linear-gradient(160deg,#F5F0E7,#EBE2D0)",
  };
  return map[category];
}

/** Lighten (positive) or darken (negative) a hex color by percent. */
function shadeColor(hex: string, percent: number): string {
  const n = hex.replace("#", "");
  const num = parseInt(
    n.length === 3
      ? n.split("").map((c) => c + c).join("")
      : n,
    16,
  );
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  const amt = Math.round(2.55 * percent);
  r = Math.max(0, Math.min(255, r + amt));
  g = Math.max(0, Math.min(255, g + amt));
  b = Math.max(0, Math.min(255, b + amt));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
