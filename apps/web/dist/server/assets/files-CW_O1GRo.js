import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { D as DashboardLayout } from "./DashboardLayout-DT3UPMhJ.js";
function FilesPage() {
  const [viewMode, setViewMode] = useState("list");
  const [openDropdown, setOpenDropdown] = useState(null);
  const files = [{
    name: "Q4 Report 2023.pdf",
    date: "Oct 12, 2023",
    size: "1.2 MB",
    owner: "Alex Rivers",
    type: "pdf"
  }, {
    name: "Budget_Projection_2024.xlsx",
    date: "Oct 10, 2023",
    size: "450 KB",
    owner: "Sarah Chen",
    type: "excel"
  }, {
    name: "Contract_Draft_V2.docx",
    date: "Oct 08, 2023",
    size: "2.1 MB",
    owner: "Alex Rivers",
    type: "word"
  }, {
    name: "Investor_Deck_Final.pptx",
    date: "Oct 05, 2023",
    size: "5.8 MB",
    owner: "Mike Ross",
    type: "ppt"
  }, {
    name: "App_Mockup_Login.png",
    date: "Sep 28, 2023",
    size: "2.4 MB",
    owner: "Sarah Chen",
    type: "image"
  }];
  useEffect(() => {
    const handleClickOutside = () => {
      if (openDropdown !== null) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown]);
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "My Files" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "›" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: "Project Alpha" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" }) }),
          "Upload"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "border-l border-gray-200 h-8" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setViewMode("grid"), className: `p-2 rounded-lg transition-colors cursor-pointer ${viewMode === "grid" ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:text-gray-600"}`, children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }) }) }),
        /* @__PURE__ */ jsx("button", { onClick: () => setViewMode("list"), className: `p-2 rounded-lg transition-colors cursor-pointer ${viewMode === "list" ? "bg-gray-100 text-gray-900" : "text-gray-400 hover:text-gray-600"}`, children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 10h16M4 14h16M4 18h16" }) }) })
      ] })
    ] }),
    viewMode === "list" ? /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-100", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-4 px-6 font-medium text-gray-600 text-sm", children: "Name" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-4 px-6 font-medium text-gray-600 text-sm", children: "Date modified" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-4 px-6 font-medium text-gray-600 text-sm", children: "Size" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-4 px-6 font-medium text-gray-600 text-sm", children: "Owner" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-4 px-6 font-medium text-gray-600 text-sm", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: files.map((file, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-50 hover:bg-gray-50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxs(Link, { to: "/document/$fileId", params: {
            fileId: `file-${index}`
          }, className: "flex items-center gap-3 cursor-pointer", children: [
            /* @__PURE__ */ jsx(FileTypeIcon, { type: file.type }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900", children: file.name })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-gray-600", children: file.date }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-gray-600", children: file.size }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600", children: file.owner.charAt(0) }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: file.owner })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("button", { onClick: (e) => {
              e.stopPropagation();
              setOpenDropdown(openDropdown === index ? null : index);
            }, className: "p-2 text-gray-400 hover:text-gray-600 cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" }) }) }),
            openDropdown === index && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10", children: [
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                ] }),
                "Preview"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) }),
                "Download"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" }) }),
                "Share"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
                "Rename"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 my-1" }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
                "Delete"
              ] })
            ] })
          ] }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-t border-gray-100", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Showing 5 of 24 files" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("button", { className: "px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 cursor-pointer", children: "Previous" }),
          /* @__PURE__ */ jsx("button", { className: "px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 cursor-pointer", children: "Next" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6", children: files.map((file, index) => /* @__PURE__ */ jsxs(Link, { to: "/document/$fileId", params: {
        fileId: `file-${index}`
      }, className: "bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all cursor-pointer group", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsx(FileTypeIcon, { type: file.type }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("button", { onClick: (e) => {
              e.stopPropagation();
              setOpenDropdown(openDropdown === index ? null : index);
            }, className: "p-1.5 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" }) }) }),
            openDropdown === index && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-10", children: [
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                  /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                ] }),
                "Preview"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) }),
                "Download"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" }) }),
                "Share"
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }),
                "Rename"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 my-1" }),
              /* @__PURE__ */ jsxs("button", { className: "w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }),
                "Delete"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900 text-sm mb-1 truncate", children: file.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-500", children: [
          /* @__PURE__ */ jsx("span", { children: file.size }),
          /* @__PURE__ */ jsx("span", { children: file.date })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-3 pt-3 border-t border-gray-100", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-[10px] font-medium text-gray-600", children: file.owner.charAt(0) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600 truncate", children: file.owner })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Showing 5 of 24 files" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("button", { className: "px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 cursor-pointer", children: "Previous" }),
          /* @__PURE__ */ jsx("button", { className: "px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 cursor-pointer", children: "Next" })
        ] })
      ] })
    ] })
  ] }) });
}
function FileTypeIcon({
  type
}) {
  switch (type) {
    case "pdf":
      return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#ffebee] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#e53935]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }) }) });
    case "excel":
      return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#e8f5e9] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#4caf50]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }) }) });
    case "word":
      return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#e3f2fd] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#2196f3]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }) }) });
    case "ppt":
      return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#fff3e0] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#ff9800]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }) }) });
    case "image":
      return /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-[#fce4ec] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 text-[#e91e63]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
        /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
      ] }) });
    default:
      return null;
  }
}
export {
  FilesPage as component
};
