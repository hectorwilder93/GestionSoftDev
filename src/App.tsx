import { useState } from 'react'
import {
  ArrowRight, ArrowUpRight, BarChart3, Boxes, Check, ChevronDown,
  Code2, Gauge, Laptop, Menu, MessageCircle, MonitorSmartphone,
  PackageCheck, ShieldCheck, ShoppingCart, Store, Wrench, X,
  Workflow, Zap, Utensils, Globe2, Target, Settings2
} from 'lucide-react'
import { SITE_CONFIG } from './config'


const products = [
  {
    icon: Utensils,
    number: '01',
    title: 'POS para restaurantes',
    description: 'Organiza pedidos, ventas y operación diaria desde una solución centralizada.',
    features: ['Gestión de pedidos y mesas*', 'Control de ventas', 'Reportes operativos', 'Administración de usuarios'],
    tag: 'Gastronomía',
  },
  {
    icon: Store,
    number: '02',
    title: 'POS para tiendas y comercios',
    description: 'Tener             mayor visibilidad sobre tus productos, movimientos e información comercial.',
    features: ['Registro de ventas', 'Productos e inventarios*', 'Consulta de movimientos', 'Reportes de operación'],
    tag: 'Comercio',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Gestión para talleres',
    description: 'Digitaliza el seguimiento de servicios, clientes y operaciones de tu taller.',
    features: ['Órdenes de servicio*', 'Historial de clientes y vehículos*', 'Seguimiento de trabajos', 'Control de repuestos*'],
    tag: 'Automotriz',
  },
]

