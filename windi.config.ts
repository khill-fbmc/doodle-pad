import { defineConfig } from "windicss/helpers";

// https://windicss.org/guide/configuration
export default defineConfig({
  extract: [{ include: "index.html" }],
  darkMode: "class",
  safelist: ["prose", "prose-sm", "m-auto"],
  plugins: [],
  theme: {
    extend: {},
  },
});
