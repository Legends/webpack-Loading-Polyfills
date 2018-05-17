import 'core-js/es6/promise';

// if(!"Promise" in window){
//   require.ensure([], () => {
//     require('core-js/es6/promise');  

//      resolve();
//    }, 'Promise');
// }

function loadScript(url) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.onload = function () {
      resolve();
    };
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  });
}

export default (function loadPolyfills() {

  const fillFetch = () => new Promise((resolve) => {

    if ('fetch' in window) return resolve();

    return loadScript(require.resolve('whatwg-fetch'));

  });

  const fillCoreJs = () => new Promise((resolve) => {
    if (
      'startsWith' in String.prototype &&
      'endsWith' in String.prototype &&
      'includes' in Array.prototype &&
      'assign' in Object &&
      'keys' in Object
    ) return resolve();

    return loadScript(require.resolve('core-js'));
  });

  return Promise.all([
    fillFetch(),
    fillCoreJs()
  ]).catch((e) => {
    console.error(e);
  });
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