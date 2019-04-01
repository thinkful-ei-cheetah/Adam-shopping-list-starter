'use strict';
/* global shoppingList, Item store */
/* global $ */
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});
