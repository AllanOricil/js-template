import typescript from "@rollup/plugin-typescript";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: "./dist/index.mjs",
      format: "es",
      sourcemap: true,
    },
    {
      file: "./dist/index.cjs",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./dist/index.umd.js",
      format: "umd",
      name: "jsTemplate",
      globals: {},
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
      declaration: true,
      outDir: "./dist",
      declarationDir: "./dist/typings",
    }),
  ],
};
