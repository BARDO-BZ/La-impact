/* global React, Spark, Kicker, Pill, Btn, Sticker, HouseLogo, DividerStars, Reveal, Starfield, Modal */
const { useState: useStateC } = React;

/* ============ 6 · MANIFIESTO ============ */
const CREDOS = [
  { n: "01", t: "Casa abierta", g: "La Impact es un nodo vivo de una comunidad más grande: una casa donde pasan cosas, se cruzan mundos y se abren conversaciones, proyectos, eventos, jornadas de trabajo y vínculos que muchas veces siguen creciendo fuera de sus paredes. No está pensada solo para quienes la habitan, sino también para amigos, aliados y personas de la comunidad que se acercan. Queremos que quien cruce la puerta sienta energía, bienvenida y curiosidad: “¿qué está pasando acá y cómo hago para sumarme?”. Pero abrir la casa no significa abrirla siempre, a cualquiera ni de cualquier manera. También implica cuidar lo esencial: el descanso, la intimidad, la convivencia y el bienestar de quienes viven ahí. La apertura solo tiene sentido si fortalece el hogar, no si lo agota. La Impact abre sus puertas porque cree que la comunidad se construye compartiendo espacio, mesa, redes y vida; pero las abre con criterio, cuidado y amor por lo común." },
  { n: "02", t: "El vuelo es colectivo, el esfuerzo también", g: "En La Impact creemos que nadie vuela solo. El crecimiento de cada persona y el crecimiento de la comunidad están profundamente conectados: nos acompañamos para desplegar nuestros proyectos, nuestras búsquedas y nuestras capacidades, pero también asumimos que lo común necesita ser sostenido entre todos. Ser parte de La Impact no es consumir una experiencia comunitaria, sino contribuir a que exista. Eso se ve en las tareas del hogar, en la organización rotativa de actividades, en abrir redes, en recibir a otros, en cuidar la convivencia y en aportar desde las habilidades, deseos y momentos de cada quien. El principio es simple: esfuerzo comunal de todos para evitar el esfuerzo descomunal de pocos. No se trata de estar disponibles todo el tiempo ni de romantizar el sacrificio, sino de practicar una madurez comunitaria donde la épica compartida también incluye hacerse cargo. El vuelo es colectivo porque crecemos juntos; el esfuerzo también, porque la comunidad solo se sostiene si la construimos entre todos." },
  { n: "03", t: "Somos experimento del mundo que queremos", g: "La Impact es un experimento vivo de nuevas formas de vivir, trabajar, organizarnos y vincularnos. No queremos solo hablar de un mundo más comunitario, regenerativo, consciente, amoroso, auténtico, libre y hacedor: queremos ensayarlo en la práctica, con sus aciertos, tensiones y aprendizajes. Frente a la crisis de soledad, la crisis de vivienda y la dificultad de sostener proyectos con propósito, proponemos una alternativa concreta: habitar de otra manera, construir comunidad, potenciar empresas de triple impacto y probar formas más humanas de colaboración. Este imPACTO expresa una forma de activismo propositivo: no alcanza con denunciar lo que no funciona; también hay que construir prototipos de lo que podría funcionar mejor. Por eso probamos, escuchamos, nos equivocamos y aprendemos. Se podría decir que lo vamos iterando. No somos el mundo nuevo ya resuelto ni una burbuja superior al resto. Somos un laboratorio imperfecto, aprendiendo a vivir un poco más cerca de aquello que deseamos." },
  { n: "04", t: "Honramos lo que pulsa", g: "En La Impact buscamos escuchar aquello que está vivo: los deseos, intuiciones, incomodidades y movimientos que aparecen en las personas, en las casas y en la comunidad. Honrar lo que pulsa es no avanzar en automático cuando algo pide ser mirado, no tapar una tensión porque incomoda y no ignorar un deseo colectivo cuando aparece con fuerza y sentido. A veces implica abrir una conversación; otras, cambiar un plan, reordenar una dinámica o darle lugar a algo que todavía no sabemos explicar del todo, pero sentimos verdadero. También es una forma de cuidar la vida en todas sus expresiones: las personas, los animales, las plantas, los vínculos y los ciclos de la naturaleza. No se trata de obedecer cualquier impulso ni de confundir intensidad con verdad, sino de desarrollar una sensibilidad compartida para percibir cuándo algo necesita espacio, cuidado o movimiento." },
  { n: "05", t: "Celebramos el proceso", g: "En La Impact queremos construir con ambición, pero también con disfrute, cuidado, alegría, paciencia y gratitud por lo que va naciendo en el camino. Celebrar el proceso es hacer espacio para compartir, reconocer avances, festejar comienzos, agradecer aprendizajes y cuidar el cuerpo y los vínculos mientras empujamos proyectos grandes. Creemos que construir algo valioso no debería exigirnos posponer la vida para más adelante ni caer en la lógica del sacrificio constante o de que solo vale celebrar cuando llegamos al resultado final. No se trata de conformarnos ni de usar “el proceso” como excusa para no ejecutar, sino de recordar que la forma en que construimos también es parte de lo que estamos construyendo." },
  { n: "06", t: "Hacemos hogar", g: "En La Impact hacemos hogar cuando convertimos una casa compartida en un espacio seguro, vivo y amoroso, donde las personas pueden sentirse bienvenidas, auténticas y parte de algo común. No alcanza con vivir bajo el mismo techo: hacer hogar implica ensuciarse las manos en el cuidado del espacio, cuidar los vínculos, compartir la vida cotidiana y construir una atmósfera donde aparezcan ese calorcito en el corazón y esa liviandad en la panza. El amor es una forma de mirar a cada persona reconociendo el enorme potencial que trae y creando las condiciones para que pueda desplegarlo. Hacer hogar es también un domingo de invierno afuera llovió todo el día pero dentro de la casa está la hoguera prendida y todos apretados en un sillón mirando un documental sobre la vida en el océano." },
  { n: "07", t: "Tiernos y francos", g: "En La Impact buscamos cuidar los vínculos diciendo la verdad con amor. Ser tiernos es registrar al otro, cuidar las formas, no humillar y recordar que enfrente hay una persona; ser francos es animarnos a nombrar tensiones, dar feedback, poner límites y no dejar que lo incómodo se acumule hasta volverse distancia. Este imPACTO parte de una convicción: el conflicto bien gestionado no rompe la comunidad, la hace crecer. Por eso practicamos una honestidad amorosa, donde la ternura no es excusa para evitar lo necesario y la franqueza no es permiso para ser cruel. Lo vemos en conversaciones difíciles que se abren a tiempo, en caminatas para ordenar tensiones, en personas que pueden ser dulces y filosas, cuidadosas y directas. Ser tiernos y francos es una forma de madurez comunitaria: cuidar el vínculo lo suficiente como para decirnos la verdad." },
  { n: "08", t: "Sé vos, está bien", g: "En La Impact queremos que cada persona pueda sentirse cómoda con quien es, abrazarse con sus rarezas, contradicciones, intensidades y formas propias de habitar el mundo. “Sé vos, está bien” es una invitación a soltar la necesidad de performar para pertenecer, de hacer cosas increíbles para ser suficiente o de fabricar una versión más aceptable de uno mismo. La comunidad no existe para que todos seamos iguales, sino para que podamos ser auténticos sin dejar de cuidarnos entre nosotros. No se trata de justificar cualquier conducta con un “yo soy así”, sino de crear un espacio donde la autenticidad venga acompañada de responsabilidad afectiva. A veces, este imPACTO se resume en dos palabras dichas en el momento justo: sos suficiente." },
  { n: "09", t: "La presencia transforma", g: "En La Impact creemos en la conciencia como motor de transformación: para cambiar algo afuera, también necesitamos mirar lo que pasa adentro. La presencia transforma porque nos permite habitar de verdad los lugares que habitamos, escuchar activamente, registrar lo que nos pasa y percibir lo que le pasa a los demás. No es solo estar físicamente en un espacio, sino estar disponibles con atención, sensibilidad y honestidad. Esa presencia mejora el vínculo con nosotros mismos, con las otras personas y con la comunidad, porque nos ayuda a salir del automático, pausar antes de reaccionar y elegir mejor cómo actuar. No se trata de volvernos solemnes ni de analizarlo todo hasta paralizarnos, sino de recordar que muchas transformaciones externas empiezan con un trabajo interno profundo." },
  { n: "10", t: "Dejamos los lugares mejor que como los encontramos", g: "En La Impact buscamos que nuestra presencia deje algo mejor de lo que encontró. Este imPACTO habla de regeneración: cuidar los espacios, mejorar la energía de los lugares, nutrir los vínculos, acompañar el crecimiento de las personas y generar un impacto positivo en la sociedad y en la naturaleza. Queremos que quien venga a compartir una actividad, una cena, una semana o una etapa de vida se vaya sintiéndose mejor que cuando llegó; y que quienes habitamos más intensamente la comunidad también vayamos creciendo en el proceso. Se expresa en gestos concretos: ordenar, limpiar, reparar, embellecer, cuidar plantas y animales, cerrar bien una conversación, dejar claridad donde había ruido y aportar al lugar sin volvernos extractivos. No se trata de ser rígidos, moralistas ni de exigir que todo tenga que “aportar valor” todo el tiempo, sino de cultivar una forma de habitar donde nuestra presencia regenere más de lo que consume." },
  { n: "11", t: "Escalamos lo extraordinario", g: "En La Impact no queremos que lo extraordinario quede encerrado en una sola casa ni en un grupo chico de personas. Queremos que crezca la magnitud del impacto de nuestras organizaciones, que más personas puedan vivir esta forma de comunidad, que la magia vincular se expanda y que quienes forman parte puedan desplegar más ambición, más propósito y más potencia. Escalar lo extraordinario es abrir más Impacts, crear nuevas formas de pertenecer, comunicar mejor lo que estamos construyendo, diseñar residencias, programas de incubación y aceleración, y eventualmente desarrollar vehículos de inversión que ayuden a potenciar proyectos nacidos o fortalecidos en este ecosistema. Pero crecer solo tiene sentido si no perdemos aquello que nos trajo hasta acá. Escalar lo extraordinario implica cuidar lo esencial: la cultura, los vínculos, el propósito, la intimidad, la confianza y la forma humana en que elegimos construir." },
  { n: "12", t: "Cuidamos lo esencial", g: "En La Impact queremos crecer, pero no a cualquier costo. Cuidar lo esencial es recordar que La Impact es un proyecto, una comunidad y una plataforma de impacto, pero también es un hogar. Eso significa proteger la intimidad, el descanso, la calidad humana de quienes forman parte, la magia vincular, el propósito y los 12 imPACTOS que sostienen nuestra cultura. Escalar lo extraordinario solo tiene sentido si no perdemos aquello que hace que La Impact sea La Impact. Por eso cuidar lo esencial también implica poner límites, elegir bien con quién crecer, no forzar oportunidades que no vibran con la casa y sostener los rituales, acuerdos y conversaciones que cuidan lo común. No se trata de usar el cuidado como excusa para no crecer, sino de crecer con criterio, sin convertir una comunidad viva en una versión vacía de sí misma." },
];

