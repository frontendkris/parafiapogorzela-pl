import { getOptions, getPages } from "./sanity";

export const siteSettings = await getOptions();
export const navLinks = await getPages();