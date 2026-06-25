/* global React */
const { useState, useEffect, useRef, useCallback } = React;

/* ---- Sparkle ✦ ---- */
function Spark({ style, className = "" }) {
  return <span className={"spark " + className} style={style} aria-hidden="true" />;
}

/* ---- Kicker / eyebrow ---- */
function Kicker({ children, className = "", spark = true }) {
  return (
    <span className={"kicker " + className}>
      {spark && <Spark />}
      {children}
      {spark && <Spark />}
    </span>
  );
}

/* ---- Pill ---- */
function Pill({ children, variant = "", className = "" }) {
  return <span className={"pill " + (variant ? "pill--" + variant + " " : "") + className}>{children}</span>;
}

/* ---- Button ---- */
function Btn({ children, variant = "", className = "", href, onClick, type, sm }) {
  const cls = "btn " + (variant ? "btn--" + variant + " " : "") + (sm ? "btn--sm " : "") + className;
  if (href) return <a className={cls} href={href} onClick={onClick}>{children}</a>;
  return <button type={type || "button"} className={cls} onClick={onClick}>{children}</button>;
}

/* ---- Sticker heading ---- */
function Sticker({ children, color = "ambar", size = "t-xl", as = "h2", className = "", style }) {
  const Tag = as;
  return <Tag className={`sticker sticker--${color} ${size} ${className}`} style={style}>{children}</Tag>;
}

/* ---- House logo (img) ---- */
function HouseLogo({ variant = "color", className = "", style, alt = "Club Impact" }) {
  const paths = {
    blanco: "assets/logo-blanco.png",
    berenjena: "assets/logo-berenjena.png",
    iso: "assets/iso-hoja.png",
    color: "assets/logo-color.png",
  };
  const keys = { blanco: "logoBlanco", berenjena: "logoBerenjena", iso: "isoHoja", color: "logoColor" };
  const path = paths[variant] || paths.color;
  const rk = keys[variant] || keys.color;
  const src = (typeof window !== "undefined" && window.__resources && window.__resources[rk]) || path;
  return <img src={src} alt={alt} className={className} style={style} />;
}

/* ---- Divider de estrellitas ---- */
function DividerStars() {
  return (
    <div className="divider-stars">
      <Spark /><Spark /><Spark />
    </div>
  );
}

/* ---- Reveal on scroll ---- */
function Reveal({ children, as = "div", className = "", delay = 0, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const show = () => { if (!done) { done = true; el.classList.add("in"); } };
    // si ya está en viewport al montar, mostrar enseguida
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 800) && r.bottom > 0) {
      setTimeout(show, delay);
    }
    let io;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { setTimeout(show, delay); io.unobserve(el); } });
      }, { threshold: 0.12 });
      io.observe(el);
    }
    // red de seguridad: nunca dejar contenido oculto
    const fb = setTimeout(show, 1600 + delay);
    return () => { io && io.disconnect(); clearTimeout(fb); };
  }, [delay]);
  const Tag = as;
  return <Tag ref={ref} className={"reveal " + className} style={style}>{children}</Tag>;
}

/* ---- Starfield (estrellas dispersas decorativas) ---- */
function Starfield({ count = 14, color = "var(--ambar)" }) {
  const stars = useRef(
    Array.from({ length: count }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 8 + Math.random() * 20,
      op: 0.2 + Math.random() * 0.5,
    }))
  );
  return (
    <div className="starfield" aria-hidden="true">
      {stars.current.map((s, i) => (
        <Spark key={i} style={{
          position: "absolute", top: s.top + "%", left: s.left + "%",
          width: s.size, height: s.size, color, opacity: s.op,
        }} />
      ))}
    </div>
  );
}

/* ---- Synthwave background ---- */
function SynthBG({ grid = true }) {
  return (
    <div className="synth" aria-hidden="true">
      <div className="synth__glow" />
      {grid && <div className="synth__floor" />}
    </div>
  );
}

Object.assign(window, { Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield, SynthBG });
