/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/awesomeProject/blog/public/Echarts足迹图/index.html","fdcbe813549b80a50cdf0c9b6a597644"],["E:/awesomeProject/blog/public/Python模拟豆瓣登录（一）/index.html","4fac52324605715ffc58bebda006cf60"],["E:/awesomeProject/blog/public/Vue生命周期解析/index.html","f461c9e42ea13baa6316dfdd1e85eafd"],["E:/awesomeProject/blog/public/about/index.html","70ceea81e598e164af101bba060a3ed2"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","b464cfabfaaa8bd25df6f37d8b1926bf"],["E:/awesomeProject/blog/public/archives/2018/10/index.html","74a31a8cc2798fba0ca62d8b518df526"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","4015b32d40fca51853602e18b147f174"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","5543ecc8df9fc8b35d1ae0726a1c57ab"],["E:/awesomeProject/blog/public/archives/2018/index.html","4190529395caca4d8bb5c99e53def753"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","55b0334c0265ddb872eab2723bcf328f"],["E:/awesomeProject/blog/public/archives/index.html","6e003dc47823194d27d2f50e39f7fc1f"],["E:/awesomeProject/blog/public/archives/page/2/index.html","b3ba5f1c086a5be60f5a256fe9d259b9"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/books/index.html","00bec9d01100f97072b018658be7e6c6"],["E:/awesomeProject/blog/public/categories/Vue/index.html","597ddfddef5e7c634139a3a5fd904173"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","0a3a7349dc66bd024f875b7a700c12cd"],["E:/awesomeProject/blog/public/categories/index.html","387aa71e1631999a5b47f667b38f1c67"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","190965a54d4b0f4385b89866687f85a0"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","b5c8ccc65b7d3f495751c12048d5cbb8"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","6b5ec92c867929aed03a62785d7908e0"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","6d6bd9554368cb830468c5b92be77a32"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","8baeda08bc8809817abe2c68a7bf8859"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","d6c144cef6d0ee39337372b7a06e0b6e"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","8432fd4852cc94f4990037d36bc67b7f"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","2cc21244d626ee58eeb4ce1c00221707"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","6ab9fe173ad31f28d60c29432264ec62"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","66964b15ddcfa245d10dfa5e18d5c3ae"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","ba4c367b592cc38828040bcf6a4dbfb1"],["E:/awesomeProject/blog/public/css/index.css","c4e653b950a56f804a535444480aceda"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","b56eb02e18dcdd5fae7eae8ae43f603b"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","515f1c3fd110749d1de9c815b9621657"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","9d800d0074cf4952b22362f860bb09a0"],["E:/awesomeProject/blog/public/movies/index.html","6fa16bacd48835c015a98cd6b7b13097"],["E:/awesomeProject/blog/public/music/index.html","652cd475a2195fc9d280868860b2271f"],["E:/awesomeProject/blog/public/page/2/index.html","d5423b8a8b468d482741cabe30dc64bc"],["E:/awesomeProject/blog/public/tags/C/index.html","1118ec6ad074eb28aac80078dd48363f"],["E:/awesomeProject/blog/public/tags/CDN/index.html","e7e164bd13ab71bb4b33a20e8733af8a"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","c4e9024b08a32882b641dbb966934c57"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","ee9e89eae7b6cb6a0a65bf81ed942528"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","9f3cd89a15bb80c0effe097350611e57"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","e08d340d763fa46a9dde68a08a0baa31"],["E:/awesomeProject/blog/public/tags/Python/index.html","1ad2ee0f1108835972226eccedfeba2b"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","dc09b901173efcdfa5d938afea4fc34a"],["E:/awesomeProject/blog/public/tags/Vue/index.html","060d2c86a87b101443f8229e7a18c7b0"],["E:/awesomeProject/blog/public/tags/ajax/index.html","76abb86a10f78b59e1516a0300d9c3cf"],["E:/awesomeProject/blog/public/tags/index.html","f5efca15305ed00fa8d7c31e0549648b"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","dbc406c857ffd1dfbb8fe45490e2e754"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","be93e65983eba29d22a96fe664d273c0"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","128c522ee81050355d125d04f66ce70e"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","008450cab3e92af96b861a5e3ba83637"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","d9c4d2d17009299eea4b4790b4247166"],["E:/awesomeProject/blog/public/tags/词云/index.html","9cb1e8a6b5965a19abf30f215ace3e91"],["E:/awesomeProject/blog/public/tags/验证码/index.html","d7c179858a374307497bff9bdff8a1b2"],["E:/awesomeProject/blog/public/三寸气在千般用，一旦无常万事休/index.html","abadd7f9b0d51eb1ba9e185b2db57f68"],["E:/awesomeProject/blog/public/二分搜索算法/index.html","d03a701cd66e1187db97d88ef2932f0a"],["E:/awesomeProject/blog/public/二叉树中序遍历/index.html","303c47d119fda3c505308fb241f28257"],["E:/awesomeProject/blog/public/二叉树前序遍历/index.html","e16f1b2176ccfda82e975293f77c56b2"],["E:/awesomeProject/blog/public/抓取知乎用户动态数据/index.html","2688ad8de798ce9f3f3493a54032a54e"],["E:/awesomeProject/blog/public/抓取知乎用户粉丝数据/index.html","eb0c74ece00c1f903cb303817e1f2290"],["E:/awesomeProject/blog/public/抓取网易云音乐榜单/index.html","b68ad724e601d7819b353e8cd6730a80"],["E:/awesomeProject/blog/public/静态资源加速/index.html","07633cae76543bdea625b0685e2d17d7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