function Manifiesto({ surface }) {
  const [activeIdx, setActiveIdx] = useStateC(-1);
  const active = activeIdx >= 0 ? CREDOS[activeIdx] : null;
  return (
    <section className={"section surface " + surface}>
      <div className="wrap">
        <Reveal className="center">
          <Kicker>Qué creemos</Kicker>
          <Sticker color="berenjena" size="t-xxl" className="mt-s sticker--natural sticker--plain">El manifiesto,<br/>destilado</Sticker>
          <p className="lead maxw-prose mt-m" style={{ marginInline: "auto", textAlign: "center" }}>
            Los 12 imPACTOS que sostienen nuestra cultura.
          </p>
        </Reveal>
        <div className="grid grid-4 mt-l">
          {CREDOS.map((c, i) => (
            <Reveal key={c.n} delay={i * 50}>
              <article className="card manif-card" style={{ height: "100%" }}>
                <button className="manif-card__trigger" onClick={() => setActiveIdx(i)}>
                  <div className="card__num">{c.n}</div>
                  <h3>{c.t}</h3>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <Modal open={!!active} onClose={() => setActiveIdx(-1)}>
        {active && (
          <>
            <div className="card__num">{active.n}</div>
            <h3>{active.t}</h3>
            <p className="mt-s">{active.g}</p>
          </>
        )}
      </Modal>
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
              ? <>Tres formas de hacer hogar, según cuánto quieras estar. Igual <b>todos arrancan con una charla</b>: elegimos bien con quién crecer</>
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
  { q: "¿Qué es La Impact?", a: "Impact es una red de casas para personas que crean con propósito. Combinamos espacios de trabajo, coliving y una agenda de encuentros para que emprender, crear y construir proyectos sea mejor en comunidad." },
  { q: "¿Necesito ser emprendedor?", a: "No importa cómo te definas, importa cómo estás construyendo. En Impact conviven freelancers, artistas, investigadores, organizaciones, emprendedores y personas que trabajan remoto." },
  { q: "¿Puedo venir solamente a trabajar?", a: "Sí. Podés reservar un día de coworking o sumarte con una membresía. Pero lo que hace diferente a Impact es que, si querés, también vas a encontrar una comunidad con la que conectar." },
  { q: "¿Qué incluye el cowork?", a: "Escritorios compartidos, buen wifi, café, espacios comunes y la posibilidad de participar de la vida de la casa y de la comunidad." },
  { q: "¿Cómo funciona el coliving?", a: "Contamos con habitaciones dentro de la casa para quienes quieren vivir y crear en comunidad. Si te interesa, escribinos y te contamos la disponibilidad y las opciones." },
  { q: "¿Puedo organizar un evento en Impact?", a: "Sí. Si tu propuesta está alineada con el espíritu de la comunidad, escribinos y vemos cómo hacerla realidad." },
  { q: "¿Qué tipo de personas forman parte de la comunidad?", a: "Personas curiosas, colaborativas y con ganas de construir proyectos que generen impacto. Valoramos tanto lo que hacés como la forma en que elegís hacerlo." },
  { q: "¿Cómo puedo conocer la casa?", a: "Podés reservar un día de coworking o coordinar una visita para recorrer el espacio y conocer a la comunidad." },
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
        <Reveal className="center mt-l">
          <p className="lead">¿Tenés más dudas? Escribinos.</p>
          <Btn variant="lima" href="#sumate" className="mt-s">Escribinos</Btn>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ 9 · CTA FINAL + FORM ============ */
const ASUNTOS = [
  { value: "cowork", label: "Cowork" },
  { value: "colive", label: "Colive" },
  { value: "experiencias", label: "Experiencias" },
  { value: "alianzas", label: "Alianzas" },
  { value: "otro", label: "Otro" },
];

function CtaFinal({ surface, grid, formRef }) {
  const [data, setData] = useStateC({ nombre: "", email: "", whatsapp: "", asunto: "", mensaje: "" });
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
            <Sticker color="lima" size="t-xxl" className="mt-s sticker--natural">Venite al Club</Sticker>
            <p className="lead mt-m" style={{ maxWidth: "38ch" }}>
              Si querés más info o tenés alguna propuesta para el club, escribinos!
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
                <Btn variant="ambar" className="mt-m" sm onClick={() => { setSent(false); setData({ nombre: "", email: "", whatsapp: "", asunto: "", mensaje: "" }); }}>Mandar otra</Btn>
              </div>
            ) : (
              <form className="formcard" onSubmit={submit} noValidate>
                <div className="grid" style={{ gap: 16 }}>
                  <div className="field">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" value={data.nombre} onChange={set("nombre")} placeholder="Cómo te decimos" />
                    {errors.nombre && <span className="err">{errors.nombre}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Mail</label>
                    <input id="email" type="email" value={data.email} onChange={set("email")} placeholder="hola@tucorreo.com" />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="whatsapp">Wsp</label>
                    <input id="whatsapp" type="tel" value={data.whatsapp} onChange={set("whatsapp")} placeholder="Tu número de WhatsApp" />
                  </div>
                  <div className="field">
                    <label htmlFor="asunto">Asunto</label>
                    <select id="asunto" value={data.asunto} onChange={set("asunto")}>
                      <option value="" disabled>Elegí una opción</option>
                      {ASUNTOS.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea id="mensaje" rows="3" value={data.mensaje} onChange={set("mensaje")} placeholder="Contanos qué necesitás" />
                  </div>
                  <Btn variant="magenta" type="submit">Aplicar al Club →</Btn>
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
