const esbuild = require("esbuild");
const isWatch = process.argv.includes("--watch");

/** @type {import('esbuild').BuildOptions} */
const config = {
  entryPoints: ["index.js"],
  bundle: true,
  outdir: "dist",
  sourcemap: true,
  target: ["es2018"],
  loader: { ".js": "jsx" },
  format: "esm",
  logLevel: "info",
};

if (isWatch) {
  esbuild.context(config).then((ctx) => {
    ctx.watch();
    console.log("Watching for changes...");
  });
} else {
  esbuild.build(config).catch(() => process.exit(1));
}
