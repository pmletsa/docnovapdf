import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
function SplitPdfPage() {
  const [file, setFile] = useState(null);
  const [splitMode, setSplitMode] = useState("pages");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  const handleSplit = async () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#f8f9fb] flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 px-6 py-8 lg:py-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm mb-6 text-gray-500", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "›" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Split PDF" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-black text-gray-900 mb-2", children: "Split PDF" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-base", children: "Separate PDF pages into multiple files. Extract specific pages or split by range." })
      ] }),
      /* @__PURE__ */ jsxs("div", { onClick: () => fileInputRef.current?.click(), className: "bg-[#fffbfb] rounded-xl border-2 border-dashed border-[#e53935]/30 p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#e53935]/50 transition-all mb-10", children: [
        /* @__PURE__ */ jsx("input", { ref: fileInputRef, type: "file", accept: ".pdf", onChange: handleFileSelect, className: "hidden" }),
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-[#e53935] rounded-xl flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" }) }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: "Drag & Drop your PDF here" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-sm mb-6 max-w-xs", children: [
          "Select a PDF file from your computer to",
          /* @__PURE__ */ jsx("br", {}),
          "split into multiple files."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsxs("button", { onClick: () => fileInputRef.current?.click(), className: "bg-[#e53935] hover:bg-[#d32f2f] text-white font-semibold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all text-sm", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
            "Select PDF File"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-lg flex items-center gap-2 transition-all text-sm shadow-sm", children: [
            /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ jsx("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
              /* @__PURE__ */ jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
              /* @__PURE__ */ jsx("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
              /* @__PURE__ */ jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
            ] }),
            "Google Drive"
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-lg flex items-center gap-2 transition-all text-sm shadow-sm", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "#0061FF", d: "M12 2L6 7l6 5-6 5 6 5 6-5-6-5 6-5-6-5z" }) }),
            "Dropbox"
          ] })
        ] })
      ] }),
      file && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold flex items-center gap-2 text-gray-800", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }),
            "Selected File"
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => fileInputRef.current?.click(), className: "text-[#e53935] text-sm font-semibold hover:underline", children: "Change File" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md transition-all", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-[#fff5f5] flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#e53935]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1zm0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm text-gray-900 truncate", children: file.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: formatBytes(file.size) })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => setFile(null), className: "p-2 text-gray-300 hover:text-gray-500 transition-colors", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-gray-800 mb-3", children: "Split Mode" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => setSplitMode("pages"), className: `p-4 rounded-xl border-2 text-left transition-all ${splitMode === "pages" ? "border-[#e53935] bg-[#ffebee]" : "border-gray-200 hover:border-[#e53935]/30 bg-white"}`, children: [
              /* @__PURE__ */ jsx("span", { className: `font-semibold text-sm ${splitMode === "pages" ? "text-[#e53935]" : "text-gray-900"}`, children: "Extract All Pages" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Split into individual pages" })
            ] }),
            /* @__PURE__ */ jsxs("button", { onClick: () => setSplitMode("range"), className: `p-4 rounded-xl border-2 text-left transition-all ${splitMode === "range" ? "border-[#e53935] bg-[#ffebee]" : "border-gray-200 hover:border-[#e53935]/30 bg-white"}`, children: [
              /* @__PURE__ */ jsx("span", { className: `font-semibold text-sm ${splitMode === "range" ? "text-[#e53935]" : "text-gray-900"}`, children: "Custom Range" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Select specific pages" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ jsxs("button", { onClick: handleSplit, disabled: isProcessing, className: "bg-[#e53935] hover:bg-[#d32f2f] text-white font-semibold py-3.5 px-10 rounded-full text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed", children: [
            "Split PDF",
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M14 5l7 7m0 0l-7 7m7-7H3" }) })
          ] }),
          isProcessing && /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md mt-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs font-medium mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Splitting..." }),
              /* @__PURE__ */ jsxs("span", { className: "text-[#e53935]", children: [
                progress,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-100 rounded-full h-2 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full transition-all duration-300", style: {
              width: `${progress}%`,
              background: "linear-gradient(90deg, #e53935 0%, #ff8a80 100%)"
            } }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mt-16 mb-8 pt-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-[#ffebee] rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#e53935]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1 text-sm", children: "Secure & Private" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 leading-relaxed", children: "Files are deleted permanently from our servers after 1 hour." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-[#ffebee] rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#e53935]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1 text-sm", children: "Ultra Fast" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 leading-relaxed", children: "Our cloud processing handles large files in milliseconds." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-[#ffebee] rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-[#e53935]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
          /* @__PURE__ */ jsx("h4", { className: "font-bold text-gray-900 mb-1 text-sm", children: "Any Device" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 leading-relaxed", children: "Works on Windows, Mac, Linux, iOS, and Android seamlessly." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
export {
  SplitPdfPage as component
};
