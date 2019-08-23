/* eslint-disable no-undef */
'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars


$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.getItems()
  .then(items => console.log(items));

console.log(api.BASE_URL);
// console.log(api.getItems());

// function callByBreed(breed) {
//   fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//     .then(response => response.json())
//     .then(responseJson => displayBreedResult(responseJson));

// You'll need to update your index.js call to api.getItems() to first resolve the response datastream with .json() and then log out the data from the second resolved promise