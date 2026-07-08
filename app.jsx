/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakSelect, TweakRadio, TweakToggle,
   Nav, Hero, Tension, QueEs, Agenda, Offer, Comunidad, Manifiesto, Planes, FAQ, CtaFinal, Footer, WhatsAppFloat */
const { useRef: useAppRef } = React;

// TODO: reemplazar por el número real de WhatsApp del Club (código de país + área, sin + ni espacios).
const WHATSAPP_NUMBER = "5491100000000";

const TITULARES = {
  "Acá hacemos hogar": "Acá hacemos hogar",
  "Escalar lo esencial": "Escalar lo esencial",
  "El vuelo es colectivo": "El vuelo es colectivo",
  "No la remes solo": "No la remes solo",
};

/* climas de color por sección */
const CLIMAS = {
  Rotativo: {
    queEs: "surface--magenta", agenda: "surface--dark",
    tension: "surface--crema on-light", offer: "surface--dark2",
    comunidad: "surface--lima on-light", manifiesto: "surface--turquesa on-light",
    planes: "surface--ambar on-light", faq: "surface--crema on-light", cta: "surface--dark",
  },
  Magenta: {
    queEs: "surface--magenta", agenda: "surface--crema on-light",
    tension: "surface--crema on-light", offer: "surface--crema on-light",
    comunidad: "surface--magenta", manifiesto: "surface--crema on-light",
    planes: "surface--magenta", faq: "surface--crema on-light", cta: "surface--magenta",
  },
  "Sobrio oscuro": {
    queEs: "surface--dark", agenda: "surface--dark2",
    tension: "surface--dark2", offer: "surface--dark",
    comunidad: "surface--dark2", manifiesto: "surface--dark",
    planes: "surface--dark2", faq: "surface--dark", cta: "surface--dark2",
  },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "titular": "Acá hacemos hogar",
  "clima": "Rotativo",
  "grid": true,
  "pricing": "Mostrar tiers"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const s = CLIMAS[t.clima] || CLIMAS.Rotativo;
  const formRef = useAppRef(null);

  const goForm = () => {
    const el = document.getElementById("sumate");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: "smooth" });
  };

  return (
    <>
      <Nav onCTA={goForm} />
      <Hero titular={TITULARES[t.titular] || t.titular} grid={t.grid} onCTA={goForm} />
      <QueEs surface={s.queEs} />
      <Agenda surface={s.agenda} />
      <Tension surface={s.tension} />
      {/* <Offer surface={s.offer} /> — oculta por ahora, no se usa */}
      <Comunidad surface={s.comunidad} />
      <Manifiesto surface={s.manifiesto} />
      <Planes surface={s.planes} onCTA={goForm} mode={t.pricing} />
      <FAQ surface={s.faq} />
      <CtaFinal surface={s.cta} grid={t.grid} formRef={formRef} />
      <Footer />
      <WhatsAppFloat number={WHATSAPP_NUMBER} />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakSelect label="Titular ancla" value={t.titular}
          options={Object.keys(TITULARES)}
          onChange={(v) => setTweak("titular", v)} />
        <TweakToggle label="Grilla synthwave" value={t.grid}
          onChange={(v) => setTweak("grid", v)} />
        <TweakSection label="Clima de color" />
        <TweakRadio label="Secciones" value={t.clima}
          options={Object.keys(CLIMAS)}
          onChange={(v) => setTweak("clima", v)} />
        <TweakSection label="Pricing" />
        <TweakRadio label="Sección planes" value={t.pricing}
          options={["Mostrar tiers", "Aplicá y te contamos"]}
          onChange={(v) => setTweak("pricing", v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
