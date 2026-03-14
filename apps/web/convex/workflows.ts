import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getWorkflow = query({
  args: { workflowId: v.id("workflows") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.workflowId);
  },
});

export const getUserWorkflows = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("workflows")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const createWorkflow = mutation({
  args: {
    userId: v.id("users"),
    name: v.string(),
    description: v.optional(v.string()),
    trigger: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("workflows", {
      ...args,
      active: true,
      createdAt: Date.now(),
    });
  },
});

export const updateWorkflow = mutation({
  args: {
    workflowId: v.id("workflows"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    trigger: v.optional(v.string()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { workflowId, ...updates } = args;
    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(workflowId, filteredUpdates);
  },
});

export const deleteWorkflow = mutation({
  args: { workflowId: v.id("workflows") },
  handler: async (ctx, args) => {
    // Delete all steps first
    const steps = await ctx.db
      .query("workflowSteps")
      .withIndex("by_workflow", (q) => q.eq("workflowId", args.workflowId))
      .collect();
    
    for (const step of steps) {
      await ctx.db.delete(step._id);
    }
    
    await ctx.db.delete(args.workflowId);
  },
});

export const getWorkflowSteps = query({
  args: { workflowId: v.id("workflows") },
  handler: async (ctx, args) => {
    const steps = await ctx.db
      .query("workflowSteps")
      .withIndex("by_workflow", (q) => q.eq("workflowId", args.workflowId))
      .collect();
    return steps.sort((a, b) => a.stepOrder - b.stepOrder);
  },
});

export const addWorkflowStep = mutation({
  args: {
    workflowId: v.id("workflows"),
    stepOrder: v.number(),
    action: v.string(),
    config: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("workflowSteps", args);
  },
});

export const updateWorkflowStep = mutation({
  args: {
    stepId: v.id("workflowSteps"),
    action: v.optional(v.string()),
    config: v.optional(v.any()),
    stepOrder: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { stepId, ...updates } = args;
    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(stepId, filteredUpdates);
  },
});

export const deleteWorkflowStep = mutation({
  args: { stepId: v.id("workflowSteps") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.stepId);
  },
});
