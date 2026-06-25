/* global React, Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield */

/* ============ 3 · QUÉ ES CLUB IMPACT (corazón) ============ */
function QueEs({ surface }) {
  return (
    <section className={"section surface " + surface} id="que-es">
      <Starfield count={10} color="rgba(251,244,232,.5)" />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <Reveal className="center">
          <Kicker>Qué es Club Impact</Kicker>
          <Sticker color="crema" size="t-xxl" className="mt-s sticker--natural">
            Coliving, coworking<br/>y experiencias<br/>para creadores
          </Sticker>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto", fontSize: "clamp(1.15rem,2.4vw,1.55rem)", lineHeight: 1.45, textAlign: "center" }}>
            Una <b>red de casas</b> para gente que crea con propósito.
            Una base física, una red humana y una agenda de encuentros
            para que escalar lo esencial deje de ser un deporte solitario.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-3 mt-l">
            <article className="card door" id="coworking">
              <Spark style={{ color: "var(--magenta)", width: 30, height: 30 }} />
              <h3>Coworking</h3>
              <p>Un escritorio real en la casa. Buen wifi, buen ambiente y gente creando alrededor. Venís cuando querés.</p>
              <Btn variant="lima" href="#sumate" sm>Reservar un día</Btn>
            </article>
            <article className="card door" id="coliving">
              <Spark style={{ color: "var(--ambar)", width: 30, height: 30 }} />
              <h3>Coliving</h3>
              <p>Cuartos en la casa. Vivís, creás y compartís espacio con una comunidad que te sostiene día a día.</p>
              <Btn variant="lima" href="#sumate" sm>Consultar disponibilidad</Btn>
            </article>
            <article className="card door" id="experiencias">
              <Spark style={{ color: "var(--turquesa)", width: 30, height: 30 }} />
              <h3>Experiencias</h3>
              <p>Eventos, charlas, jodita y co-weeks. La agenda que te conecta con la tribu y te saca de la burbuja.</p>
              <Btn variant="lima" href="#agenda" sm>Ver agenda</Btn>
            </article>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ============ 4 · AGENDA DE EXPERIENCIAS ============ */
const PROXIMOS = [
  {
    fecha: "SAB 05/07", hora: "18:00 hs",
    t: "Open House · La Impact",
    desc: "Vení a conocer la casa, la comunidad y a quienes la hacen. Sin compromiso.",
    pill: "",
  },
  {
    fecha: "JUE 10/07", hora: "19:30 hs",
    t: "Charla abierta: proyectos con propósito",
    desc: "Una noche para compartir lo que estamos construyendo y cruzar miradas.",
    pill: "lima",
  },
  {
    fecha: "VIE–DOM 18/07", hora: "Todo el fin",
    t: "Co-week en La Impact",
    desc: "Tres días creando juntes. Talleres, charlas y mucha energía colectiva.",
    pill: "magenta",
  },
];

function Agenda({ surface }) {
  return (
    <section className={"section section--tight surface " + surface} id="agenda">
      <div className="wrap">
        <Reveal className="center">
          <Kicker spark>Próximo en la casa</Kicker>
          <Sticker color="ambar" size="t-xxl" className="mt-s sticker--natural">
            Experiencias<br/>que se vienen
          </Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto" }}>
            Las experiencias son la forma más concreta de entrar a La Impact. Anotate a lo que te llame.
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
                  <Btn variant="lima" href="#sumate" sm>Anotarse</Btn>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 5 · QUÉ TE LLEVÁS (offer) ============ */
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
        <Reveal>
          <Kicker spark>El detalle</Kicker>
          <Sticker color="lima" size="t-xxl" className="mt-s sticker--natural">Qué te llevás</Sticker>
          <p className="lead mt-m" style={{ maxWidth: "44ch" }}>
            La membresía es acceso a un ecosistema, no a una lista de beneficios sueltos. Esto es lo que entra:
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
          <Kicker>Prueba social</Kicker>
          <Sticker color="berenjena" size="t-xxl" className="mt-s sticker--natural">Hacemos hogar</Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto" }}>
            No es una metáfora linda para un flyer. Es lo que pasa cuando juntás a la gente correcta
            en el lugar correcto. Mirá.
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

Object.assign(window, { QueEs, Agenda, Offer, Comunidad });
