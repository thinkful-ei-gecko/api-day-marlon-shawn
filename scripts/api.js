/* eslint-disable no-unused-vars */
/* eslint-disable strict */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/shawn';
  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
  };
  const createItem = function(name) {
    let newItem =JSON.stringify({name: name});
    let fetchObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem
    };
    return fetch(`${BASE_URL}/items`, fetchObj);
  };
  const updateItem = function(id, updateData) {
    console.log(updateData);
    let stringUpdateData = JSON.stringify({name: updateData});
    let fetchObj = {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: stringUpdateData
    };
    return fetch(`${BASE_URL}/items/${id}`, fetchObj);
  };

  return {
    getItems,
    createItem,
    updateItem,
  };
})();
