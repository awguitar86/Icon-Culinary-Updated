"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","2624b9c373d6177ed2d0817fdab80505"],["/static/css/main.5b002b3f.css","69d6a6f6f85834d8cd8369991227c70c"],["/static/js/main.f30878b2.js","297639c42e08642d68cf6c8124ab6a98"],["/static/media/AquariumLogo-white.909e32eb.png","909e32eb7fd5ab8593db0373deaa29c5"],["/static/media/Bistro72Logo.b9e2c901.png","b9e2c901da91ed2d76e8a1fb60cb0be6"],["/static/media/FacebookLogo.baafc03e.svg","baafc03efdbd616b6c98871a35af74c8"],["/static/media/FoodWithSharksInBack.714a2d17.jpg","714a2d170b3a9c4413254e00362f2fcd"],["/static/media/IconCulinary-KnifeLogoWhite.b307037a.png","b307037a85375c13a35e2799b1b07b5f"],["/static/media/InstagramLogo.b05124a3.svg","b05124a39d964f91425c0426dcf792fb"],["/static/media/ReefCafe-SharkLeft-White.e5fd91a0.svg","e5fd91a0daff9bb19e95d74f0030d17c"],["/static/media/ReefCafe.a241d882.png","a241d882f845bc3502d3a9815da74de6"],["/static/media/blueCupcakes.88f39aeb.jpg","88f39aeb864bd5ef89afe75471315304"],["/static/media/burger.1249ba54.jpg","1249ba540a7e6f9c5f9ac64fdd9ee578"],["/static/media/cookies1.b5178093.jpg","b517809353ca4e4ff81f506dd68bf873"],["/static/media/eventPic1.0745a241.jpg","0745a2413e580cfb823b10441a111308"],["/static/media/eventPic2.7ff635e0.jpg","7ff635e0b6bd93982b3ea2fdb679c068"],["/static/media/food-platters.e11834e1.jpg","e11834e11aedc166ab76659a23bfb43a"],["/static/media/fruit-dessert.c3729355.jpg","c3729355f8d40a69864692b519c55f39"],["/static/media/fruit1.e7845798.jpg","e78457989fd7f1c22e068c4893dd89b0"],["/static/media/fruit2.23b8a863.jpg","23b8a863bfe8cc20bab7df8c8900450e"],["/static/media/growTowers.8ac7b59f.jpg","8ac7b59f7e103989b586affd5572ef29"],["/static/media/home.02d6b614.scss","02d6b6145a89bc0c685c6c4dc344ef78"],["/static/media/pizza.8fe068e6.jpg","8fe068e6808feb4d05fce11c654d63c3"],["/static/media/plateOfFood1.0bcd176d.jpg","0bcd176d77e2658f24655409063d3ac3"],["/static/media/plateOfFood2.825cd90b.jpg","825cd90b266f7f053980c00b671d6e28"],["/static/media/plateOfFood3.9a1fcb09.jpg","9a1fcb09593033f97dabfcdaac1c16a4"],["/static/media/saladPic1.73a8bac1.jpg","73a8bac153c699612a2f1cc6c0bae3d2"],["/static/media/salmon.deada7db.jpg","deada7db342c9d70181399c934b4c5b9"],["/static/media/sodaPic1.8f1e46ab.jpg","8f1e46abdab7eba7663e0d3bf25fc729"],["/static/media/steak-potatoes.b558c690.jpg","b558c690de68b3762ca98300ea34f21e"],["/static/media/strawberries.4a79917b.jpg","4a79917b218c366d196f9526a4ab446f"],["/static/media/tableOfFood1.040a93fe.jpg","040a93fe52ae7c5730ce1ad12073f1f4"],["/static/media/tableOfFood2.230d7821.jpg","230d78219ab224bee050b7ce900d8cb8"],["/static/media/tableOfFood3.25077232.jpg","25077232a0f8a599a310ce9d47672fa2"],["/static/media/tableOfFood4.220cdf02.jpg","220cdf027e67da369f0c959eafcbae92"],["/static/media/tableOfFood5.c601af14.jpg","c601af14188bc458bc7773fea1bc204e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});