/**
 * deposition controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::deposition.deposition",
  ({ strapi }) => ({
    async find() {
      return strapi.db.query("api::deposition.deposition").findMany({
        populate: ["avatar"],
        where: {
          publishedAt: {
            $not: null,
          },
        },
      });
    },
  })
);
