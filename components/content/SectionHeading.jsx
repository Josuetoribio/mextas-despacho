import React from "react";
import { Eyebrow } from "../core/Eyebrow.jsx";
export function SectionHeading({eyebrow,title,accent,tone="light",rule=true,size="h2",align="left",style}){
  const c=tone==="dark"?"var(--fg-on-dark)":"var(--fg-on-light)";
  return React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:22,alignItems:align==="center"?"center":"flex-start",textAlign:align,...style}},
    eyebrow&&React.createElement(Eyebrow,{tone:tone==="dark"?"dark":"light"},eyebrow),
    React.createElement("h2",{style:{margin:0,fontFamily:"var(--font-serif)",fontWeight:400,fontSize:size==="h1"?"var(--fs-h1)":"var(--fs-h2)",lineHeight:"var(--lh-heading)",letterSpacing:"-.01em",color:c,textWrap:"balance"}},title,accent&&React.createElement("span",{style:{color:"var(--accent)"}}," "+accent)),
    rule&&React.createElement("span",{style:{width:36,height:1,background:"var(--accent)",marginTop:6}}));
}