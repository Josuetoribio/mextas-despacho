import React from "react";
import { Icon } from "../core/Icon.jsx";
export function TeamCard({photo,name,role,linkedin="#",email,onClick,style}){
  const [h,setH]=React.useState(false);
  const ic={display:"inline-flex",color:"var(--fg-on-light-muted)",padding:4};
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:14,textAlign:"center",...style}},
    React.createElement("button",{onClick,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),"aria-label":"Ver perfil de "+name,style:{all:"unset",cursor:"pointer",display:"block",aspectRatio:"4/3.6",overflow:"hidden",background:"var(--carbon-800)"}},
      React.createElement("img",{src:photo,alt:"Retrato de "+name,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"50% 22%",display:"block",transform:h?"scale(1.03)":"scale(1)",transition:"transform var(--dur-cinematic) var(--ease-reveal)"}})),
    React.createElement("div",null,
      React.createElement("div",{style:{fontSize:14,fontWeight:600,color:"var(--fg-on-light)"}},name),
      React.createElement("div",{style:{fontSize:12,color:"var(--fg-on-light-muted)",marginTop:3}},role)),
    React.createElement("div",{style:{display:"flex",justifyContent:"center",gap:10}},
      React.createElement("a",{href:linkedin,"aria-label":"LinkedIn de "+name,style:ic},React.createElement(Icon,{name:"linkedin",size:15})),
      React.createElement("a",{href:email?"mailto:"+email:"#","aria-label":"Correo de "+name,style:ic},React.createElement(Icon,{name:"mail",size:15}))));
}