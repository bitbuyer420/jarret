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
      transform="translate(200,214) scale(0.42) translate(-180,-160)"
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

/* ---------- Animal marks (live full-body silhouettes, facing left) ---------- */

const CLOUD = "#FBF8F2";

function buffaloMark(c: string): string {
  const legs =
    `<path d="M96 182 L88 250 L100 250 L108 184 Z" fill="${c}"/>` +
    `<path d="M124 184 L122 250 L134 250 L134 184 Z" fill="${c}"/>` +
    `<path d="M236 178 L230 250 L242 250 L246 180 Z" fill="${c}"/>` +
    `<path d="M262 172 L266 250 L278 250 L272 174 Z" fill="${c}"/>`;
  const body = `<path d="M78 150 C 82 116 112 80 148 84 C 186 86 234 116 268 138 C 282 145 286 156 283 166 C 274 182 176 186 150 186 C 118 186 92 182 80 174 C 72 168 74 158 78 150 Z" fill="${c}"/>`;
  const horn = `<path d="M90 146 C 82 132 84 116 96 114 C 101 119 100 134 98 148 Z" fill="${c}"/>`;
  const head = `<path d="M88 148 C 62 148 44 162 46 182 C 47 197 60 204 76 202 C 90 201 96 191 96 176 C 96 162 94 152 90 146 Z" fill="${c}"/>`;
  const beard = `<path d="M52 194 L46 222 L72 202 Z" fill="${c}"/>`;
  const tail = `<path d="M282 150 C 297 145 302 160 292 173" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`;
  const eye = `<circle cx="72" cy="168" r="2.4" fill="${CLOUD}"/>`;
  return legs + body + horn + head + beard + tail + eye;
}

function elkMark(c: string): string {
  const legs =
    `<path d="M176 208 L170 262 L180 262 L186 208 Z" fill="${c}"/>` +
    `<path d="M198 210 L198 262 L208 262 L208 210 Z" fill="${c}"/>` +
    `<path d="M270 206 L266 262 L276 262 L280 206 Z" fill="${c}"/>` +
    `<path d="M292 202 L296 262 L306 262 L300 202 Z" fill="${c}"/>`;
  const body = `<path d="M150 196 C 146 172 162 160 184 162 C 210 156 258 156 296 166 C 312 172 316 186 309 200 C 300 214 188 216 168 212 C 156 209 150 204 150 196 Z" fill="${c}"/>`;
  const neck = `<path d="M168 164 C 158 142 150 122 150 106 C 150 98 160 97 165 105 C 174 125 182 150 190 172 Z" fill="${c}"/>`;
  const antler =
    `<path d="M151 106 C 168 82 190 62 200 38" fill="none" stroke="${c}" stroke-width="6.5" stroke-linecap="round"/>` +
    `<path d="M168 78 L190 74" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M181 60 L203 54" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M193 44 L213 37" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round"/>` +
    `<path d="M158 104 C 176 84 198 68 212 48" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round"/>` +
    `<path d="M180 78 L200 70" fill="none" stroke="${c}" stroke-width="4.5" stroke-linecap="round"/>` +
    `<path d="M195 62 L215 54" fill="none" stroke="${c}" stroke-width="4.5" stroke-linecap="round"/>`;
  const head = `<path d="M150 110 C 137 102 123 104 119 117 C 116 128 124 136 135 135 C 144 134 151 125 153 114 Z" fill="${c}"/>`;
  const ear = `<path d="M152 108 L145 92 L162 102 Z" fill="${c}"/>`;
  const tail = `<path d="M308 176 L317 188 L308 193 Z" fill="${c}"/>`;
  const eye = `<circle cx="133" cy="118" r="2.2" fill="${CLOUD}"/>`;
  return legs + body + neck + antler + head + ear + tail + eye;
}

function longhornMark(c: string): string {
  const legs =
    `<path d="M156 206 L150 258 L160 258 L166 206 Z" fill="${c}"/>` +
    `<path d="M178 208 L178 258 L188 258 L188 208 Z" fill="${c}"/>` +
    `<path d="M266 206 L262 258 L272 258 L276 206 Z" fill="${c}"/>` +
    `<path d="M288 204 L292 258 L302 258 L296 204 Z" fill="${c}"/>`;
  const body = `<path d="M124 190 C 120 168 136 156 158 158 C 194 152 252 152 292 162 C 308 168 312 182 305 198 C 296 212 162 214 144 210 C 132 207 124 200 124 190 Z" fill="${c}"/>`;
  const hornB = `<path d="M132 176 C 162 165 196 162 218 148 C 216 158 218 167 206 172 C 180 182 150 184 128 183 Z" fill="${c}"/>`;
  const head = `<path d="M126 172 C 108 170 96 182 98 198 C 99 210 108 217 121 217 C 134 216 143 207 146 195 L148 176 Z" fill="${c}"/>`;
  const hornF = `<path d="M120 178 C 92 172 60 172 36 182 C 42 174 42 165 54 163 C 80 161 106 170 124 180 Z" fill="${c}"/>`;
  const ear = `<path d="M140 172 L130 158 L150 166 Z" fill="${c}"/>`;
  const tail = `<path d="M304 176 C 316 174 320 190 310 200 L308 214" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;
  const eye = `<circle cx="116" cy="190" r="2.6" fill="${CLOUD}"/>`;
  return legs + body + hornB + head + hornF + ear + eye + tail;
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