const faqs = [
  ['¿Qué tipo de empresas pueden utilizar sus soluciones?', 'Trabajamos con restaurantes, tiendas, comercios, talleres y empresas que necesitan organizar o digitalizar sus procesos. La solución se define según las necesidades reales de cada operación.'],
  ['¿Puedo solicitar una demostración gratuita?', 'Sí. Puedes enviar el formulario de esta página o escribirnos por WhatsApp para coordinar una conversación y revisar las funcionalidades disponibles.'],
  ['¿El software incluye facturación electrónica?', 'Esa funcionalidad debe confirmarse para cada producto y plan. No confundimos un comprobante interno de venta con una factura electrónica validada por la DIAN. Consulta disponibilidad antes de contratar.'],
  ['¿Desarrollan software a la medida?', 'Sí. Podemos evaluar proyectos de aplicaciones web, automatización e integración de procesos. Primero realizamos un levantamiento de requerimientos y una propuesta.'],
  ['¿Cuánto cuesta implementar una solución?', 'El valor depende del tipo de negocio, módulos, usuarios, implementación y soporte requerido. Solicita una cotización para recibir una propuesta acorde con tu operación.'],
  ['¿Ofrecen acompañamiento?', 'De principio a fin, el alcance de capacitación, soporte y mantenimiento se define en la propuesta comercial y el plan contratado.'],
  ['¿Realizan pautas publicitarias para redes sociales?','Claro que si, creamos pautas publictarias diseñadas y ajustadas a las necesidades de tu negocio' ],
  ['¿Cuánto dinero debo invertir en pauta?', 'depende de tu producto y objetivos comerciales. contactanos y conversamos cual es el paquete ideal para ti']
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)

  const whatsappLink = (message: string) =>
    `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const company = String(form.get('company') || '')
    const city = String(form.get('city') || '')
    const sector = String(form.get('sector') || '')
    const contact = String(form.get('contact') || '')
    const need = String(form.get('need') || '')
    const consent = form.get('consent')

    if (!consent) return
    const message = [
      'Hola, quiero información sobre las soluciones de GESTIONSOFTDEV.',
      `Nombre: ${name}`,
      `Empresa: ${company}`,
      `Ciudad: ${city}`,
      `Sector: ${sector}`,
      `Correo o teléfono: ${contact}`,
      `Necesidad: ${need}`,
    ].join('\n')

    setSubmitted(true)
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur-xl">
        <div className="container-shell flex h-[76px] items-center justify-between">
          <a href="#inicio" className="flex items-center" aria-label="GESTIONSOFTDEV inicio" onClick={closeMenu}
           >
           <img src="/logo-gestionsoftdev.svg" alt="GESTIONSOFTDEV - Tecnología que transforma negocios" className="brand-logo" width="220" height="55"/>
</a>
          <nav className="hidden items-center gap-8 text-[13px] font-semibold text-slate-200 lg:flex">
            <a className="nav-link" href="#inicio">Inicio</a>
            <a className="nav-link" href="#soluciones">Software</a>
            <a className="nav-link" href="#desarrollo">Desarrollo</a>
            <a className="nav-link" href="#marketing">Marketing</a>
            <a className="nav-link" href="#contacto">Contacto</a>
          </nav>
          <a href="#contacto" className="btn-primary hidden lg:inline-flex">Solicitar asesoría <ArrowUpRight size={16}/></a>
          <button className="rounded-lg p-2 text-white lg:hidden" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-navy px-6 py-5 lg:hidden">
            {['Inicio', 'Software', 'Desarrollo', 'Marketing', 'Contacto'].map((item, i) => (
              <a key={item} href={['#inicio','#soluciones','#desarrollo','#marketing','#contacto'][i]} onClick={closeMenu} className="block border-b border-white/10 py-3 text-sm font-semibold text-white">{item}</a>
            ))}
            <a href="#contacto" onClick={closeMenu} className="btn-primary mt-4 w-full">Solicitar asesoría <ArrowRight size={16}/></a>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-grid relative bg-navy pt-32 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(23,105,255,.22),transparent_34%)]"/>
          <div className="container-shell relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-[1.02fr_.98fr] lg:pb-28 lg:pt-16">
            <div className="max-w-2xl">
              <div className="eyebrow eyebrow-blue"><span className="eyebrow-dot"/> SOFTWARE EMPRESARIAL</div>
              <h1 className="mt-7 font-display text-[42px] font-extrabold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-[62px]">
                Gestiona mejor.<br/><span className="text-blue-400">Crece más.</span><br/>Transforma tu negocio.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Soluciones de software empresarial para organizar tus operaciones, tener mayor control y tomar decisiones con información clara.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contacto" className="btn-primary">Solicitar una demostración <ArrowRight size={17}/></a>
                <a href="#soluciones" className="btn-secondary">Explorar soluciones</a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-slate-300">
                <span className="inline-flex items-center gap-2"><Check size={15} className="text-sky-400"/> Soluciones por sector</span>
                <span className="inline-flex items-center gap-2"><Check size={15} className="text-sky-400"/> Atención personalizada</span>
                <span className="inline-flex items-center gap-2"><Check size={15} className="text-sky-400"/> Desarrollo a medida</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -inset-5 rounded-[34px] bg-blue-500/10 blur-3xl"/>
              <div className="dashboard-card relative">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-600"/><span className="text-xs font-bold text-slate-700">Panel de gestión</span></div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-700">Métricas</span>
                </div>
                <div className="grid grid-cols-[66px_1fr] sm:grid-cols-[82px_1fr]">
                  <div className="space-y-5 border-r border-slate-100 bg-slate-50 px-4 py-5 text-slate-400">
                    <Gauge size={19}/><ShoppingCart size={19}/><PackageCheck size={19}/><BarChart3 size={19}/><Settings2 size={19}/>
                  </div>
                  <div className="min-w-0 p-4 sm:p-6">
                    <div className="flex items-center justify-between"><div><p className="text-[10px] text-slate-400">Indicadores de negocio</p><p className="mt-1 text-lg font-extrabold text-slate-800">Panel general</p></div><span className="rounded-lg bg-slate-100 px-2 py-1 text-[9px] text-slate-500">vista previa</span></div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="metric-tile"><span>Ventas registradas</span><strong>—</strong><small>Indicador de ejemplo</small></div>
                      <div className="metric-tile"><span>Productos</span><strong>—</strong><small>Indicador de ejemplo</small></div>
                    </div>
                    <div className="mt-4 rounded-xl border border-slate-100 p-4">
                      <div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-700">Actividad comercial</span><span className="text-[10px] text-slate-400">Visual ilustrativa</span></div>
                      <div className="mt-5 flex h-24 items-end gap-2">
                        {[38,62,48,78,55,88,67,96,72,84,60,92].map((h,i)=><div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-blue-700 to-sky-400" style={{height:`${h}%`,opacity:.55+h/220}}/>)}
                      </div>
                      <div className="mt-2 flex justify-between text-[9px] text-slate-400"><span>Semana 1</span><span>Semana 2</span><span>Semana 3</span><span>Semana 4</span></div>
                    </div>
                    <div className="mt-4 flex items-center gap-3 rounded-xl bg-blue-50 p-3"><span className="rounded-lg bg-white p-2 text-blue-600"><ShieldCheck size={18}/></span><div><p className="text-xs font-bold text-slate-700">Información organizada</p><p className="text-[10px] text-slate-500">Una mejor visión de tu operación.</p></div></div>
                  </div>
                </div>
              </div>
              <div className="float-note absolute -bottom-7 -left-5 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-slate-800 shadow-xl sm:flex">
                <span className="rounded-xl bg-blue-50 p-3 text-blue-600"><Workflow size={17}/></span>
                <span><b className="block text-xs">Procesos conectados</b><small className="text-[10px] text-slate-500">Tecnología para tu operación</small></span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"/>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-center">
              <div className="eyebrow justify-center">EL RETO DE MUCHAS EMPRESAS</div>
              <h2 className="section-title mt-4">Tu negocio necesita información clara para avanzar.</h2>
              <p className="section-copy mt-5">Cuando los procesos dependen de registros dispersos y tareas manuales, controlar la operación se vuelve más difícil.</p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Boxes,'Inventarios difíciles de controlar','La información desactualizada complica las compras y la operación.'],
                [BarChart3,'Poca visibilidad de las ventas','Sin reportes claros es más difícil entender el comportamiento del negocio.'],
                [Workflow,'Procesos manuales','Las tareas repetitivas consumen tiempo que podrías dedicar a gestionar.'],
                [Laptop,'Información dispersa','Los datos en diferentes herramientas dificultan el seguimiento.'],
              ].map(([Icon,title,desc]: any) => (
                <div className="problem-card" key={title}><span className="icon-box"><Icon size={22}/></span><h3>{title}</h3><p>{desc}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="soluciones" className="bg-mist py-20 sm:py-24">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl"><div className="eyebrow">NUESTRAS SOLUCIONES</div><h2 className="section-title mt-4">Software pensado para el día a día de tu empresa.</h2></div>
              <p className="max-w-md text-sm leading-7 text-slate-500">Conoce las soluciones disponibles y conversemos sobre los procesos que necesitas gestionar.</p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon
                return <article className="product-card" key={product.number}>
                  <div className="flex items-start justify-between"><span className="icon-box icon-box-large"><Icon size={25}/></span><span className="text-xs font-bold tracking-widest text-slate-300">{product.number}</span></div>
                  <span className="mt-7 inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">{product.tag}</span>
                  <h3 className="mt-3 font-display text-xl font-extrabold tracking-tight text-navy">{product.title}</h3>
                  <p className="mt-3 min-h-[60px] text-sm leading-6 text-slate-500">{product.description}</p>
                  <ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                    {product.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-xs text-slate-600"><Check size={15} className="mt-0.5 shrink-0 text-blue-600"/>{feature}</li>)}
                  </ul>
                  <a href={`#contacto`} onClick={() => sessionStorage.setItem('selectedProduct', product.title)} className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:gap-3">Consultar esta solución <ArrowRight size={16}/></a>
                </article>
              })}
            </div>
            <p className="mt-5 text-xs text-slate-400">*Las funcionalidades marcadas dependen del producto, versión y alcance contratado. Solicita confirmación de disponibilidad.</p>
          </div>
        </section>

        <section id="desarrollo" className="bg-white py-20 sm:py-24">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="rounded-[28px] bg-navy p-6 text-white sm:p-9">
                <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-blue-300"><Code2 size={17}/> DESARROLLO A MEDIDA</div>
                <div className="mt-8 space-y-3 font-mono text-xs sm:text-sm">
                  <div className="rounded-lg bg-white/5 p-4"><span className="text-blue-300">01</span><span className="ml-4 text-slate-300">Entender el proceso</span><span className="float-right text-emerald-300">✓</span></div>
                  <div className="rounded-lg bg-white/5 p-4"><span className="text-blue-300">02</span><span className="ml-4 text-slate-300">Definir requerimientos</span><span className="float-right text-emerald-300">✓</span></div>
                  <div className="rounded-lg bg-white/5 p-4"><span className="text-blue-300">03</span><span className="ml-4 text-slate-300">Diseñar e implementar</span><span className="float-right text-emerald-300">→</span></div>
                  <div className="rounded-lg bg-white/5 p-4"><span className="text-blue-300">04</span><span className="ml-4 text-slate-300">Probar y mejorar</span><span className="float-right text-slate-500">○</span></div>
                </div>
                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5"><Zap className="text-sky-300"/><p className="text-xs leading-5 text-slate-300">Tecnología construida alrededor de las necesidades de tu operación.</p></div>
              </div>
            </div>
            <div>
              <div className="eyebrow">TECNOLOGÍA A TU MEDIDA</div>
              <h2 className="section-title mt-4">Cuando tu proceso es único, tu solución también puede serlo.</h2>
              <p className="section-copy mt-5">Analizamos tus necesidades y definimos el alcance de una solución tecnológica que responda a tus procesos, usuarios y objetivos.</p>
              <div className="mt-8 space-y-4">
                {['Aplicaciones web empresariales','Automatización de tareas y flujos','Integración entre herramientas','Evolución y mantenimiento de sistemas','Facturación electrónica e integración'].map(item=><div className="flex items-center gap-3 text-sm font-semibold text-slate-700" key={item}><span className="rounded-full bg-blue-50 p-2 text-blue-600"><Check size={15}/></span>{item}</div>)}
              </div>
              <a href="#contacto" className="btn-dark mt-9">Cuéntanos tu proyecto <ArrowRight size={17}/></a>
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white sm:py-24">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-center"><div className="eyebrow eyebrow-blue justify-center">BENEFICIOS PARA TU OPERACIÓN</div><h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Más control. Mejor información. Decisiones más claras.</h2><p className="mt-5 text-sm leading-7 text-slate-300">La tecnología debe ayudarte a resolver tareas concretas y darte visibilidad sobre lo que sucede en tu negocio.</p></div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[[Gauge,'Control operativo','Centraliza información clave de la operación.'],[BarChart3,'Información para decidir','Consulta datos y reportes disponibles.'],[PackageCheck,'Procesos organizados','Estructura tareas y registros del negocio.'],[ShieldCheck,'Gestión responsable','Define roles y accesos según la solución.']].map(([Icon,title,desc]:any)=><div className="text-center" key={title}><span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300"><Icon size={25}/></span><h3 className="mt-5 font-display text-base font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center"><div className="eyebrow justify-center">CÓMO TRABAJAMOS</div><h2 className="section-title mt-4">Un proceso claro desde el primer contacto.</h2></div>
            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {[[Target,'01','Diagnóstico','Conocemos tu negocio, los retos y los objetivos.'],[Settings2,'02','Propuesta','Definimos alcance, funcionalidades y condiciones.'],[MonitorSmartphone,'03','Implementación','Configuramos o desarrollamos la solución acordada.'],[ShieldCheck,'04','Acompañamiento','Revisamos el funcionamiento y el soporte contratado.']].map(([Icon,num,title,desc]:any)=><div className="relative" key={num}><div className="flex items-center justify-between"><span className="icon-box"><Icon size={22}/></span><span className="font-display text-4xl font-extrabold text-slate-100">{num}</span></div><h3 className="mt-5 font-display text-lg font-extrabold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section id="marketing" className="bg-mist py-20 sm:py-24">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <div><div className="eyebrow">SERVICIOS COMPLEMENTARIOS</div><h2 className="section-title mt-4">También te ayudamos a fortalecer tu presencia digital.</h2><p className="section-copy mt-5">Complementamos las soluciones tecnológicas con servicios de marketing para empresas que necesitan comunicar mejor su propuesta y generar oportunidades comerciales.</p><a href="#contacto" className="btn-dark mt-8">Consultar marketing digital <ArrowRight size={17}/></a></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[[Globe2,'Páginas web','Sitios y landing pages orientados a objetivos.'],[MessageCircle,'Redes sociales','Planeación y creación de contenido.'],[Target,'Publicidad digital','Campañas y optimización según objetivos.'],[BarChart3,'SEO y medición','Visibilidad orgánica y análisis de resultados.']].map(([Icon,title,desc]:any)=><div className="rounded-2xl border border-slate-200 bg-white p-6" key={title}><span className="icon-box"><Icon size={21}/></span><h3 className="mt-5 font-display font-extrabold text-navy">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center"><div className="eyebrow justify-center">PREGUNTAS FRECUENTES</div><h2 className="section-title mt-4">Resolvamos tus dudas.</h2></div>
            <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map(([question,answer],i)=><div key={question} className="py-5"><button className="flex w-full items-center justify-between gap-5 text-left font-display text-sm font-bold text-navy sm:text-base" onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}>{question}<ChevronDown className={`shrink-0 transition ${openFaq===i?'rotate-180 text-blue-600':'text-slate-400'}`} size={19}/></button>{openFaq===i&&<p className="max-w-2xl pt-4 text-sm leading-7 text-slate-500">{answer}</p>}</div>)}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-navy py-20 text-white sm:py-24">
          <div className="container-shell grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <div className="eyebrow eyebrow-blue">HABLEMOS DE TU NEGOCIO</div>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">El siguiente paso de tu empresa comienza con una conversación.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-300">Cuéntanos qué necesitas gestionar o mejorar. Revisaremos tu solicitud para orientarte hacia una solución adecuada.</p>
              <div className="mt-9 space-y-5">
                <div className="flex items-center gap-4"><span className="rounded-xl bg-white/10 p-3 text-blue-300"><MessageCircle size={20}/></span><div><b className="block text-sm">Atención por WhatsApp</b><small className="text-xs text-slate-400">Conversación directa con nuestro equipo</small></div></div>
                <div className="flex items-center gap-4"><span className="rounded-xl bg-white/10 p-3 text-blue-300"><Globe2 size={20}/></span><div><b className="block text-sm">Atención en Colombia</b><small className="text-xs text-slate-400">Soluciones para empresas y comercios</small></div></div>
              </div>
            </div>
            <form className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl sm:p-9" onSubmit={handleSubmit}>
              <h3 className="font-display text-xl font-extrabold text-navy">Solicita una asesoría</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">Completa los datos y continuaremos la conversación por WhatsApp.</p>
              {submitted && <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-xs font-semibold text-emerald-800">Se preparó tu solicitud. Si no se abrió WhatsApp, revisa la configuración del número de contacto.</div>}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="form-label">Nombre completo<input name="name" required autoComplete="name" placeholder="Tu nombre" className="form-input"/></label>
                <label className="form-label">Empresa<input name="company" required autoComplete="organization" placeholder="Nombre del negocio" className="form-input"/></label>
                <label className="form-label">Ciudad<input name="city" required placeholder="Ej. Ibagué" className="form-input"/></label>
                <label className="form-label">Sector<select name="sector" required className="form-input"><option value="">Selecciona una opción</option><option>Restaurante</option><option>Tienda o comercio</option><option>Taller automotriz</option><option>Servicios profesionales</option><option>Otro</option></select></label>
                <label className="form-label sm:col-span-2">Correo electrónico o WhatsApp<input name="contact" required placeholder="¿Cómo podemos contactarte?" className="form-input"/></label>
                <label className="form-label sm:col-span-2">¿Qué solución necesitas?<textarea name="need" required rows={3} placeholder="Cuéntanos brevemente qué necesitas mejorar..." className="form-input resize-y"/></label>
              </div>
              <label className="mt-5 flex items-start gap-3 text-[11px] leading-5 text-slate-500"><input name="consent" type="checkbox" required className="mt-1 accent-blue-600"/><span>He leído la <a className="font-semibold text-blue-700 underline" href="/politica-tratamiento-datos.html" target="_blank" rel="noreferrer">Política de Tratamiento de Datos Personales</a> y autorizo el uso de mis datos para atender esta solicitud y contactarme sobre ella. Esta autorización no incluye el envío de publicidad.</span></label>
              <button type="submit" className="btn-primary mt-6 w-full">Enviar solicitud por WhatsApp <ArrowRight size={17}/></button>
              <p className="mt-3 text-center text-[10px] text-slate-400">No compartas información financiera ni contraseñas en este formulario.</p>
            </form>
          </div>
        </section>
      </main>

      
<footer className="bg-[#0B1428] py-10 text-white">
  <div className="container-shell">
    <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-8 md:flex-row">
      {/* Identidad de GESTIONSOFTDEV */}
      <div className="max-w-sm">
        <div className="flex items-center">
          <img
            src="/logo-gestionsoftdev.svg"
            alt="GESTIONSOFTDEV"
            className="brand-logo-footer"
            width="220"
            height="55" />
        </div>

        <p className="mt-4 text-xs leading-6 text-slate-400">
          Tecnología que transforma negocios. Software empresarial y
          soluciones digitales para empresas en Colombia.
        </p>
      </div>

      {/* Navegación y enlaces legales */}
      <div className="grid grid-cols-2 gap-10 text-xs">

        <div>
          <b className="text-white">Explorar</b>

          <div className="mt-4 space-y-3 text-slate-400">
            <a className="block hover:text-white" href="#soluciones">
              Software empresarial
            </a>

            <a className="block hover:text-white" href="#desarrollo">
              Desarrollo a medida
            </a>

            <a className="block hover:text-white" href="#marketing">
              Marketing digital
            </a>
          </div>
        </div>

        <div>
          <b className="text-white">Contacto y legal</b>

          <div className="mt-4 space-y-3 text-slate-400">
            <a className="block hover:text-white" href="#contacto">
              Solicitar asesoría
            </a>

            <a
              className="block hover:text-white"
              href={`mailto:${SITE_CONFIG.email}`}
            >
              {SITE_CONFIG.email}
            </a>

            <a
              className="block hover:text-white"
              href="/terminos-condiciones.html"
            >
              Términos y condiciones
            </a>

            <a
              className="block hover:text-white"
              href="/politica-tratamiento-datos.html"
            >
              Tratamiento de datos
            </a>

            <span className="block">Colombia</span>
          </div>
        </div>

      </div>
    </div>

    {/* Copyright */}
    <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] text-slate-500 sm:flex-row">
      <span>
        © {new Date().getFullYear()} GESTIONSOFTDEV. Todos los derechos reservados.
      </span>

      <span>
        Tecnología · Software · Crecimiento empresarial
      </span>
    </div>

  </div>
</footer>

{/* Botón flotante de WhatsApp */}
<a
  href={whatsappLink('Hola, quiero conocer las soluciones de GESTIONSOFTDEV.')}
  target="_blank"
  rel="noreferrer"
  aria-label="Contactar por WhatsApp"
  className="whatsapp-float"
>
  <MessageCircle size={23}/>
  <span className="hidden sm:inline">Hablemos</span>
</a>
</div>
  )
}

export default App

