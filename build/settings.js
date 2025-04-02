export function createBuildSettings(options) {
  return {
    entryPoints: ["src/index.js"],
    outdir: "dist",
    bundle: true,
    // TODO: copy public folder
    ...options,
  };
}
