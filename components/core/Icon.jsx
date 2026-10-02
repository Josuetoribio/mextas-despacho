import React from "react";
const toPascal=s=>s.replace(/(^|-)([a-z0-9])/g,(_,a,b)=>b.toUpperCase());
export function Icon({name,size=20,strokeWidth=1.25,color="currentColor",style,...rest}){
  const lib=typeof window!=="undefined"&&window.lucide&&window.lucide.icons;
  let node=lib&&(lib[toPascal(name)]||lib[name]);
  if(node&&node[0]==="svg")node=node[2];
  return React.createElement("svg",{width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:color,strokeWidth,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":true,style:{flexShrink:0,display:"block",...style},...rest},
    (node||[]).map(([tag,attrs],i)=>React.createElement(tag,{key:i,...attrs})));
}