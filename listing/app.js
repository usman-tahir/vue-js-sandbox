(function () {
  'use strict';
  
  return new Vue({
    el: '#app',
    data: {
      foods: [
        { text: 'Apple Pie' },
        { text: 'Banana Split' },
        { text: 'Cherry Cheescake'}
      ]
    }
  });
}());