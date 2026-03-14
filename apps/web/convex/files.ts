import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getFile = query({
  args: { fileId: v.id("files") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.fileId);
  },
});

export const getUserFiles = query({
  args: { userId: v.id("users"), folderId: v.optional(v.id("folders")) },
  handler: async (ctx, args) => {
    if (args.folderId) {
      return await ctx.db
        .query("files")
        .withIndex("by_folder", (q) => q.eq("folderId", args.folderId))
        .collect();
    }
    return await ctx.db
      .query("files")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
  },
});

export const createFile = mutation({
  args: {
    userId: v.id("users"),
    filename: v.string(),
    originalName: v.string(),
    storageId: v.optional(v.id("_storage")),
    storageUrl: v.optional(v.string()),
    fileType: v.string(),
    size: v.number(),
    pages: v.optional(v.number()),
    folderId: v.optional(v.id("folders")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("files", {
      ...args,
      status: "ready",
      createdAt: Date.now(),
    });
  },
});

export const updateFileStatus = mutation({
  args: {
    fileId: v.id("files"),
    status: v.string(),
    pages: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { fileId, ...updates } = args;
    const filteredUpdates = Object.fromEntries(
      Object.entries(updates).filter(([_, v]) => v !== undefined)
    );
    await ctx.db.patch(fileId, filteredUpdates);
  },
});

export const deleteFile = mutation({
  args: { fileId: v.id("files") },
  handler: async (ctx, args) => {
    const file = await ctx.db.get(args.fileId);
    if (file?.storageId) {
      await ctx.storage.delete(file.storageId);
    }
    await ctx.db.delete(args.fileId);
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const getFileUrl = query({
  args: { storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
