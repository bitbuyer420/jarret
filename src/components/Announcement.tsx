const messages = [
  "Free shipping on orders over $75",
  "30-day easy returns",
  "New Fall arrivals just landed",
];

export default function Announcement() {
  return (
    <div className="bg-ink text-cloud">
      <div className="container-site flex h-9 items-center justify-center gap-8 text-[11px] font-medium uppercase tracking-[0.18em]">
        {messages.map((m, i) => (
          <span key={m} className={i === 0 ? "" : "hidden sm:inline"}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
