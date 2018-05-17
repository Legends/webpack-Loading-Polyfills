import 'core-js/es6/promise';

function loadPolyfills() {

  const fillFetch = () => {
    if ('fetch' in window) return resolve();    
        
     return import('whatwg-fetch');       
  };
  
  const fillCoreJs = () =>  {
    if (
      'startsWith' in String.prototype &&
      'endsWith' in String.prototype &&
      'includes' in Array.prototype &&
      'assign' in Object &&
      'keys' in Object
    ) return resolve();
  
      return import('core-js');    
  };

  return Promise.all([
    fillFetch(),  
    fillCoreJs()
  ]);
}

module.exports = loadPolyfills;

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