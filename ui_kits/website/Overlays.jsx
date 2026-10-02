(()=>{
const {Button,Eyebrow,Icon,Modal,TextField,ChoiceTile}=window.MEXTASDesignSystem_cebba9;
const H=({children,size=44,style})=><h2 style={{fontFamily:"var(--font-serif)",fontWeight:400,fontSize:size,lineHeight:1.1,letterSpacing:"-.01em",margin:0,textWrap:"balance",...style}}>{children}</h2>;
const Lbl=({children,dark})=><div style={{fontSize:10.5,fontWeight:600,letterSpacing:".22em",textTransform:"uppercase",color:dark?"var(--accent)":"var(--accent-on-light)",marginBottom:14}}>{children}</div>;
const Tags=({list,dark})=><div style={{display:"flex",flexWrap:"wrap",gap:8}}>{list.map(t=><span key={t} style={{fontSize:12,padding:"7px 12px",border:"1px solid "+(dark?"var(--line-dark-strong)":"var(--line-light-strong)")}}>{t}</span>)}</div>;
function ServiceDetail({item,onClose,onConsult}){
  const [q,setQ]=React.useState(-1);if(!item)return <Modal open={false}/>;
  return <Modal open onClose={onClose} variant="drawer" width={780} label={item.title}><div style={{padding:"clamp(28px,5vw,64px)",paddingTop:24}}>
    <Icon name={item.icon} size={40} strokeWidth={1} color="var(--accent)"/><div style={{height:28}}></div><Eyebrow>Servicios · {item.title}</Eyebrow>
    <H style={{marginTop:18}}>{item.lead}</H>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:1,background:"var(--line-light)",border:"1px solid var(--line-light)",margin:"44px 0"}}>{item.areas.map((a,i)=><div key={a} style={{background:"var(--bg-light-raised)",padding:"22px 20px",display:"flex",gap:14,alignItems:"baseline"}}><span style={{fontSize:11,color:"var(--accent-on-light)"}}>{String(i+1).padStart(2,"0")}</span><span style={{fontWeight:500}}>{a}</span></div>)}</div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:40}}>
      <div><Lbl>Problemas que resolvemos</Lbl>{item.problems.map(p=><p key={p} style={{margin:"0 0 10px",paddingLeft:18,position:"relative",color:"var(--fg-on-light-muted)"}}><span style={{position:"absolute",left:0,top:12,width:8,height:1,background:"var(--accent)"}}></span>{p}</p>)}</div>
      <div><Lbl>Tipo de clientes</Lbl><p style={{margin:0,color:"var(--fg-on-light-muted)"}}>{item.clients}</p></div></div>
    <div style={{marginTop:44}}><Lbl>Proceso de trabajo</Lbl><div style={{display:"flex",gap:0,flexWrap:"wrap",borderTop:"1px solid var(--line-light-strong)"}}>{["Diagnóstico","Propuesta","Ejecución","Seguimiento"].map((s,i)=><div key={s} style={{flex:"1 1 120px",padding:"16px 16px 0 0"}}><div style={{fontFamily:"var(--font-serif)",color:"var(--accent-on-light)"}}>{String(i+1).padStart(2,"0")}</div><div style={{fontWeight:500,marginTop:4}}>{s}</div></div>)}</div></div>
    {item.faq.length>0&&<div style={{marginTop:48}}><Lbl>Preguntas frecuentes</Lbl>{item.faq.map(([k,v],i)=><div key={k} style={{borderTop:"1px solid var(--line-light)"}}><button onClick={()=>setQ(q===i?-1:i)} aria-expanded={q===i} style={{all:"unset",cursor:"pointer",width:"100%",display:"flex",justifyContent:"space-between",gap:20,padding:"18px 0",fontFamily:"var(--font-serif)",fontSize:20}}>{k}<span style={{transform:q===i?"rotate(45deg)":"none",transition:"transform 300ms"}}><Icon name="plus" size={18}/></span></button><div style={{display:"grid",gridTemplateRows:q===i?"1fr":"0fr",transition:"grid-template-rows 400ms var(--ease-institutional)"}}><div style={{overflow:"hidden"}}><p style={{margin:"0 0 20px",color:"var(--fg-on-light-muted)"}}>{v}</p></div></div></div>)}</div>}
    <div style={{marginTop:56,padding:"32px",background:"var(--bg-dark)",color:"var(--fg-on-dark)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,flexWrap:"wrap"}}><H size={24}>¿Tu asunto requiere esta práctica?</H><Button onClick={onConsult}>Consultar con un especialista</Button></div>
  </div></Modal>;
}
function CaseDetail({item,onClose,onConsult}){
  if(!item)return <Modal open={false}/>;
  const blocks=[["Desafío",item.challenge],["Estrategia",item.strategy],["Intervención legal",item.intervention],["Resultado",item.result]];
  return <Modal open onClose={onClose} variant="fullscreen" tone="dark" label={item.title}>
    <div style={{position:"relative",height:"62vh",minHeight:380,marginTop:-62}}><img src={item.image} alt={item.title} style={{width:"100%",height:"100%",objectFit:"cover"}}/><div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,var(--bg-dark) 2%,rgba(11,14,18,.3) 60%,rgba(11,14,18,.5))"}}></div>
      <div className="mx-wrap" style={{position:"absolute",left:0,right:0,bottom:40}}><Eyebrow tone="dark" rule>Caso · {item.areas[0]}</Eyebrow><H size={"clamp(40px,5vw,72px)"} style={{marginTop:18}}>{item.title}</H><p style={{fontSize:18,color:"rgba(243,240,234,.8)",margin:"14px 0 0"}}>{item.summary}</p></div></div>
    <div className="mx-wrap" style={{padding:"48px var(--gutter) 96px"}}>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",borderTop:"1px solid var(--line-dark)",borderBottom:"1px solid var(--line-dark)"}}>{[["Tipo de cliente",item.client],["Ubicación",item.location],["Áreas involucradas",item.areas.join(" · ")]].map(([k,v])=><div key={k} style={{padding:"22px 0"}}><Lbl dark>{k}</Lbl><div>{v}</div></div>)}</div>
      <div className="mx-split" style={{marginTop:64,gridTemplateColumns:"minmax(0,1.6fr) minmax(0,1fr)"}}>
        <div style={{display:"grid",gap:44}}>{blocks.map(([k,v],i)=><div key={k} className="mx-reveal" style={{display:"grid",gridTemplateColumns:"56px 1fr",gap:12}}><span style={{fontFamily:"var(--font-serif)",fontSize:30,color:"var(--accent)"}}>{String(i+1).padStart(2,"0")}</span><div><Lbl dark>{k}</Lbl><p style={{margin:0,fontFamily:i===3?"var(--font-serif)":"inherit",fontSize:i===3?24:16,lineHeight:i===3?1.4:1.75,color:i===3?"var(--fg-on-dark)":"var(--fg-on-dark-muted)"}}>{v}</p></div></div>)}</div>
        <div style={{position:"sticky",top:100}}><Lbl dark>Cronología</Lbl><ol style={{listStyle:"none",margin:0,padding:0,borderLeft:"1px solid var(--line-dark-strong)"}}>{item.timeline.map(([w,t])=><li key={w} style={{position:"relative",padding:"0 0 28px 26px"}}><span style={{position:"absolute",left:-5,top:6,width:9,height:9,borderRadius:"50%",background:"var(--accent)"}}></span><div style={{fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--fg-on-dark-muted)"}}>{w}</div><div style={{marginTop:4}}>{t}</div></li>)}</ol>
          <div style={{marginTop:32}}><Button onClick={onConsult}>Hablar de un asunto similar</Button></div></div>
      </div></div></Modal>;
}
function Profile({item,onClose,onConsult}){
  if(!item)return <Modal open={false}/>;
  const row=(k,v)=><div style={{padding:"20px 0",borderTop:"1px solid var(--line-light)"}}><Lbl>{k}</Lbl>{Array.isArray(v)?v.map(x=><div key={x} style={{marginBottom:4}}>{x}</div>):<div>{v}</div>}</div>;
  return <Modal open onClose={onClose} variant="drawer" width={900} label={item.name}><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",marginTop:-62}}>
    <div style={{background:"var(--carbon-800)",minHeight:420}}><img src={item.photo} alt={"Retrato de "+item.name} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"50% 20%",display:"block",position:"sticky",top:0,maxHeight:"100vh"}}/></div>
    <div style={{padding:"72px clamp(24px,4vw,48px) 56px"}}><Eyebrow>{item.role}</Eyebrow><H style={{marginTop:14}}>{item.name}</H>
      <div style={{margin:"22px 0"}}><Tags list={item.specialty}/></div><p style={{color:"var(--fg-on-light-muted)",margin:"0 0 28px"}}>{item.bio}</p>
      {row("Experiencia",item.experience)}{row("Idiomas",item.languages.join(" · "))}{row("Estudios",item.education)}{row("Casos representativos",item.cases)}{row("Publicaciones",item.publications)}
      <div style={{display:"flex",gap:16,marginTop:28,flexWrap:"wrap"}}><Button tone="light" onClick={onConsult}>Agendar consulta</Button><Button tone="light" variant="outline" icon="linkedin" arrow={false} as="a" href="#">LinkedIn</Button><Button tone="light" variant="outline" icon="mail" arrow={false} as="a" href={"mailto:"+item.email}>Correo</Button></div>
    </div></div></Modal>;
}
function Article({item,onClose}){
  if(!item)return <Modal open={false}/>;
  return <Modal open onClose={onClose} variant="fullscreen" label={item.title}><article style={{maxWidth:760,margin:"0 auto",padding:"40px var(--gutter) 120px"}}>
    <div style={{display:"flex",gap:16,fontSize:11,letterSpacing:".18em",textTransform:"uppercase",color:"var(--fg-on-light-muted)"}}><span style={{color:"var(--accent-on-light)"}}>{item.cat}</span><span>{item.date}</span><span>{item.read} de lectura</span></div>
    <H size={"clamp(34px,4.4vw,56px)"} style={{margin:"22px 0 26px"}}>{item.title}</H><p style={{fontSize:20,lineHeight:1.6,fontFamily:"var(--font-serif)",color:"var(--fg-on-light-muted)",margin:0}}>{item.excerpt}</p>
    <img src={item.image} alt="" style={{width:"100%",aspectRatio:"16/9",objectFit:"cover",margin:"44px 0"}}/>
    {item.body.map((p,i)=><p key={i} style={{fontSize:17,lineHeight:1.85,margin:"0 0 22px"}}>{p}</p>)}
    <div style={{borderTop:"1px solid var(--line-light)",marginTop:48,paddingTop:24,fontSize:13,color:"var(--fg-on-light-muted)"}}>Este contenido es informativo y no constituye asesoría legal para un caso concreto.</div></article></Modal>;
}
const TOPICS=[["building-2","Empresa"],["gavel","Litigio"],["file-signature","Contrato"],["lock-keyhole","Propiedad Intelectual"],["users","Laboral"],["home","Inmobiliario"],["landmark","Fiscal"],["more-horizontal","Otro"]];
function Consulta({open,onClose}){
  const [step,setStep]=React.useState(0);const [d,setD]=React.useState({topic:"",text:"",via:"WhatsApp",name:"",company:"",email:"",phone:""});const [busy,setBusy]=React.useState(false);const [err,setErr]=React.useState({});
  React.useEffect(()=>{if(open){setStep(0);setBusy(false);setErr({})}},[open]);
  const up=k=>e=>setD({...d,[k]:e.target?e.target.value:e});
  const can=[!!d.topic,d.text.trim().length>=10,true][step];
  const next=()=>{if(step<2)return setStep(step+1);const e={};if(!d.name.trim())e.name="Indica tu nombre";if(!/.+@.+\..+/.test(d.email))e.email="Correo no válido";if(d.via!=="Correo"&&d.phone.replace(/\D/g,"").length<10)e.phone="Teléfono de 10 dígitos";setErr(e);if(Object.keys(e).length)return;setBusy(true);setTimeout(()=>{setBusy(false);setStep(3)},1600)};
  const titles=["¿En qué podemos ayudarte?","Cuéntanos brevemente sobre tu situación","¿Cómo prefieres que te contactemos?"];
  return <Modal open={open} onClose={onClose} width={760} label="Consulta inicial"><div style={{padding:"clamp(28px,5vw,56px)",paddingTop:30}}>
    {step<3?<React.Fragment>
      <div style={{display:"flex",gap:6,marginBottom:36,maxWidth:"calc(100% - 60px)"}}>{[0,1,2].map(i=><div key={i} style={{flex:1}}><div style={{height:1,background:i<=step?"var(--accent)":"var(--line-light-strong)",transition:"background 500ms"}}></div><div style={{fontSize:10,letterSpacing:".2em",marginTop:10,color:i===step?"var(--accent-on-light)":"var(--fg-on-light-muted)"}}>PASO {i+1}</div></div>)}</div>
      <div key={step} style={{animation:"mxFade 500ms var(--ease-reveal)"}}><H size={34} style={{marginBottom:28}}>{titles[step]}</H>
      {step===0&&<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:8}}>{TOPICS.map(([i,l])=><ChoiceTile key={l} icon={i} label={l} selected={d.topic===l} onClick={()=>setD({...d,topic:l})}/>)}</div>}
      {step===1&&<div><TextField label={"Asunto · "+d.topic} multiline rows={6} value={d.text} onChange={up("text")} placeholder="Describe el contexto, las partes involucradas y lo que buscas lograr."/><div style={{fontSize:12,color:"var(--fg-on-light-muted)",marginTop:10,display:"flex",gap:8,alignItems:"center"}}><Icon name="lock" size={13}/>La información que compartas es confidencial.</div></div>}
      {step===2&&<div style={{display:"grid",gap:26}}><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8}}>{[["message-circle","WhatsApp"],["phone","Teléfono"],["mail","Correo"]].map(([i,l])=><ChoiceTile key={l} icon={i} label={l} selected={d.via===l} onClick={()=>setD({...d,via:l})}/>)}</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:24}}><TextField label="Nombre" value={d.name} onChange={up("name")} error={err.name}/><TextField label="Empresa" value={d.company} onChange={up("company")}/><TextField label="Correo" type="email" value={d.email} onChange={up("email")} error={err.email}/><TextField label="Teléfono" type="tel" value={d.phone} onChange={up("phone")} error={err.phone}/></div></div>}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:40,gap:16}}>{step>0?<Button tone="light" variant="link" onClick={()=>setStep(step-1)}>Regresar</Button>:<span/>}<Button disabled={!can||busy} onClick={next}>{busy?"Enviando…":step===2?"Enviar solicitud":"Continuar"}</Button></div>
    </React.Fragment>:<div style={{textAlign:"center",padding:"40px 0 20px",animation:"mxFade 800ms var(--ease-reveal)"}}>
      <div style={{width:72,height:72,margin:"0 auto",border:"1px solid var(--accent)",borderRadius:"50%",display:"grid",placeItems:"center",color:"var(--accent)"}}><Icon name="check" size={28} strokeWidth={1}/></div>
      <Eyebrow style={{justifyContent:"center",marginTop:32}}>Solicitud recibida</Eyebrow><H size={34} style={{margin:"18px auto 18px",maxWidth:520}}>Gracias, {d.name.split(" ")[0]}.</H>
      <p style={{color:"var(--fg-on-light-muted)",maxWidth:480,margin:"0 auto 12px"}}>Hemos recibido tu solicitud. Nuestro equipo revisará la información y te contactará para coordinar una conversación inicial.</p>
      <p style={{fontSize:12,letterSpacing:".14em",textTransform:"uppercase",color:"var(--fg-on-light-muted)"}}>Folio MX-{String(Date.now()).slice(-6)} · Contacto por {d.via}</p>
      <div style={{marginTop:28}}><Button tone="light" variant="outline" arrow={false} onClick={onClose}>Cerrar</Button></div></div>}
  </div></Modal>;
}
Object.assign(window,{ServiceDetail,CaseDetail,Profile,Article,Consulta});
})();