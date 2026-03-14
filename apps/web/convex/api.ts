import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getApiKey = query({
  args: { apiKeyId: v.id("apiKeys") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.apiKeyId);
  },
});

export const getApiKeyByKey = query({
  args: { key: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("apiKeys")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .first();
  },
});

export const getUserApiKeys = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("apiKeys")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const createApiKey = mutation({
  args: {
    userId: v.id("users"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const key = `dnova_${generateRandomKey(32)}`;
    return await ctx.db.insert("apiKeys", {
      userId: args.userId,
      key,
      name: args.name,
      active: true,
      createdAt: Date.now(),
    });
  },
});

export const deactivateApiKey = mutation({
  args: { apiKeyId: v.id("apiKeys") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.apiKeyId, { active: false });
  },
});

export const deleteApiKey = mutation({
  args: { apiKeyId: v.id("apiKeys") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.apiKeyId);
  },
});

export const recordApiUsage = mutation({
  args: {
    apiKeyId: v.id("apiKeys"),
    endpoint: v.string(),
  },
  handler: async (ctx, args) => {
    // Update last used timestamp
    await ctx.db.patch(args.apiKeyId, { lastUsedAt: Date.now() });

    // Record usage
    await ctx.db.insert("apiUsage", {
      apiKeyId: args.apiKeyId,
      endpoint: args.endpoint,
      requestCount: 1,
      timestamp: Date.now(),
    });
  },
});

export const getApiUsage = query({
  args: { apiKeyId: v.id("apiKeys") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("apiUsage")
      .withIndex("by_api_key", (q) => q.eq("apiKeyId", args.apiKeyId))
      .collect();
  },
});

function generateRandomKey(length: number): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
