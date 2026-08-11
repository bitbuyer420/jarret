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
          {renderHat(category, shade, handle)}
        </g>
      </svg>
    </div>
  );
}

function renderHat(category: ProductCategory, line: string, handle: string) {
  return (
    <>
      {snapback(line)}
      {frontGraphic(category, line, handle)}
    </>
  );
}

/* ---------- Snapback silhouette (front view, 400×480 viewBox) ---------- */

function snapback(line: string) {
  return (
    <>
      {/* wide flat brim */}
      <path d="M84 250 L84 286 C 130 297 270 297 316 286 L316 250 Z" />
      {/* structured crown */}
      <path d="M122 252 A 78 78 0 0 1 278 252 Z" />
      {/* top button */}
      <circle cx="200" cy="172" r="6" />
      {/* panel seams */}
      <path d="M200 174 L200 252 M166 184 L174 252 M234 184 L226 252" fill="none" stroke={line} strokeWidth="2" opacity="0.45" />
      {/* brim top edge + stitch */}
      <path d="M104 252 C 150 262 250 262 296 252" fill="none" stroke={line} strokeWidth="2" opacity="0.5" />
      <path d="M104 284 C 150 293 250 293 316 284" fill="none" stroke={line} strokeWidth="2" opacity="0.35" />
    </>
  );
}

/**
 * The embroidered front graphic — the design that identifies the cap.
 * Rendered tonally in the dark shade so it reads like stitching on the crown.
 * Animals are scaled to sit within the crown front.
 */
function frontGraphic(category: ProductCategory, line: string, handle: string) {
  switch (category) {
    case "Buffalo":
      return <AnimalMark markup={buffaloMark(line)} />;
    case "Elk":
      return <AnimalMark markup={elkMark(line)} />;
    case "Longhorn":
      return <AnimalMark markup={longhornMark(line)} />;
    case "Frontier":
      if (handle.includes("compass")) return frontierCompass(line);
      if (handle.includes("wordmark")) return frontierWordmark(line);
      return frontierEmblem(line);
    default:
      return null;
  }
}

/** Injects a raw SVG string, scaled to fit the crown. */
function AnimalMark({ markup }: { markup: string }) {
  return (
    <g
      transform="translate(200,216) scale(0.66) translate(-200,-216)"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

/* ---------- Frontier heritage marks (crown-sized) ---------- */

function frontierEmblem(line: string) {
  return (
    <g fill="none" stroke={line} strokeWidth="3" opacity="0.9">
      <circle cx="200" cy="214" r="26" />
      <circle cx="200" cy="214" r="20" strokeWidth="1.5" opacity="0.6" />
      <path d="M182 214 H218" strokeWidth="2.5" />
      <path d="M191 214 A9 9 0 0 1 209 214 Z" fill={line} stroke="none" />
      <path d="M200 198 V204 M188 204 L191 208 M212 204 L209 208" strokeWidth="2" />
    </g>
  );
}

function frontierWordmark(line: string) {
  return (
    <g fill={line} opacity="0.9">
      <rect x="170" y="202" width="60" height="7" rx="3" />
      <rect x="164" y="216" width="72" height="7" rx="3" />
      <rect x="182" y="230" width="36" height="4" rx="2" opacity="0.6" />
    </g>
  );
}

function frontierCompass(line: string) {
  return (
    <g fill={line} opacity="0.9">
      <path d="M200 188 L208 208 L228 214 L208 220 L200 240 L192 220 L172 214 L192 208 Z" />
      <circle cx="200" cy="214" r="3" fill="#FBF8F2" />
    </g>
  );
}

/* ---------- Animal marks (front-facing, symmetric about x=200) ---------- */

const CLOUD = "#FBF8F2";

/** Mirror an SVG-string fragment across the x=200 axis. */
function mirrored(s: string): string {
  return s + `<g transform="translate(400,0) scale(-1,1)">${s}</g>`;
}

function longhornMark(c: string): string {
  const central =
    `<path d="M182 208 C 181 232 194 252 200 252 C 206 252 219 232 218 208 C 211 213 189 213 182 208 Z" fill="${c}"/>` +
    `<circle cx="194" cy="226" r="2.6" fill="${CLOUD}"/><circle cx="206" cy="226" r="2.6" fill="${CLOUD}"/>`;
  const horn = `<path d="M200 208 C 226 206 250 202 264 188 C 267 191 266 197 259 202 C 244 212 220 214 200 213 Z" fill="${c}"/>`;
  const ear = `<path d="M215 210 L230 205 L223 218 Z" fill="${c}"/>`;
  return central + mirrored(horn) + mirrored(ear);
}

function buffaloMark(c: string): string {
  const central =
    `<path d="M164 204 C 152 224 170 256 200 258 C 230 256 248 224 236 204 C 216 194 184 194 164 204 Z" fill="${c}"/>` +
    `<path d="M182 256 L190 276 L200 264 L210 276 L218 256 Z" fill="${c}"/>` +
    `<path d="M191 198 L200 210 L209 198" fill="none" stroke="${CLOUD}" stroke-width="2.5" opacity="0.5"/>` +
    `<circle cx="210" cy="220" r="2.6" fill="${CLOUD}"/><circle cx="190" cy="220" r="2.6" fill="${CLOUD}"/>`;
  const horn = `<path d="M232 206 C 248 200 260 206 259 218 C 255 210 244 210 233 213 Z" fill="${c}"/>`;
  return central + mirrored(horn);
}

function elkMark(c: string): string {
  const central =
    `<path d="M187 204 C 185 226 196 252 200 252 C 204 252 215 226 213 204 C 208 200 192 200 187 204 Z" fill="${c}"/>` +
    `<circle cx="207" cy="220" r="2.6" fill="${CLOUD}"/><circle cx="193" cy="220" r="2.6" fill="${CLOUD}"/>`;
  const antler =
    `<path d="M209 202 C 222 185 230 170 233 150" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>` +
    `<path d="M221 178 L238 170" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M226 166 L243 160" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M233 150 L240 141" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`;
  const ear = `<path d="M212 206 L225 200 L219 213 Z" fill="${c}"/>`;
  return central + mirrored(antler) + mirrored(ear);
}

/* ---------- Helpers ---------- */

function backgroundFor(category: ProductCategory): string {
  const map: Record<ProductCategory, string> = {
    Buffalo: "linear-gradient(160deg,#F4EFE6,#EAE2D3)",
    Elk: "linear-gradient(160deg,#ECEBE6,#DCD9CF)",
    Longhorn: "linear-gradient(160deg,#F3EFE8,#E7DECE)",
    Frontier: "linear-gradient(160deg,#F5F0E7,#EBE2D0)",
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
