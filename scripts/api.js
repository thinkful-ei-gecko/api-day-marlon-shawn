/* eslint-disable no-undef */
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
    const newData = JSON.stringify(updateData);   // <= here, the `updateData` is an Object argument, sent by the listeners
    return fetch(BASE_URL + '/items/' + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: newData
    });
  };
  const deleteItem = function(id) {
    return fetch(BASE_URL + '/items/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };
})();



