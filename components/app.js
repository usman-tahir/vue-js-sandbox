(function () {
  'use strict';
  
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });
  
  // Initialize the app and configure the todo items
  return new Vue({
    el: '#app',
    data: {
      todoItems: [
        { id: 0, text: 'Laundry' },
        { id: 1, text: 'Dishes' },
        { id: 2, text: 'Groceries' }
      ]
    }
  });
}());