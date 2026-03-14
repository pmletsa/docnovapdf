import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import { F as FileUploader } from "./FileUploader-B_tz5ll4.js";
import "@tanstack/react-router";
function ChatWithPdfPage() {
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleFilesSelected = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
      setMessages([{
        role: "assistant",
        content: `I've loaded "${files[0].name}". What would you like to know about this document?`
      }]);
    }
  };
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, {
      role: "user",
      content: userMessage
    }]);
    setIsLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "This is a placeholder response. AI integration coming soon!"
      }]);
      setIsLoading(false);
    }, 1500);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-primary-light/30 via-transparent to-transparent py-8 sm:py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-primary-light/50 rounded-full mb-4", children: [
          /* @__PURE__ */ jsx(SparkleIcon, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-primary", children: "AI Powered" })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl font-bold text-accent", children: "Chat with PDF" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-accent/70 max-w-xl mx-auto", children: "Ask questions about your document and get instant AI-powered answers." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "flex-1 py-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col", children: !file ? /* @__PURE__ */ jsx(FileUploader, { accept: ".pdf", multiple: false, onFilesSelected: handleFilesSelected }) : /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col bg-neutral/30 rounded-2xl border border-neutral overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-4 border-b border-neutral bg-background", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(FileIcon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-accent truncate", children: file.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-accent/60", children: formatBytes(file.size) })
          ] }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            setFile(null);
            setMessages([]);
          }, className: "text-accent/50 hover:text-red-500 text-sm", children: "Change file" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]", children: [
          messages.map((msg, i) => /* @__PURE__ */ jsx("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[80%] p-4 rounded-2xl ${msg.role === "user" ? "bg-primary text-white rounded-br-md" : "bg-background border border-neutral rounded-bl-md"}`, children: /* @__PURE__ */ jsx("p", { className: "text-sm", children: msg.content }) }) }, i)),
          isLoading && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "bg-background border border-neutral p-4 rounded-2xl rounded-bl-md", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary/50 rounded-full animate-bounce" }),
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary/50 rounded-full animate-bounce", style: {
              animationDelay: "0.1s"
            } }),
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-primary/50 rounded-full animate-bounce", style: {
              animationDelay: "0.2s"
            } })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "p-4 border-t border-neutral bg-background", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && handleSend(), placeholder: "Ask a question about your document...", className: "flex-1 px-4 py-3 border border-neutral rounded-xl bg-background text-accent placeholder:text-accent/40 focus:border-primary focus:outline-none" }),
          /* @__PURE__ */ jsx("button", { onClick: handleSend, disabled: !input.trim() || isLoading, className: "px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50", children: "Send" })
        ] }) })
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
function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
export {
  ChatWithPdfPage as component
};
