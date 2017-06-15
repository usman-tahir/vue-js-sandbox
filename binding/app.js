(function () {
  'use strict';
  
  return new Vue({
    el: '#app',
    data: {
      message: 'you loaded this page on ' + new Date(),
      seen: false
    }
  });
  
}());