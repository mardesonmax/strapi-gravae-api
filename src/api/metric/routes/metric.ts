/**
 * metric router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::metric.metric", {
  prefix: "",
  only: ["find"],
  except: [],
  config: {
    find: {
      auth: false,
    },
  },
});
