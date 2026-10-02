import React from "react";
import { Icon } from "../core/Icon.jsx";
export function ServiceCard({icon="briefcase",title,description,cta="Ver más",onClick,style}){
  const [h,setH]=React.useState(false);
  return React.createElement("button",{onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),style:{all:"unset",cursor:"pointer",display:"flex",flexDirection:"column",gap:18,padding:"30px 26px 26px",background:"var(--bg-light-raised)",border:"1px solid "+(h?"var(--line-light-strong)":"var(--line-light)"),boxShadow:h?"var(--shadow-lift)":"none",transform:h?"translateY(-3px)":"none",transition:"all var(--dur-base) var(--ease-institutional)",minHeight:250,boxSizing:"border-box",...style}},
    React.createElement(Icon,{name:icon,size:30,strokeWidth:1,color:"var(--accent)"}),
    React.createElement("h3",{style:{margin:"10px 0 0",fontFamily:"var(--font-sans)",fontSize:14,fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",lineHeight:1.45,color:"var(--fg-on-light)"}},title),
    React.createElement("p",{style:{margin:0,fontSize:13,lineHeight:1.7,color:"var(--fg-on-light-muted)",flex:1}},description),
    React.createElement("span",{style:{display:"inline-flex",alignItems:"center",gap:10,fontSize:11,fontWeight:600,letterSpacing:".16em",textTransform:"uppercase",color:h?"var(--accent-on-light)":"var(--fg-on-light)",transition:"color var(--dur-base)"}},cta,React.createElement("span",{style:{display:"inline-flex",transform:h?"translateX(4px)":"none",transition:"transform var(--dur-base)"}},React.createElement(Icon,{name:"arrow-right",size:14,strokeWidth:1.5}))));
}