(function () {
  'use strict';
  
  return new Vue({
    el: '#app',
    data: {
      message: 'some basic text'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      }
    }
  });
}());