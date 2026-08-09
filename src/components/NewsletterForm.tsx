"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <p className="mt-4 text-sm text-sage">
        Thanks — check your inbox for a welcome code.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex max-w-xs">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="w-full rounded-l-full border border-ink/20 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-ink"
      />
      <button
        type="submit"
        className="rounded-r-full bg-ink px-4 text-sm font-medium text-cloud transition-colors hover:bg-clay"
        aria-label="Subscribe"
      >
        →
      </button>
    </form>
  );
}
