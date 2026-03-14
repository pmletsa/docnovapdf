import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation, Link } from "@tanstack/react-router";
function DashboardLayout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "dashboard" },
    { path: "/files", label: "My Files", icon: "folder" },
    { path: "/automation", label: "Automation", icon: "bolt" },
    { path: "/tools", label: "Tools", icon: "tools" },
    { path: "/tools/ai-chat", label: "AI Chat", icon: "chat" },
    { path: "/settings", label: "Settings", icon: "settings" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#f8f9fb] flex", children: [
    /* @__PURE__ */ jsxs("aside", { className: "w-64 bg-white border-r border-gray-100 flex flex-col fixed h-screen", children: [
      /* @__PURE__ */ jsx("div", { className: "p-6 border-b border-gray-100", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-[#e53935] rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" }) }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-900", children: "DocNova AI" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Intelligent Workflows" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("nav", { className: "flex-1 p-4 overflow-y-auto", children: /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: navItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: item.path,
          className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors cursor-pointer ${currentPath === item.path ? "bg-[#ffebee] text-[#e53935] font-medium" : "text-gray-600 hover:bg-gray-50"}`,
          children: [
            /* @__PURE__ */ jsx(NavIcon, { type: item.icon, active: currentPath === item.path }),
            /* @__PURE__ */ jsx("span", { children: item.label })
          ]
        }
      ) }, item.path)) }) }),
      /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "w-full block bg-[#e53935] hover:bg-[#d32f2f] text-white font-semibold py-3 px-4 rounded-xl transition-colors cursor-pointer text-center", children: "Upgrade Plan" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col ml-64", children: [
      /* @__PURE__ */ jsxs("header", { className: "bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 max-w-xl", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search documents, jobs, or tags...",
              className: "w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all text-sm"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 ml-6", children: [
          /* @__PURE__ */ jsxs("button", { className: "p-2 text-gray-400 hover:text-gray-600 transition-colors relative cursor-pointer", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" }) }),
            /* @__PURE__ */ jsx("span", { className: "absolute top-1 right-1 w-2 h-2 bg-[#e53935] rounded-full" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-gray-900", children: "Alex Johnson" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Pro Plan" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-[#e53935] to-[#ff8a80] rounded-full flex items-center justify-center text-white font-bold cursor-pointer", children: "A" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-auto", children })
    ] })
  ] });
}
function NavIcon({ type, active }) {
  const color = active ? "text-[#e53935]" : "text-gray-500";
  switch (type) {
    case "dashboard":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" }) });
    case "folder":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" }) });
    case "bolt":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) });
    case "tools":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" }) });
    case "chat":
      return /* @__PURE__ */ jsx("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) });
    case "settings":
      return /* @__PURE__ */ jsxs("svg", { className: `w-5 h-5 ${color}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" }),
        /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" })
      ] });
    default:
      return null;
  }
}
export {
  DashboardLayout as D
};
