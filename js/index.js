/**
 * Created by xiaoqiang on 2018/5/13.
 */

(function() {
  'use strict';


  /**
   * 注册service worker
   */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then(function(registration) {
        console.log('Service Worker Registered');
      });
  }
})();
