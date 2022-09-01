/**
 * deposition router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::deposition.deposition", {
  prefix: "",
  only: ["find"],
  except: [],
  config: {
    find: {
      auth: false,
    },
  },
});
