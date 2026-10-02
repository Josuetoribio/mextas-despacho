/* @ds-bundle: {"format":4,"namespace":"MEXTASDesignSystem_cebba9","components":[{"name":"CaseCard","sourcePath":"components/content/CaseCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"TeamCard","sourcePath":"components/content/TeamCard.jsx"},{"name":"TrustItem","sourcePath":"components/content/TrustItem.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"ChoiceTile","sourcePath":"components/forms/ChoiceTile.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"}],"sourceHashes":{"components/content/CaseCard.jsx":"dd98cb5cfd90","components/content/SectionHeading.jsx":"e2a77d56f252","components/content/ServiceCard.jsx":"89c4d5fcca66","components/content/TeamCard.jsx":"eccbafc5aa95","components/content/TrustItem.jsx":"26428f0f6ca3","components/core/Button.jsx":"d963e8fde41e","components/core/Eyebrow.jsx":"29127a437da3","components/core/Icon.jsx":"9f212dcbadcd","components/core/Logo.jsx":"3dccac4e3651","components/forms/ChoiceTile.jsx":"553afa927da9","components/forms/TextField.jsx":"9567afda6714","components/overlay/Modal.jsx":"45b5f1c2c380","ui_kits/website/Chrome.jsx":"20cf4c9ee945","ui_kits/website/Footer.jsx":"da810194e94b","ui_kits/website/Hero.jsx":"8e223b10aef5","ui_kits/website/Overlays.jsx":"64ff6118bb0d","ui_kits/website/Sections.jsx":"75433e3c3de6","ui_kits/website/data.js":"dbf0187e657b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MEXTASDesignSystem_cebba9 = window.MEXTASDesignSystem_cebba9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = "light",
  rule = false,
  style
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: tone === "dark" ? "var(--fg-on-dark)" : "var(--accent-on-light)",
      ...style
    }
  }, rule && React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: "var(--accent)"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  accent,
  tone = "light",
  rule = true,
  size = "h2",
  align = "left",
  style
}) {
  const c = tone === "dark" ? "var(--fg-on-dark)" : "var(--fg-on-light)";
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, eyebrow && React.createElement(__ds_scope.Eyebrow, {
    tone: tone === "dark" ? "dark" : "light"
  }, eyebrow), React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: size === "h1" ? "var(--fs-h1)" : "var(--fs-h2)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "-.01em",
      color: c,
      textWrap: "balance"
    }
  }, title, accent && React.createElement("span", {
    style: {
      color: "var(--accent)"
    }
  }, " " + accent)), rule && React.createElement("span", {
    style: {
      width: 36,
      height: 1,
      background: "var(--accent)",
      marginTop: 6
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const toPascal = s => s.replace(/(^|-)([a-z0-9])/g, (_, a, b) => b.toUpperCase());
function Icon({
  name,
  size = 20,
  strokeWidth = 1.25,
  color = "currentColor",
  style,
  ...rest
}) {
  const lib = typeof window !== "undefined" && window.lucide && window.lucide.icons;
  let node = lib && (lib[toPascal(name)] || lib[name]);
  if (node && node[0] === "svg") node = node[2];
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    style: {
      flexShrink: 0,
      display: "block",
      ...style
    },
    ...rest
  }, (node || []).map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/CaseCard.jsx
try { (() => {
function CaseCard({
  image,
  title,
  summary,
  cta = "Ver caso",
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return React.createElement("button", {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-dark-raised)",
      border: "1px solid " + (h ? "var(--line-dark-strong)" : "var(--line-dark)"),
      transition: "border-color var(--dur-base)",
      boxSizing: "border-box",
      ...style
    }
  }, React.createElement("div", {
    style: {
      aspectRatio: "16/11",
      overflow: "hidden"
    }
  }, React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: h ? "scale(1.035)" : "scale(1)",
      filter: h ? "none" : "saturate(.85)",
      transition: "transform var(--dur-cinematic) var(--ease-reveal),filter var(--dur-slow)"
    }
  })), React.createElement("div", {
    style: {
      padding: "20px 20px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 14,
      fontWeight: 600,
      color: "var(--fg-on-dark)"
    }
  }, title), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      lineHeight: 1.6,
      color: "var(--fg-on-dark-muted)"
    }
  }, summary), React.createElement("span", {
    style: {
      marginTop: 10,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: h ? "var(--accent)" : "var(--fg-on-dark)"
    }
  }, cta, React.createElement("span", {
    style: {
      display: "inline-flex",
      transform: h ? "translateX(4px)" : "none",
      transition: "transform var(--dur-base)"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 13,
    strokeWidth: 1.5
  })))));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon = "briefcase",
  title,
  description,
  cta = "Ver más",
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return React.createElement("button", {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      all: "unset",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "30px 26px 26px",
      background: "var(--bg-light-raised)",
      border: "1px solid " + (h ? "var(--line-light-strong)" : "var(--line-light)"),
      boxShadow: h ? "var(--shadow-lift)" : "none",
      transform: h ? "translateY(-3px)" : "none",
      transition: "all var(--dur-base) var(--ease-institutional)",
      minHeight: 250,
      boxSizing: "border-box",
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    strokeWidth: 1,
    color: "var(--accent)"
  }), React.createElement("h3", {
    style: {
      margin: "10px 0 0",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      lineHeight: 1.45,
      color: "var(--fg-on-light)"
    }
  }, title), React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.7,
      color: "var(--fg-on-light-muted)",
      flex: 1
    }
  }, description), React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: h ? "var(--accent-on-light)" : "var(--fg-on-light)",
      transition: "color var(--dur-base)"
    }
  }, cta, React.createElement("span", {
    style: {
      display: "inline-flex",
      transform: h ? "translateX(4px)" : "none",
      transition: "transform var(--dur-base)"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14,
    strokeWidth: 1.5
  }))));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TeamCard.jsx
try { (() => {
function TeamCard({
  photo,
  name,
  role,
  linkedin = "#",
  email,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const ic = {
    display: "inline-flex",
    color: "var(--fg-on-light-muted)",
    padding: 4
  };
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      textAlign: "center",
      ...style
    }
  }, React.createElement("button", {
    onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-label": "Ver perfil de " + name,
    style: {
      all: "unset",
      cursor: "pointer",
      display: "block",
      aspectRatio: "4/3.6",
      overflow: "hidden",
      background: "var(--carbon-800)"
    }
  }, React.createElement("img", {
    src: photo,
    alt: "Retrato de " + name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "50% 22%",
      display: "block",
      transform: h ? "scale(1.03)" : "scale(1)",
      transition: "transform var(--dur-cinematic) var(--ease-reveal)"
    }
  })), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--fg-on-light)"
    }
  }, name), React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--fg-on-light-muted)",
      marginTop: 3
    }
  }, role)), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 10
    }
  }, React.createElement("a", {
    href: linkedin,
    "aria-label": "LinkedIn de " + name,
    style: ic
  }, React.createElement(__ds_scope.Icon, {
    name: "linkedin",
    size: 15
  })), React.createElement("a", {
    href: email ? "mailto:" + email : "#",
    "aria-label": "Correo de " + name,
    style: ic
  }, React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 15
  }))));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TrustItem.jsx
try { (() => {
function TrustItem({
  icon,
  title,
  text,
  style
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      alignItems: "flex-start",
      ...style
    }
  }, React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 34,
    strokeWidth: 1,
    color: "var(--accent)"
  }), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--fg-on-dark)"
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.6,
      color: "var(--fg-on-dark-muted)",
      marginTop: 6,
      maxWidth: 210
    }
  }, text)));
}
Object.assign(__ds_scope, { TrustItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TrustItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,
  fontFamily: "var(--font-sans)",
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: "var(--tracking-button)",
  textTransform: "uppercase",
  cursor: "pointer",
  borderRadius: "var(--radius-1)",
  transition: "background var(--dur-base) var(--ease-institutional),color var(--dur-base),border-color var(--dur-base)",
  whiteSpace: "nowrap",
  textDecoration: "none"
};
function Button({
  variant = "primary",
  size = "md",
  tone = "dark",
  arrow = true,
  icon,
  disabled,
  children,
  style,
  as = "button",
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const pad = size === "sm" ? "11px 18px" : size === "lg" ? "19px 34px" : "15px 26px";
  const onDark = tone === "dark";
  const v = {
    primary: {
      background: h ? "var(--accent-hover)" : "var(--accent)",
      color: "var(--carbon-950)",
      border: "1px solid transparent"
    },
    outline: {
      background: h ? onDark ? "var(--fg-on-dark)" : "var(--fg-on-light)" : "transparent",
      color: h ? onDark ? "var(--carbon-900)" : "var(--ivory-50)" : onDark ? "var(--fg-on-dark)" : "var(--fg-on-light)",
      border: "1px solid " + (onDark ? "var(--line-dark-strong)" : "var(--line-light-strong)")
    },
    link: {
      background: "transparent",
      color: h ? "var(--accent)" : onDark ? "var(--fg-on-dark)" : "var(--fg-on-light)",
      border: "none",
      padding: "6px 0",
      borderBottom: "1px solid var(--accent)",
      borderRadius: 0
    }
  }[variant];
  return React.createElement(as, {
    ...rest,
    disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...base,
      padding: pad,
      ...v,
      ...(disabled ? {
        opacity: .4,
        pointerEvents: "none"
      } : {}),
      ...style
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, arrow && variant !== "link" && React.createElement("span", {
    style: {
      display: "inline-flex",
      transform: h ? "translateX(4px)" : "none",
      transition: "transform var(--dur-base) var(--ease-institutional)"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 15,
    strokeWidth: 1.5
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  tone = "dark",
  size = 34,
  style
}) {
  const c = tone === "dark" ? "var(--fg-on-dark)" : "var(--fg-on-light)";
  return React.createElement("div", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      lineHeight: 1,
      color: c,
      ...style
    }
  }, React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: size,
      letterSpacing: "var(--tracking-logo)",
      marginRight: "-.42em"
    }
  }, "MEXTAS"), React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: Math.max(8, size * .26),
      letterSpacing: ".38em",
      marginTop: size * .22,
      opacity: .85
    }
  }, "DESPACHO JURÍDICO"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceTile.jsx
try { (() => {
function ChoiceTile({
  icon,
  label,
  selected = false,
  onClick,
  tone = "light",
  style
}) {
  const [h, setH] = React.useState(false);
  const dark = tone === "dark";
  return React.createElement("button", {
    type: "button",
    onClick,
    "aria-pressed": selected,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      all: "unset",
      cursor: "pointer",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "16px 18px",
      border: "1px solid " + (selected ? "var(--accent)" : h ? dark ? "var(--line-dark-strong)" : "var(--line-light-strong)" : dark ? "var(--line-dark)" : "var(--line-light)"),
      background: selected ? dark ? "rgba(180,144,94,.08)" : "rgba(180,144,94,.07)" : "transparent",
      color: dark ? "var(--fg-on-dark)" : "var(--fg-on-light)",
      fontSize: 13.5,
      fontWeight: 500,
      transition: "all var(--dur-base) var(--ease-institutional)",
      ...style
    }
  }, icon && React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    strokeWidth: 1.25,
    color: selected ? "var(--accent)" : "currentColor"
  }), React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      border: "1px solid " + (selected ? "var(--accent)" : "currentColor"),
      borderRadius: "50%",
      display: "grid",
      placeItems: "center",
      opacity: selected ? 1 : .4
    }
  }, selected && React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  })));
}
Object.assign(__ds_scope, { ChoiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceTile.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function TextField({
  label,
  tone = "light",
  multiline = false,
  rows = 5,
  error,
  style,
  id,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const dark = tone === "dark";
  const fid = id || "f" + Math.random().toString(36).slice(2, 8);
  const fs = {
    width: "100%",
    boxSizing: "border-box",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid " + (error ? "var(--error-600)" : f ? "var(--accent)" : dark ? "var(--line-dark-strong)" : "var(--line-light-strong)"),
    padding: "10px 0 12px",
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    color: dark ? "var(--fg-on-dark)" : "var(--fg-on-light)",
    outline: "none",
    resize: "vertical",
    transition: "border-color var(--dur-base)"
  };
  return React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, label && React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: f ? "var(--accent)" : dark ? "var(--fg-on-dark-muted)" : "var(--fg-on-light-muted)",
      transition: "color var(--dur-base)"
    }
  }, label), React.createElement(multiline ? "textarea" : "input", {
    id: fid,
    rows: multiline ? rows : undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: fs,
    ...rest
  }), error && React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--error-600)"
    }
  }, error));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  variant = "dialog",
  tone = "light",
  width = 720,
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setShow(true));
    } else setShow(false);
  }, [open]);
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === "Escape" && onClose && onClose();
    window.addEventListener("keydown", k);
    const o = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = o;
    };
  }, [open]);
  if (!open) return null;
  const dark = tone === "dark";
  const drawer = variant === "drawer",
    full = variant === "fullscreen";
  const panel = {
    position: "relative",
    background: dark ? "var(--bg-dark)" : "var(--bg-light)",
    color: dark ? "var(--fg-on-dark)" : "var(--fg-on-light)",
    boxShadow: "var(--shadow-modal)",
    overflowY: "auto",
    transition: "transform var(--dur-slow) var(--ease-reveal),opacity var(--dur-slow) var(--ease-reveal)",
    ...(drawer ? {
      marginLeft: "auto",
      height: "100%",
      width: "min(" + width + "px,100%)",
      transform: show ? "none" : "translateX(40px)",
      opacity: show ? 1 : 0
    } : full ? {
      width: "100%",
      height: "100%",
      transform: show ? "none" : "translateY(24px)",
      opacity: show ? 1 : 0
    } : {
      width: "min(" + width + "px,calc(100% - 32px))",
      maxHeight: "calc(100% - 64px)",
      margin: "auto",
      transform: show ? "none" : "translateY(18px)",
      opacity: show ? 1 : 0
    })
  };
  return React.createElement("div", {
    role: "dialog",
    "aria-modal": true,
    "aria-label": label,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex"
    }
  }, React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(7,9,12,.72)",
      backdropFilter: "blur(6px)",
      opacity: show ? 1 : 0,
      transition: "opacity var(--dur-slow)"
    }
  }), React.createElement("div", {
    style: panel
  }, React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      all: "unset",
      cursor: "pointer",
      position: "sticky",
      top: 18,
      float: "right",
      marginRight: 18,
      zIndex: 2,
      width: 44,
      height: 44,
      display: "grid",
      placeItems: "center",
      border: "1px solid " + (dark ? "var(--line-dark-strong)" : "var(--line-light-strong)"),
      background: dark ? "rgba(11,14,18,.6)" : "rgba(247,245,241,.8)",
      color: "inherit"
    }
  }, React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })), children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
(() => {
  const {
    Button,
    Logo,
    Icon
  } = window.MEXTASDesignSystem_cebba9;
  const NAV = [["inicio", "Inicio"], ["nosotros", "Nosotros"], ["servicios", "Servicios"], ["casos", "Casos"], ["equipo", "Equipo"], ["blog", "Blog"], ["contacto", "Contacto"]];
  function useReveal() {
    React.useEffect(() => {
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }), {
        threshold: .12,
        rootMargin: "0px 0px -40px 0px"
      });
      const scan = () => document.querySelectorAll(".mx-reveal:not(.in)").forEach(el => io.observe(el));
      scan();
      const mo = new MutationObserver(scan);
      mo.observe(document.body, {
        childList: true,
        subtree: true
      });
      return () => {
        io.disconnect();
        mo.disconnect();
      };
    }, []);
  }
  function go(id) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 60,
      behavior: "smooth"
    });
  }
  function Header({
    onConsult,
    onSearch,
    active
  }) {
    const [s, setS] = React.useState(false);
    const [m, setM] = React.useState(false);
    React.useEffect(() => {
      const f = () => setS(window.scrollY > 40);
      f();
      window.addEventListener("scroll", f, {
        passive: true
      });
      return () => window.removeEventListener("scroll", f);
    }, []);
    const link = {
      fontSize: 11.5,
      fontWeight: 500,
      letterSpacing: "var(--tracking-nav)",
      textTransform: "uppercase",
      color: "var(--fg-on-dark)",
      cursor: "pointer"
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: s ? "rgba(9,11,15,.86)" : "transparent",
        backdropFilter: s ? "blur(14px) saturate(1.2)" : "none",
        borderBottom: "1px solid " + (s ? "var(--line-dark)" : "transparent"),
        transition: "all 600ms var(--ease-institutional)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 32,
        height: s ? 68 : 92,
        transition: "height 600ms var(--ease-institutional)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go("inicio"),
      style: {
        cursor: "pointer"
      },
      "aria-label": "MEXTAS \u2014 inicio"
    }, /*#__PURE__*/React.createElement(Logo, {
      size: s ? 24 : 28
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("nav", {
      className: "mx-nav",
      style: {
        display: "flex",
        gap: 30
      }
    }, NAV.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
      key: id,
      "data-active": active === id,
      onClick: () => go(id),
      style: {
        ...link,
        color: active === id ? "var(--accent)" : "var(--fg-on-dark)"
      }
    }, l))), /*#__PURE__*/React.createElement("button", {
      onClick: onSearch,
      "aria-label": "Buscar",
      style: {
        all: "unset",
        cursor: "pointer",
        color: "var(--fg-on-dark)",
        display: "grid",
        placeItems: "center",
        width: 40,
        height: 40
      },
      className: "mx-hide-sm"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      className: "mx-hide-md"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      arrow: false,
      onClick: onConsult
    }, "Consulta inicial")), /*#__PURE__*/React.createElement("button", {
      className: "mx-burger",
      onClick: () => setM(true),
      "aria-label": "Abrir men\xFA",
      style: {
        all: "unset",
        cursor: "pointer",
        color: "var(--fg-on-dark)",
        width: 44,
        height: 44,
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "menu",
      size: 22
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "var(--carbon-950)",
        display: "flex",
        flexDirection: "column",
        padding: "28px var(--gutter)",
        opacity: m ? 1 : 0,
        pointerEvents: m ? "auto" : "none",
        transition: "opacity 500ms var(--ease-institutional)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 24
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setM(false),
      "aria-label": "Cerrar men\xFA",
      style: {
        all: "unset",
        cursor: "pointer",
        marginLeft: "auto",
        color: "var(--fg-on-dark)",
        width: 44,
        height: 44,
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 22
    }))), /*#__PURE__*/React.createElement("nav", {
      style: {
        marginTop: 56,
        display: "flex",
        flexDirection: "column"
      }
    }, NAV.map(([id, l], i) => /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => {
        setM(false);
        setTimeout(() => go(id), 200);
      },
      style: {
        cursor: "pointer",
        fontFamily: "var(--font-serif)",
        fontSize: 34,
        color: "var(--fg-on-dark)",
        padding: "12px 0",
        borderBottom: "1px solid var(--line-dark)",
        display: "flex",
        gap: 18,
        alignItems: "baseline",
        transform: m ? "none" : "translateY(12px)",
        opacity: m ? 1 : 0,
        transition: "all 700ms var(--ease-reveal) " + i * 50 + "ms"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        color: "var(--accent)",
        letterSpacing: ".2em"
      }
    }, String(i + 1).padStart(2, "0")), l))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        display: "grid",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setM(false);
        onConsult();
      }
    }, "Consulta inicial"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "message-circle",
      arrow: false,
      as: "a",
      href: "https://wa.me/525512345678"
    }, "WhatsApp"))));
  }
  function SearchOverlay({
    open,
    onClose,
    onPick
  }) {
    const D = window.MX_DATA;
    const [q, setQ] = React.useState("");
    const ref = React.useRef();
    React.useEffect(() => {
      if (open) {
        setQ("");
        setTimeout(() => ref.current && ref.current.focus(), 120);
      }
    }, [open]);
    React.useEffect(() => {
      if (!open) return;
      const k = e => e.key === "Escape" && onClose();
      window.addEventListener("keydown", k);
      return () => window.removeEventListener("keydown", k);
    }, [open]);
    const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const all = [...D.services.map(x => ({
      type: "Servicio",
      kind: "service",
      item: x,
      title: x.title,
      text: x.short + " " + x.areas.join(" ")
    })), ...D.articles.map(x => ({
      type: "Artículo",
      kind: "article",
      item: x,
      title: x.title,
      text: x.excerpt + " " + x.cat
    })), ...D.cases.map(x => ({
      type: "Caso",
      kind: "case",
      item: x,
      title: x.title,
      text: x.summary + " " + x.areas.join(" ")
    })), ...D.team.map(x => ({
      type: "Equipo",
      kind: "team",
      item: x,
      title: x.name,
      text: x.role + " " + x.specialty.join(" ")
    }))];
    const r = q.trim().length < 2 ? [] : all.filter(x => norm(x.title + " " + x.text).includes(norm(q.trim())));
    const sugg = ["Contratos", "Marcas", "Arbitraje", "Fusiones", "Compliance"];
    return /*#__PURE__*/React.createElement("div", {
      role: "dialog",
      "aria-modal": "true",
      "aria-label": "Buscar",
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 90,
        background: "rgba(7,9,12,.94)",
        backdropFilter: "blur(10px)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transition: "opacity 450ms var(--ease-institutional)",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap",
      style: {
        paddingTop: "12vh",
        maxWidth: 920
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 18,
        borderBottom: "1px solid var(--line-dark-strong)",
        paddingBottom: 18,
        color: "var(--fg-on-dark)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 24,
      strokeWidth: 1
    }), /*#__PURE__*/React.createElement("input", {
      ref: ref,
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Buscar art\xEDculos, servicios o temas legales...",
      style: {
        flex: 1,
        background: "transparent",
        border: "none",
        outline: "none",
        color: "var(--fg-on-dark)",
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(22px,3vw,36px)"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Cerrar b\xFAsqueda",
      style: {
        all: "unset",
        cursor: "pointer",
        width: 44,
        height: 44,
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 20
    }))), q.trim().length < 2 ? /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28,
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--fg-on-dark-muted)",
        marginRight: 8
      }
    }, "Sugerencias"), sugg.map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => setQ(s),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "8px 14px",
        border: "1px solid var(--line-dark)",
        fontSize: 13,
        color: "var(--fg-on-dark)"
      }
    }, s))) : /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--fg-on-dark-muted)",
        padding: "8px 0"
      }
    }, r.length, " resultado", r.length === 1 ? "" : "s"), r.map((x, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => {
        onClose();
        onPick(x.kind, x.item);
      },
      style: {
        all: "unset",
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "110px 1fr auto",
        gap: 20,
        alignItems: "center",
        width: "100%",
        padding: "18px 0",
        borderBottom: "1px solid var(--line-dark)",
        color: "var(--fg-on-dark)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        letterSpacing: ".2em",
        textTransform: "uppercase",
        color: "var(--accent)"
      }
    }, x.type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 21
      }
    }, x.title), /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 16
    }))), !r.length && /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--fg-on-dark-muted)"
      }
    }, "Sin coincidencias. Intenta con otro t\xE9rmino o ", /*#__PURE__*/React.createElement("a", {
      style: {
        color: "var(--accent)"
      },
      href: "#contacto",
      onClick: onClose
    }, "escr\xEDbenos directamente"), "."))));
  }
  Object.assign(window, {
    Header,
    SearchOverlay,
    useReveal,
    mxGo: go
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
(() => {
  const {
    Button,
    Logo,
    Icon,
    Eyebrow
  } = window.MEXTASDesignSystem_cebba9;
  function Contact({
    onConsult
  }) {
    const item = (i, c) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 18,
        padding: "16px 0",
        borderBottom: "1px solid var(--line-dark)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: i,
      size: 18,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: 1.6
      }
    }, c));
    return /*#__PURE__*/React.createElement("section", {
      id: "contacto",
      "data-screen-label": "Contacto",
      style: {
        background: "var(--carbon-950)",
        color: "var(--fg-on-dark)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-contact"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal",
      style: {
        padding: "var(--section-y) var(--gutter)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "dark",
      style: {
        color: "var(--accent)"
      }
    }, "\xBFTienes un caso en mente?"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: "var(--fs-h2)",
        lineHeight: 1.15,
        margin: "22px 0 36px"
      }
    }, "Hablemos y encontremos la mejor soluci\xF3n legal."), /*#__PURE__*/React.createElement("div", {
      className: "mx-cta-row",
      style: {
        display: "flex",
        gap: 14,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onConsult
    }, "Agendar consulta"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "message-circle",
      arrow: false,
      as: "a",
      href: "https://wa.me/525512345678?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta."
    }, "WhatsApp"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        minHeight: 420,
        clipPath: "polygon(10% 0,100% 0,100% 100%,10% 100%,0 50%)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/img/sala-de-juntas.png",
      alt: "Sala de juntas de MEXTAS con vista a la ciudad",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "calc(var(--section-y) * .8) var(--gutter)",
        background: "var(--bg-dark-raised)"
      }
    }, item("phone", /*#__PURE__*/React.createElement("a", {
      href: "tel:+525512345678"
    }, "(55) 1234 5678")), item("mail", /*#__PURE__*/React.createElement("a", {
      href: "mailto:hola@mextas.com.mx"
    }, "hola@mextas.com.mx")), item("map-pin", /*#__PURE__*/React.createElement("span", null, "Av. Reforma 123, Piso 10", /*#__PURE__*/React.createElement("br", null), "Col. Ju\xE1rez, 06600", /*#__PURE__*/React.createElement("br", null), "Ciudad de M\xE9xico, M\xE9xico")), item("clock", /*#__PURE__*/React.createElement("span", null, "Lun \u2013 Vie: 9:00 am \u2013 6:00 pm")), /*#__PURE__*/React.createElement("div", {
      "aria-label": "Mapa estilizado: Paseo de la Reforma, Col. Ju\xE1rez",
      role: "img",
      style: {
        marginTop: 24,
        height: 140,
        position: "relative",
        border: "1px solid var(--line-dark)",
        overflow: "hidden",
        background: "repeating-linear-gradient(90deg,transparent 0 39px,rgba(243,240,234,.05) 39px 40px),repeating-linear-gradient(0deg,transparent 0 39px,rgba(243,240,234,.05) 39px 40px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "-10%",
        right: "-10%",
        top: "55%",
        height: 10,
        background: "rgba(243,240,234,.10)",
        transform: "rotate(-18deg)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "42%",
        top: "-20%",
        bottom: "-20%",
        width: 5,
        background: "rgba(243,240,234,.07)",
        transform: "rotate(24deg)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "52%",
        top: "44%"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--accent)",
        boxShadow: "0 0 0 6px rgba(180,144,94,.18),0 0 0 14px rgba(180,144,94,.08)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 12,
        bottom: 10,
        fontSize: 9.5,
        letterSpacing: ".22em",
        color: "var(--fg-on-dark-muted)"
      }
    }, "PASEO DE LA REFORMA \xB7 JU\xC1REZ")))));
  }
  function Footer() {
    const [e, setE] = React.useState("");
    const [s, setS] = React.useState("idle");
    const sub = ev => {
      ev.preventDefault();
      if (!/.+@.+\..+/.test(e)) {
        setS("err");
        return;
      }
      setS("busy");
      setTimeout(() => setS("ok"), 1200);
    };
    const col = (t, l) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 600,
        letterSpacing: ".22em",
        textTransform: "uppercase",
        marginBottom: 18
      }
    }, t), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "grid",
        gap: 9
      }
    }, l.map(x => /*#__PURE__*/React.createElement("li", {
      key: x
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13,
        color: "var(--fg-on-light-muted)"
      }
    }, x)))));
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--bg-light)",
        padding: "72px 0 32px",
        borderTop: "1px solid var(--line-light)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-footer"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
      tone: "light",
      size: 26
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--fg-on-light-muted)",
        maxWidth: 260,
        margin: "22px 0"
      }
    }, "Asesor\xEDa legal estrat\xE9gica con un enfoque humano y resultados reales."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, ["linkedin", "facebook", "instagram"].map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      "aria-label": n,
      style: {
        width: 36,
        height: 36,
        border: "1px solid var(--line-light)",
        display: "grid",
        placeItems: "center",
        color: "var(--fg-on-light)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n,
      size: 15
    }))))), col("Navegación", ["Inicio", "Nosotros", "Servicios", "Casos", "Equipo", "Blog", "Contacto"]), col("Servicios", ["Derecho Corporativo", "Fusiones y Adquisiciones", "Litigio", "Propiedad Intelectual", "Cumplimiento Normativo"]), col("Recursos", ["Blog", "Guías Legales", "Publicaciones", "Políticas", "Aviso de Privacidad"]), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 600,
        letterSpacing: ".22em",
        textTransform: "uppercase",
        marginBottom: 18
      }
    }, "Bolet\xEDn"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--fg-on-light-muted)",
        margin: "0 0 18px"
      }
    }, "Recibe informaci\xF3n legal relevante para tu negocio."), s === "ok" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        fontSize: 13,
        padding: "13px 0",
        borderBottom: "1px solid var(--accent)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16,
      color: "var(--accent-on-light)"
    }), "Suscripci\xF3n confirmada.") : /*#__PURE__*/React.createElement("form", {
      onSubmit: sub,
      style: {
        display: "flex",
        border: "1px solid " + (s === "err" ? "var(--error-600)" : "var(--line-light-strong)")
      }
    }, /*#__PURE__*/React.createElement("input", {
      "aria-label": "Tu correo electr\xF3nico",
      value: e,
      onChange: x => {
        setE(x.target.value);
        setS("idle");
      },
      placeholder: "Tu correo electr\xF3nico",
      style: {
        flex: 1,
        minWidth: 0,
        border: "none",
        background: "var(--bg-light-raised)",
        padding: "0 14px",
        fontFamily: "inherit",
        fontSize: 13,
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Suscribirme",
      style: {
        width: 48,
        height: 46,
        border: "none",
        background: "var(--carbon-800)",
        color: "var(--fg-on-dark)",
        cursor: "pointer",
        display: "grid",
        placeItems: "center"
      }
    }, s === "busy" ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11
      }
    }, "\xB7\xB7\xB7") : /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }))), s === "err" && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--error-600)",
        marginTop: 6
      }
    }, "Ingresa un correo v\xE1lido."))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56,
        paddingTop: 22,
        borderTop: "1px solid var(--line-light)",
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
        fontSize: 12,
        color: "var(--fg-on-light-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 MEXTAS Despacho Jur\xEDdico. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", null, "Aviso de Privacidad \xB7 T\xE9rminos"))));
  }
  Object.assign(window, {
    Contact,
    Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
(() => {
  const {
    Button,
    TrustItem
  } = window.MEXTASDesignSystem_cebba9;
  function Hero({
    onConsult
  }) {
    const img = React.useRef();
    const [on, setOn] = React.useState(false);
    React.useEffect(() => {
      requestAnimationFrame(() => setOn(true));
      const f = () => {
        if (img.current) img.current.style.transform = "translate3d(0," + window.scrollY * .18 + "px,0)";
      };
      window.addEventListener("scroll", f, {
        passive: true
      });
      return () => window.removeEventListener("scroll", f);
    }, []);
    const r = d => ({
      opacity: on ? 1 : 0,
      transform: on ? "none" : "translateY(26px)",
      transition: "opacity 1.2s var(--ease-reveal) " + d + "ms,transform 1.2s var(--ease-reveal) " + d + "ms"
    });
    return /*#__PURE__*/React.createElement("section", {
      id: "inicio",
      "data-screen-label": "Hero",
      style: {
        position: "relative",
        minHeight: "min(100vh,860px)",
        background: "var(--carbon-950)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      ref: img,
      style: {
        position: "absolute",
        inset: "-4% 0 0 0",
        willChange: "transform"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/img/hero-recepcion.png",
      alt: "Recepci\xF3n del despacho MEXTAS: muro de piedra iluminado, escalera y mostrador de m\xE1rmol negro",
      style: {
        width: "100%",
        height: "108%",
        objectFit: "cover",
        objectPosition: "62% 50%",
        animation: "mxKen 9s var(--ease-reveal) both"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--scrim-hero)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(0deg,rgba(7,9,12,.9),rgba(7,9,12,0) 35%)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap",
      style: {
        position: "relative",
        flex: 1,
        display: "flex",
        alignItems: "center",
        paddingTop: 140,
        paddingBottom: 80,
        width: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 620,
        color: "var(--fg-on-dark)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...r(100),
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: ".32em"
      }
    }, "ESTRATEGIA. EXPERIENCIA. RESULTADOS."), /*#__PURE__*/React.createElement("h1", {
      style: {
        ...r(250),
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: "var(--fs-display)",
        lineHeight: 1.04,
        letterSpacing: "-.015em",
        margin: "26px 0 28px",
        textWrap: "balance"
      }
    }, "Soluciones legales que ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent)",
        fontStyle: "italic"
      }
    }, "impulsan"), " tu negocio."), /*#__PURE__*/React.createElement("p", {
      style: {
        ...r(420),
        fontSize: "clamp(15px,1.3vw,17px)",
        lineHeight: 1.75,
        color: "rgba(243,240,234,.82)",
        maxWidth: 470,
        margin: 0
      }
    }, "En MEXTAS ofrecemos asesor\xEDa jur\xEDdica estrat\xE9gica y personalizada para empresas y personas que buscan avanzar con confianza."), /*#__PURE__*/React.createElement("div", {
      className: "mx-cta-row",
      style: {
        ...r(560),
        display: "flex",
        gap: 32,
        alignItems: "center",
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: onConsult
    }, "Agendar consulta"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => window.mxGo("nosotros")
    }, "Conocer m\xE1s")))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        borderTop: "1px solid var(--line-dark)",
        background: "rgba(9,11,15,.72)",
        backdropFilter: "blur(8px)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap mx-trust"
    }, [["shield-check", "Confidencialidad", "Manejamos tu información con la máxima reserva."], ["target", "Estrategia legal", "Diseñamos soluciones a la medida de tus objetivos."], ["award", "Experiencia comprobada", "Más de 15 años asesorando empresas y particulares."], ["scale", "Compromiso total", "Defendemos tus intereses como si fueran nuestros."]].map(([i, t, x], k) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: r(700 + k * 90)
    }, /*#__PURE__*/React.createElement(TrustItem, {
      icon: i,
      title: t,
      text: x
    }))))));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Overlays.jsx
