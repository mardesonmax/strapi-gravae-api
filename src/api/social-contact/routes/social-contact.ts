/**
 * social-contact router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::social-contact.social-contact",
  {
    prefix: "",
    only: ["find"],
    config: {
      find: {
        auth: false,
      },
    },
  }
);
