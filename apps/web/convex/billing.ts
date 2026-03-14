import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getSubscriptionPlans = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("subscriptionPlans")
      .filter((q) => q.eq(q.field("active"), true))
      .collect();
  },
});

export const getPlan = query({
  args: { planId: v.id("subscriptionPlans") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.planId);
  },
});

export const createPlan = mutation({
  args: {
    name: v.string(),
    price: v.number(),
    interval: v.string(),
    maxFileSize: v.number(),
    dailyJobs: v.number(),
    aiCredits: v.number(),
    features: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("subscriptionPlans", {
      ...args,
      active: true,
    });
  },
});

export const getUserSubscription = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("userSubscriptions")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("status"), "active"))
      .first();
  },
});

export const createSubscription = mutation({
  args: {
    userId: v.id("users"),
    planId: v.id("subscriptionPlans"),
    stripeSubscriptionId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;

    return await ctx.db.insert("userSubscriptions", {
      userId: args.userId,
      planId: args.planId,
      status: "active",
      stripeSubscriptionId: args.stripeSubscriptionId,
      currentPeriodStart: now,
      currentPeriodEnd: now + thirtyDays,
      createdAt: now,
    });
  },
});

export const updateSubscriptionStatus = mutation({
  args: {
    subscriptionId: v.id("userSubscriptions"),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.subscriptionId, { status: args.status });
  },
});

export const cancelSubscription = mutation({
  args: { subscriptionId: v.id("userSubscriptions") },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.subscriptionId, { status: "canceled" });
  },
});

export const renewSubscription = mutation({
  args: { subscriptionId: v.id("userSubscriptions") },
  handler: async (ctx, args) => {
    const subscription = await ctx.db.get(args.subscriptionId);
    if (!subscription) return;

    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    await ctx.db.patch(args.subscriptionId, {
      status: "active",
      currentPeriodStart: Date.now(),
      currentPeriodEnd: Date.now() + thirtyDays,
    });
  },
});
