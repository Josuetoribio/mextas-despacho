import React from "react";
import { Icon } from "../core/Icon.jsx";
export function Modal({open,onClose,variant="dialog",tone="light",width=720,label,children}){
  const [show,setShow]=React.useState(false);
  React.useEffect(()=>{if(open){requestAnimationFrame(()=>setShow(true));}else setShow(false);},[open]);
  React.useEffect(()=>{if(!open)return;const k=e=>e.key==="Escape"&&onClose&&onClose();window.addEventListener("keydown",k);const o=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{window.removeEventListener("keydown",k);document.body.style.overflow=o;};},[open]);
  if(!open)return null;
  const dark=tone==="dark";
  const drawer=variant==="drawer",full=variant==="fullscreen";
  const panel={position:"relative",background:dark?"var(--bg-dark)":"var(--bg-light)",color:dark?"var(--fg-on-dark)":"var(--fg-on-light)",boxShadow:"var(--shadow-modal)",overflowY:"auto",transition:"transform var(--dur-slow) var(--ease-reveal),opacity var(--dur-slow) var(--ease-reveal)",
    ...(drawer?{marginLeft:"auto",height:"100%",width:"min("+width+"px,100%)",transform:show?"none":"translateX(40px)",opacity:show?1:0}:full?{width:"100%",height:"100%",transform:show?"none":"translateY(24px)",opacity:show?1:0}:{width:"min("+width+"px,calc(100% - 32px))",maxHeight:"calc(100% - 64px)",margin:"auto",transform:show?"none":"translateY(18px)",opacity:show?1:0})};
  return React.createElement("div",{role:"dialog","aria-modal":true,"aria-label":label,style:{position:"fixed",inset:0,zIndex:100,display:"flex"}},
    React.createElement("div",{onClick:onClose,style:{position:"absolute",inset:0,background:"rgba(7,9,12,.72)",backdropFilter:"blur(6px)",opacity:show?1:0,transition:"opacity var(--dur-slow)"}}),
    React.createElement("div",{style:panel},
      React.createElement("button",{onClick:onClose,"aria-label":"Cerrar",style:{all:"unset",cursor:"pointer",position:"sticky",top:18,float:"right",marginRight:18,zIndex:2,width:44,height:44,display:"grid",placeItems:"center",border:"1px solid "+(dark?"var(--line-dark-strong)":"var(--line-light-strong)"),background:dark?"rgba(11,14,18,.6)":"rgba(247,245,241,.8)",color:"inherit"}},React.createElement(Icon,{name:"x",size:18})),
      children));
}