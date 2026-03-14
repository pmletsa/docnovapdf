import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { D as DashboardLayout } from "./DashboardLayout-DT3UPMhJ.js";
function AutomationPage() {
  const workflows = [{
    name: "Invoice Processing",
    description: "Extract data from invoices and export to spreadsheet",
    status: "active",
    runs: 156,
    lastRun: "2 hours ago"
  }, {
    name: "Contract Review",
    description: "Summarize contracts and flag key clauses",
    status: "active",
    runs: 42,
    lastRun: "1 day ago"
  }, {
    name: "Report Generator",
    description: "Compile weekly reports from multiple sources",
    status: "paused",
    runs: 89,
    lastRun: "3 days ago"
  }];
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs("header", { className: "bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-gray-900", children: "Automation Workflows" }),
      /* @__PURE__ */ jsxs(Link, { to: "/automation-builder", className: "flex items-center gap-2 px-4 py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) }),
        "New Workflow"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 p-8 overflow-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-100", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-1", children: "Active Workflows" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900", children: "2" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-100", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-1", children: "Total Runs This Month" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900", children: "287" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-100", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-1", children: "Time Saved" }),
          /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-gray-900", children: "48h" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100", children: [
        /* @__PURE__ */ jsx("div", { className: "p-6 border-b border-gray-100", children: /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900", children: "Your Workflows" }) }),
        /* @__PURE__ */ jsx("div", { className: "divide-y divide-gray-50", children: workflows.map((workflow, index) => /* @__PURE__ */ jsxs("div", { className: "p-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center ${workflow.status === "active" ? "bg-[#e8f5e9]" : "bg-gray-100"}`, children: /* @__PURE__ */ jsx("svg", { className: `w-6 h-6 ${workflow.status === "active" ? "text-[#4caf50]" : "text-gray-400"}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900", children: workflow.name }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: workflow.description })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-gray-900", children: [
                workflow.runs,
                " runs"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500", children: [
                "Last run ",
                workflow.lastRun
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium ${workflow.status === "active" ? "bg-[#e8f5e9] text-[#4caf50]" : "bg-gray-100 text-gray-500"}`, children: workflow.status === "active" ? "Active" : "Paused" }),
            /* @__PURE__ */ jsx("button", { className: "p-2 text-gray-400 hover:text-gray-600 cursor-pointer", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" }) }) })
          ] })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900 mb-4", children: "Workflow Templates" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [{
          name: "PDF to Spreadsheet",
          description: "Extract tables from PDFs automatically"
        }, {
          name: "Document Summarizer",
          description: "Generate summaries for uploaded documents"
        }, {
          name: "Email Attachment Processor",
          description: "Process attachments from emails"
        }].map((template, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl border border-gray-100 hover:border-[#e53935]/30 hover:shadow-md transition-all cursor-pointer", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#ffebee] rounded-lg flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#e53935]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 mb-1", children: template.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: template.description })
        ] }, index)) })
      ] })
    ] })
  ] }) });
}
export {
  AutomationPage as component
};
