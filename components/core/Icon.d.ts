import * as React from "react";
/** Thin-stroke Lucide icon. Requires lucide UMD (https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js) on the page. */
export interface IconProps extends React.SVGProps<SVGSVGElement>{ /** kebab-case lucide name, e.g. "arrow-right" */ name:string; size?:number; strokeWidth?:number; color?:string; }
export function Icon(props:IconProps):JSX.Element;