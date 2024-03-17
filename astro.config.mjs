import {loadEnv} from "vite";
import {defineConfig} from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [
    sanity({
      projectId,
      dataset,
      studioBasePath: "/admin",
      useCdn: false,
      apiVersion: "2024-03-17",
    }),
    react(), // Required for Sanity Studio
    tailwind(),
  ],
  redirects: {
    "/ogłoszenia-parafialne": "/ogloszenia-parafialne",
    "/kontakt": "/",
    "/global-styles": "/",
    "/koleda-2023": "/",
    "/elementor-222": "/",
    "/elementor-284": "/",
    "/orszak-3-kroli": "/",
    "/author/janusz": "/",
  },
});
