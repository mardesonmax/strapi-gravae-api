"use strict";
/**
 * social-contact controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::social-contact.social-contact", ({ strapi }) => ({
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
}));
