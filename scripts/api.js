/* eslint-disable no-unused-vars */
/* eslint-disable strict */

const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/shawn';
  let getItems = function() {
    fetch(`${BASE_URL}/items`)
      //.then(response => console.log(response))
      //.then(response => response);
      .then(response => response.json())
      .then(responseJson => responseJson);
    //return Promise.resolve('A successful response!');
  };
  return {
    getItems: getItems,
  };
})();
