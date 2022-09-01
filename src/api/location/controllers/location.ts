/**
 * location controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::location.location",
  ({ strapi }) => ({
    async find() {
      return strapi.db.query("api::location.location").findMany({
        populate: ["logo"],
        where: {
          publishedAt: {
            $not: null,
          },
        },
      });
    },
  })
);
