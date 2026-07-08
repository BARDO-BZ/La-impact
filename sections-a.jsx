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
          <Sticker as="h1" color="ambar" size="t-hero" className="mt-s sticker--plain">{titular}</Sticker>
        </Reveal>
        <Reveal delay={360}>
          <div className="faces hero__faces" aria-label="La comunidad de La Impact">
            {[
              "img/3F9E7FFB-75A8-437E-B716-CFC672F94344_1_105_c.jpeg",
              "img/DAFB165E-2749-4F10-8EED-6FE3443ED642_1_105_c.jpeg",
              "img/517C48D8-E1AF-4936-AB8A-188FBC2ED24C_1_105_c.jpeg",
              "img/CFDF2E5A-A569-4E37-B34A-6919F58ED1E8_1_105_c.jpeg",
              "img/47A651B5-75AF-4BDD-BFCF-4A1DFBEA8D66_1_105_c.jpeg",
            ].map((src, i) => (
              <image-slot
                key={i + 1}
                id={`hero-face-${i + 1}`}
                shape="circle"
                src={src}
                placeholder="Foto real"
                style={{ width: "clamp(92px,13vw,132px)", height: "clamp(92px,13vw,132px)" }}
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
          <Sticker color="magenta" size="t-xxl" className="mt-s sticker--plain">Hacerla solo<br/>cansa</Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto", textAlign: "center" }}>
          El mundo se puso difícil para los que queremos hacer cosas distintas
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
