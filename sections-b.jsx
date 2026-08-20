/* global React, Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield */

/* ============ 3 · QUÉ ES CLUB IMPACT (corazón) ============ */
const SERVICIOS = [
  {
    id: "coliving", n: "Servicio 1", t: "Co-living", bg: "var(--magenta)",
    p: "Un cuarto en una de las casas. Vivís, creás y compartís espacio con una comunidad que te sostiene e impulsa día a día.",
    cta: "Conocer más", placeholder: "Foto de coliving", img: "img/CoworkingWeek-53.jpg",
  },
  {
    id: "coworking", n: "Servicio 2", t: "Co-working", bg: "var(--turquesa)",
    p: "Un escritorio físico, buen wi fi, buen café y un entorno lleno de personas creando proyectos con propósito como vos. Venís cuando querés.",
    cta: "Reservar", placeholder: "Foto de coworking", img: "img/CoworkingWeek-53.jpg",
  },
  {
    id: "experiencias", n: "Servicio 3", t: "Experiencias", bg: "var(--ambar)",
    p: "Eventos, charlas, jodita y coworking weeks. La agenda que te conecta con la tribu.",
    cta: "Ver agenda", placeholder: "Foto de experiencias", img: "img/CoworkingWeek-170.jpg",
  },
];

function QueEs() {
  return (
    <section className="section section--marquee-top surface surface--dark" id="que-es">
      <div className="marquee-band" aria-label="Somos Club Impact">
        <div className="marquee-band__track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="marquee-band__item" key={i}>
              <HouseLogo variant="blanco" className="marquee-band__icon" />
              Somos Club Impact
            </span>
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="marquee-band__item" key={"b" + i} aria-hidden="true">
              <HouseLogo variant="blanco" className="marquee-band__icon" />
              Somos Club Impact
            </span>
          ))}
        </div>
      </div>

      <Starfield count={10} color="rgba(251,244,232,.5)" />
      <div className="wrap queEs__content" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="center">
          <Kicker spark={false} className="queEs__kicker">Qué es Club Impact</Kicker>
          <h2 className="queEs__title mt-s">
            Coliving, coworking<br/>y experiencias para<br/>
            <span className="queEs__title-accent">creadores de impacto</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto", fontSize: "clamp(1.15rem,2.4vw,1.55rem)", lineHeight: 1.45, textAlign: "center" }}>
           <b>Una red para quienes crean con propósito.</b> Casas, espacios de trabajo,  comunidad y una agenda de encuentros para que escalar lo esencial deje de ser una odisea solitaria.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-3 mt-l">
            {SERVICIOS.map((s) => (
              <article className="svc-card" id={s.id} key={s.id}>
                <image-slot id={"svc-" + s.id} shape="rect" fit="cover"
                  src={s.img}
                  placeholder={s.placeholder}
                  className="svc-card__img"
                  style={{ width: "100%", height: "auto", aspectRatio: "4 / 3" }}></image-slot>
                <div className="svc-card__panel" style={{ background: s.bg }}>
                  <span className="svc-card__label">{s.n}</span>
                  <h3 className="svc-card__title">{s.t}</h3>
                  <p className="svc-card__desc">{s.p}</p>
                  <Btn variant="berenjena" href="#sumate" sm className="svc-card__btn">{s.cta}</Btn>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ============ 4 · AGENDA DE EXPERIENCIAS ============ */
const PROXIMOS = [
  {
    fecha: "27/7–2/8", hora: "6 días",
    t: "Coworking week en el Pantano · Delta",
    desc: "6 días inmersos en la naturaleza para combinar trabajo profundo en proyectos con impacto y vida en comunidad.",
    pill: "lima",
    href: "https://forms.gle/evhyKrR2Huka98fD7",
  },
];

/*
function Agenda({ surface }) {
  return (
    <section className={"section section--tight surface " + surface} id="agenda">
      <div className="wrap">
        <Reveal className="center">
          <Kicker spark>Próximo en la casa</Kicker>
          <Sticker color="ambar" size="t-xxl" className="mt-s sticker--natural sticker--plain">
            Experiencias<br/>que se vienen
          </Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto" }}>
            Las experiencias son la puerta de entrada a La Impact,<br/> anotate y vení a conocer.
          </p>
        </Reveal>
        <div className="agenda-list mt-l">
          {PROXIMOS.map((ev, i) => (
            <Reveal key={i} delay={i * 70}>
              <article className="agenda-item">
                <div className="agenda-item__date">
                  <Pill variant={ev.pill}>{ev.fecha}</Pill>
                  <span className="agenda-item__hora">{ev.hora}</span>
                </div>
                <div className="agenda-item__info">
                  <h3>{ev.t}</h3>
                  <p>{ev.desc}</p>
                </div>
                <div className="agenda-item__cta">
                  <Btn
                    variant="lima"
                    href={ev.href || "#sumate"}
                    target={ev.href ? "_blank" : undefined}
                    rel={ev.href ? "noopener noreferrer" : undefined}
                    sm
                  >
                    Anotarse
                  </Btn>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
*/


/* ============ 5 · QUÉ TE LLEVÁS (offer) — oculto, no se usa por ahora ============
const OFFER = [
  { n: "01", t: "Coworking", p: "Un escritorio real en la casa. Buen wifi y gente alrededor que también está creando. Venís cuando querés." },
  { n: "02", t: "Coliving", p: "Cuartos disponibles en la casa. Vivís, creás y compartís espacio con una comunidad que te sostiene." },
  { n: "03", t: "Experiencias", p: "Eventos, charlas, afters y co-weeks. La agenda que te conecta con la tribu y te mueve el piso." },
  { n: "04", t: "Comunidad y red", p: "Acceso a las impactadas e impactados: colaboraciones, manos que se prestan y contactos que aparecen cuando hacen falta." },
  { n: "05", t: "Crecer acompañade", p: "Mentorías informales, cruces que destraban proyectos y la sensación —rara— de que no estás sole en esto." },
  { n: "06", t: "La red de casas", p: "La Impact crece. Más casas, más comunidad, más puntos de encuentro donde la tribu pasa." },
];

function Offer({ surface }) {
  return (
    <section className={"section surface " + surface}>
      <div className="wrap">
        <Reveal className="center">
          <Kicker spark>El detalle</Kicker>
          <Sticker color="lima" size="t-xxl" className="mt-s sticker--natural">Qué te llevás</Sticker>
          <p className="lead mt-m maxw-prose" style={{ marginInline: "auto", textAlign: "center" }}>
            La membresía es acceso a un ecosistema,<br/>
            no a una lista de beneficios sueltos. Esto es lo que entra:
          </p>
        </Reveal>
        <div className="grid grid-3 mt-l">
          {OFFER.map((x, i) => (
            <Reveal key={x.t} delay={i * 70}>
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
============ */

/* ============ 5 · LA COMUNIDAD (prueba social) ============ */
const TESTIS = [
  { q: "Llegué buscando un escritorio y me fui con una tribu. No exagero: la gente de acá me cambió el año.", n: "Sol", r: "Ceramista · miembro día uno", c: "var(--magenta)", i: "S" },
  { q: "Tenía el proyecto en la cabeza hace años. Acá encontré con quién hacerlo de verdad.", n: "Tomás", r: "Fundador en residencia", c: "var(--ambar)", i: "T" },
  { q: "Vine por los eventos y me quedé por las personas. La casa se siente casa.", n: "Juli", r: "Música & productora", c: "var(--turquesa)", i: "J" },
  { q: "Dejé de laburar sole en mi depto. Ahora bajo a la casa y todo rinde el triple.", n: "Caro", r: "Dev independiente", c: "var(--verde)", i: "C" },
  { q: "Las co-weeks me volaron la cabeza. Volví con tres colaboraciones nuevas.", n: "Nico", r: "Audiovisual", c: "var(--lima)", i: "N" },
  { q: "Acá nadie te hace sentir que tu idea es chica. Te la hacen crecer.", n: "Mai", r: "Emprendedora", c: "var(--magenta)", i: "M" },
  { q: "La primera comunidad donde puedo ser yo sin explicar nada. Eso no tiene precio.", n: "Fede", r: "Ilustrador", c: "var(--ambar)", i: "F" },
];

function TestiCard({ x, hidden }) {
  return (
    <figure className="testi" aria-hidden={hidden ? "true" : undefined}>
      <Spark style={{ color: "var(--magenta)", width: 24, height: 24 }} />
      <blockquote>"{x.q}"</blockquote>
      <figcaption>
        <span className="testi__avatar" style={{ background: x.c }}>{x.i}</span>
        <span>
          <b style={{ fontFamily: "var(--font-display)", display: "block" }}>{x.n}</b>
          <small className="muted">{x.r}</small>
        </span>
      </figcaption>
    </figure>
  );
}

function Comunidad({ surface }) {
  return (
    <section className={"section surface " + surface}>
      <div className="wrap">
        <Reveal className="center">
          <Kicker>Las casas impact</Kicker>
          <Sticker color="berenjena" size="t-xxl" className="mt-s sticker--natural sticker--plain">Hacemos hogar</Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto" }}>
            Esto es lo que pasa cuando se juntan personas<br/> con grandes propósitos bajo un mismo techo, mirá:
          </p>
        </Reveal>

        {/* mosaico de fotos reales */}
        <Reveal className="mt-l">
          <div className="community-grid">
            {[
              { id: "com-1", area: "a", src: "img/FE7D8FC8-6C7D-40A4-A397-7337464E2CDC_1_105_c.jpeg" },
              { id: "com-2", area: "b", src: "img/D6321312-AC3B-4635-8C49-68FC2AC435F0_1_105_c.jpeg" },
              { id: "com-3", area: "c", src: "img/C139437C-E247-4AD7-9033-2186B6E62538_4_5005_c.jpeg" },
              { id: "com-4", area: "d", src: "img/47C5F857-D59A-4E43-B855-A3DAF4859F4E_1_105_c.jpeg" },
              { id: "com-5", area: "e", src: "img/00F0F95C-E207-4536-84BD-EE2A4046D081_1_105_c.jpeg" },
            ].map((s) => (
              <image-slot key={s.id} id={s.id} shape="rounded" radius="18"
                src={s.src}
                placeholder="Arrastrá una foto real"
                style={{ gridArea: s.area, width: "100%", height: "100%", minHeight: "140px" }}></image-slot>
            ))}
          </div>
        </Reveal>
      </div>

      {/* testimonios — slider infinito */}
      <Reveal className="mt-l">
        <div className="marquee" aria-label="Testimonios de la comunidad">
          <div className="marquee__track">
            {TESTIS.map((x, i) => <TestiCard key={"a" + i} x={x} />)}
            {TESTIS.map((x, i) => <TestiCard key={"b" + i} x={x} hidden />)}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

Object.assign(window, { QueEs, Agenda, Comunidad });
