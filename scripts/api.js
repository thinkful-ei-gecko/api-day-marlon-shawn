/* eslint-disable no-unused-vars */
/* eslint-disable strict */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/shawn';
  let getItems = function() {
    return fetch(`${BASE_URL}/items`);
  };
  return {
    getItems,
  };
})();
