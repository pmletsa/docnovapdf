import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
function FileUploader({
  accept = ".pdf",
  multiple = false,
  maxSize = 100 * 1024 * 1024,
  // 100MB default
  onFilesSelected,
  disabled = false
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const validateFiles = useCallback(
    (files) => {
      const validFiles = [];
      const errors = [];
      for (const file of files) {
        if (maxSize && file.size > maxSize) {
          errors.push(`${file.name} exceeds maximum size of ${formatBytes(maxSize)}`);
          continue;
        }
        validFiles.push(file);
      }
      if (errors.length > 0) {
        setError(errors.join(", "));
      } else {
        setError(null);
      }
      return validFiles;
    },
    [maxSize]
  );
  const handleFiles = useCallback(
    (files) => {
      if (!files || files.length === 0) return;
      const fileArray = Array.from(files);
      const validFiles = validateFiles(fileArray);
      if (validFiles.length > 0) {
        onFilesSelected(validFiles);
      }
    },
    [validateFiles, onFilesSelected]
  );
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);
  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (disabled) return;
      handleFiles(e.dataTransfer.files);
    },
    [disabled, handleFiles]
  );
  const handleClick = () => {
    if (!disabled) {
      inputRef.current?.click();
    }
  };
  const handleChange = (e) => {
    handleFiles(e.target.files);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: handleClick,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        className: `
          relative border-[3px] border-dashed rounded-2xl p-10 sm:p-16 text-center cursor-pointer transition-all duration-300
          ${isDragging ? "border-primary bg-primary-light/30 scale-[1.02] shadow-lg shadow-primary/20" : "border-primary/40 hover:border-primary hover:bg-neutral/30 hover:shadow-md"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `,
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept,
              multiple,
              onChange: handleChange,
              className: "hidden",
              disabled
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5", children: [
            /* @__PURE__ */ jsx("div", { className: `
            w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300
            ${isDragging ? "bg-primary shadow-lg shadow-primary/30 scale-110" : "bg-primary-light group-hover:bg-primary"}
          `, children: /* @__PURE__ */ jsx(UploadIcon, { className: `w-10 h-10 transition-colors ${isDragging ? "text-white" : "text-primary"}` }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-accent", children: isDragging ? "📂 Drop your files here" : "📁 Choose or Drop Files" }),
              /* @__PURE__ */ jsxs("p", { className: "text-base text-accent/70", children: [
                "Drag & drop files here or",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold underline decoration-2 underline-offset-2", children: "click to browse" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-4 py-2 bg-neutral/50 rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-accent/60", children: accept === ".pdf" ? "📄 PDF files" : `📎 ${accept}` }),
              /* @__PURE__ */ jsx("span", { className: "text-accent/30", children: "•" }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium text-accent/60", children: [
                "⚡ Max ",
                formatBytes(maxSize)
              ] })
            ] })
          ] })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-red-50 border border-red-200 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-600 text-center flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "⚠️" }),
      /* @__PURE__ */ jsx("span", { children: error })
    ] }) })
  ] });
}
function UploadIcon({ className }) {
  return /* @__PURE__ */ jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ jsx("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
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
  FileUploader as F
};
