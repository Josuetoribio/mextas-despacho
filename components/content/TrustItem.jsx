import React from "react";
import { Icon } from "../core/Icon.jsx";
export function TrustItem({icon,title,text,style}){
  return React.createElement("div",{style:{display:"flex",gap:18,alignItems:"flex-start",...style}},
    React.createElement(Icon,{name:icon,size:34,strokeWidth:1,color:"var(--accent)"}),
    React.createElement("div",null,
      React.createElement("div",{style:{fontSize:11,fontWeight:600,letterSpacing:".16em",textTransform:"uppercase",color:"var(--fg-on-dark)"}},title),
      React.createElement("div",{style:{fontSize:12.5,lineHeight:1.6,color:"var(--fg-on-dark-muted)",marginTop:6,maxWidth:210}},text)));
}