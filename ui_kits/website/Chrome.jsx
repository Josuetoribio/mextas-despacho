(()=>{
const {Button,Logo,Icon}=window.MEXTASDesignSystem_cebba9;
const NAV=[["inicio","Inicio"],["nosotros","Nosotros"],["servicios","Servicios"],["casos","Casos"],["equipo","Equipo"],["blog","Blog"],["contacto","Contacto"]];
function useReveal(){React.useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});const scan=()=>document.querySelectorAll(".mx-reveal:not(.in)").forEach(el=>io.observe(el));scan();const mo=new MutationObserver(scan);mo.observe(document.body,{childList:true,subtree:true});return()=>{io.disconnect();mo.disconnect()}},[])}
function go(id){const el=document.getElementById(id);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:"smooth"})}
function Header({onConsult,onSearch,active}){
  const [s,setS]=React.useState(false);const [m,setM]=React.useState(false);
  React.useEffect(()=>{const f=()=>setS(window.scrollY>40);f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  const link={fontSize:11.5,fontWeight:500,letterSpacing:"var(--tracking-nav)",textTransform:"uppercase",color:"var(--fg-on-dark)",cursor:"pointer"};
  return <React.Fragment><header style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:s?"rgba(9,11,15,.86)":"transparent",backdropFilter:s?"blur(14px) saturate(1.2)":"none",borderBottom:"1px solid "+(s?"var(--line-dark)":"transparent"),transition:"all 600ms var(--ease-institutional)"}}>
    <div className="mx-wrap" style={{display:"flex",alignItems:"center",gap:32,height:s?68:92,transition:"height 600ms var(--ease-institutional)"}}>
      <a onClick={()=>go("inicio")} style={{cursor:"pointer"}} aria-label="MEXTAS — inicio"><Logo size={s?24:28}/></a><span style={{flex:1}}></span>
      <nav className="mx-nav" style={{display:"flex",gap:30}}>{NAV.map(([id,l])=><a key={id} data-active={active===id} onClick={()=>go(id)} style={{...link,color:active===id?"var(--accent)":"var(--fg-on-dark)"}}>{l}</a>)}</nav>
      <button onClick={onSearch} aria-label="Buscar" style={{all:"unset",cursor:"pointer",color:"var(--fg-on-dark)",display:"grid",placeItems:"center",width:40,height:40}} className="mx-hide-sm"><Icon name="search" size={18}/></button>
      <span className="mx-hide-md"><Button variant="outline" size="sm" arrow={false} onClick={onConsult}>Consulta inicial</Button></span>
      <button className="mx-burger" onClick={()=>setM(true)} aria-label="Abrir menú" style={{all:"unset",cursor:"pointer",color:"var(--fg-on-dark)",width:44,height:44,placeItems:"center"}}><Icon name="menu" size={22}/></button>
    </div></header>
    <div style={{position:"fixed",inset:0,zIndex:60,background:"var(--carbon-950)",display:"flex",flexDirection:"column",padding:"28px var(--gutter)",opacity:m?1:0,pointerEvents:m?"auto":"none",transition:"opacity 500ms var(--ease-institutional)"}}>
      <div style={{display:"flex",alignItems:"center"}}><Logo size={24}/><button onClick={()=>setM(false)} aria-label="Cerrar menú" style={{all:"unset",cursor:"pointer",marginLeft:"auto",color:"var(--fg-on-dark)",width:44,height:44,display:"grid",placeItems:"center"}}><Icon name="x" size={22}/></button></div>
      <nav style={{marginTop:56,display:"flex",flexDirection:"column"}}>{NAV.map(([id,l],i)=><a key={id} onClick={()=>{setM(false);setTimeout(()=>go(id),200)}} style={{cursor:"pointer",fontFamily:"var(--font-serif)",fontSize:34,color:"var(--fg-on-dark)",padding:"12px 0",borderBottom:"1px solid var(--line-dark)",display:"flex",gap:18,alignItems:"baseline",transform:m?"none":"translateY(12px)",opacity:m?1:0,transition:"all 700ms var(--ease-reveal) "+(i*50)+"ms"}}><span style={{fontFamily:"var(--font-sans)",fontSize:11,color:"var(--accent)",letterSpacing:".2em"}}>{String(i+1).padStart(2,"0")}</span>{l}</a>)}</nav>
      <div style={{marginTop:"auto",display:"grid",gap:12}}><Button onClick={()=>{setM(false);onConsult()}}>Consulta inicial</Button><Button variant="outline" icon="message-circle" arrow={false} as="a" href="https://wa.me/525512345678">WhatsApp</Button></div>
    </div></React.Fragment>;
}
function SearchOverlay({open,onClose,onPick}){
  const D=window.MX_DATA;const [q,setQ]=React.useState("");const ref=React.useRef();
  React.useEffect(()=>{if(open){setQ("");setTimeout(()=>ref.current&&ref.current.focus(),120)}},[open]);
  React.useEffect(()=>{if(!open)return;const k=e=>e.key==="Escape"&&onClose();window.addEventListener("keydown",k);return()=>window.removeEventListener("keydown",k)},[open]);
  const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const all=[...D.services.map(x=>({type:"Servicio",kind:"service",item:x,title:x.title,text:x.short+" "+x.areas.join(" ")})),...D.articles.map(x=>({type:"Artículo",kind:"article",item:x,title:x.title,text:x.excerpt+" "+x.cat})),...D.cases.map(x=>({type:"Caso",kind:"case",item:x,title:x.title,text:x.summary+" "+x.areas.join(" ")})),...D.team.map(x=>({type:"Equipo",kind:"team",item:x,title:x.name,text:x.role+" "+x.specialty.join(" ")}))];
  const r=q.trim().length<2?[]:all.filter(x=>norm(x.title+" "+x.text).includes(norm(q.trim())));
  const sugg=["Contratos","Marcas","Arbitraje","Fusiones","Compliance"];
  return <div role="dialog" aria-modal="true" aria-label="Buscar" style={{position:"fixed",inset:0,zIndex:90,background:"rgba(7,9,12,.94)",backdropFilter:"blur(10px)",opacity:open?1:0,pointerEvents:open?"auto":"none",transition:"opacity 450ms var(--ease-institutional)",overflowY:"auto"}}>
    <div className="mx-wrap" style={{paddingTop:"12vh",maxWidth:920}}>
      <div style={{display:"flex",alignItems:"center",gap:18,borderBottom:"1px solid var(--line-dark-strong)",paddingBottom:18,color:"var(--fg-on-dark)"}}><Icon name="search" size={24} strokeWidth={1}/>
        <input ref={ref} value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar artículos, servicios o temas legales..." style={{flex:1,background:"transparent",border:"none",outline:"none",color:"var(--fg-on-dark)",fontFamily:"var(--font-serif)",fontSize:"clamp(22px,3vw,36px)"}}/>
        <button onClick={onClose} aria-label="Cerrar búsqueda" style={{all:"unset",cursor:"pointer",width:44,height:44,display:"grid",placeItems:"center"}}><Icon name="x" size={20}/></button></div>
      {q.trim().length<2?<div style={{marginTop:28,display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"}}><span style={{fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"var(--fg-on-dark-muted)",marginRight:8}}>Sugerencias</span>{sugg.map(s=><button key={s} onClick={()=>setQ(s)} style={{all:"unset",cursor:"pointer",padding:"8px 14px",border:"1px solid var(--line-dark)",fontSize:13,color:"var(--fg-on-dark)"}}>{s}</button>)}</div>
      :<div style={{marginTop:20}}><div style={{fontSize:11,letterSpacing:".2em",textTransform:"uppercase",color:"var(--fg-on-dark-muted)",padding:"8px 0"}}>{r.length} resultado{r.length===1?"":"s"}</div>
        {r.map((x,i)=><button key={i} onClick={()=>{onClose();onPick(x.kind,x.item)}} style={{all:"unset",cursor:"pointer",display:"grid",gridTemplateColumns:"110px 1fr auto",gap:20,alignItems:"center",width:"100%",padding:"18px 0",borderBottom:"1px solid var(--line-dark)",color:"var(--fg-on-dark)"}}><span style={{fontSize:10.5,letterSpacing:".2em",textTransform:"uppercase",color:"var(--accent)"}}>{x.type}</span><span style={{fontFamily:"var(--font-serif)",fontSize:21}}>{x.title}</span><Icon name="arrow-up-right" size={16}/></button>)}
        {!r.length&&<p style={{color:"var(--fg-on-dark-muted)"}}>Sin coincidencias. Intenta con otro término o <a style={{color:"var(--accent)"}} href="#contacto" onClick={onClose}>escríbenos directamente</a>.</p>}</div>}
    </div></div>;
}
Object.assign(window,{Header,SearchOverlay,useReveal,mxGo:go});
})();