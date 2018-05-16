import 'core-js/es6/promise';

export default (function loadPolyfills() {
  const fillFetch = () => new Promise((resolve) => {
    if ('fetch' in window) return resolve();

    require.ensure([], () => {
      require('whatwg-fetch');

      resolve();
    }, 'fetch');
  });

  
  const fillCoreJs = () => new Promise((resolve) => {
    if (
      'startsWith' in String.prototype &&
      'endsWith' in String.prototype &&
      'includes' in Array.prototype &&
      'assign' in Object &&
      'keys' in Object
    ) return resolve();

    require.ensure([], () => {
      require('core-js');
      resolve();
    }, 'core-js');
  });

  return Promise.all([
    fillFetch(),  
    fillCoreJs()
  ]);
})()

// module.exports = (function test() {

//     var modernBrowser = (
//         'fetch' in window &&
//         'assign' in Object
//     );

//     if (!modernBrowser) { // 
//         console.log("Adding promise polyfill to browser !");
//         // var scriptElement = document.createElement('script');
//         // scriptElement.async = false;
//         // scriptElement.src = './polyfill.js';
//         // document.head.appendChild(scriptElement);

//     }
//  return {};
// })()

