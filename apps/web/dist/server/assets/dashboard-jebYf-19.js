import { jsx, jsxs } from "react/jsx-runtime";
import { D as DashboardLayout } from "./DashboardLayout-DT3UPMhJ.js";
import "@tanstack/react-router";
function DashboardPage() {
  const recentFiles = [{
    name: "Q3 Financial Report.pdf",
    modified: "2h ago",
    size: "4.2 MB",
    icon: "pdf"
  }, {
    name: "Client Agreement_Draft.docx",
    modified: "5h ago",
    size: "1.1 MB",
    icon: "word"
  }, {
    name: "Marketing Leads 2024.csv",
    modified: "1d ago",
    size: "850 KB",
    icon: "csv"
  }];
  const activeJobs = [{
    name: "OCR Extraction",
    file: "Invoice_772.pdf",
    progress: 85,
    status: "processing"
  }, {
    name: "Summarization",
    file: "Legal_Brief.pdf",
    progress: 0,
    status: "queued"
  }, {
    name: "Sentiment Analysis",
    file: "Reviews_Bulk.csv",
    progress: 42,
    status: "processing"
  }];
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Welcome back, Alex" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "You have 4 documents currently being processed by AI." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" }) }),
          "Upload"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 px-4 py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
          "New Flow"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-1", children: "AI Insights" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900", children: "3" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#fff3e0] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#ff9800]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-[#e53935] mt-3 font-medium", children: "Documents summarized today" }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-1 bg-gray-100 rounded-full mt-2", children: /* @__PURE__ */ jsx("div", { className: "w-3/4 h-full bg-[#e53935] rounded-full" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-1", children: "Automation Success" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900", children: "98.4%" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#e8f5e9] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#4caf50]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#4caf50] mt-3 font-medium flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }) }),
          "+2.1% from last week"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-1", children: "Time Saved" }),
            /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900", children: "12.5h" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#e3f2fd] rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#2196f3]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-3", children: "Total this month" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900", children: "Recent Files" }),
          /* @__PURE__ */ jsx("button", { className: "text-sm text-[#e53935] font-medium hover:underline cursor-pointer", children: "View All" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: recentFiles.map((file, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center ${file.icon === "pdf" ? "bg-[#ffebee]" : file.icon === "word" ? "bg-[#fff3e0]" : "bg-[#e8f5e9]"}`, children: /* @__PURE__ */ jsx(FileIcon, { type: file.icon }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 truncate", children: file.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500", children: [
              "Modified ",
              file.modified,
              " • ",
              file.size
            ] })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-gray-600 cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" }) }) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900", children: "Active Jobs" }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs font-medium text-[#e53935]", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-[#e53935] rounded-full animate-pulse" }),
            "LIVE"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-5", children: activeJobs.map((job, index) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-900", children: [
              job.name,
              " — ",
              /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: job.file })
            ] }),
            /* @__PURE__ */ jsx("span", { className: `text-sm font-medium ${job.status === "processing" ? "text-[#e53935]" : "text-gray-400"}`, children: job.status === "processing" ? `${job.progress}%` : "Queued" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-1.5 bg-gray-100 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: `h-full rounded-full transition-all duration-500 ${job.status === "processing" ? "bg-[#e53935]" : "bg-gray-200"}`, style: {
            width: `${job.progress}%`
          } }) })
        ] }, index)) }),
        /* @__PURE__ */ jsx("button", { className: "w-full mt-6 py-2.5 text-sm text-gray-600 font-medium hover:text-gray-900 transition-colors cursor-pointer", children: "Manage Processing Queue" })
      ] })
    ] })
  ] }) });
}
function FileIcon({
  type
}) {
  switch (type) {
    case "pdf":
      return /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#e53935]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }) });
    case "word":
      return /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#ff9800]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" }) });
    case "csv":
      return /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#4caf50]", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 13h2v2H8v-2zm0 4h2v2H8v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z" }) });
    default:
      return null;
  }
}
export {
  DashboardPage as component
};
