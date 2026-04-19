import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  phrases: string[];
  className?: string;
  cursorClassName?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  loop?: boolean;
};

export function TypewriterGradient({
  phrases,
  className = "bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-transparent bg-clip-text",
  cursorClassName = "bg-gradient-to-b from-blue-700 to-cyan-500",
  typeSpeed = 70,
  deleteSpeed = 35,
  pauseMs = 1500,
  loop = false,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [done, setDone] = useState(false);

  // Longest phrase reserves the inline width so there is zero layout shift
  const longest = useMemo(
    () => phrases.reduce((a, b) => (b.length > a.length ? b : a), ""),
    [phrases]
  );

  // Re-trigger typing each time the heading scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setPhraseIndex(0);
          setText("");
          setDeleting(false);
          setDone(false);
          setActive(true);
        } else {
          setActive(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active || done) return;
    const current = phrases[phraseIndex] ?? "";

    if (!deleting && text === current) {
      if (!loop) {
        setDone(true);
        return;
      }
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }
    const t = setTimeout(
      () =>
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
        ),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [active, text, deleting, phraseIndex, phrases, typeSpeed, deleteSpeed, pauseMs, loop, done]);

  return (
    <span
      ref={ref}
      className="relative inline-block align-baseline whitespace-normal"
    >
      {/* Invisible ghost — reserves final width to prevent any layout shift */}
      <span aria-hidden className="invisible select-none pointer-events-none">
        {longest}
      </span>
      {/* Typed text overlaid absolutely */}
      <span className="absolute inset-0 flex items-baseline">
        <span className={className}>{text}</span>
        {!done && (
          <span
            aria-hidden
            className={`inline-block w-[3px] h-[0.85em] -mb-[0.05em] ml-1 align-middle rounded-sm animate-pulse ${cursorClassName}`}
          />
        )}
      </span>
    </span>
  );
}
