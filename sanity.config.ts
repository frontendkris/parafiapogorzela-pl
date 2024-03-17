// Different environments use different variables
const projectId =
  import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID! ||
  import.meta.env.PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  import.meta.env.PUBLIC_SANITY_STUDIO_DATASET! ||
  import.meta.env.PUBLIC_SANITY_DATASET!;

import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {colorInput} from "@sanity/color-input";
import {visionTool} from "@sanity/vision";
import {schemaTypes} from "./schema";
//@ts-ignore
import {myStructure} from "./deskStructure";

export default defineConfig({
  name: "parafia-pogorzela",
  title: "Parafia Pogorzela",
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    colorInput(),
  ],
  schema: {
    types: schemaTypes,
  },
});
