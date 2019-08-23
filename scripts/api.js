/* eslint-disable no-unused-vars */
/* eslint-disable strict */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/shawn';
  let getItem = function() {
    return fetch(`${BASE_URL}/items`);
  };
  let createItem = function(name) {
    let newItem =JSON.stringify({name: name});
    let fetchObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem
    };
    return fetch(`${BASE_URL}/items`, fetchObj);
  };
  return {
    getItem,
    createItem,
  };
})();
