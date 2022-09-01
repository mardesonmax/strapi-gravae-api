/**
 * preview router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::preview.preview", {
  prefix: "",
  only: ["find"],
  config: {
    find: {
      auth: false,
    },
  },
});
