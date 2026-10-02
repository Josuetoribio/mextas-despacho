import * as React from "react";
/**
 * Uppercase tracked button with a sliding arrow.
 * @startingPoint section="Core" subtitle="Primary / outline / link buttons" viewport="700x220"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?:"primary"|"outline"|"link"; size?:"sm"|"md"|"lg";
  /** surface the button sits on */ tone?:"dark"|"light";
  arrow?:boolean; icon?:string; as?:"button"|"a"; href?:string;
}
export function Button(props:ButtonProps):JSX.Element;