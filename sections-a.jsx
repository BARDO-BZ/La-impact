/* global React, Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield, SynthBG, MarqueeBand */

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeqfym0LzSoUgRomY1chjhDSG8Dxt2Vl-pbXhvDMc6QpXXSJg/viewform";

/* ============ 0 · NAV ============ */
function Nav({ onCTA }) {
  return (
    <nav className="nav">
      <div className="wrap nav__row">
        <a className="nav__brand" href="#top" aria-label="Club Impact — inicio">
          <HouseLogo variant="blanco" />
          <b>Club Impact</b>
        </a>
        <div className="nav__links">
          <a className="txtlink" href="#coworking">Coworking</a>
          <a className="txtlink" href="#coliving">Coliving</a>
          <a className="txtlink" href="#experiencias">Experiencias</a>
        </div>
        <Btn variant="ghost" sm className="nav__cta" href={FORM_URL} target="_blank" rel="noopener noreferrer">Sumate</Btn>
      </div>
    </nav>
  );
}

/* ============ 1 · HERO ============ */
/* Estrellas del Hero — posiciones fijas (top/left en %, size en px, op = opacidad).
   Editá el número de la estrella que quieras mover. */
const HERO_STARS = [
  /* 1  */ { top: 8,  left: 6,  size: 14, op: 0.5 },
  /* 2  */ { top: 14, left: 88, size: 18, op: 0.4 },
  /* 3  */ { top: 22, left: 20, size: 10, op: 0.6 },
  /* 4  */ { top: 30, left: 72, size: 22, op: 0.35 },
  /* 5  */ { top: 6,  left: 45, size: 12, op: 0.45 },
  /* 6  */ { top: 40, left: 10, size: 16, op: 0.5 },
  /* 7  */ { top: 46, left: 92, size: 14, op: 0.4 },
  /* 8  */ { top: 60, left: 5,  size: 20, op: 0.3 },
  /* 9  */ { top: 66, left: 82, size: 12, op: 0.55 },
  /* 10 */ { top: 74, left: 30, size: 18, op: 0.4 },
  /* 11 */ { top: 80, left: 60, size: 10, op: 0.6 },
  /* 12 */ { top: 90, left: 15, size: 16, op: 0.4 },
  /* 13 */ { top: 94, left: 78, size: 22, op: 0.3 },
  /* 14 */ { top: 18, left: 55, size: 8,  op: 0.5 },
  /* 15 */ { top: 54, left: 42, size: 14, op: 0.45 },
  /* 16 */ { top: 85, left: 95, size: 12, op: 0.5 },
];

function Hero({ titular, grid, onCTA }) {
  return (
    <header className="hero surface surface--dark" id="top">
      <SynthBG grid={grid} />
      <Starfield stars={HERO_STARS} color="var(--ambar)" />
      <Nav onCTA={onCTA} />
      <div className="wrap hero__inner">
        <Reveal>
          <HouseLogo variant="color" className="hero__logo" />
        </Reveal>
        <Reveal delay={60}>
          <Kicker className="muted">Club Impact</Kicker>
        </Reveal>
        <Reveal delay={120}>
          <Sticker as="h1" color="ambar" size="t-hero" className="mt-s sticker--plain">{titular}</Sticker>
        </Reveal>
      </div>
    </header>
  );
}

/* ============ 2 · LA TENSIÓN ============ */
const TENSIONES = [
  {
    n: "01",
    t: "Vivir y crear",
    p: "Alquilar, conseguir un lugar para trabajar, bancar un proyecto que recién arranca sale carísimo. Compartirlo alivia ese peso.",
  },
  {
    n: "02",
    t: "Conectar",
    p: "Una ciudad fragmentada, todos trabajando en la burbuja del home office. Tener las excusas para juntarnos nos saca de esa soledad.",
  },
  {
    n: "03",
    t: "Hacer con sentido",
    p: "Tenés las ideas y las ganas pero te quemás en el intento. Tener una comunidad que te sostiene le devuelve todo el sentido a lo que hacés.",
  },
];

function Tension({ surface }) {
  const timelineRef = useRef(null);
  const [timelineIn, setTimelineIn] = useState(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setTimelineIn(true); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setTimelineIn(true); io.unobserve(el); } });
    }, { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className={"section section--marquee-top surface " + surface}>
      <MarqueeBand />
      <div className="wrap">
        <Reveal className="center">
          <Kicker spark={false} className="tension__kicker">Por qué existe esto</Kicker>
          <h2 className="tension__title mt-s">Hacerlo solo,<br/>cansa.</h2>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto", textAlign: "center" }}>
          El mundo se puso difícil para los que queremos hacer cosas distintas
          </p>
        </Reveal>
        <div ref={timelineRef} className={"timeline mt-l" + (timelineIn ? " in" : "")}>
          <div className="timeline__row">
            <div className="timeline__track" aria-hidden="true">
              <span className="timeline__fill" />
            </div>
            {TENSIONES.map((x, i) => (
              <div className="timeline__col" key={x.n} style={{ transitionDelay: (i * 0.18) + "s" }}>
                <span className="timeline__dot">{x.n}</span>
                <h3 className="timeline__title-sm">{x.t}</h3>
                <p className="timeline__desc">{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Tension });
