/**
 * location router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::location.location", {
  prefix: "",
  except: [],
  only: ["find"],
  config: {
    find: {
      auth: false,
    },
  },
});
