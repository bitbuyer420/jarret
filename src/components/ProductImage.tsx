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
          {renderHat(category, shade)}
        </g>
      </svg>
    </div>
  );
}

function renderHat(category: ProductCategory, line: string) {
  switch (category) {
    case "Caps":
      return cap(line);
    case "Beanies":
      return beanie();
    case "Brimmed":
      return brimmed(line);
    case "Bucket":
      return bucket(line);
    case "Straw":
      return straw(line);
    default:
      return cap(line);
  }
}

/* ---------- Hat paths (front view, 400×480 viewBox) ---------- */

function cap(line: string) {
  return (
    <>
      {/* curved brim */}
      <path d="M112 250 C 150 306 250 306 288 250 C 250 272 150 272 112 250 Z" />
      {/* crown dome */}
      <path d="M120 250 A 80 80 0 0 1 280 250 Z" />
      {/* top button */}
      <circle cx="200" cy="170" r="6" />
      {/* panel seams */}
      <path d="M200 172 L200 250 M164 182 L172 250 M236 182 L228 250" fill="none" stroke={line} strokeWidth="2" opacity="0.55" />
      {/* brim edge stitch */}
      <path d="M124 253 C 156 296 244 296 276 253" fill="none" stroke={line} strokeWidth="2" opacity="0.5" />
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

function brimmed(line: string) {
  return (
    <>
      {/* wide brim ellipse */}
      <path d="M64 292 C 64 268 336 268 336 292 C 336 316 64 316 64 292 Z" />
      {/* crown with pinched top */}
      <path d="M142 290 C 140 212 158 190 200 190 C 242 190 260 212 258 290 Z" />
      {/* band */}
      <path d="M144 266 L256 266 L256 284 L144 284 Z" fill={line} opacity="0.85" />
      {/* teardrop dent */}
      <path d="M174 200 C 186 210 214 210 226 200" fill="none" stroke={line} strokeWidth="2.5" opacity="0.6" />
      {/* brim edge */}
      <path d="M78 292 C 120 306 280 306 322 292" fill="none" stroke={line} strokeWidth="2" opacity="0.45" />
    </>
  );
}

function bucket(line: string) {
  return (
    <>
      {/* downturned brim */}
      <path d="M100 250 C 118 300 282 300 300 250 C 250 266 150 266 100 250 Z" />
      {/* rounded crown */}
      <path d="M142 252 C 142 196 258 196 258 252 Z" />
      {/* crown topstitch */}
      <path d="M150 224 C 180 214 220 214 250 224" fill="none" stroke={line} strokeWidth="2" opacity="0.5" />
      {/* brim stitch lines */}
      <path d="M116 256 C 150 288 250 288 284 256 M132 260 C 160 280 240 280 268 260" fill="none" stroke={line} strokeWidth="2" opacity="0.4" />
    </>
  );
}

function straw(line: string) {
  return (
    <>
      {/* very wide shade brim */}
      <path d="M52 296 C 52 266 348 266 348 296 C 348 326 52 326 52 296 Z" />
      {/* low rounded crown */}
      <path d="M150 294 C 148 226 158 208 200 208 C 242 208 252 226 250 294 Z" />
      {/* band */}
      <path d="M152 272 L248 272 L248 286 L152 286 Z" fill={line} opacity="0.8" />
      {/* woven straw texture — concentric brim lines */}
      <path d="M74 296 C 118 312 282 312 326 296 M92 296 C 128 308 272 308 308 296 M110 296 C 140 305 260 305 290 296" fill="none" stroke={line} strokeWidth="1.5" opacity="0.35" />
      {/* crown weave */}
      <path d="M160 232 C 186 224 214 224 240 232 M158 250 C 186 244 214 244 242 250" fill="none" stroke={line} strokeWidth="1.5" opacity="0.35" />
    </>
  );
}

/* ---------- Helpers ---------- */

function backgroundFor(category: ProductCategory): string {
  const map: Record<ProductCategory, string> = {
    Caps: "linear-gradient(160deg,#F4EFE6,#EAE2D3)",
    Beanies: "linear-gradient(160deg,#F1ECE2,#E4DAC8)",
    Brimmed: "linear-gradient(160deg,#ECEBE6,#DCD9CF)",
    Bucket: "linear-gradient(160deg,#F3EFE8,#E7DECE)",
    Straw: "linear-gradient(160deg,#F5F0E7,#EBE2D0)",
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
