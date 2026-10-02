/** Overlay shell: centered dialog, right drawer, or fullscreen. Esc + scrim close. */
export interface ModalProps{ open:boolean; onClose?:()=>void; variant?:"dialog"|"drawer"|"fullscreen"; tone?:"light"|"dark"; width?:number; label?:string; children?:React.ReactNode; }
export function Modal(props:ModalProps):JSX.Element|null;