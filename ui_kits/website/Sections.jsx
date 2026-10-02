(()=>{
const {Button,Eyebrow,Icon,SectionHeading,ServiceCard,CaseCard,TeamCard}=window.MEXTASDesignSystem_cebba9;
const D=()=>window.MX_DATA;
const light={background:"var(--bg-light)",padding:"var(--section-y) 0"};
const dark={background:"var(--bg-dark)",padding:"var(--section-y) 0",color:"var(--fg-on-dark)"};
const st=(i)=>({transitionDelay:(i*90)+"ms"});
function Services({onOpen}){
  const [all,setAll]=React.useState(false);const list=D().services;const shown=all?list:list.slice(0,4);
  return <section id="servicios" data-screen-label="Servicios" style={light}><div className="mx-wrap mx-split">
    <div className="mx-reveal" style={{position:"sticky",top:120}}><SectionHeading eyebrow="Nuestros servicios" title="Asesoría legal integral para cada necesidad."/>
      <p style={{color:"var(--fg-on-light-muted)",maxWidth:320,margin:"28px 0 32px"}}>Doce prácticas coordinadas por socios que conocen el negocio de cada cliente.</p>
      <Button tone="light" variant="outline" size="sm" onClick={()=>setAll(!all)}>{all?"Ver destacados":"Explorar todos los servicios"}</Button></div>
    <div className="mx-grid-4">{shown.map((s,i)=><div key={s.slug} className="mx-reveal" style={st(i%4)}><ServiceCard icon={s.icon} title={s.title} description={s.short} onClick={()=>onOpen(s)} style={{height:"100%",width:"100%"}}/></div>)}</div>
  </div></section>;
}
function Cases({onOpen}){
  return <section id="casos" data-screen-label="Casos" style={dark}><div className="mx-wrap mx-split">
    <div className="mx-reveal"><SectionHeading tone="dark" eyebrow="Casos destacados" title="Resultados que hablan por nosotros." rule={false}/><div style={{marginTop:40}}><Button variant="link" onClick={()=>onOpen(D().cases[0])}>Ver todos los casos</Button></div></div>
    <div className="mx-grid-4 mx-hscroll">{D().cases.map((c,i)=><div key={c.slug} className="mx-reveal" style={st(i)}><CaseCard image={c.image} title={c.title} summary={c.summary} onClick={()=>onOpen(c)} style={{width:"100%",height:"100%"}}/></div>)}</div>
  </div></section>;
}
function Why(){
  const items=[["Visión estratégica","No nos limitamos a interpretar la ley. Entendemos el contexto empresarial detrás de cada decisión."],["Atención personalizada","Cada asunto recibe una estrategia construida alrededor de sus circunstancias."],["Experiencia multidisciplinaria","Integramos distintas áreas jurídicas cuando la complejidad del caso lo requiere."],["Confidencialidad","Tratamos cada asunto con absoluta discreción y rigor profesional."]];
  const cols=[["1/7","0"],["7/13","120px"],["1/7","0"],["7/13","120px"]];
  return <section id="nosotros" data-screen-label="Por qué MEXTAS" style={{...light,background:"var(--ivory-100)"}}><div className="mx-wrap">
    <div className="mx-reveal" style={{display:"grid",gridTemplateColumns:"minmax(0,1fr)",maxWidth:880}}><Eyebrow rule>Por qué MEXTAS</Eyebrow>
      <h2 style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:"var(--fs-h1)",lineHeight:1.1,letterSpacing:"-.01em",margin:"26px 0 0",textWrap:"balance"}}>Una firma diseñada alrededor de las <em style={{color:"var(--accent-on-light)"}}>decisiones importantes.</em></h2></div>
    <div className="mx-why" style={{marginTop:72}}>{items.map(([t,x],i)=><div key={t} className="mx-reveal" style={{gridColumn:cols[i][0],marginTop:cols[i][1],paddingBottom:56,...st(i)}}>
      <div style={{display:"flex",gap:28,borderTop:"1px solid var(--line-light-strong)",paddingTop:28}}><span style={{fontFamily:"var(--font-serif)",fontSize:52,lineHeight:.9,color:"var(--accent)",fontWeight:300}}>{String(i+1).padStart(2,"0")}</span>
      <div><h3 style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:26,margin:"0 0 12px"}}>{t}</h3><p style={{margin:0,color:"var(--fg-on-light-muted)",maxWidth:380}}>{x}</p></div></div></div>)}</div>
  </div></section>;
}
function Process(){
  const steps=[["Primera conversación","Entendemos tu situación y los objetivos que buscas alcanzar."],["Análisis","Evaluamos riesgos, oportunidades y alternativas jurídicas."],["Estrategia","Diseñamos una ruta legal clara y personalizada."],["Implementación","Acompañamos la ejecución y damos seguimiento al asunto."],["Seguimiento","Mantenemos comunicación continua y evaluamos los siguientes pasos."]];
  const ref=React.useRef();const [p,setP]=React.useState(0);
  React.useEffect(()=>{const f=()=>{if(!ref.current)return;const r=ref.current.getBoundingClientRect();const v=Math.min(1,Math.max(0,(window.innerHeight*.75-r.top)/(r.height+window.innerHeight*.2)));setP(v)};f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  return <section data-screen-label="Proceso" style={dark}><div className="mx-wrap">
    <div className="mx-reveal"><SectionHeading tone="dark" eyebrow="Proceso" title="¿Cómo trabajamos?"/></div>
    <div ref={ref} className="mx-process" style={{marginTop:72}}>
      <div className="mx-hide-md" style={{position:"absolute",top:6,left:0,right:0,height:1,background:"var(--line-dark)"}}><div style={{height:1,background:"var(--accent)",width:(p*100)+"%",transition:"width 200ms linear"}}></div></div>
      {steps.map(([t,x],i)=>{const act=p>=(i/5)+.02;return <div key={t} style={{position:"relative"}}>
        <span style={{display:"block",width:13,height:13,borderRadius:"50%",border:"1px solid "+(act?"var(--accent)":"var(--line-dark-strong)"),background:act?"var(--accent)":"var(--bg-dark)",transition:"all 500ms var(--ease-institutional)"}}></span>
        <div style={{fontFamily:"var(--font-serif)",fontSize:15,color:"var(--accent)",marginTop:30}}>{String(i+1).padStart(2,"0")}</div>
        <h3 style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:24,margin:"8px 0 12px",color:act?"var(--fg-on-dark)":"var(--fg-on-dark-muted)",transition:"color 500ms"}}>{t}</h3>
        <p style={{margin:0,fontSize:14,color:"var(--fg-on-dark-muted)"}}>{x}</p></div>})}
    </div></div></section>;
}
function Practice({onOpen}){
  const list=D().services.slice(0,11).filter(s=>s.slug!=="contratos");const [a,setA]=React.useState(0);const s=list[a];
  return <section data-screen-label="Áreas de práctica" style={light}><div className="mx-wrap">
    <div className="mx-reveal" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:32,flexWrap:"wrap"}}><SectionHeading eyebrow="Áreas de práctica" title="Explora nuestras especialidades." rule={false}/><p style={{color:"var(--fg-on-light-muted)",maxWidth:360,margin:0}}>Pasa el cursor sobre un área para conocer su alcance; selecciónala para ver el detalle completo.</p></div>
    <div className="mx-split" style={{marginTop:56,gridTemplateColumns:"minmax(0,1.3fr) minmax(0,1fr)"}}>
      <ul style={{listStyle:"none",margin:0,padding:0,borderTop:"1px solid var(--line-light-strong)"}}>{list.map((x,i)=><li key={x.slug}><button onMouseEnter={()=>setA(i)} onFocus={()=>setA(i)} onClick={()=>onOpen(x)} style={{all:"unset",cursor:"pointer",boxSizing:"border-box",width:"100%",display:"flex",alignItems:"baseline",gap:22,padding:"16px 0",borderBottom:"1px solid var(--line-light)"}}>
        <span style={{fontSize:11,letterSpacing:".2em",color:i===a?"var(--accent-on-light)":"var(--stone-400)",width:24}}>{String(i+1).padStart(2,"0")}</span>
        <span style={{fontFamily:"var(--font-serif)",fontSize:"clamp(24px,2.4vw,34px)",lineHeight:1.15,color:i===a?"var(--fg-on-light)":"var(--stone-400)",transform:i===a?"translateX(10px)":"none",transition:"all 500ms var(--ease-institutional)",flex:1}}>{x.title.replace("Derecho ","")}</span>
        <span style={{opacity:i===a?1:0,transition:"opacity 400ms",color:"var(--accent-on-light)"}}><Icon name="arrow-right" size={18}/></span></button></li>)}</ul>
      <div key={s.slug} style={{position:"sticky",top:120,background:"var(--bg-dark)",color:"var(--fg-on-dark)",padding:"44px 40px",animation:"mxFade 600ms var(--ease-reveal)"}}>
        <Icon name={s.icon} size={36} strokeWidth={1} color="var(--accent)"/>
        <h3 style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:30,margin:"26px 0 14px"}}>{s.title}</h3>
        <p style={{margin:0,color:"var(--fg-on-dark-muted)"}}>{s.lead}</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,margin:"28px 0 34px"}}>{s.areas.slice(0,5).map(t=><span key={t} style={{fontSize:11.5,padding:"6px 12px",border:"1px solid var(--line-dark-strong)",color:"var(--fg-on-dark)"}}>{t}</span>)}</div>
        <Button size="sm" onClick={()=>onOpen(s)}>Ver área</Button></div>
    </div></div></section>;
}
function Team({onOpen}){
  return <section id="equipo" data-screen-label="Equipo" style={light}><div className="mx-wrap mx-split">
    <div className="mx-reveal"><SectionHeading eyebrow="Nuestro equipo" title="Profesionales que se dedican a tu éxito."/><div style={{marginTop:48}}><Button tone="light" variant="link" onClick={()=>onOpen(D().team[0])}>Conoce a todo el equipo</Button></div></div>
    <div className="mx-grid-4 mx-hscroll">{D().team.map((m,i)=><div key={m.slug} className="mx-reveal" style={st(i)}><TeamCard photo={m.photo} name={m.name} role={m.role} email={m.email} onClick={()=>onOpen(m)}/></div>)}</div>
  </div></section>;
}
function Blog({onOpen}){
  const [f,...rest]=D().articles;
  const meta=(a,c)=><div style={{display:"flex",gap:14,fontSize:10.5,letterSpacing:".18em",textTransform:"uppercase",color:c||"var(--fg-on-light-muted)"}}><span style={{color:"var(--accent-on-light)"}}>{a.cat}</span><span>{a.date}</span><span>{a.read}</span></div>;
  const Img=({a,r})=><div style={{overflow:"hidden",aspectRatio:r}}><img src={a.image} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 1.2s var(--ease-reveal)"}} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.03)"} onMouseLeave={e=>e.currentTarget.style.transform="none"}/></div>;
  return <section id="blog" data-screen-label="Blog" style={{...light,background:"var(--white-warm)"}}><div className="mx-wrap">
    <div className="mx-reveal" style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:24,flexWrap:"wrap"}}><SectionHeading eyebrow="Recursos" title="Perspectiva legal para decisiones empresariales." rule={false} style={{maxWidth:640}}/><Button tone="light" variant="link" onClick={()=>window.dispatchEvent(new Event("mx-search"))}>Buscar en recursos</Button></div>
    <div className="mx-split" style={{marginTop:56,gridTemplateColumns:"minmax(0,1.25fr) minmax(0,1fr)",gap:48}}>
      <button className="mx-reveal" onClick={()=>onOpen(f)} style={{all:"unset",cursor:"pointer",display:"grid",gap:22}}><Img a={f} r="16/10"/>{meta(f)}<h3 style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:"clamp(26px,2.6vw,36px)",lineHeight:1.15,margin:0}}>{f.title}</h3><p style={{margin:0,color:"var(--fg-on-light-muted)",maxWidth:560}}>{f.excerpt}</p></button>
      <div style={{display:"grid",gap:0}}>{rest.map((a,i)=><button key={a.slug} className="mx-reveal" onClick={()=>onOpen(a)} style={{all:"unset",cursor:"pointer",display:"grid",gridTemplateColumns:"minmax(0,1fr) 128px",gap:24,padding:"24px 0",borderTop:"1px solid var(--line-light)",...st(i)}}><div style={{display:"grid",gap:10,alignContent:"start"}}>{meta(a)}<h4 style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:21,lineHeight:1.25,margin:0}}>{a.title}</h4></div><Img a={a} r="1/1"/></button>)}</div>
    </div></div></section>;
}
Object.assign(window,{Services,Cases,Why,Process,Practice,Team,Blog});
})();