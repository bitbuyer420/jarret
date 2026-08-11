import type { ProductCategory } from "@/lib/types";

type Props = {
  category: ProductCategory;
  colorHex: string;
  handle: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renders a stylized SVG snapback illustration — a flat-brim cap with the
 * product's front graphic — in the selected colorway. Keeps the storefront
 * fully self-contained, with no external image hosting.
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
  return (
    <>
      {snapback(line)}
      {frontGraphic(category, line)}
    </>
  );
}

/* ---------- Snapback silhouette (front view, 400×480 viewBox) ---------- */

function snapback(line: string) {
  return (
    <>
      {/* flat brim */}
      <path d="M104 250 L96 292 C 150 302 250 302 304 292 L296 250 Z" />
      {/* structured crown */}
      <path d="M122 252 A 78 78 0 0 1 278 252 Z" />
      {/* top button */}
      <circle cx="200" cy="172" r="6" />
      {/* panel seams */}
      <path d="M200 174 L200 252 M166 184 L174 252 M234 184 L226 252" fill="none" stroke={line} strokeWidth="2" opacity="0.45" />
      {/* brim top edge + stitch */}
      <path d="M104 252 C 150 262 250 262 296 252" fill="none" stroke={line} strokeWidth="2" opacity="0.5" />
      <path d="M112 286 C 155 295 245 295 288 286" fill="none" stroke={line} strokeWidth="2" opacity="0.4" />
    </>
  );
}

/**
 * The embroidered front graphic — the design that identifies the cap.
 * Rendered tonally in the dark shade so it reads like stitching on the crown.
 */
function frontGraphic(category: ProductCategory, line: string) {
  switch (category) {
    case "Emblem":
      return (
        <g fill="none" stroke={line} strokeWidth="3" opacity="0.9">
          <circle cx="200" cy="214" r="26" />
          <circle cx="200" cy="214" r="20" strokeWidth="1.5" opacity="0.6" />
          <path d="M182 214 H218" strokeWidth="2.5" />
          <path d="M191 214 A9 9 0 0 1 209 214 Z" fill={line} stroke="none" />
          <path d="M200 198 V204 M188 204 L191 208 M212 204 L209 208" strokeWidth="2" />
        </g>
      );
    case "Wordmark":
      return (
        <g fill={line} opacity="0.9">
          <rect x="170" y="202" width="60" height="7" rx="3" />
          <rect x="164" y="216" width="72" height="7" rx="3" />
          <rect x="182" y="230" width="36" height="4" rx="2" opacity="0.6" />
        </g>
      );
    case "Icon":
      return (
        <g stroke={line} strokeWidth="3" strokeLinecap="round" opacity="0.9">
          <path d="M172 222 H228" />
          <path d="M186 222 A14 14 0 0 1 214 222 Z" fill={line} stroke="none" />
          <path d="M200 200 V194 M215 210 L219 206 M185 210 L181 206" strokeWidth="2" />
        </g>
      );
    case "Monogram":
      return (
        <g fill={line} opacity="0.92" stroke="none">
          <text
            x="200"
            y="228"
            textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="42"
            fontWeight="700"
            letterSpacing="-2"
          >
            MF
          </text>
        </g>
      );
    case "Patch":
      return (
        <g fill={line} opacity="0.9">
          <path d="M200 188 L208 208 L228 214 L208 220 L200 240 L192 220 L172 214 L192 208 Z" />
          <circle cx="200" cy="214" r="3" fill="#FBF8F2" />
        </g>
      );
    default:
      return null;
  }
}

/* ---------- Helpers ---------- */

function backgroundFor(category: ProductCategory): string {
  const map: Record<ProductCategory, string> = {
    Emblem: "linear-gradient(160deg,#F4EFE6,#EAE2D3)",
    Wordmark: "linear-gradient(160deg,#F1ECE2,#E4DAC8)",
    Icon: "linear-gradient(160deg,#ECEBE6,#DCD9CF)",
    Monogram: "linear-gradient(160deg,#F3EFE8,#E7DECE)",
    Patch: "linear-gradient(160deg,#F5F0E7,#EBE2D0)",
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
