"use strict";
/**
 * location controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::location.location", ({ strapi }) => ({
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
}));
