'use strict';

/**
 * atm router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::atm.atm');
