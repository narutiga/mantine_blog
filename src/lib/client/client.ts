import { createClient } from "microcms-js-sdk";

/** @package */
export const client = createClient({
  serviceDomain: "kino-it-blog",
  apiKey: process.env.API_KEY,
});
