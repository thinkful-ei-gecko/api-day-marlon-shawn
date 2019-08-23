/* eslint-disable no-console */
/* eslint-disable no-undef */
'use strict';

$(document).ready(function() {
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, 'foobar');
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));
 
  shoppingList.bindEventListeners();
  shoppingList.render();
});

//store.items.push(Item.create('apples'));
