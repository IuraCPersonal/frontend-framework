export function createBuildSettings(options) {
  return {
    entryPoints: ["src/index.js", "src/index.html"],
    outdir: "dist",
    bundle: true,
    loader: {
      ".html": "copy",
    },
    ...options,
  };
}
