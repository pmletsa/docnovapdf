import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import "react";
const pdfTools = [{
  category: "Convert",
  tools: [{
    name: "PDF to Word",
    description: "Convert PDF to editable Word documents",
    icon: FileTextIcon,
    href: "/tools/pdf-to-word"
  }, {
    name: "Word to PDF",
    description: "Convert Word documents to PDF format",
    icon: FileTextIcon,
    href: "/tools/word-to-pdf"
  }, {
    name: "PDF to JPG",
    description: "Convert PDF pages to JPG images",
    icon: ImageIcon,
    href: "/tools/pdf-to-jpg"
  }, {
    name: "JPG to PDF",
    description: "Convert images to PDF documents",
    icon: ImageIcon,
    href: "/tools/jpg-to-pdf"
  }]
}, {
  category: "Organize",
  tools: [{
    name: "Merge PDF",
    description: "Combine multiple PDFs into one file",
    icon: MergeIcon,
    href: "/tools/merge-pdf"
  }, {
    name: "Split PDF",
    description: "Separate PDF pages into multiple files",
    icon: SplitIcon,
    href: "/tools/split-pdf"
  }, {
    name: "Compress PDF",
    description: "Reduce PDF file size without losing quality",
    icon: CompressIcon,
    href: "/tools/compress-pdf"
  }, {
    name: "OCR PDF",
    description: "Extract text from scanned documents",
    icon: ScanIcon,
    href: "/tools/ocr-pdf"
  }]
}, {
  category: "AI Features",
  tools: [{
    name: "Chat with PDF",
    description: "Ask questions about your PDF content",
    icon: ChatIcon,
    href: "/ai/chat-with-pdf",
    badge: "AI"
  }, {
    name: "Summarize PDF",
    description: "Get AI-powered document summaries",
    icon: SparkleIcon,
    href: "/ai/summarize-pdf",
    badge: "AI"
  }, {
    name: "Extract Data",
    description: "Extract structured data with AI",
    icon: ExtractIcon,
    href: "/ai/extract-data",
    badge: "AI"
  }]
}];
const features = [{
  title: "Fast & Secure",
  description: "All processing happens in the cloud with enterprise-grade encryption. Your files are automatically deleted after processing.",
  icon: ShieldIcon
}, {
  title: "No Installation",
  description: "Access all PDF tools directly from your browser. No software downloads or installations required.",
  icon: CloudIcon
}, {
  title: "High Quality",
  description: "Maintain the highest quality in all conversions and edits. No loss of formatting or resolution.",
  icon: SparkleIcon
}, {
  title: "Free to Use",
  description: "Most tools are completely free. Premium features available for power users and businesses.",
  icon: GiftIcon
}];
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary-light/30 via-transparent to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full mb-6", children: [
          /* @__PURE__ */ jsx(SparkleIcon, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-primary", children: "Powered by Advanced AI" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold text-accent leading-tight", children: [
          "AI-Powered PDF Tools",
          /* @__PURE__ */ jsx("span", { className: "block text-primary mt-2", children: "Smarter. Faster. Better." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg md:text-xl text-accent/70 max-w-2xl mx-auto", children: "Transform your PDFs with cutting-edge AI. Convert, edit, extract data, summarize content, and automate workflows — all powered by intelligent document processing." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/tools", className: "w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer", children: [
            /* @__PURE__ */ jsx(SparkleIcon, { className: "w-5 h-5" }),
            "Try AI Tools — It's Free"
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/tools", className: "w-full sm:w-auto px-8 py-4 bg-neutral text-accent font-semibold rounded-xl hover:bg-neutral/80 transition-colors cursor-pointer", children: "View All Tools" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm text-accent/50", children: "No registration required • AI-powered accuracy • Enterprise-grade security" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "tools", className: "py-12 sm:py-16 md:py-20 bg-neutral/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-accent", children: "Every PDF Tool You Need" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 sm:mt-4 text-base sm:text-lg text-accent/70 max-w-2xl mx-auto", children: "Powerful tools to handle all your PDF tasks. Select a tool below to get started." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: pdfTools.map((category) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-accent mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-1 h-6 bg-primary rounded-full" }),
          category.category
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: category.tools.map((tool) => /* @__PURE__ */ jsx(ToolCard, { ...tool }, tool.name)) })
      ] }, category.category)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "features", className: "py-12 sm:py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-accent", children: "Why Choose DocNovaAI?" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 sm:mt-4 text-base sm:text-lg text-accent/70 max-w-2xl mx-auto", children: "Built for professionals and everyday users alike." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature) => /* @__PURE__ */ jsx(FeatureCard, { ...feature }, feature.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-16 md:py-20 bg-primary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white", children: "Ready to Transform Your PDFs?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 sm:mt-4 text-base sm:text-lg text-white/80 max-w-2xl mx-auto", children: "Join millions of users who trust DocNovaAI for intelligent document processing." }),
      /* @__PURE__ */ jsx(Link, { to: "/dashboard", className: "mt-8 inline-block px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral transition-colors shadow-lg cursor-pointer", children: "Get Started for Free" })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function ToolCard({
  name,
  description,
  icon: Icon,
  href,
  badge
}) {
  return /* @__PURE__ */ jsxs(Link, { to: href, className: "group bg-background p-6 rounded-xl border border-neutral hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1", children: [
    badge && /* @__PURE__ */ jsx("span", { className: "inline-block px-2 py-0.5 bg-primary-light text-primary text-xs font-medium rounded-full mb-3", children: badge }),
    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-primary group-hover:text-white transition-colors" }) }),
    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-accent mb-2", children: name }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-accent/60", children: description })
  ] });
}
function FeatureCard({
  title,
  description,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center p-6", children: [
    /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-primary" }) }),
    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-accent mb-2", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-accent/60", children: description })
  ] });
}
function FileTextIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ jsx("polyline", { points: "10 9 9 9 8 9" })
  ] });
}
function ImageIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
    /* @__PURE__ */ jsx("polyline", { points: "21 15 16 10 5 21" })
  ] });
}
function MergeIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M8 6h13" }),
    /* @__PURE__ */ jsx("path", { d: "M8 12h13" }),
    /* @__PURE__ */ jsx("path", { d: "M8 18h13" }),
    /* @__PURE__ */ jsx("path", { d: "M3 6h.01" }),
    /* @__PURE__ */ jsx("path", { d: "M3 12h.01" }),
    /* @__PURE__ */ jsx("path", { d: "M3 18h.01" })
  ] });
}
function SplitIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M16 3h5v5" }),
    /* @__PURE__ */ jsx("path", { d: "M8 3H3v5" }),
    /* @__PURE__ */ jsx("path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }),
    /* @__PURE__ */ jsx("path", { d: "m15 9 6-6" })
  ] });
}
function CompressIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    /* @__PURE__ */ jsx("path", { d: "M12 12v9" }),
    /* @__PURE__ */ jsx("path", { d: "m8 17 4 4 4-4" })
  ] });
}
function ShieldIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }),
    /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })
  ] });
}
function CloudIcon({
  className
}) {
  return /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }) });
}
function SparkleIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
    /* @__PURE__ */ jsx("path", { d: "M5 3v4" }),
    /* @__PURE__ */ jsx("path", { d: "M19 17v4" }),
    /* @__PURE__ */ jsx("path", { d: "M3 5h4" }),
    /* @__PURE__ */ jsx("path", { d: "M17 19h4" })
  ] });
}
function GiftIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "20 12 20 22 4 22 4 12" }),
    /* @__PURE__ */ jsx("rect", { x: "2", y: "7", width: "20", height: "5" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "22", x2: "12", y2: "7" }),
    /* @__PURE__ */ jsx("path", { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }),
    /* @__PURE__ */ jsx("path", { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" })
  ] });
}
function ScanIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M3 7V5a2 2 0 0 1 2-2h2" }),
    /* @__PURE__ */ jsx("path", { d: "M17 3h2a2 2 0 0 1 2 2v2" }),
    /* @__PURE__ */ jsx("path", { d: "M21 17v2a2 2 0 0 1-2 2h-2" }),
    /* @__PURE__ */ jsx("path", { d: "M7 21H5a2 2 0 0 1-2-2v-2" }),
    /* @__PURE__ */ jsx("path", { d: "M7 12h10" })
  ] });
}
function ChatIcon({
  className
}) {
  return /* @__PURE__ */ jsx("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
}
function ExtractIcon({
  className
}) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
    /* @__PURE__ */ jsx("polyline", { points: "7.5 4.21 12 6.81 16.5 4.21" }),
    /* @__PURE__ */ jsx("polyline", { points: "7.5 19.79 7.5 14.6 3 12" }),
    /* @__PURE__ */ jsx("polyline", { points: "21 12 16.5 14.6 16.5 19.79" }),
    /* @__PURE__ */ jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
  ] });
}
export {
  Home as component
};
