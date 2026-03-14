import { jsx, jsxs } from "react/jsx-runtime";
import { createRootRouteWithContext, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { ConvexProvider } from "convex/react";
import "react";
const appCss = "/assets/app-jIWY8-9Y.css";
const Route$o = createRootRouteWithContext()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "DocNovaAI - AI-Powered PDF Tools"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      },
      { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
      { rel: "icon", href: "/favicon.ico" }
    ]
  }),
  notFoundComponent: () => /* @__PURE__ */ jsx("div", { children: "Route not found" }),
  component: RootComponent
});
function RootComponent() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$n = () => import("./settings-BwTH71EJ.js");
const Route$n = createFileRoute("/settings")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./pricing-BR5HHOio.js");
const Route$m = createFileRoute("/pricing")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const $$splitComponentImporter$l = () => import("./files-CW_O1GRo.js");
const Route$l = createFileRoute("/files")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./dashboard-jebYf-19.js");
const Route$k = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./automation-builder-BwqaUBe7.js");
const Route$j = createFileRoute("/automation-builder")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./automation-DIY8AtT0.js");
const Route$i = createFileRoute("/automation")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./index-BVcV-hBl.js");
const Route$h = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./index-BfFDaFic.js");
const Route$g = createFileRoute("/tools/")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./index-DXA2Cn5h.js");
const Route$f = createFileRoute("/dashboard/")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./word-to-pdf-Bf4H6xhm.js");
const Route$e = createFileRoute("/tools/word-to-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./split-pdf-BM5Ds5hQ.js");
const Route$d = createFileRoute("/tools/split-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./pdf-to-word-CrKISpwh.js");
const Route$c = createFileRoute("/tools/pdf-to-word")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./pdf-to-jpg-BN1YBaRj.js");
const Route$b = createFileRoute("/tools/pdf-to-jpg")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./ocr-pdf-BWcnaU8v.js");
const Route$a = createFileRoute("/tools/ocr-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./merge-pdf-DBQ4m6CF.js");
const Route$9 = createFileRoute("/tools/merge-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./jpg-to-pdf-CzPeKs19.js");
const Route$8 = createFileRoute("/tools/jpg-to-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./compress-pdf-CW7ZVNw3.js");
const Route$7 = createFileRoute("/tools/compress-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./ai-chat-cvJaW_5x.js");
const Route$6 = createFileRoute("/tools/ai-chat")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./_fileId-m55VJVkK.js");
const Route$5 = createFileRoute("/document/$fileId")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./workflows-xIbFTDGR.js");
const Route$4 = createFileRoute("/dashboard/workflows")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./files-BlhaGYeO.js");
const Route$3 = createFileRoute("/dashboard/files")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./summarize-pdf-G6jynYB5.js");
const Route$2 = createFileRoute("/ai/summarize-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./extract-data-DU28oWIL.js");
const Route$1 = createFileRoute("/ai/extract-data")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./chat-with-pdf-BMBrrus-.js");
const Route = createFileRoute("/ai/chat-with-pdf")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SettingsRoute = Route$n.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$o
});
const PricingRoute = Route$m.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$o
});
const FilesRoute = Route$l.update({
  id: "/files",
  path: "/files",
  getParentRoute: () => Route$o
});
const DashboardRoute = Route$k.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$o
});
const AutomationBuilderRoute = Route$j.update({
  id: "/automation-builder",
  path: "/automation-builder",
  getParentRoute: () => Route$o
});
const AutomationRoute = Route$i.update({
  id: "/automation",
  path: "/automation",
  getParentRoute: () => Route$o
});
const IndexRoute = Route$h.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$o
});
const ToolsIndexRoute = Route$g.update({
  id: "/tools/",
  path: "/tools/",
  getParentRoute: () => Route$o
});
const DashboardIndexRoute = Route$f.update({
  id: "/",
  path: "/",
  getParentRoute: () => DashboardRoute
});
const ToolsWordToPdfRoute = Route$e.update({
  id: "/tools/word-to-pdf",
  path: "/tools/word-to-pdf",
  getParentRoute: () => Route$o
});
const ToolsSplitPdfRoute = Route$d.update({
  id: "/tools/split-pdf",
  path: "/tools/split-pdf",
  getParentRoute: () => Route$o
});
const ToolsPdfToWordRoute = Route$c.update({
  id: "/tools/pdf-to-word",
  path: "/tools/pdf-to-word",
  getParentRoute: () => Route$o
});
const ToolsPdfToJpgRoute = Route$b.update({
  id: "/tools/pdf-to-jpg",
  path: "/tools/pdf-to-jpg",
  getParentRoute: () => Route$o
});
const ToolsOcrPdfRoute = Route$a.update({
  id: "/tools/ocr-pdf",
  path: "/tools/ocr-pdf",
  getParentRoute: () => Route$o
});
const ToolsMergePdfRoute = Route$9.update({
  id: "/tools/merge-pdf",
  path: "/tools/merge-pdf",
  getParentRoute: () => Route$o
});
const ToolsJpgToPdfRoute = Route$8.update({
  id: "/tools/jpg-to-pdf",
  path: "/tools/jpg-to-pdf",
  getParentRoute: () => Route$o
});
const ToolsCompressPdfRoute = Route$7.update({
  id: "/tools/compress-pdf",
  path: "/tools/compress-pdf",
  getParentRoute: () => Route$o
});
const ToolsAiChatRoute = Route$6.update({
  id: "/tools/ai-chat",
  path: "/tools/ai-chat",
  getParentRoute: () => Route$o
});
const DocumentFileIdRoute = Route$5.update({
  id: "/document/$fileId",
  path: "/document/$fileId",
  getParentRoute: () => Route$o
});
const DashboardWorkflowsRoute = Route$4.update({
  id: "/workflows",
  path: "/workflows",
  getParentRoute: () => DashboardRoute
});
const DashboardFilesRoute = Route$3.update({
  id: "/files",
  path: "/files",
  getParentRoute: () => DashboardRoute
});
const AiSummarizePdfRoute = Route$2.update({
  id: "/ai/summarize-pdf",
  path: "/ai/summarize-pdf",
  getParentRoute: () => Route$o
});
const AiExtractDataRoute = Route$1.update({
  id: "/ai/extract-data",
  path: "/ai/extract-data",
  getParentRoute: () => Route$o
});
const AiChatWithPdfRoute = Route.update({
  id: "/ai/chat-with-pdf",
  path: "/ai/chat-with-pdf",
  getParentRoute: () => Route$o
});
const DashboardRouteChildren = {
  DashboardFilesRoute,
  DashboardWorkflowsRoute,
  DashboardIndexRoute
};
const DashboardRouteWithChildren = DashboardRoute._addFileChildren(
  DashboardRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AutomationRoute,
  AutomationBuilderRoute,
  DashboardRoute: DashboardRouteWithChildren,
  FilesRoute,
  PricingRoute,
  SettingsRoute,
  AiChatWithPdfRoute,
  AiExtractDataRoute,
  AiSummarizePdfRoute,
  DocumentFileIdRoute,
  ToolsAiChatRoute,
  ToolsCompressPdfRoute,
  ToolsJpgToPdfRoute,
  ToolsMergePdfRoute,
  ToolsOcrPdfRoute,
  ToolsPdfToJpgRoute,
  ToolsPdfToWordRoute,
  ToolsSplitPdfRoute,
  ToolsWordToPdfRoute,
  ToolsIndexRoute
};
const routeTree = Route$o._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const CONVEX_URL = "https://hip-ram-436.convex.cloud";
  const convexQueryClient = new ConvexQueryClient(CONVEX_URL);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn(),
        gcTime: 5e3
      }
    }
  });
  convexQueryClient.connect(queryClient);
  const router = routerWithQueryClient(
    createRouter({
      routeTree,
      defaultPreload: "intent",
      context: { queryClient },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0,
      // Let React Query handle all caching
      defaultErrorComponent: (err) => /* @__PURE__ */ jsx("p", { children: err.error.stack }),
      defaultNotFoundComponent: () => /* @__PURE__ */ jsx("p", { children: "not found" }),
      Wrap: ({ children }) => /* @__PURE__ */ jsx(ConvexProvider, { client: convexQueryClient.convexClient, children })
    }),
    queryClient
  );
  return router;
}
export {
  getRouter
};
