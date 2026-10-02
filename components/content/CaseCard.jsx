import React from "react";
import { Icon } from "../core/Icon.jsx";
export function CaseCard({image,title,summary,cta="Ver caso",onClick,style}){
  const [h,setH]=React.useState(false);
  return React.createElement("button",{onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),style:{all:"unset",cursor:"pointer",display:"flex",flexDirection:"column",background:"var(--bg-dark-raised)",border:"1px solid "+(h?"var(--line-dark-strong)":"var(--line-dark)"),transition:"border-color var(--dur-base)",boxSizing:"border-box",...style}},
    React.createElement("div",{style:{aspectRatio:"16/11",overflow:"hidden"}},React.createElement("img",{src:image,alt:title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block",transform:h?"scale(1.035)":"scale(1)",filter:h?"none":"saturate(.85)",transition:"transform var(--dur-cinematic) var(--ease-reveal),filter var(--dur-slow)"}})),
    React.createElement("div",{style:{padding:"20px 20px 22px",display:"flex",flexDirection:"column",gap:8}},
      React.createElement("h3",{style:{margin:0,fontSize:14,fontWeight:600,color:"var(--fg-on-dark)"}},title),
      React.createElement("p",{style:{margin:0,fontSize:12.5,lineHeight:1.6,color:"var(--fg-on-dark-muted)"}},summary),
      React.createElement("span",{style:{marginTop:10,display:"inline-flex",alignItems:"center",gap:10,fontSize:10.5,fontWeight:600,letterSpacing:".16em",textTransform:"uppercase",color:h?"var(--accent)":"var(--fg-on-dark)"}},cta,React.createElement("span",{style:{display:"inline-flex",transform:h?"translateX(4px)":"none",transition:"transform var(--dur-base)"}},React.createElement(Icon,{name:"arrow-right",size:13,strokeWidth:1.5})))));
}