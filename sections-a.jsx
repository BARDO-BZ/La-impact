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
          <a className="txtlink" href="#experiencias">Experiencias</a>
          <Btn variant="lima" sm onClick={onCTA}>Sumate</Btn>
        </div>
      </div>
    </nav>
  );
}

/* ============ 1 · HERO ============ */
function Hero({ titular, grid, onCTA }) {
  return (
    <header className="hero surface surface--dark" id="top">
      <SynthBG grid={grid} />
      <Starfield count={16} color="var(--ambar)" />
      <div className="wrap hero__inner">
        <Reveal>
          <HouseLogo variant="color" className="hero__logo" />
        </Reveal>
        <Reveal delay={60}>
          <Kicker className="muted">Club Impact · Red de casas para creadores</Kicker>
        </Reveal>
        <Reveal delay={120}>
          <Sticker as="h1" color="ambar" size="t-hero" className="mt-s">{titular}</Sticker>
        </Reveal>
        <Reveal delay={200}>
          <p className="lead hero__sub">
            Coliving, coworking y experiencias para creadores.
            <b> Tu proyecto con propósito deja de sostenerse solo.</b>
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="hero__cta">
            <Btn variant="" href="#coworking">Coworking</Btn>
            <Btn variant="crema" href="#coliving">Coliving</Btn>
            <Btn variant="ghost" href="#experiencias">Experiencias ↓</Btn>
          </div>
        </Reveal>
        <Reveal delay={360}>
          <div className="faces hero__faces" aria-label="La comunidad de La Impact">
            {[1,2,3,4,5].map((n) => (
              <image-slot
                key={n}
                id={`hero-face-${n}`}
                shape="circle"
                placeholder="Foto real"
                style={{ width: "clamp(58px,9vw,84px)", height: "clamp(58px,9vw,84px)" }}
              ></image-slot>
            ))}
          </div>
        </Reveal>
      </div>
    </header>
  );
}

/* ============ 2 · LA TENSIÓN ============ */
const TENSIONES = [
  {
    n: "01",
    t: "La soledad se volvió deporte nacional",
    p: "Cada vez más gente la rema sola. Y crear con otros dejó de ser un lujo: es la única forma de no quemarse en el intento.",
  },
  {
    n: "02",
    t: "Vivir y crear sale carísimo",
    p: "Alquilar, conseguir un lugar para trabajar, bancar un proyecto que recién arranca. Solo, los números no cierran. Juntos, sí.",
  },
  {
    n: "03",
    t: "Sostener algo con propósito, en soledad, agota",
    p: "Tenés la idea, las ganas y el corazón. Lo que falta es la tribu que te sostenga los días en que no querés saber nada.",
  },
];

function Tension({ surface }) {
  return (
    <section className={"section surface " + surface}>
      <div className="wrap">
        <Reveal className="center">
          <Kicker>Por qué existe esto</Kicker>
          <Sticker color="magenta" size="t-xxl" className="mt-s">Hacerla solo<br/>cansa</Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto" }}>
            No es tu cabeza. El mundo se puso difícil para la gente que quiere hacer cosas distintas.
            Te suena, ¿no?
          </p>
        </Reveal>
        <div className="grid grid-3 mt-l">
          {TENSIONES.map((x, i) => (
            <Reveal key={x.n} delay={i * 90}>
              <article className="card" style={{ height: "100%" }}>
                <div className="card__num">{x.n}</div>
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
