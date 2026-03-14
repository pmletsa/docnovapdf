import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import "@tanstack/react-router";
import "react";
function DashboardPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-accent", children: "Dashboard" }),
        /* @__PURE__ */ jsx("p", { className: "text-accent/60", children: "Manage your files and workflows" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [{
        label: "Files Processed",
        value: "0",
        icon: "📄"
      }, {
        label: "AI Credits Used",
        value: "0",
        icon: "✨"
      }, {
        label: "Storage Used",
        value: "0 MB",
        icon: "💾"
      }, {
        label: "Active Workflows",
        value: "0",
        icon: "⚡"
      }].map((stat) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral/50 rounded-xl p-6 border border-neutral", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl mb-2", children: stat.icon }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-accent", children: stat.value }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-accent/60", children: stat.label })
      ] }, stat.label)) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-neutral/50 rounded-xl border border-neutral p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-accent mb-4", children: "Recent Files" }),
        /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-accent/50", children: /* @__PURE__ */ jsx("p", { children: "No files yet. Upload your first document to get started." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  DashboardPage as component
};
