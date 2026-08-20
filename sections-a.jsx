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
          <Kicker spark={false} className="tension__kicker">Por qué existe esto</Kicker>
          <h2 className="tension__title mt-s">Hacerlo solo,<br/>cansa.</h2>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto", textAlign: "center" }}>
          El mundo se puso difícil para los que queremos hacer cosas distintas
          </p>
        </Reveal>
        <Reveal className="timeline mt-l">
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
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Tension });
