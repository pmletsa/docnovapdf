import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getFolder = query({
  args: { folderId: v.id("folders") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.folderId);
  },
});

export const getUserFolders = query({
  args: { userId: v.id("users"), parentFolderId: v.optional(v.id("folders")) },
  handler: async (ctx, args) => {
    if (args.parentFolderId) {
      return await ctx.db
        .query("folders")
        .withIndex("by_parent", (q) => q.eq("parentFolderId", args.parentFolderId))
        .collect();
    }
    return await ctx.db
      .query("folders")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("parentFolderId"), undefined))
      .collect();
  },
});

export const createFolder = mutation({
  args: {
    userId: v.id("users"),
    name: v.string(),
    parentFolderId: v.optional(v.id("folders")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("folders", {
      ...args,
      createdAt: Date.now(),
    });
  },
});

export const renameFolder = mutation({
  args: {
    folderId: v.id("folders"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.folderId, { name: args.name });
  },
});

export const deleteFolder = mutation({
  args: { folderId: v.id("folders") },
  handler: async (ctx, args) => {
    // Delete all files in folder
    const files = await ctx.db
      .query("files")
      .withIndex("by_folder", (q) => q.eq("folderId", args.folderId))
      .collect();
    
    for (const file of files) {
      if (file.storageId) {
        await ctx.storage.delete(file.storageId);
      }
      await ctx.db.delete(file._id);
    }

    // Delete subfolders recursively
    const subfolders = await ctx.db
      .query("folders")
      .withIndex("by_parent", (q) => q.eq("parentFolderId", args.folderId))
      .collect();
    
    for (const subfolder of subfolders) {
      await ctx.db.delete(subfolder._id);
    }

    await ctx.db.delete(args.folderId);
  },
});
