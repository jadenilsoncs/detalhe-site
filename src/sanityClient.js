// src/sanityClient.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
export const sanity = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: "2025-01-01",
  useCdn: true, // rápido (cache). Pode atrasar alguns minutos para refletir post novo.
});
const builder = imageUrlBuilder(sanity);
export const urlFor = (source) => builder.image(source);