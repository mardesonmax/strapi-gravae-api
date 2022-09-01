"use strict";
/**
 * deposition router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreRouter("api::deposition.deposition", {
    prefix: "",
    only: ["find"],
    except: [],
    config: {
        find: {
            auth: false,
        },
    },
});
