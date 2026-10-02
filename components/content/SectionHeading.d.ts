/** Eyebrow + serif title + short bronze rule. */
export interface SectionHeadingProps{ eyebrow?:string; title:React.ReactNode; accent?:string; tone?:"light"|"dark"; rule?:boolean; size?:"h1"|"h2"; align?:"left"|"center"; style?:React.CSSProperties; }
export function SectionHeading(props:SectionHeadingProps):JSX.Element;