'use strict';
const get = require('../get');

function getProduct(shop) {
  return new Promise((resolve, reject) => {
    get(this.id, shop.token, shop.url, 'products/' + shop.productid)
      .then(resolve)
      .catch(reject);
  });
}

module.exports = getProduct;
