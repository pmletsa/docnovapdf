import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAiRequest = query({
  args: { requestId: v.id("aiRequests") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.requestId);
  },
});

export const getUserAiRequests = query({
  args: { userId: v.id("users"), type: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (args.type) {
      return await ctx.db
        .query("aiRequests")
        .withIndex("by_type", (q) => q.eq("type", args.type!))
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .collect();
    }
    return await ctx.db
      .query("aiRequests")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .order("desc")
      .collect();
  },
});

export const createAiRequest = mutation({
  args: {
    userId: v.id("users"),
    fileId: v.optional(v.id("files")),
    type: v.string(),
    prompt: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("aiRequests", {
      ...args,
      status: "pending",
      createdAt: Date.now(),
    });
  },
});

export const updateAiRequest = mutation({
  args: {
    requestId: v.id("aiRequests"),
    status: v.optional(v.string()),
    result: v.optional(v.string()),
    tokensUsed: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { requestId, ...updates } = args;
    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(requestId, filteredUpdates);
  },
});

export const completeAiRequest = mutation({
  args: {
    requestId: v.id("aiRequests"),
    result: v.string(),
    tokensUsed: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.requestId, {
      status: "completed",
      result: args.result,
      tokensUsed: args.tokensUsed,
    });
  },
});

export const failAiRequest = mutation({
  args: {
    requestId: v.id("aiRequests"),
    error: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.requestId, {
      status: "failed",
      result: args.error,
    });
  },
});
