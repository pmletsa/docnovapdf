import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-BmpLmyJa.js";
import "@tanstack/react-router";
import "react";
const plans = [{
  name: "Free",
  price: 0,
  description: "Perfect for individuals just getting started.",
  features: [{
    text: "5 documents / month",
    included: true
  }, {
    text: "Basic AI analysis",
    included: true
  }, {
    text: "Community support",
    included: true
  }, {
    text: "Custom templates",
    included: false
  }],
  cta: "Get Started",
  popular: false
}, {
  name: "Pro",
  price: 29,
  description: "Accelerate your workflow with advanced tools.",
  features: [{
    text: "Unlimited documents",
    included: true
  }, {
    text: "Advanced AI extraction",
    included: true
  }, {
    text: "Priority email support",
    included: true
  }, {
    text: "Custom templates",
    included: true
  }],
  cta: "Go Pro",
  popular: true
}, {
  name: "Business",
  price: 99,
  description: "Full power for large teams and organizations.",
  features: [{
    text: "Enterprise-grade security",
    included: true
  }, {
    text: "Dedicated account manager",
    included: true
  }, {
    text: "API access",
    included: true
  }, {
    text: "SSO & SAML",
    included: true
  }],
  cta: "Contact Sales",
  popular: false
}];
const compareFeatures = [{
  feature: "AI Analysis",
  free: "Basic",
  pro: "Advanced",
  business: "Custom Models"
}, {
  feature: "Monthly Documents",
  free: "5",
  pro: "Unlimited",
  business: "Unlimited"
}, {
  feature: "Team Members",
  free: "1",
  pro: "Up to 10",
  business: "Unlimited"
}, {
  feature: "Support",
  free: "Community",
  pro: "Priority Email",
  business: "24/7 Dedicated"
}, {
  feature: "API Access",
  free: false,
  pro: false,
  business: true
}, {
  feature: "Custom Branding",
  free: false,
  pro: true,
  business: true
}, {
  feature: "SLA Guarantee",
  free: false,
  pro: false,
  business: true
}];
function PricingPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#f8f9fb] flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-black text-gray-900 mb-4", children: "Simple, transparent pricing" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-lg max-w-xl mx-auto", children: "Choose the plan that's right for your document workflow. No hidden fees." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: plans.map((plan) => /* @__PURE__ */ jsxs("div", { className: `bg-white rounded-2xl p-8 border-2 relative ${plan.popular ? "border-[#e53935] shadow-xl" : "border-gray-100"}`, children: [
        plan.popular && /* @__PURE__ */ jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx("span", { className: "bg-[#e53935] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase", children: "Most Popular" }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: plan.name }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-baseline gap-1", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-4xl font-black text-gray-900", children: [
              "$",
              plan.price
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "/mo" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-500", children: plan.description })
        ] }),
        /* @__PURE__ */ jsx("button", { className: `w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all cursor-pointer ${plan.popular ? "bg-[#e53935] hover:bg-[#d32f2f] text-white" : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300"}`, children: plan.cta }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-4", children: plan.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          feature.included ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#e53935]", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) : /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }),
          /* @__PURE__ */ jsx("span", { className: feature.included ? "text-gray-700" : "text-gray-400", children: feature.text })
        ] }, idx)) })
      ] }, plan.name)) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-8", children: "Compare features" }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-100", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left py-4 pr-4 font-semibold text-gray-900", children: "Feature" }),
            /* @__PURE__ */ jsx("th", { className: "text-center py-4 px-4 font-semibold text-gray-900", children: "Free" }),
            /* @__PURE__ */ jsx("th", { className: "text-center py-4 px-4 font-semibold text-gray-900", children: "Pro" }),
            /* @__PURE__ */ jsx("th", { className: "text-center py-4 px-4 font-semibold text-gray-900", children: "Business" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: compareFeatures.map((row, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-50", children: [
            /* @__PURE__ */ jsx("td", { className: "py-4 pr-4 text-gray-600", children: row.feature }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-center", children: typeof row.free === "boolean" ? row.free ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#e53935] mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) : /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "—" }) : /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: row.free }) }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-center", children: typeof row.pro === "boolean" ? row.pro ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#e53935] mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) : /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "—" }) : /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: row.pro }) }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-4 text-center", children: typeof row.business === "boolean" ? row.business ? /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-[#e53935] mx-auto", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }) : /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "—" }) : /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: row.business }) })
          ] }, idx)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-[#f8f9fb]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6", children: "Trusted by Industry Leaders" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 text-gray-400", children: [
          /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: "TECHSTREAM" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: "DATACLOUD" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: "InnovaCorp" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: "Vantage Point" }),
          /* @__PURE__ */ jsx("span", { className: "text-lg font-bold", children: "Aether" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PricingPage as component
};
