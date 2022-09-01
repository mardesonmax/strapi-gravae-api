"use strict";
/**
 * deposition controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::deposition.deposition", ({ strapi }) => ({
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
}));
