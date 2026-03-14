import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { D as DashboardLayout } from "./DashboardLayout-DT3UPMhJ.js";
import "@tanstack/react-router";
function AiChatPage() {
  const [activeTab, setActiveTab] = useState("chat");
  const [message, setMessage] = useState("");
  const chatMessages = [{
    type: "ai",
    content: "Hello! I've analyzed the Q4 Financial Report. I can help you summarize sections, calculate variances, or find specific data points. What would you like to know?",
    time: "Just now"
  }, {
    type: "user",
    content: "What was the net profit margin for the East region in Q4?",
    time: "2 mins ago"
  }, {
    type: "ai",
    content: "The net profit margin for the East region in Q4 was 24.8%. This represents a 3.2% increase compared to Q3.",
    source: "Page 4, Table 2.1",
    time: "Just now"
  }];
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Documents" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "›" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: "Q4 Financial Analysis.pdf" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
        /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" }) }) }),
        /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" }) }) }),
        /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2 bg-[#e53935] text-white rounded-lg font-medium text-sm hover:bg-[#d32f2f] transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" }) }),
          "Share"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1 bg-[#e8eaf0] p-8 overflow-auto", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "h-32 bg-gray-100 rounded" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "h-64 bg-gray-50 rounded flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-16 h-16 text-gray-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 px-3 py-1 bg-[#ffebee] text-[#e53935] text-xs font-medium rounded", children: "CONTEXT HIGHLIGHTED" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-48 bg-gray-100 rounded" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-200", children: [
          /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-gray-600 cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: "Page 1 of 12" }),
          /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-gray-600 cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-96 bg-white border-l border-gray-100 flex flex-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex border-b border-gray-100", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("chat"), className: `flex-1 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "chat" ? "text-[#e53935] border-b-2 border-[#e53935]" : "text-gray-500 hover:text-gray-700"}`, children: "Chat" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("summary"), className: `flex-1 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "summary" ? "text-[#e53935] border-b-2 border-[#e53935]" : "text-gray-500 hover:text-gray-700"}`, children: "Summary" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab("insights"), className: `flex-1 px-4 py-3 text-sm font-medium transition-colors cursor-pointer ${activeTab === "insights" ? "text-[#e53935] border-b-2 border-[#e53935]" : "text-gray-500 hover:text-gray-700"}`, children: "Insights" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-auto p-4 space-y-4", children: chatMessages.map((msg, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${msg.type === "ai" ? "bg-[#e53935]" : "bg-gray-200"}`, children: msg.type === "ai" ? /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-gray-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: `rounded-lg p-3 ${msg.type === "ai" ? "bg-gray-50" : "bg-[#e53935] text-white"}`, children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm", children: msg.content }),
              msg.source && /* @__PURE__ */ jsx("div", { className: "mt-2 pt-2 border-t border-gray-200", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-3 h-3", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }),
                "SOURCE: ",
                msg.source
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-1", children: msg.time })
          ] })
        ] }, index)) }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 border-t border-gray-100", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("input", { type: "text", value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Ask anything about this document...", className: "flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e53935] transition-all" }),
            /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-gray-600 cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" }) }) }),
            /* @__PURE__ */ jsx("button", { className: "p-3 bg-[#e53935] text-white rounded-lg hover:bg-[#d32f2f] transition-colors cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-2 text-center", children: "DocNova AI can make mistakes. Verify important financial data." })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  AiChatPage as component
};
