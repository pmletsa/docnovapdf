import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import "@tanstack/react-router";
import "react";
function WorkflowsPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-accent", children: "Workflows" }),
          /* @__PURE__ */ jsx("p", { className: "text-accent/60", children: "Automate your document processing" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors", children: "Create Workflow" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-neutral/50 rounded-xl border border-neutral p-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(WorkflowIcon, { className: "w-8 h-8 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-accent mb-2", children: "No workflows yet" }),
        /* @__PURE__ */ jsx("p", { className: "text-accent/60 max-w-md mx-auto", children: "Create automated workflows to process documents automatically. For example: OCR → Extract Data → Convert to Excel." })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function WorkflowIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "16 3 21 3 21 8" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "20", x2: "21", y2: "3" }),
    /* @__PURE__ */ jsx("polyline", { points: "21 16 21 21 16 21" }),
    /* @__PURE__ */ jsx("line", { x1: "15", y1: "15", x2: "21", y2: "21" }),
    /* @__PURE__ */ jsx("line", { x1: "4", y1: "4", x2: "9", y2: "9" })
  ] });
}
export {
  WorkflowsPage as component
};
