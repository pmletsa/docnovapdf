import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { D as DashboardLayout } from "./DashboardLayout-DT3UPMhJ.js";
import "@tanstack/react-router";
function DocumentPage() {
  const [selectedTool, setSelectedTool] = useState(null);
  const file = {
    name: "Q4_Financial_Report.pdf",
    size: "2.4 MB",
    pages: 24
  };
  const tools = [{
    id: "compress",
    name: "Compress",
    icon: "compress",
    description: "Reduce file size"
  }, {
    id: "merge",
    name: "Merge",
    icon: "merge",
    description: "Combine with other PDFs"
  }, {
    id: "split",
    name: "Split",
    icon: "split",
    description: "Extract pages"
  }, {
    id: "convert",
    name: "Convert",
    icon: "convert",
    description: "To Word, JPG, etc."
  }, {
    id: "ocr",
    name: "OCR",
    icon: "ocr",
    description: "Extract text"
  }, {
    id: "ai-summary",
    name: "AI Summary",
    icon: "ai",
    description: "Generate summary",
    badge: "AI"
  }, {
    id: "ai-chat",
    name: "AI Chat",
    icon: "chat",
    description: "Ask questions",
    badge: "AI"
  }, {
    id: "extract",
    name: "Extract Data",
    icon: "extract",
    description: "Smart extraction",
    badge: "AI"
  }];
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col bg-[#f8f9fb]", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-bold text-gray-900", children: file.name }),
          selectedTool && /* @__PURE__ */ jsxs("span", { className: "px-3 py-1 bg-[#ffebee] text-[#e53935] text-sm font-medium rounded-full", children: [
            tools.find((t) => t.id === selectedTool)?.name,
            " Selected"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) }),
            "Download"
          ] }),
          /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-600 hover:text-gray-900 transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" }) }) }),
          /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-600 hover:text-gray-900 transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-auto p-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [1, 2, 3].map((page) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-12 relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 text-xs text-gray-400", children: [
          "Page ",
          page
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-8 bg-gray-200 rounded w-3/4" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-100 rounded w-full" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-100 rounded w-5/6" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-100 rounded w-full" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-100 rounded w-4/5" }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 h-32 bg-gray-50 rounded" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-100 rounded w-full" }),
          /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-100 rounded w-3/4" })
        ] })
      ] }, page)) }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-80 bg-white border-l border-gray-100 flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 border-b border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#ffebee] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#e53935]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500", children: [
          file.size,
          " • ",
          file.pages,
          " pages"
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider mb-3", children: "Available Tools" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tools.map((tool) => /* @__PURE__ */ jsxs("button", { onClick: () => setSelectedTool(tool.id), className: `w-full p-3 rounded-xl text-left transition-all group relative ${selectedTool === tool.id ? "bg-[#ffebee] border-2 border-[#e53935]" : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"}`, children: [
          tool.badge && /* @__PURE__ */ jsx("span", { className: "absolute top-2 right-2 bg-[#e53935] text-white text-[9px] font-bold px-1.5 py-0.5 rounded", children: tool.badge }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(ToolIcon, { icon: tool.icon, active: selectedTool === tool.id }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: `font-medium text-sm ${selectedTool === tool.id ? "text-[#e53935]" : "text-gray-900"}`, children: tool.name }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: tool.description })
            ] })
          ] })
        ] }, tool.id)) })
      ] }),
      selectedTool && /* @__PURE__ */ jsxs("div", { className: "p-4 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxs("button", { className: "w-full mb-2 px-4 py-2.5 bg-[#e53935] text-white rounded-lg font-medium hover:bg-[#d32f2f] transition-colors", children: [
          "Apply ",
          tools.find((t) => t.id === selectedTool)?.name
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSelectedTool(null), className: "w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors", children: "Cancel" })
      ] })
    ] })
  ] }) });
}
function ToolIcon({
  icon,
  active
}) {
  const color = active ? "text-[#e53935]" : "text-gray-500";
  switch (icon) {
    case "compress":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) });
    case "merge":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) });
    case "split":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7h12M8 12h12m-12 5h12M4 7h.01M4 12h.01M4 17h.01" }) });
    case "convert":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" }) });
    case "ocr":
    case "extract":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) });
    case "ai":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) });
    case "chat":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) });
    default:
      return null;
  }
}
export {
  DocumentPage as component
};
