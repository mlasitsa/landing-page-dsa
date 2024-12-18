import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwindcss from "eslint-plugin-tailwindcss"; // Import Tailwind plugin

// Resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat helps migrate from eslintrc to Flat Config
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript" // Includes Next.js + TypeScript rules
  ),
  {
    files: ["**/*.{js,ts,jsx,tsx}"], // Target JS and TS files
    plugins: { tailwindcss },        // Load Tailwind plugin
    rules: {
      "tailwindcss/no-custom-classname": "off", // Disable this if you use custom classes
      "tailwindcss/classnames-order": "warn",  // Warn if classnames are not ordered
    },
  },
];

export default eslintConfig;
