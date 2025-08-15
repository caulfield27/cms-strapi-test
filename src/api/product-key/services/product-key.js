'use strict';

/**
 * product-key service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-key.product-key');
