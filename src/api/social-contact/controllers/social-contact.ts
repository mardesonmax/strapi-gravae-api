/**
 * social-contact controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::social-contact.social-contact",
  ({ strapi }) => ({
    async find() {
      return strapi.db.query("api::social-contact.social-contact").findMany({
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
