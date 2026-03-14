import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { D as DashboardLayout } from "./DashboardLayout-DT3UPMhJ.js";
function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  return /* @__PURE__ */ jsx(DashboardLayout, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsx("header", { className: "bg-white border-b border-gray-100 px-8 py-4", children: /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-gray-900", children: "Settings" }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1 p-8 overflow-auto", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-8 bg-gray-100 p-1 rounded-xl w-fit", children: ["profile", "security", "notifications", "billing"].map((tab) => /* @__PURE__ */ jsx("button", { onClick: () => setActiveTab(tab), className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer capitalize ${activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`, children: tab }, tab)) }),
      activeTab === "profile" && /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900 mb-6", children: "Profile Information" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-gradient-to-br from-[#e53935] to-[#ff8a80] rounded-full flex items-center justify-center text-white text-2xl font-bold", children: "A" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("button", { className: "px-4 py-2 bg-[#e53935] text-white rounded-lg text-sm font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer", children: "Change Photo" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2", children: "JPG, PNG or GIF. Max 2MB." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "First Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", defaultValue: "Alex", className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Last Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", defaultValue: "Johnson", className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Email" }),
            /* @__PURE__ */ jsx("input", { type: "email", defaultValue: "alex.johnson@example.com", className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Company" }),
            /* @__PURE__ */ jsx("input", { type: "text", defaultValue: "Acme Inc.", className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsx("button", { className: "px-6 py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer", children: "Save Changes" }) })
      ] }) }),
      activeTab === "security" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900 mb-6", children: "Change Password" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Current Password" }),
              /* @__PURE__ */ jsx("input", { type: "password", className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "New Password" }),
              /* @__PURE__ */ jsx("input", { type: "password", className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Confirm New Password" }),
              /* @__PURE__ */ jsx("input", { type: "password", className: "w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#e53935] focus:ring-1 focus:ring-[#e53935]/20 transition-all" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-end", children: /* @__PURE__ */ jsx("button", { className: "px-6 py-2.5 bg-[#e53935] text-white rounded-xl font-medium hover:bg-[#d32f2f] transition-colors cursor-pointer", children: "Update Password" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900 mb-4", children: "Two-Factor Authentication" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mb-4", children: "Add an extra layer of security to your account." }),
          /* @__PURE__ */ jsx("button", { className: "px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer", children: "Enable 2FA" })
        ] })
      ] }),
      activeTab === "notifications" && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900 mb-6", children: "Notification Preferences" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [{
          label: "Email notifications",
          description: "Receive email updates about your account activity"
        }, {
          label: "Processing complete",
          description: "Get notified when your documents are processed"
        }, {
          label: "Weekly digest",
          description: "Receive a weekly summary of your activity"
        }, {
          label: "Marketing emails",
          description: "Receive tips, product updates and offers"
        }].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-3 border-b border-gray-50 last:border-0", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: item.label }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: item.description })
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
            /* @__PURE__ */ jsx("input", { type: "checkbox", defaultChecked: index < 2, className: "sr-only peer" }),
            /* @__PURE__ */ jsx("div", { className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#e53935]" })
          ] })
        ] }, index)) })
      ] }),
      activeTab === "billing" && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900", children: "Current Plan" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "You are currently on the Pro plan" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-[#e53935] text-white text-sm font-medium rounded-full", children: "Pro" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-3xl font-bold text-gray-900", children: "$29" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "/month" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Link, { to: "/pricing", className: "px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer", children: "Change Plan" }),
            /* @__PURE__ */ jsx("button", { className: "px-4 py-2 text-[#e53935] text-sm font-medium hover:underline cursor-pointer", children: "Cancel Subscription" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl border border-gray-100 p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-bold text-gray-900 mb-4", children: "Payment Method" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 bg-gray-50 rounded-xl", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold", children: "VISA" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900", children: "•••• •••• •••• 4242" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Expires 12/2025" })
            ] }),
            /* @__PURE__ */ jsx("button", { className: "ml-auto text-sm text-[#e53935] font-medium hover:underline cursor-pointer", children: "Update" })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  SettingsPage as component
};
