import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import { F as FileUploader } from "./FileUploader-B_tz5ll4.js";
import "@tanstack/react-router";
import "react";
function FilesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 py-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-accent", children: "My Files" }),
          /* @__PURE__ */ jsx("p", { className: "text-accent/60", children: "Upload and manage your documents" })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors", children: "New Folder" })
      ] }),
      /* @__PURE__ */ jsx(FileUploader, { accept: ".pdf,.doc,.docx,.jpg,.jpeg,.png", multiple: true, onFilesSelected: (files) => console.log("Files:", files) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 bg-neutral/50 rounded-xl border border-neutral p-6", children: /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-accent/50", children: /* @__PURE__ */ jsx("p", { children: "No files uploaded yet." }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  FilesPage as component
};
