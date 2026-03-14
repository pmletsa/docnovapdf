import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import { F as FileUploader } from "./FileUploader-B_tz5ll4.js";
import "@tanstack/react-router";
function ExtractDataPage() {
  const [file, setFile] = useState(null);
  const [extractType, setExtractType] = useState("invoice");
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const handleFilesSelected = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
      setExtractedData(null);
    }
  };
  const handleExtract = async () => {
    if (!file) return;
    setIsProcessing(true);
    setTimeout(() => {
      setExtractedData({
        "Invoice Number": "INV-2024-001",
        "Date": "March 14, 2026",
        "Company": "Acme Corporation",
        "Total Amount": "$1,234.56",
        "Due Date": "April 14, 2026"
      });
      setIsProcessing(false);
    }, 2500);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-primary-light/30 via-transparent to-transparent py-12 sm:py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary-light/50 rounded-full mb-4", children: [
          /* @__PURE__ */ jsx(SparkleIcon, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary", children: "AI Powered" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold text-accent", children: "Extract Data" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-accent/70 max-w-2xl mx-auto", children: "Automatically extract structured data from invoices, tables, and documents using AI." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: !file ? /* @__PURE__ */ jsx(FileUploader, { accept: ".pdf,.jpg,.jpeg,.png", multiple: false, onFilesSelected: handleFilesSelected }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 bg-neutral/50 rounded-xl border border-neutral", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(FileIcon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-accent", children: file.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-accent/60", children: formatBytes(file.size) })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            setFile(null);
            setExtractedData(null);
          }, className: "p-2 text-accent/50 hover:text-red-500", children: /* @__PURE__ */ jsx(CloseIcon, { className: "w-5 h-5" }) })
        ] }),
        !extractedData && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-accent", children: "Extraction Type" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: [{
              id: "invoice",
              label: "Invoice",
              desc: "Extract invoice fields"
            }, {
              id: "table",
              label: "Tables",
              desc: "Extract table data"
            }, {
              id: "custom",
              label: "Custom",
              desc: "Define your fields"
            }].map((type) => /* @__PURE__ */ jsxs("button", { onClick: () => setExtractType(type.id), className: `p-4 rounded-xl border-2 text-left transition-all ${extractType === type.id ? "border-primary bg-primary-light/20" : "border-neutral hover:border-primary/30"}`, children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-accent text-sm", children: type.label }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-accent/60 mt-1", children: type.desc })
            ] }, type.id)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("button", { onClick: handleExtract, disabled: isProcessing, className: "w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 disabled:opacity-50 flex items-center justify-center gap-2", children: isProcessing ? "Extracting..." : "Extract Data" }) })
        ] }),
        extractedData && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-accent", children: "Extracted Data" }),
          /* @__PURE__ */ jsx("div", { className: "bg-neutral/50 rounded-xl border border-neutral overflow-hidden", children: /* @__PURE__ */ jsx("table", { className: "w-full", children: /* @__PURE__ */ jsx("tbody", { children: Object.entries(extractedData).map(([key, value], i) => /* @__PURE__ */ jsxs("tr", { className: i > 0 ? "border-t border-neutral" : "", children: [
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-sm font-medium text-accent/70 bg-neutral/30 w-1/3", children: key }),
            /* @__PURE__ */ jsx("td", { className: "px-4 py-3 text-sm text-accent", children: value })
          ] }, key)) }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("button", { className: "px-4 py-2 border border-neutral rounded-lg text-accent hover:border-primary/30 transition-colors text-sm", children: "Export as JSON" }),
            /* @__PURE__ */ jsx("button", { className: "px-4 py-2 border border-neutral rounded-lg text-accent hover:border-primary/30 transition-colors text-sm", children: "Export as CSV" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setExtractedData(null), className: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm", children: "Re-extract" })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function SparkleIcon({
  className
}) {
  return /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }) });
}
function FileIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" })
  ] });
}
function CloseIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
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
  ExtractDataPage as component
};
