/* global React, Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield, SynthBG */

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
          <a className="txtlink" href="#agenda">Experiencias</a>
        </div>
        <Btn variant="ghost" sm className="nav__cta" onClick={onCTA}>Sumate</Btn>
      </div>
    </nav>
  );
}

/* ============ 1 · HERO ============ */
function Hero({ titular, grid, onCTA }) {
  return (
    <header className="hero hero--photo surface surface--dark" id="top">
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
const TENSION_NUM_COLORS = ["var(--magenta)", "var(--turquesa)", "var(--ambar)"];

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
  return (
    <section className={"section surface " + surface}>
      <div className="wrap">
        <Reveal className="center">
          <Kicker>Por qué existe esto</Kicker>
          <Sticker color="magenta" size="t-xxl" className="mt-s sticker--plain">Hacerlo solo<br/>cansa</Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto", textAlign: "center" }}>
          El mundo se puso difícil para los que queremos hacer cosas distintas
          </p>
        </Reveal>
        <div className="grid grid-3 mt-l">
          {TENSIONES.map((x, i) => (
            <Reveal key={x.n} delay={i * 90}>
              <article className="card" style={{ height: "100%" }}>
                <div className="card__num" style={{ background: TENSION_NUM_COLORS[i % TENSION_NUM_COLORS.length], color: "#fff" }}>{x.n}</div>
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Tension });
