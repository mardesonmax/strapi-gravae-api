"use strict";
/**
 * social-contact router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter("api::social-contact.social-contact", {
    prefix: "",
    only: ["find"],
    config: {
        find: {
            auth: false,
        },
    },
});
