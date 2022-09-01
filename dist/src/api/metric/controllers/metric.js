"use strict";
/**
 * metric controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::metric.metric", ({ strapi }) => ({
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
}));
