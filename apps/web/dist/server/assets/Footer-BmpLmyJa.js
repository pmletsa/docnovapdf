import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-neutral", children: [
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-1.5 sm:gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(PdfIcon$1, { className: "w-4 h-4 sm:w-5 sm:h-5 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-base sm:text-xl font-bold text-accent leading-tight", children: [
            "DocNova",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "AI" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-[8px] sm:text-[10px] text-accent/50 leading-none", children: "by TelVex" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", hash: "tools", className: "text-accent/70 hover:text-primary transition-colors font-medium", children: "Tools" }),
        /* @__PURE__ */ jsx(Link, { to: "/", hash: "features", className: "text-accent/70 hover:text-primary transition-colors font-medium", children: "Features" }),
        /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "text-accent/70 hover:text-primary transition-colors font-medium", children: "Pricing" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 sm:gap-3", children: [
        /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "hidden sm:block px-4 py-2 text-accent font-medium hover:text-primary transition-colors cursor-pointer", children: "Sign In" }),
        /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "px-2.5 py-1.5 sm:px-4 sm:py-2 bg-primary text-white text-xs sm:text-base font-medium rounded-lg hover:bg-primary-dark transition-colors cursor-pointer", children: "Get Started" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "md:hidden p-1.5 sm:p-2 text-accent hover:text-primary transition-colors",
            "aria-label": "Menu",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            children: mobileMenuOpen ? /* @__PURE__ */ jsx(CloseIcon, { className: "w-5 h-5 sm:w-6 sm:h-6" }) : /* @__PURE__ */ jsx(MenuIcon, { className: "w-5 h-5 sm:w-6 sm:h-6" })
          }
        )
      ] })
    ] }) }),
    mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-neutral bg-background", children: /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 space-y-3", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          hash: "tools",
          className: "block text-accent/70 hover:text-primary transition-colors font-medium py-2",
          onClick: () => setMobileMenuOpen(false),
          children: "Tools"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          hash: "features",
          className: "block text-accent/70 hover:text-primary transition-colors font-medium py-2",
          onClick: () => setMobileMenuOpen(false),
          children: "Features"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/pricing",
          className: "block text-accent/70 hover:text-primary transition-colors font-medium py-2",
          onClick: () => setMobileMenuOpen(false),
          children: "Pricing"
        }
      ),
      /* @__PURE__ */ jsx("hr", { className: "border-neutral" }),
      /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "w-full text-left text-accent font-medium py-2 hover:text-primary transition-colors cursor-pointer", onClick: () => setMobileMenuOpen(false), children: "Sign In" }),
      /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "w-full block px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-center cursor-pointer", onClick: () => setMobileMenuOpen(false), children: "Get Started" })
    ] }) })
  ] });
}
function PdfIcon$1({ className }) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ jsx("path", { d: "M10 12h4" }),
    /* @__PURE__ */ jsx("path", { d: "M10 16h4" })
  ] });
}
function MenuIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "6", x2: "20", y2: "6" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "12", x2: "20", y2: "12" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "18", x2: "20", y2: "18" })
  ] });
}
function CloseIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-accent py-8 sm:py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", hash: "tools", className: "text-white/60 hover:text-white transition-colors text-sm", children: "All Tools" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Pricing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "API" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Desktop App" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: "Solutions" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Business" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Education" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Developers" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: "Company" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Careers" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-4", children: "Legal" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Terms of Service" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-white/60 hover:text-white transition-colors text-sm", children: "Cookie Policy" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 sm:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(PdfIcon, { className: "w-5 h-5 text-white" }) }),
          /* @__PURE__ */ jsxs("span", { className: "text-white font-bold", children: [
            "DocNova",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "AI" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-white/40", children: "|" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://telvex.net",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-white/60 hover:text-white transition-colors text-sm",
            children: [
              "Powered by ",
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "TelVex" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/60 text-sm", children: "© 2026 DocNovaAI. All rights reserved." })
    ] })
  ] }) });
}
function PdfIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ jsx("path", { d: "M10 12h4" }),
    /* @__PURE__ */ jsx("path", { d: "M10 16h4" })
  ] });
}
export {
  Footer as F,
  Navbar as N
};
