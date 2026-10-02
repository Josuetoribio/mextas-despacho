(()=>{
const {Button,TrustItem}=window.MEXTASDesignSystem_cebba9;
function Hero({onConsult}){
  const img=React.useRef();const [on,setOn]=React.useState(false);
  React.useEffect(()=>{requestAnimationFrame(()=>setOn(true));const f=()=>{if(img.current)img.current.style.transform="translate3d(0,"+(window.scrollY*.18)+"px,0)"};window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  const r=(d)=>({opacity:on?1:0,transform:on?"none":"translateY(26px)",transition:"opacity 1.2s var(--ease-reveal) "+d+"ms,transform 1.2s var(--ease-reveal) "+d+"ms"});
  return <section id="inicio" data-screen-label="Hero" style={{position:"relative",minHeight:"min(100vh,860px)",background:"var(--carbon-950)",overflow:"hidden",display:"flex",flexDirection:"column"}}>
    <div ref={img} style={{position:"absolute",inset:"-4% 0 0 0",willChange:"transform"}}><img src="../../assets/img/hero-recepcion.png" alt="Recepción del despacho MEXTAS: muro de piedra iluminado, escalera y mostrador de mármol negro" style={{width:"100%",height:"108%",objectFit:"cover",objectPosition:"62% 50%",animation:"mxKen 9s var(--ease-reveal) both"}}/></div>
    <div style={{position:"absolute",inset:0,background:"var(--scrim-hero)"}}></div>
    <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(7,9,12,.9),rgba(7,9,12,0) 35%)"}}></div>
    <div className="mx-wrap" style={{position:"relative",flex:1,display:"flex",alignItems:"center",paddingTop:140,paddingBottom:80,width:"100%",boxSizing:"border-box"}}>
      <div style={{maxWidth:620,color:"var(--fg-on-dark)"}}>
        <div style={{...r(100),fontSize:11,fontWeight:600,letterSpacing:".32em"}}>ESTRATEGIA. EXPERIENCIA. RESULTADOS.</div>
        <h1 style={{...r(250),fontFamily:"var(--font-serif)",fontWeight:400,fontSize:"var(--fs-display)",lineHeight:1.04,letterSpacing:"-.015em",margin:"26px 0 28px",textWrap:"balance"}}>Soluciones legales que <span style={{color:"var(--accent)",fontStyle:"italic"}}>impulsan</span> tu negocio.</h1>
        <p style={{...r(420),fontSize:"clamp(15px,1.3vw,17px)",lineHeight:1.75,color:"rgba(243,240,234,.82)",maxWidth:470,margin:0}}>En MEXTAS ofrecemos asesoría jurídica estratégica y personalizada para empresas y personas que buscan avanzar con confianza.</p>
        <div className="mx-cta-row" style={{...r(560),display:"flex",gap:32,alignItems:"center",marginTop:40}}><Button size="lg" onClick={onConsult}>Agendar consulta</Button><Button variant="link" onClick={()=>window.mxGo("nosotros")}>Conocer más</Button></div>
      </div></div>
    <div style={{position:"relative",borderTop:"1px solid var(--line-dark)",background:"rgba(9,11,15,.72)",backdropFilter:"blur(8px)"}}><div className="mx-wrap mx-trust">
      {[["shield-check","Confidencialidad","Manejamos tu información con la máxima reserva."],["target","Estrategia legal","Diseñamos soluciones a la medida de tus objetivos."],["award","Experiencia comprobada","Más de 15 años asesorando empresas y particulares."],["scale","Compromiso total","Defendemos tus intereses como si fueran nuestros."]].map(([i,t,x],k)=><div key={t} style={r(700+k*90)}><TrustItem icon={i} title={t} text={x}/></div>)}
    </div></div></section>;
}
window.Hero=Hero;
})();