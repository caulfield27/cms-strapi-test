'use strict';

/**
 * atm controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::atm.atm');
