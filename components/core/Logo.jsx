import React from "react";
export function Logo({tone="dark",size=34,style}){
  const c=tone==="dark"?"var(--fg-on-dark)":"var(--fg-on-light)";
  return React.createElement("div",{style:{display:"inline-flex",flexDirection:"column",lineHeight:1,color:c,...style}},
    React.createElement("span",{style:{fontFamily:"var(--font-sans)",fontWeight:300,fontSize:size,letterSpacing:"var(--tracking-logo)",marginRight:"-.42em"}},"MEXTAS"),
    React.createElement("span",{style:{fontFamily:"var(--font-sans)",fontWeight:500,fontSize:Math.max(8,size*.26),letterSpacing:".38em",marginTop:size*.22,opacity:.85}},"DESPACHO JURÍDICO"));
}