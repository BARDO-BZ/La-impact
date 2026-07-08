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
function Btn({ children, variant = "", className = "", href, onClick, type, sm, target, rel }) {
  const cls = "btn " + (variant ? "btn--" + variant + " " : "") + (sm ? "btn--sm " : "") + className;
  if (href) return <a className={cls} href={href} onClick={onClick} target={target} rel={rel}>{children}</a>;
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

/* ---- Modal / popup ---- */
function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" aria-label="Cerrar" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

/* ---- Botón flotante de WhatsApp ---- */
function WhatsAppFloat({ number, message = "Hola! Quiero saber más sobre La Impact." }) {
  const digits = (number || "").replace(/\D/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
  return (
    <a className="wa-float" href={href} target="_blank" rel="noopener noreferrer" aria-label="Escribinos por WhatsApp">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.86 11.86 0 0 0 5.64 1.44h.01c6.54 0 11.85-5.3 11.85-11.85 0-3.16-1.23-6.14-3.38-8.43ZM12.05 21.3a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.8 1 1.01-3.7-.22-.38a9.38 9.38 0 0 1-1.45-5.0c0-5.19 4.22-9.4 9.4-9.4 2.51 0 4.87.98 6.64 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.19-4.22 9.4-9.2 9.4Zm5.17-7.04c-.28-.14-1.67-.82-1.93-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43 0 1.43 1.03 2.82 1.17 3.01.14.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.64.61.69.22 1.32.19 1.82.11.55-.08 1.67-.68 1.91-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33Z"/>
      </svg>
    </a>
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

Object.assign(window, { Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield, SynthBG, Modal, WhatsAppFloat });
