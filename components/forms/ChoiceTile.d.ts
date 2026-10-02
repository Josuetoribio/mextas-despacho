/** Selectable option tile (radio-like) for multi-step forms. */
export interface ChoiceTileProps{ icon?:string; label:string; selected?:boolean; onClick?:()=>void; tone?:"light"|"dark"; style?:React.CSSProperties; }
export function ChoiceTile(props:ChoiceTileProps):JSX.Element;