try { (() => {
(() => {
  const {
    Button,
    Eyebrow,
    Icon,
    Modal,
    TextField,
    ChoiceTile
  } = window.MEXTASDesignSystem_cebba9;
  const H = ({
    children,
    size = 44,
    style
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: size,
      lineHeight: 1.1,
      letterSpacing: "-.01em",
      margin: 0,
      textWrap: "balance",
      ...style
    }
  }, children);
  const Lbl = ({
    children,
    dark
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: dark ? "var(--accent)" : "var(--accent-on-light)",
      marginBottom: 14
    }
  }, children);
  const Tags = ({
    list,
    dark
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, list.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 12,
      padding: "7px 12px",
      border: "1px solid " + (dark ? "var(--line-dark-strong)" : "var(--line-light-strong)")
    }
  }, t)));
  function ServiceDetail({
    item,
    onClose,
    onConsult
  }) {
    const [q, setQ] = React.useState(-1);
    if (!item) return /*#__PURE__*/React.createElement(Modal, {
      open: false
    });
    return /*#__PURE__*/React.createElement(Modal, {
      open: true,
      onClose: onClose,
      variant: "drawer",
      width: 780,
      label: item.title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "clamp(28px,5vw,64px)",
        paddingTop: 24
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 40,
      strokeWidth: 1,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 28
      }
    }), /*#__PURE__*/React.createElement(Eyebrow, null, "Servicios \xB7 ", item.title), /*#__PURE__*/React.createElement(H, {
      style: {
        marginTop: 18
      }
    }, item.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
        gap: 1,
        background: "var(--line-light)",
        border: "1px solid var(--line-light)",
        margin: "44px 0"
      }
    }, item.areas.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: a,
      style: {
        background: "var(--bg-light-raised)",
        padding: "22px 20px",
        display: "flex",
        gap: 14,
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--accent-on-light)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, a)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, null, "Problemas que resolvemos"), item.problems.map(p => /*#__PURE__*/React.createElement("p", {
      key: p,
      style: {
        margin: "0 0 10px",
        paddingLeft: 18,
        position: "relative",
        color: "var(--fg-on-light-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        top: 12,
        width: 8,
        height: 1,
        background: "var(--accent)"
      }
    }), p))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, null, "Tipo de clientes"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--fg-on-light-muted)"
      }
    }, item.clients))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement(Lbl, null, "Proceso de trabajo"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 0,
        flexWrap: "wrap",
        borderTop: "1px solid var(--line-light-strong)"
      }
    }, ["Diagnóstico", "Propuesta", "Ejecución", "Seguimiento"].map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        flex: "1 1 120px",
        padding: "16px 16px 0 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-serif)",
        color: "var(--accent-on-light)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500,
        marginTop: 4
      }
    }, s))))), item.faq.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement(Lbl, null, "Preguntas frecuentes"), item.faq.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        borderTop: "1px solid var(--line-light)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setQ(q === i ? -1 : i),
      "aria-expanded": q === i,
      style: {
        all: "unset",
        cursor: "pointer",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
        padding: "18px 0",
        fontFamily: "var(--font-serif)",
        fontSize: 20
      }
    }, k, /*#__PURE__*/React.createElement("span", {
      style: {
        transform: q === i ? "rotate(45deg)" : "none",
        transition: "transform 300ms"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: q === i ? "1fr" : "0fr",
        transition: "grid-template-rows 400ms var(--ease-institutional)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 20px",
        color: "var(--fg-on-light-muted)"
      }
    }, v)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 56,
        padding: "32px",
        background: "var(--bg-dark)",
        color: "var(--fg-on-dark)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 24,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(H, {
      size: 24
    }, "\xBFTu asunto requiere esta pr\xE1ctica?"), /*#__PURE__*/React.createElement(Button, {
      onClick: onConsult
    }, "Consultar con un especialista"))));
  }
  function CaseDetail({
    item,
    onClose,
    onConsult
  }) {
    if (!item) return /*#__PURE__*/React.createElement(Modal, {
      open: false
    });
    const blocks = [["Desafío", item.challenge], ["Estrategia", item.strategy], ["Intervención legal", item.intervention], ["Resultado", item.result]];
    return /*#__PURE__*/React.createElement(Modal, {
      open: true,
      onClose: onClose,
      variant: "fullscreen",
      tone: "dark",
      label: item.title
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "62vh",
        minHeight: 380,
        marginTop: -62
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: item.title,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        background: "linear-gradient(0deg,var(--bg-dark) 2%,rgba(11,14,18,.3) 60%,rgba(11,14,18,.5))"
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap",
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 40
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "dark",
      rule: true
    }, "Caso \xB7 ", item.areas[0]), /*#__PURE__*/React.createElement(H, {
      size: "clamp(40px,5vw,72px)",
      style: {
        marginTop: 18
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        color: "rgba(243,240,234,.8)",
        margin: "14px 0 0"
      }
    }, item.summary))), /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap",
      style: {
        padding: "48px var(--gutter) 96px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        borderTop: "1px solid var(--line-dark)",
        borderBottom: "1px solid var(--line-dark)"
      }
    }, [["Tipo de cliente", item.client], ["Ubicación", item.location], ["Áreas involucradas", item.areas.join(" · ")]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        padding: "22px 0"
      }
    }, /*#__PURE__*/React.createElement(Lbl, {
      dark: true
    }, k), /*#__PURE__*/React.createElement("div", null, v)))), /*#__PURE__*/React.createElement("div", {
      className: "mx-split",
      style: {
        marginTop: 64,
        gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 44
      }
    }, blocks.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "mx-reveal",
      style: {
        display: "grid",
        gridTemplateColumns: "56px 1fr",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 30,
        color: "var(--accent)"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lbl, {
      dark: true
    }, k), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: i === 3 ? "var(--font-serif)" : "inherit",
        fontSize: i === 3 ? 24 : 16,
        lineHeight: i === 3 ? 1.4 : 1.75,
        color: i === 3 ? "var(--fg-on-dark)" : "var(--fg-on-dark-muted)"
      }
    }, v))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 100
      }
    }, /*#__PURE__*/React.createElement(Lbl, {
      dark: true
    }, "Cronolog\xEDa"), /*#__PURE__*/React.createElement("ol", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        borderLeft: "1px solid var(--line-dark-strong)"
      }
    }, item.timeline.map(([w, t]) => /*#__PURE__*/React.createElement("li", {
      key: w,
      style: {
        position: "relative",
        padding: "0 0 28px 26px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: -5,
        top: 6,
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: "var(--accent)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        color: "var(--fg-on-dark-muted)"
      }
    }, w), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onConsult
    }, "Hablar de un asunto similar"))))));
  }
  function Profile({
    item,
    onClose,
    onConsult
  }) {
    if (!item) return /*#__PURE__*/React.createElement(Modal, {
      open: false
    });
    const row = (k, v) => /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 0",
        borderTop: "1px solid var(--line-light)"
      }
    }, /*#__PURE__*/React.createElement(Lbl, null, k), Array.isArray(v) ? v.map(x => /*#__PURE__*/React.createElement("div", {
      key: x,
      style: {
        marginBottom: 4
      }
    }, x)) : /*#__PURE__*/React.createElement("div", null, v));
    return /*#__PURE__*/React.createElement(Modal, {
      open: true,
      onClose: onClose,
      variant: "drawer",
      width: 900,
      label: item.name
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        marginTop: -62
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--carbon-800)",
        minHeight: 420
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: item.photo,
      alt: "Retrato de " + item.name,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "50% 20%",
        display: "block",
        position: "sticky",
        top: 0,
        maxHeight: "100vh"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "72px clamp(24px,4vw,48px) 56px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, item.role), /*#__PURE__*/React.createElement(H, {
      style: {
        marginTop: 14
      }
    }, item.name), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "22px 0"
      }
    }, /*#__PURE__*/React.createElement(Tags, {
      list: item.specialty
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--fg-on-light-muted)",
        margin: "0 0 28px"
      }
    }, item.bio), row("Experiencia", item.experience), row("Idiomas", item.languages.join(" · ")), row("Estudios", item.education), row("Casos representativos", item.cases), row("Publicaciones", item.publications), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginTop: 28,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      onClick: onConsult
    }, "Agendar consulta"), /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      variant: "outline",
      icon: "linkedin",
      arrow: false,
      as: "a",
      href: "#"
    }, "LinkedIn"), /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      variant: "outline",
      icon: "mail",
      arrow: false,
      as: "a",
      href: "mailto:" + item.email
    }, "Correo")))));
  }
  function Article({
    item,
    onClose
  }) {
    if (!item) return /*#__PURE__*/React.createElement(Modal, {
      open: false
    });
    return /*#__PURE__*/React.createElement(Modal, {
      open: true,
      onClose: onClose,
      variant: "fullscreen",
      label: item.title
    }, /*#__PURE__*/React.createElement("article", {
      style: {
        maxWidth: 760,
        margin: "0 auto",
        padding: "40px var(--gutter) 120px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        fontSize: 11,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        color: "var(--fg-on-light-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-on-light)"
      }
    }, item.cat), /*#__PURE__*/React.createElement("span", null, item.date), /*#__PURE__*/React.createElement("span", null, item.read, " de lectura")), /*#__PURE__*/React.createElement(H, {
      size: "clamp(34px,4.4vw,56px)",
      style: {
        margin: "22px 0 26px"
      }
    }, item.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 20,
        lineHeight: 1.6,
        fontFamily: "var(--font-serif)",
        color: "var(--fg-on-light-muted)",
        margin: 0
      }
    }, item.excerpt), /*#__PURE__*/React.createElement("img", {
      src: item.image,
      alt: "",
      style: {
        width: "100%",
        aspectRatio: "16/9",
        objectFit: "cover",
        margin: "44px 0"
      }
    }), item.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        fontSize: 17,
        lineHeight: 1.85,
        margin: "0 0 22px"
      }
    }, p)), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--line-light)",
        marginTop: 48,
        paddingTop: 24,
        fontSize: 13,
        color: "var(--fg-on-light-muted)"
      }
    }, "Este contenido es informativo y no constituye asesor\xEDa legal para un caso concreto.")));
  }
  const TOPICS = [["building-2", "Empresa"], ["gavel", "Litigio"], ["file-signature", "Contrato"], ["lock-keyhole", "Propiedad Intelectual"], ["users", "Laboral"], ["home", "Inmobiliario"], ["landmark", "Fiscal"], ["more-horizontal", "Otro"]];
  function Consulta({
    open,
    onClose
  }) {
    const [step, setStep] = React.useState(0);
    const [d, setD] = React.useState({
      topic: "",
      text: "",
      via: "WhatsApp",
      name: "",
      company: "",
      email: "",
      phone: ""
    });
    const [busy, setBusy] = React.useState(false);
    const [err, setErr] = React.useState({});
    React.useEffect(() => {
      if (open) {
        setStep(0);
        setBusy(false);
        setErr({});
      }
    }, [open]);
    const up = k => e => setD({
      ...d,
      [k]: e.target ? e.target.value : e
    });
    const can = [!!d.topic, d.text.trim().length >= 10, true][step];
    const next = () => {
      if (step < 2) return setStep(step + 1);
      const e = {};
      if (!d.name.trim()) e.name = "Indica tu nombre";
      if (!/.+@.+\..+/.test(d.email)) e.email = "Correo no válido";
      if (d.via !== "Correo" && d.phone.replace(/\D/g, "").length < 10) e.phone = "Teléfono de 10 dígitos";
      setErr(e);
      if (Object.keys(e).length) return;
      setBusy(true);
      setTimeout(() => {
        setBusy(false);
        setStep(3);
      }, 1600);
    };
    const titles = ["¿En qué podemos ayudarte?", "Cuéntanos brevemente sobre tu situación", "¿Cómo prefieres que te contactemos?"];
    return /*#__PURE__*/React.createElement(Modal, {
      open: open,
      onClose: onClose,
      width: 760,
      label: "Consulta inicial"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "clamp(28px,5vw,56px)",
        paddingTop: 30
      }
    }, step < 3 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginBottom: 36,
        maxWidth: "calc(100% - 60px)"
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: i <= step ? "var(--accent)" : "var(--line-light-strong)",
        transition: "background 500ms"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        letterSpacing: ".2em",
        marginTop: 10,
        color: i === step ? "var(--accent-on-light)" : "var(--fg-on-light-muted)"
      }
    }, "PASO ", i + 1)))), /*#__PURE__*/React.createElement("div", {
      key: step,
      style: {
        animation: "mxFade 500ms var(--ease-reveal)"
      }
    }, /*#__PURE__*/React.createElement(H, {
      size: 34,
      style: {
        marginBottom: 28
      }
    }, titles[step]), step === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
        gap: 8
      }
    }, TOPICS.map(([i, l]) => /*#__PURE__*/React.createElement(ChoiceTile, {
      key: l,
      icon: i,
      label: l,
      selected: d.topic === l,
      onClick: () => setD({
        ...d,
        topic: l
      })
    }))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
      label: "Asunto · " + d.topic,
      multiline: true,
      rows: 6,
      value: d.text,
      onChange: up("text"),
      placeholder: "Describe el contexto, las partes involucradas y lo que buscas lograr."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--fg-on-light-muted)",
        marginTop: 10,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 13
    }), "La informaci\xF3n que compartas es confidencial.")), step === 2 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 8
      }
    }, [["message-circle", "WhatsApp"], ["phone", "Teléfono"], ["mail", "Correo"]].map(([i, l]) => /*#__PURE__*/React.createElement(ChoiceTile, {
      key: l,
      icon: i,
      label: l,
      selected: d.via === l,
      onClick: () => setD({
        ...d,
        via: l
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(TextField, {
      label: "Nombre",
      value: d.name,
      onChange: up("name"),
      error: err.name
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Empresa",
      value: d.company,
      onChange: up("company")
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Correo",
      type: "email",
      value: d.email,
      onChange: up("email"),
      error: err.email
    }), /*#__PURE__*/React.createElement(TextField, {
      label: "Tel\xE9fono",
      type: "tel",
      value: d.phone,
      onChange: up("phone"),
      error: err.phone
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
        gap: 16
      }
    }, step > 0 ? /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      variant: "link",
      onClick: () => setStep(step - 1)
    }, "Regresar") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(Button, {
      disabled: !can || busy,
      onClick: next
    }, busy ? "Enviando…" : step === 2 ? "Enviar solicitud" : "Continuar"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "40px 0 20px",
        animation: "mxFade 800ms var(--ease-reveal)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        margin: "0 auto",
        border: "1px solid var(--accent)",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        color: "var(--accent)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 28,
      strokeWidth: 1
    })), /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        justifyContent: "center",
        marginTop: 32
      }
    }, "Solicitud recibida"), /*#__PURE__*/React.createElement(H, {
      size: 34,
      style: {
        margin: "18px auto 18px",
        maxWidth: 520
      }
    }, "Gracias, ", d.name.split(" ")[0], "."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--fg-on-light-muted)",
        maxWidth: 480,
        margin: "0 auto 12px"
      }
    }, "Hemos recibido tu solicitud. Nuestro equipo revisar\xE1 la informaci\xF3n y te contactar\xE1 para coordinar una conversaci\xF3n inicial."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "var(--fg-on-light-muted)"
      }
    }, "Folio MX-", String(Date.now()).slice(-6), " \xB7 Contacto por ", d.via), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      variant: "outline",
      arrow: false,
      onClick: onClose
    }, "Cerrar")))));
  }
  Object.assign(window, {
    ServiceDetail,
    CaseDetail,
    Profile,
    Article,
    Consulta
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Overlays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
(() => {
  const {
    Button,
    Eyebrow,
    Icon,
    SectionHeading,
    ServiceCard,
    CaseCard,
    TeamCard
  } = window.MEXTASDesignSystem_cebba9;
  const D = () => window.MX_DATA;
  const light = {
    background: "var(--bg-light)",
    padding: "var(--section-y) 0"
  };
  const dark = {
    background: "var(--bg-dark)",
    padding: "var(--section-y) 0",
    color: "var(--fg-on-dark)"
  };
  const st = i => ({
    transitionDelay: i * 90 + "ms"
  });
  function Services({
    onOpen
  }) {
    const [all, setAll] = React.useState(false);
    const list = D().services;
    const shown = all ? list : list.slice(0, 4);
    return /*#__PURE__*/React.createElement("section", {
      id: "servicios",
      "data-screen-label": "Servicios",
      style: light
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap mx-split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal",
      style: {
        position: "sticky",
        top: 120
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Nuestros servicios",
      title: "Asesor\xEDa legal integral para cada necesidad."
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--fg-on-light-muted)",
        maxWidth: 320,
        margin: "28px 0 32px"
      }
    }, "Doce pr\xE1cticas coordinadas por socios que conocen el negocio de cada cliente."), /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      variant: "outline",
      size: "sm",
      onClick: () => setAll(!all)
    }, all ? "Ver destacados" : "Explorar todos los servicios")), /*#__PURE__*/React.createElement("div", {
      className: "mx-grid-4"
    }, shown.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.slug,
      className: "mx-reveal",
      style: st(i % 4)
    }, /*#__PURE__*/React.createElement(ServiceCard, {
      icon: s.icon,
      title: s.title,
      description: s.short,
      onClick: () => onOpen(s),
      style: {
        height: "100%",
        width: "100%"
      }
    }))))));
  }
  function Cases({
    onOpen
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "casos",
      "data-screen-label": "Casos",
      style: dark
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap mx-split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      tone: "dark",
      eyebrow: "Casos destacados",
      title: "Resultados que hablan por nosotros.",
      rule: false
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      onClick: () => onOpen(D().cases[0])
    }, "Ver todos los casos"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-grid-4 mx-hscroll"
    }, D().cases.map((c, i) => /*#__PURE__*/React.createElement("div", {
      key: c.slug,
      className: "mx-reveal",
      style: st(i)
    }, /*#__PURE__*/React.createElement(CaseCard, {
      image: c.image,
      title: c.title,
      summary: c.summary,
      onClick: () => onOpen(c),
      style: {
        width: "100%",
        height: "100%"
      }
    }))))));
  }
  function Why() {
    const items = [["Visión estratégica", "No nos limitamos a interpretar la ley. Entendemos el contexto empresarial detrás de cada decisión."], ["Atención personalizada", "Cada asunto recibe una estrategia construida alrededor de sus circunstancias."], ["Experiencia multidisciplinaria", "Integramos distintas áreas jurídicas cuando la complejidad del caso lo requiere."], ["Confidencialidad", "Tratamos cada asunto con absoluta discreción y rigor profesional."]];
    const cols = [["1/7", "0"], ["7/13", "120px"], ["1/7", "0"], ["7/13", "120px"]];
    return /*#__PURE__*/React.createElement("section", {
      id: "nosotros",
      "data-screen-label": "Por qu\xE9 MEXTAS",
      style: {
        ...light,
        background: "var(--ivory-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal",
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr)",
        maxWidth: 880
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      rule: true
    }, "Por qu\xE9 MEXTAS"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: "var(--fs-h1)",
        lineHeight: 1.1,
        letterSpacing: "-.01em",
        margin: "26px 0 0",
        textWrap: "balance"
      }
    }, "Una firma dise\xF1ada alrededor de las ", /*#__PURE__*/React.createElement("em", {
      style: {
        color: "var(--accent-on-light)"
      }
    }, "decisiones importantes."))), /*#__PURE__*/React.createElement("div", {
      className: "mx-why",
      style: {
        marginTop: 72
      }
    }, items.map(([t, x], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      className: "mx-reveal",
      style: {
        gridColumn: cols[i][0],
        marginTop: cols[i][1],
        paddingBottom: 56,
        ...st(i)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 28,
        borderTop: "1px solid var(--line-light-strong)",
        paddingTop: 28
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: 52,
        lineHeight: .9,
        color: "var(--accent)",
        fontWeight: 300
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: 26,
        margin: "0 0 12px"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--fg-on-light-muted)",
        maxWidth: 380
      }
    }, x))))))));
  }
  function Process() {
    const steps = [["Primera conversación", "Entendemos tu situación y los objetivos que buscas alcanzar."], ["Análisis", "Evaluamos riesgos, oportunidades y alternativas jurídicas."], ["Estrategia", "Diseñamos una ruta legal clara y personalizada."], ["Implementación", "Acompañamos la ejecución y damos seguimiento al asunto."], ["Seguimiento", "Mantenemos comunicación continua y evaluamos los siguientes pasos."]];
    const ref = React.useRef();
    const [p, setP] = React.useState(0);
    React.useEffect(() => {
      const f = () => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const v = Math.min(1, Math.max(0, (window.innerHeight * .75 - r.top) / (r.height + window.innerHeight * .2)));
        setP(v);
      };
      f();
      window.addEventListener("scroll", f, {
        passive: true
      });
      return () => window.removeEventListener("scroll", f);
    }, []);
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "Proceso",
      style: dark
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      tone: "dark",
      eyebrow: "Proceso",
      title: "\xBFC\xF3mo trabajamos?"
    })), /*#__PURE__*/React.createElement("div", {
      ref: ref,
      className: "mx-process",
      style: {
        marginTop: 72
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-hide-md",
      style: {
        position: "absolute",
        top: 6,
        left: 0,
        right: 0,
        height: 1,
        background: "var(--line-dark)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--accent)",
        width: p * 100 + "%",
        transition: "width 200ms linear"
      }
    })), steps.map(([t, x], i) => {
      const act = p >= i / 5 + .02;
      return /*#__PURE__*/React.createElement("div", {
        key: t,
        style: {
          position: "relative"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          display: "block",
          width: 13,
          height: 13,
          borderRadius: "50%",
          border: "1px solid " + (act ? "var(--accent)" : "var(--line-dark-strong)"),
          background: act ? "var(--accent)" : "var(--bg-dark)",
          transition: "all 500ms var(--ease-institutional)"
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: "var(--font-serif)",
          fontSize: 15,
          color: "var(--accent)",
          marginTop: 30
        }
      }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: 24,
          margin: "8px 0 12px",
          color: act ? "var(--fg-on-dark)" : "var(--fg-on-dark-muted)",
          transition: "color 500ms"
        }
      }, t), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0,
          fontSize: 14,
          color: "var(--fg-on-dark-muted)"
        }
      }, x));
    }))));
  }
  function Practice({
    onOpen
  }) {
    const list = D().services.slice(0, 11).filter(s => s.slug !== "contratos");
    const [a, setA] = React.useState(0);
    const s = list[a];
    return /*#__PURE__*/React.createElement("section", {
      "data-screen-label": "\xC1reas de pr\xE1ctica",
      style: light
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 32,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "\xC1reas de pr\xE1ctica",
      title: "Explora nuestras especialidades.",
      rule: false
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--fg-on-light-muted)",
        maxWidth: 360,
        margin: 0
      }
    }, "Pasa el cursor sobre un \xE1rea para conocer su alcance; selecci\xF3nala para ver el detalle completo.")), /*#__PURE__*/React.createElement("div", {
      className: "mx-split",
      style: {
        marginTop: 56,
        gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)"
      }
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        margin: 0,
        padding: 0,
        borderTop: "1px solid var(--line-light-strong)"
      }
    }, list.map((x, i) => /*#__PURE__*/React.createElement("li", {
      key: x.slug
    }, /*#__PURE__*/React.createElement("button", {
      onMouseEnter: () => setA(i),
      onFocus: () => setA(i),
      onClick: () => onOpen(x),
      style: {
        all: "unset",
        cursor: "pointer",
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        alignItems: "baseline",
        gap: 22,
        padding: "16px 0",
        borderBottom: "1px solid var(--line-light)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        letterSpacing: ".2em",
        color: i === a ? "var(--accent-on-light)" : "var(--stone-400)",
        width: 24
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(24px,2.4vw,34px)",
        lineHeight: 1.15,
        color: i === a ? "var(--fg-on-light)" : "var(--stone-400)",
        transform: i === a ? "translateX(10px)" : "none",
        transition: "all 500ms var(--ease-institutional)",
        flex: 1
      }
    }, x.title.replace("Derecho ", "")), /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: i === a ? 1 : 0,
        transition: "opacity 400ms",
        color: "var(--accent-on-light)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })))))), /*#__PURE__*/React.createElement("div", {
      key: s.slug,
      style: {
        position: "sticky",
        top: 120,
        background: "var(--bg-dark)",
        color: "var(--fg-on-dark)",
        padding: "44px 40px",
        animation: "mxFade 600ms var(--ease-reveal)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 36,
      strokeWidth: 1,
      color: "var(--accent)"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: 30,
        margin: "26px 0 14px"
      }
    }, s.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--fg-on-dark-muted)"
      }
    }, s.lead), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        margin: "28px 0 34px"
      }
    }, s.areas.slice(0, 5).map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        fontSize: 11.5,
        padding: "6px 12px",
        border: "1px solid var(--line-dark-strong)",
        color: "var(--fg-on-dark)"
      }
    }, t))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onOpen(s)
    }, "Ver \xE1rea")))));
  }
  function Team({
    onOpen
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: "equipo",
      "data-screen-label": "Equipo",
      style: light
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap mx-split"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal"
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Nuestro equipo",
      title: "Profesionales que se dedican a tu \xE9xito."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 48
      }
    }, /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      variant: "link",
      onClick: () => onOpen(D().team[0])
    }, "Conoce a todo el equipo"))), /*#__PURE__*/React.createElement("div", {
      className: "mx-grid-4 mx-hscroll"
    }, D().team.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: m.slug,
      className: "mx-reveal",
      style: st(i)
    }, /*#__PURE__*/React.createElement(TeamCard, {
      photo: m.photo,
      name: m.name,
      role: m.role,
      email: m.email,
      onClick: () => onOpen(m)
    }))))));
  }
  function Blog({
    onOpen
  }) {
    const [f, ...rest] = D().articles;
    const meta = (a, c) => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        fontSize: 10.5,
        letterSpacing: ".18em",
        textTransform: "uppercase",
        color: c || "var(--fg-on-light-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-on-light)"
      }
    }, a.cat), /*#__PURE__*/React.createElement("span", null, a.date), /*#__PURE__*/React.createElement("span", null, a.read));
    const Img = ({
      a,
      r
    }) => /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden",
        aspectRatio: r
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.image,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transition: "transform 1.2s var(--ease-reveal)"
      },
      onMouseEnter: e => e.currentTarget.style.transform = "scale(1.03)",
      onMouseLeave: e => e.currentTarget.style.transform = "none"
    }));
    return /*#__PURE__*/React.createElement("section", {
      id: "blog",
      "data-screen-label": "Blog",
      style: {
        ...light,
        background: "var(--white-warm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mx-reveal",
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 24,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Recursos",
      title: "Perspectiva legal para decisiones empresariales.",
      rule: false,
      style: {
        maxWidth: 640
      }
    }), /*#__PURE__*/React.createElement(Button, {
      tone: "light",
      variant: "link",
      onClick: () => window.dispatchEvent(new Event("mx-search"))
    }, "Buscar en recursos")), /*#__PURE__*/React.createElement("div", {
      className: "mx-split",
      style: {
        marginTop: 56,
        gridTemplateColumns: "minmax(0,1.25fr) minmax(0,1fr)",
        gap: 48
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "mx-reveal",
      onClick: () => onOpen(f),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "grid",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Img, {
      a: f,
      r: "16/10"
    }), meta(f), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: "clamp(26px,2.6vw,36px)",
        lineHeight: 1.15,
        margin: 0
      }
    }, f.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--fg-on-light-muted)",
        maxWidth: 560
      }
    }, f.excerpt)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 0
      }
    }, rest.map((a, i) => /*#__PURE__*/React.createElement("button", {
      key: a.slug,
      className: "mx-reveal",
      onClick: () => onOpen(a),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) 128px",
        gap: 24,
        padding: "24px 0",
        borderTop: "1px solid var(--line-light)",
        ...st(i)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 10,
        alignContent: "start"
      }
    }, meta(a), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: "var(--font-serif)",
        fontWeight: 400,
        fontSize: 21,
        lineHeight: 1.25,
        margin: 0
      }
    }, a.title)), /*#__PURE__*/React.createElement(Img, {
      a: a,
      r: "1/1"
    })))))));
  }
  Object.assign(window, {
    Services,
    Cases,
    Why,
    Process,
    Practice,
    Team,
    Blog
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Demo content — fictional but plausible (MEXTAS website UI kit).
window.MX_DATA = {
  services: [{
    slug: "corporativo",
    icon: "briefcase",
    title: "Derecho Corporativo",
    short: "Constitución de empresas, contratos, gobierno corporativo y cumplimiento normativo.",
    lead: "Protegemos y acompañamos la estructura jurídica de empresas en cada etapa de su crecimiento.",
    areas: ["Constitución", "Gobierno corporativo", "Contratos", "Reestructuras", "Cumplimiento", "Operaciones corporativas"],
    problems: ["Pactos de socios que no anticipan salidas o conflictos", "Órganos de gobierno sin actas ni facultades en orden", "Crecimiento sin estructura societaria adecuada"],
    clients: "Empresas familiares, grupos empresariales, filiales de capital extranjero y fondos.",
    faq: [["¿Pueden actuar como área legal externa?", "Sí. Operamos como departamento jurídico corporativo con un socio responsable y tiempos de respuesta pactados."], ["¿Atienden sociedades constituidas en el extranjero?", "Coordinamos con firmas corresponsales para estructuras con presencia en México y el exterior."]]
  }, {
    slug: "fusiones-adquisiciones",
    icon: "handshake",
    title: "Fusiones y Adquisiciones",
    short: "Acompañamiento legal en procesos de inversión, adquisiciones, reestructuras y operaciones estratégicas.",
    lead: "Conducimos operaciones de compra, venta e inversión con disciplina de proceso y lectura de negocio.",
    areas: ["Due diligence", "Cartas de intención", "Contratos de compraventa", "Joint ventures", "Integración post-cierre", "Inversión privada"],
    problems: ["Contingencias ocultas en la empresa objetivo", "Negociaciones sin estructura de garantías", "Cierres que se retrasan por falta de coordinación"],
    clients: "Compradores estratégicos, fondos de capital privado, fundadores e inversionistas.",
    faq: [["¿Cuánto dura una auditoría legal?", "Entre tres y seis semanas, según el alcance y la disponibilidad del cuarto de datos."]]
  }, {
    slug: "litigio-arbitraje",
    icon: "scale",
    title: "Litigio y Arbitraje",
    short: "Representación estratégica en disputas mercantiles, civiles y administrativas.",
    lead: "Defendemos la posición de nuestros clientes con estrategia procesal y visión de negocio.",
    areas: ["Litigio mercantil", "Arbitraje comercial", "Litigio civil", "Amparo", "Medidas cautelares", "Ejecución de laudos"],
    problems: ["Incumplimientos contractuales relevantes", "Disputas entre socios", "Actos de autoridad que afectan la operación"],
    clients: "Empresas nacionales y extranjeras, directivos y accionistas.",
    faq: [["¿Evalúan alternativas antes de litigar?", "Siempre. Cada asunto inicia con un análisis de riesgo, costo y vías de negociación."]]
  }, {
    slug: "propiedad-intelectual",
    icon: "lock-keyhole",
    title: "Propiedad Intelectual",
    short: "Protección de marcas, patentes, derechos de autor y activos intangibles.",
    lead: "Convertimos los activos intangibles en patrimonio protegido y defendible.",
    areas: ["Registro de marcas", "Patentes", "Derechos de autor", "Licenciamiento", "Oposiciones", "Vigilancia de marca"],
    problems: ["Marcas sin registro en mercados clave", "Uso no autorizado por terceros", "Contratos de licencia ambiguos"],
    clients: "Marcas de consumo, empresas tecnológicas, creadores y franquiciantes.",
    faq: [["¿Registran marcas fuera de México?", "Sí, vía Protocolo de Madrid y corresponsales en Estados Unidos, Europa y Latinoamérica."]]
  }, {
    slug: "laboral",
    icon: "users",
    title: "Derecho Laboral",
    short: "Relaciones laborales, contratación, auditorías y conflictos individuales o colectivos.",
    lead: "Ordenamos la relación con el talento para reducir contingencias y proteger la operación.",
    areas: ["Contratos laborales", "Auditoría laboral", "Terminaciones", "Relaciones sindicales", "Reglamentos internos", "Defensa ante tribunales"],
    problems: ["Esquemas de contratación con riesgo", "Terminaciones sin soporte documental"],
    clients: "Empresas medianas y grandes, áreas de recursos humanos.",
    faq: []
  }, {
    slug: "inmobiliario",
    icon: "building-2",
    title: "Derecho Inmobiliario",
    short: "Adquisición, desarrollo, arrendamiento y financiamiento de activos inmobiliarios.",
    lead: "Estructuramos operaciones inmobiliarias con certeza jurídica desde la adquisición.",
    areas: ["Compraventa", "Arrendamiento comercial", "Desarrollos", "Fideicomisos", "Uso de suelo", "Due diligence inmobiliario"],
    problems: ["Títulos con irregularidades", "Contratos de arrendamiento desbalanceados"],
    clients: "Desarrolladores, family offices, inversionistas inmobiliarios.",
    faq: []
  }, {
    slug: "fiscal",
    icon: "landmark",
    title: "Derecho Fiscal",
    short: "Planeación, cumplimiento y defensa en materia tributaria.",
    lead: "Acompañamos la toma de decisiones con una lectura fiscal rigurosa y defendible.",
    areas: ["Planeación fiscal", "Precios de transferencia", "Auditorías SAT", "Defensa fiscal", "Comercio exterior"],
    problems: ["Revisiones de la autoridad", "Estructuras sin sustancia"],
    clients: "Empresas, grupos y personas de alto patrimonio.",
    faq: []
  }, {
    slug: "contratos",
    icon: "file-signature",
    title: "Contratos",
    short: "Redacción, revisión y negociación de contratos comerciales complejos.",
    lead: "Contratos claros que anticipan el conflicto y protegen la relación comercial.",
    areas: ["Suministro", "Distribución", "Servicios", "Confidencialidad", "Licencias"],
    problems: ["Cláusulas de responsabilidad ambiguas"],
    clients: "Empresas de todos los sectores.",
    faq: []
  }, {
    slug: "compliance",
    icon: "shield-check",
    title: "Compliance",
    short: "Programas de cumplimiento, anticorrupción e integridad corporativa.",
    lead: "Diseñamos programas de cumplimiento que funcionan en la operación diaria.",
    areas: ["Anticorrupción", "Códigos de ética", "Investigaciones internas", "Capacitación"],
    problems: ["Riesgo reputacional por terceros"],
    clients: "Empresas reguladas y proveedores de gobierno.",
    faq: []
  }, {
    slug: "proteccion-datos",
    icon: "database",
    title: "Protección de Datos",
    short: "Privacidad, avisos, transferencias y gestión de incidentes.",
    lead: "Tratamiento de datos personales conforme a la ley y a los estándares internacionales.",
    areas: ["Avisos de privacidad", "Transferencias", "Incidentes", "Auditoría"],
    problems: ["Bases de datos sin consentimiento"],
    clients: "Plataformas digitales, retail, salud.",
    faq: []
  }, {
    slug: "comercio-internacional",
    icon: "globe",
    title: "Comercio Internacional",
    short: "Operaciones transfronterizas, tratados comerciales y aduanas.",
    lead: "Acompañamos a empresas que compran, venden e invierten más allá de la frontera.",
    areas: ["T-MEC", "Aduanas", "Contratos internacionales", "Inversión extranjera"],
    problems: ["Reglas de origen mal documentadas"],
    clients: "Exportadores, importadores y filiales extranjeras.",
    faq: []
  }, {
    slug: "consultoria",
    icon: "compass",
    title: "Consultoría para Empresas",
    short: "Acompañamiento jurídico continuo para la dirección general.",
    lead: "Un socio legal en la mesa de decisiones de la dirección.",
    areas: ["Consejo consultivo", "Iguala corporativa", "Evaluación de riesgos"],
    problems: ["Decisiones sin análisis jurídico previo"],
    clients: "Direcciones generales y consejos de administración.",
    faq: []
  }],
  cases: [{
    slug: "reestructura-corporativa",
    image: "../../assets/img/caso-reestructura.png",
    title: "Reestructura Corporativa",
    summary: "Reestructuración estratégica de grupo empresarial.",
    client: "Grupo industrial familiar · 7 sociedades",
    location: "Monterrey, N.L.",
    areas: ["Corporativo", "Fiscal", "Laboral"],
    challenge: "Un grupo con siete sociedades acumuladas en veinte años operaba sin una estructura clara de control, con duplicidad de funciones y riesgo fiscal por operaciones intercompañía.",
    strategy: "Proponer una sociedad controladora, depurar entidades inactivas y documentar la sucesión de la siguiente generación en un protocolo familiar.",
    intervention: "Fusiones y escisiones escalonadas, nuevos estatutos, pacto de accionistas y un consejo de administración con consejeros independientes.",
    result: "El grupo opera hoy con cuatro sociedades, un gobierno corporativo formal y un plan de sucesión aprobado por la asamblea.",
    timeline: [["Mes 1", "Diagnóstico societario y fiscal"], ["Mes 2–3", "Diseño de la nueva estructura"], ["Mes 4–7", "Fusiones, escisiones y protocolización"], ["Mes 8", "Instalación del consejo"]]
  }, {
    slug: "contrato-internacional",
    image: "../../assets/img/caso-contrato.png",
    title: "Contrato Internacional",
    summary: "Negociación y elaboración de contratos de distribución.",
    client: "Fabricante europeo de equipo médico",
    location: "Ciudad de México · Milán",
    areas: ["Contratos", "Comercio Internacional", "Propiedad Intelectual"],
    challenge: "El cliente entraba al mercado mexicano con un distribuidor exclusivo sin haber definido metas mínimas, uso de marca ni mecanismo de terminación.",
    strategy: "Negociar un contrato con exclusividad condicionada a desempeño y licencia de marca limitada.",
    intervention: "Redacción bilingüe, negociación en cuatro rondas y arbitraje con sede en la Ciudad de México.",
    result: "Contrato firmado en diez semanas, con indicadores de desempeño trimestrales y salida ordenada pactada.",
    timeline: [["Semana 1–2", "Revisión de la propuesta del distribuidor"], ["Semana 3–8", "Negociación"], ["Semana 9–10", "Firma y registro de licencia"]]
  }, {
    slug: "litigio-comercial",
    image: "../../assets/img/caso-litigio.png",
    title: "Litigio Comercial",
    summary: "Representación exitosa en litigio mercantil complejo.",
    client: "Empresa de logística",
    location: "Guadalajara, Jal.",
    areas: ["Litigio", "Contratos"],
    challenge: "Un cliente estratégico suspendió pagos alegando incumplimientos de servicio no documentados, comprometiendo el flujo del cliente.",
    strategy: "Acreditar el cumplimiento con la bitácora operativa y solicitar medidas cautelares sobre cuentas por cobrar.",
    intervention: "Demanda en vía ordinaria mercantil, peritaje en logística y audiencias de conciliación.",
    result: "Sentencia favorable en primera instancia confirmada en apelación; recuperación del adeudo con intereses.",
    timeline: [["Mes 1", "Análisis y medidas cautelares"], ["Mes 2–9", "Juicio y peritajes"], ["Mes 10–14", "Apelación y ejecución"]]
  }, {
    slug: "proteccion-de-marca",
    image: "../../assets/img/caso-marca.png",
    title: "Protección de Marca",
    summary: "Registro y defensa de marca a nivel internacional.",
    client: "Marca mexicana de bienes de consumo",
    location: "México · EE.UU. · España",
    areas: ["Propiedad Intelectual", "Litigio"],
    challenge: "Terceros registraron una marca casi idéntica en dos mercados de expansión antes de la llegada del cliente.",
    strategy: "Consolidar el portafolio vía Protocolo de Madrid y oponerse con evidencia de uso previo y notoriedad.",
    intervention: "Solicitudes en 9 clases, oposiciones y acuerdos de coexistencia donde convenía comercialmente.",
    result: "Portafolio registrado en los tres mercados y un protocolo de vigilancia trimestral.",
    timeline: [["Mes 1", "Auditoría de portafolio"], ["Mes 2–4", "Solicitudes y oposiciones"], ["Mes 5–12", "Resolución y vigilancia"]]
  }],
  team: [{
    slug: "alejandro-delgado",
    photo: "../../assets/img/equipo-alejandro-delgado.png",
    name: "Alejandro Delgado",
    role: "Socio Fundador",
    email: "adelgado@mextas.com.mx",
    specialty: ["Derecho Corporativo", "Fusiones y Adquisiciones", "Gobierno Corporativo", "Estrategia Empresarial"],
    bio: "Fundó MEXTAS tras dos décadas asesorando a grupos empresariales en México y Estados Unidos. Participa en consejos de administración y dirige las operaciones de adquisición de la firma.",
    experience: "22 años",
    languages: ["Español", "Inglés"],
    education: ["Licenciatura en Derecho, Escuela Libre de Derecho", "LL.M., Georgetown University"],
    cases: ["Reestructura Corporativa"],
    publications: ["Gobierno corporativo en la empresa familiar mexicana (2024)"]
  }, {
    slug: "mariana-santos",
    photo: "../../assets/img/equipo-mariana-santos.png",
    name: "Mariana Santos",
    role: "Directora Legal",
    email: "msantos@mextas.com.mx",
    specialty: ["Contratos", "Comercio Internacional", "Compliance"],
    bio: "Coordina la práctica transaccional y los programas de cumplimiento. Negocia contratos internacionales para clientes de Europa y Norteamérica.",
    experience: "15 años",
    languages: ["Español", "Inglés", "Italiano"],
    education: ["Licenciatura en Derecho, ITAM", "Maestría en Derecho Mercantil Internacional, Universidad de Bolonia"],
    cases: ["Contrato Internacional"],
    publications: ["Cláusulas de salida en contratos de distribución (2025)"]
  }, {
    slug: "ricardo-mendoza",
    photo: "../../assets/img/equipo-ricardo-mendoza.png",
    name: "Ricardo Mendoza",
    role: "Socio de Litigio",
    email: "rmendoza@mextas.com.mx",
    specialty: ["Litigio Mercantil", "Arbitraje", "Amparo"],
    bio: "Dirige la práctica contenciosa. Ha representado a empresas en juicios mercantiles, arbitrajes comerciales y amparos de alto impacto.",
    experience: "18 años",
    languages: ["Español", "Inglés"],
    education: ["Licenciatura en Derecho, UNAM", "Especialidad en Derecho Procesal, Universidad Panamericana"],
    cases: ["Litigio Comercial"],
    publications: ["Medidas cautelares en el juicio mercantil (2023)"]
  }, {
    slug: "daniela-flores",
    photo: "../../assets/img/equipo-daniela-flores.png",
    name: "Daniela Flores",
    role: "Asociada Senior",
    email: "dflores@mextas.com.mx",
    specialty: ["Propiedad Intelectual", "Protección de Datos"],
    bio: "Gestiona el portafolio de marcas y la práctica de privacidad. Asesora a empresas de consumo y tecnología en su expansión internacional.",
    experience: "9 años",
    languages: ["Español", "Inglés", "Francés"],
    education: ["Licenciatura en Derecho, Universidad Iberoamericana", "Diplomado en Propiedad Intelectual, OMPI"],
    cases: ["Protección de Marca"],
    publications: ["Activos intangibles: una guía para directores (2025)"]
  }],
  articles: [{
    slug: "contrato-comercial-solido",
    cat: "Contratos",
    date: "12 sep 2026",
    read: "6 min",
    image: "../../assets/img/sala-de-juntas.png",
    title: "¿Qué debe contener un contrato comercial sólido?",
    excerpt: "Objeto, precio y plazo son solo el inicio. Las cláusulas que protegen a una empresa son las que anticipan el desacuerdo.",
    body: ["Un contrato comercial no es un trámite: es el mapa de cómo dos partes resolverán lo que salga mal.", "Además de las obligaciones principales, debe definir con precisión la responsabilidad, los límites de indemnización, las causales de terminación y el mecanismo de solución de controversias.", "Recomendamos revisar cada contrato relevante al menos una vez al año o ante cualquier cambio en la operación."]
  }, {
    slug: "riesgos-antes-de-crecer",
    cat: "Corporativo",
    date: "28 ago 2026",
    read: "8 min",
    image: "../../assets/img/caso-reestructura.png",
    title: "Cinco riesgos jurídicos que una empresa debe identificar antes de crecer.",
    excerpt: "Estructura societaria, contratos, laboral, fiscal y propiedad intelectual: dónde suelen aparecer las contingencias.",
    body: ["El crecimiento amplifica lo que ya existe, incluidas las debilidades jurídicas.", "Antes de levantar capital o abrir mercados, conviene una auditoría legal que ordene la estructura, documente las relaciones laborales y asegure la titularidad de marcas."]
  }, {
    slug: "activos-intangibles",
    cat: "Propiedad Intelectual",
    date: "9 ago 2026",
    read: "5 min",
    image: "../../assets/img/caso-marca.png",
    title: "Propiedad intelectual: cómo proteger los activos intangibles de una empresa.",
    excerpt: "La marca, el software y el know-how suelen valer más que los activos físicos. Protegerlos exige método.",
    body: ["Registrar la marca en cada mercado relevante antes de entrar es la medida más rentable.", "Los contratos con empleados y proveedores deben prever la cesión de derechos sobre lo que desarrollan."]
  }, {
    slug: "fusiones-aspectos-esenciales",
    cat: "Fusiones y Adquisiciones",
    date: "21 jul 2026",
    read: "7 min",
    image: "../../assets/img/caso-contrato.png",
    title: "Fusiones y adquisiciones: aspectos legales esenciales.",
    excerpt: "De la carta de intención al cierre: las etapas, los documentos y las decisiones que determinan el éxito de una operación.",
    body: ["Toda operación inicia con una carta de intención que fija exclusividad y confidencialidad.", "La auditoría legal define el precio y las garantías; el contrato de compraventa distribuye los riesgos identificados."]
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.TrustItem = __ds_scope.TrustItem;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.ChoiceTile = __ds_scope.ChoiceTile;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Modal = __ds_scope.Modal;

})();
