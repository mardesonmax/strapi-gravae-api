/**
 * metric controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::metric.metric",
  ({ strapi }) => ({
    async find() {
      return strapi.db.query("api::metric.metric").findMany({
        populate: ["icon"],
        where: {
          publishedAt: {
            $not: null,
          },
        },
      });
    },
  })
);
