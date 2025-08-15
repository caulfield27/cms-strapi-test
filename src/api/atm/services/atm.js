'use strict';

/**
 * atm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::atm.atm');
