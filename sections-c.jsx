/* global React, Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield */
const { useState: useStateC } = React;

/* ============ 6 · MANIFIESTO ============ */
const CREDOS = [
  { n: "01", t: "Sé vos, está bien", g: "Acá no hay que fingir tenerla clara. Venís como sos y eso ya alcanza." },
  { n: "02", t: "El vuelo es colectivo", g: "Nadie escala lo esencial en soledad. Lo que es bueno para la tribu, vuelve." },
  { n: "03", t: "Dejamos los lugares mejor que como los encontramos", g: "La casa, los vínculos, los proyectos. Todo lo que tocamos, lo cuidamos." },
];

function Manifiesto({ surface }) {
  return (
    <section className={"section surface " + surface}>
      <div className="wrap">
        <Reveal className="center">
          <Kicker>Qué creemos</Kicker>
          <Sticker color="berenjena" size="t-xxl" className="mt-s sticker--natural sticker--plain">El manifiesto,<br/>destilado</Sticker>
        </Reveal>
        <div className="mt-l" style={{ display: "flex", flexDirection: "column", gap: "clamp(32px,5vw,56px)" }}>
          {CREDOS.map((c, i) => (
            <Reveal key={c.n} delay={i * 90}>
              <div className="manif__row">
                <div className="manif__num">{c.n}</div>
                <div className="manif__title">{c.t}</div>
              </div>
              <p className="manif__desc mt-s">{c.g}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="center mt-l">
          <a className="btn btn--ghost" href="#" onClick={(e) => e.preventDefault()}>
            Leé los 12 imPACTOS completos →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 7 · PLANES / MEMBRESÍA ============ */
const TIERS = [
  {
    name: "Nómade",
    tagline: "Para estar cerca sin sentar base todavía.",
    price: "18.000",
    feats: ["Acceso a eventos y jodita", "Comunidad y red de impactadas", "Agenda interna y newsletter", "2 días de coworking al mes"],
    cta: "Empezar de a poco",
    variant: "",
  },
  {
    name: "Residente",
    tagline: "La casa como tu base de operaciones.",
    price: "42.000",
    featured: true,
    badge: "El más elegido",
    feats: ["Coworking ilimitado en la casa", "Todo lo del plan Nómade", "Beneficios en co-weeks y residencias", "Mentorías y cruces de la red"],
    cta: "Hacer base acá",
    variant: "crema",
  },
  {
    name: "Socie de la casa",
    tagline: "Para quienes construyen la casa con nosotres.",
    price: "78.000",
    feats: ["Todo lo del plan Residente", "Escritorio fijo propio", "Acceso prioritario a residencias", "Voz en las decisiones de la casa", "Invitaciones para tu equipo"],
    cta: "Sumarme como socie",
    variant: "",
  },
];

const APLICA_STEPS = [
  { n: "01", t: "Aplicás", p: "Nos dejás tus datos y dos líneas sobre tu proyecto. Tarda 2 minutos." },
  { n: "02", t: "Charlamos", p: "Te escribimos, nos conocemos y te mostramos la casa por dentro." },
  { n: "03", t: "Te sumás", p: "Si hay match, te pasamos los planes y empezás a hacer hogar." },
];

function Planes({ surface, onCTA, mode }) {
  const tiers = mode === "Mostrar tiers";
  return (
    <section className={"section surface " + surface}>
      <Starfield count={9} color="rgba(45,14,43,.35)" />
      <div className="wrap center" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <Kicker>Membresía</Kicker>
          <Sticker color="berenjena" size="t-xxl" className="mt-s sticker--natural sticker--plain">
            {tiers ? <>Elegí tu<br/>lugar</> : <>Aplicá y<br/>te contamos</>}
          </Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto" }}>
            {tiers
              ? <>Tres formas de hacer hogar, según cuánto quieras estar. Igual <b>todos arrancan con una charla</b>: elegimos bien con quién crecer (imPACTO 12).</>
              : <>No publicamos una grilla de precios porque <b>elegimos bien con quién crecer</b> (imPACTO 12). Charlamos, vemos si encajás con la tribu y ahí te pasamos los planes. Cero fricción, cero compromiso.</>}
          </p>
        </Reveal>

        {tiers ? (
          <>
            <Reveal delay={120}>
              <div className="tiers mt-l">
                {TIERS.map((t) => (
                  <article key={t.name} className={"tier" + (t.featured ? " tier--featured" : "")}>
                    {t.badge && <span className="tier__badge">{t.badge}</span>}
                    <h3 className="tier__name">{t.name}</h3>
                    <p className="tier__tagline">{t.tagline}</p>
                    <div className="tier__price">
                      <span className="tier__cur">$</span>
                      <span className="tier__amount">{t.price}</span>
                      <span className="tier__per">/mes</span>
                    </div>
                    <ul className="tier__feats">
                      {t.feats.map((f) => (<li key={f}><Spark /><span>{f}</span></li>))}
                    </ul>
                    <Btn variant={t.variant} onClick={onCTA}>{t.cta}</Btn>
                  </article>
                ))}
              </div>
            </Reveal>
          </>
        ) : (
          <>
            <Reveal delay={120}>
              <div className="grid grid-3 mt-l" style={{ textAlign: "left" }}>
                {APLICA_STEPS.map((s) => (
                  <article key={s.n} className="card" style={{ height: "100%" }}>
                    <div className="card__num">{s.n}</div>
                    <h3>{s.t}</h3>
                    <p>{s.p}</p>
                  </article>
                ))}
              </div>
            </Reveal>
            <Reveal delay={220} className="mt-l">
              <Btn variant="magenta" onClick={onCTA}>Quiero aplicar</Btn>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}

/* ============ 8 · FAQ ============ */
const FAQS = [
  { q: "¿Tengo que vivir ahí?", a: "Para nada. La casa es un nodo: coworking, eventos y punto de encuentro. Vivís donde quieras; venís cuando la necesitás." },
  { q: "¿Necesito tener un emprendimiento armado?", a: "No. Hay gente con proyectos en marcha y gente que recién arranca con una idea y muchas ganas. Lo que importa es crear con propósito y querer hacerlo acompañade." },
  { q: "¿Dónde queda?", a: "En la casa de La Impact. (Completá acá la dirección o la zona exacta cuando definas qué mostrar públicamente.)" },
  { q: "¿Qué incluye la membresía?", a: "Acceso a la casa y al coworking, a los eventos, a la red de la comunidad y a beneficios en co-weeks y residencias. El detalle fino se cierra cuando charlamos." },
  { q: "¿Cómo entro?", a: "Aplicás desde el formulario de acá abajo. Te escribimos, nos conocemos y, si hay match, te sumás. Elegimos bien con quién crecer." },
];

function FAQ({ surface }) {
  const [open, setOpen] = useStateC(0);
  return (
    <section className={"section surface " + surface}>
      <div className="wrap" style={{ maxWidth: 880 }}>
        <Reveal className="center">
          <Kicker>Dudas frecuentes</Kicker>
          <Sticker color="magenta" size="t-xxl" className="mt-s sticker--natural sticker--plain">Te leo la mente</Sticker>
        </Reveal>
        <Reveal className="faq mt-l">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={"faq__item" + (isOpen ? " open" : "")}>
                <button className="faq__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="pm" aria-hidden="true" />
                </button>
                <div className="faq__a" style={{ maxHeight: isOpen ? 320 : 0 }}>
                  <div>{f.a}</div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 9 · CTA FINAL + FORM ============ */
function CtaFinal({ surface, grid, formRef }) {
  const [data, setData] = useStateC({ nombre: "", email: "", proyecto: "" });
  const [errors, setErrors] = useStateC({});
  const [sent, setSent] = useStateC(false);

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.nombre.trim()) errs.nombre = "¿Cómo te llamás?";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errs.email = "Necesitamos un mail válido para escribirte.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  return (
    <section className={"section surface " + surface} id="sumate" ref={formRef}>
      <Starfield count={18} color="var(--ambar)" />
      <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
        <div className="grid grid-2" style={{ alignItems: "center", gap: "clamp(30px,5vw,60px)" }}>
          <Reveal>
            <Kicker className="muted">El vuelo es colectivo</Kicker>
            <Sticker color="lima" size="t-xxl" className="mt-s sticker--natural">Veníte a<br/>hacer hogar</Sticker>
            <p className="lead mt-m" style={{ maxWidth: "38ch" }}>
              Dejanos tus datos y dos líneas sobre lo que estás creando. Te escribimos, te mostramos la casa
              y vemos si esto es para vos.
            </p>
            <div className="divider-stars mt-m" style={{ justifyContent: "flex-start" }}>
              <HouseLogo variant="blanco" style={{ height: 38 }} />
              <span className="muted" style={{ fontSize: ".9rem" }}>Club Impact · La casa de La Impact</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="formcard center">
                <Spark style={{ color: "var(--magenta)", width: 40, height: 40, margin: "0 auto 12px" }} />
                <h3 className="sticker sticker--magenta t-l">¡Listo!</h3>
                <p className="mt-s">Recibimos tu aplicación, <b>{data.nombre.split(" ")[0]}</b>. Te escribimos a <b>{data.email}</b> muy pronto. Bienvenide al barrio.</p>
                <Btn variant="ambar" className="mt-m" sm onClick={() => { setSent(false); setData({ nombre: "", email: "", proyecto: "" }); }}>Mandar otra</Btn>
              </div>
            ) : (
              <form className="formcard" onSubmit={submit} noValidate>
                <div className="grid" style={{ gap: 16 }}>
                  <div className="field">
                    <label htmlFor="nombre">Tu nombre</label>
                    <input id="nombre" value={data.nombre} onChange={set("nombre")} placeholder="Cómo te decimos" />
                    {errors.nombre && <span className="err">{errors.nombre}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Tu mail</label>
                    <input id="email" type="email" value={data.email} onChange={set("email")} placeholder="hola@tucorreo.com" />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="proyecto">Contanos tu proyecto (opcional)</label>
                    <textarea id="proyecto" rows="3" value={data.proyecto} onChange={set("proyecto")} placeholder="Dos líneas sobre lo que estás creando" />
                  </div>
                  <Btn variant="magenta" type="submit">Aplicar al Club →</Btn>
                  <p className="muted center" style={{ fontSize: ".8rem", margin: 0 }}>
                    Conectá este form a tu Typeform / checkout cuando esté listo.
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ 10 · FOOTER ============ */
function Footer() {
  const Ico = ({ d }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
  );
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div style={{ maxWidth: 320 }}>
          <div className="nav__brand" style={{ marginBottom: 14 }}>
            <HouseLogo variant="blanco" style={{ height: 44 }} />
            <b style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}>Club Impact</b>
          </div>
          <p className="muted" style={{ fontSize: ".95rem" }}>
            La casa, la red y los encuentros de La Impact. Acá hacemos hogar.
          </p>
        </div>
        <div>
          <p className="kicker" style={{ display: "block", marginBottom: 14 }}>Seguinos</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Ico d={<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></>} /></a>
            <a href="#" aria-label="WhatsApp"><Ico d={<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 21l2.2-5.2A8.5 8.5 0 1 1 21 11.5Z"/>} /></a>
            <a href="#" aria-label="Mail"><Ico d={<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>} /></a>
          </div>
        </div>
        <div>
          <p className="kicker" style={{ display: "block", marginBottom: 14 }}>Contacto</p>
          <p style={{ margin: 0 }}><a href="mailto:hola@laimpact.com">hola@laimpact.com</a></p>
          <p className="mt-s" style={{ margin: 0 }}><a href="#" style={{ textDecoration: "underline" }}>Conocé La Impact →</a></p>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 40, paddingTop: 20, borderTop: "1px solid rgba(251,244,232,.14)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontSize: ".82rem", opacity: .7 }}>
        <span>© {new Date().getFullYear()} Club Impact · La Impact</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Spark style={{ width: 12, height: 12 }} /> Sé vos, está bien.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Manifiesto, Planes, FAQ, CtaFinal, Footer });
