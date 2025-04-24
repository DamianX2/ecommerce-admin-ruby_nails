import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 🎯 File-specific override to disable `no-var` in prismadb.ts
  {
    files: ["lib/prismadb.ts"],
    rules: {
      "no-var": "off",
    },
  },
];

export default eslintConfig;
