import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import { F as FileUploader } from "./FileUploader-B_tz5ll4.js";
import "@tanstack/react-router";
function SummarizePdfPage() {
  const [file, setFile] = useState(null);
  const [summaryLength, setSummaryLength] = useState("detailed");
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState(null);
  const handleFilesSelected = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
      setSummary(null);
    }
  };
  const handleSummarize = async () => {
    if (!file) return;
    setIsProcessing(true);
    setTimeout(() => {
      setSummary("This is a placeholder summary. The AI summarization feature will analyze your document and provide key insights, main points, and a comprehensive overview of the content. This feature is coming soon!");
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
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold text-accent", children: "Summarize PDF" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-accent/70 max-w-2xl mx-auto", children: "Get instant AI-powered summaries of your documents. Extract key insights in seconds." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-16", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: !file ? /* @__PURE__ */ jsx(FileUploader, { accept: ".pdf", multiple: false, onFilesSelected: handleFilesSelected }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 bg-neutral/50 rounded-xl border border-neutral", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(FileIcon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-accent", children: file.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-accent/60", children: formatBytes(file.size) })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            setFile(null);
            setSummary(null);
          }, className: "p-2 text-accent/50 hover:text-red-500", children: /* @__PURE__ */ jsx(CloseIcon, { className: "w-5 h-5" }) })
        ] }),
        !summary && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-accent", children: "Summary Length" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxs("button", { onClick: () => setSummaryLength("brief"), className: `p-4 rounded-xl border-2 text-left transition-all ${summaryLength === "brief" ? "border-primary bg-primary-light/20" : "border-neutral hover:border-primary/30"}`, children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-accent", children: "Brief" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-accent/60 mt-1", children: "Quick overview, key points only" })
              ] }),
              /* @__PURE__ */ jsxs("button", { onClick: () => setSummaryLength("detailed"), className: `p-4 rounded-xl border-2 text-left transition-all ${summaryLength === "detailed" ? "border-primary bg-primary-light/20" : "border-neutral hover:border-primary/30"}`, children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium text-accent", children: "Detailed" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-accent/60 mt-1", children: "Comprehensive analysis" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("button", { onClick: handleSummarize, disabled: isProcessing, className: "w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 disabled:opacity-50 flex items-center justify-center gap-2", children: isProcessing ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(SpinnerIcon, { className: "w-5 h-5 animate-spin" }),
            "Analyzing..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(SparkleIcon, { className: "w-5 h-5" }),
            "Generate Summary"
          ] }) }) })
        ] }),
        summary && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-accent", children: "Summary" }),
          /* @__PURE__ */ jsx("div", { className: "p-6 bg-neutral/50 rounded-xl border border-neutral", children: /* @__PURE__ */ jsx("p", { className: "text-accent/80 leading-relaxed", children: summary }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => navigator.clipboard.writeText(summary), className: "px-4 py-2 border border-neutral rounded-lg text-accent hover:border-primary/30 transition-colors text-sm", children: "Copy to Clipboard" }),
            /* @__PURE__ */ jsx("button", { onClick: () => setSummary(null), className: "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm", children: "Regenerate" })
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
function SpinnerIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", strokeOpacity: "0.25" }),
    /* @__PURE__ */ jsx("path", { d: "M12 2a10 10 0 0 1 10 10", strokeLinecap: "round" })
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
  SummarizePdfPage as component
};
