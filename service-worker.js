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

var precacheConfig = [["E:/awesomeProject/blog/public/2018/09/15/二叉树前序遍历/index.html","77480f665f6e35ccf034cf101303d031"],["E:/awesomeProject/blog/public/2018/09/24/二叉树中序遍历/index.html","f499be0c34806fff27f20cff75f965ba"],["E:/awesomeProject/blog/public/2018/09/30/静态资源加速/index.html","da9876f03f4b11b0cc1278202362aaed"],["E:/awesomeProject/blog/public/2018/10/10/Vue生命周期解析/index.html","08d640723ebdc4b51a2bb0bf1fe9da74"],["E:/awesomeProject/blog/public/2018/10/13/二分搜索算法/index.html","61ef44b22e233f7d1c4d22cf0c4d41f8"],["E:/awesomeProject/blog/public/2018/10/21/三寸气在千般用，一旦无常万事休/index.html","9ec84d41589c3cbc1bb28e517d9e913b"],["E:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","e8e6c8071cd9d5b9261fa92faf78ccfd"],["E:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","fd11c66ad93781b1e3f58becd9dfd960"],["E:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","3cb2df56d0fdf7fe8436aa7677e6e06e"],["E:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","30c1f57781fc19ede01a1b36ca588a0e"],["E:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","551856cf144fd08eaaab5f433c0d440b"],["E:/awesomeProject/blog/public/about/index.html","d48068a22558b5bf676958e8c0556faf"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","d7fe8211134240ec032a2acdafc29750"],["E:/awesomeProject/blog/public/archives/2018/10/index.html","05b1e18b56d93d6a639a9f8761ca4e1f"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","501af1b7674cbbfd246ac0ddc9885b3f"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","8eadea7ad9c1e0afe3f0f6a8eef6d9e7"],["E:/awesomeProject/blog/public/archives/2018/index.html","1c49853c747a40a4b694ce666afefaf5"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","e4e9609679a880e6e5f39c55a6892534"],["E:/awesomeProject/blog/public/archives/index.html","4ef1112acd2eab557983a3c5470ca08f"],["E:/awesomeProject/blog/public/archives/page/2/index.html","df172f07da10f69d5bc65f8deefc7590"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/books/index.html","291d59c36015ea861034fe59c2124573"],["E:/awesomeProject/blog/public/categories/Vue/index.html","a1be62da026d90bead7e5a5c35e2ecb5"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","9e4d1dd3210f06ca23d77dbfa8caa79c"],["E:/awesomeProject/blog/public/categories/index.html","e1f81b685d06c4c36aba34ea91d9aba2"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","7e68ed43c3fb3a7829d290fb283e10bd"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","fa98726236c55a168b394a90d3d59ed2"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","0627b69f965e70d6c0bcca70090ec035"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","6ef016f2cf3f556928be1c81b3e9a0f2"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","feedc1bf948ccada2fc7e6326be40eba"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","7d6f7050b248f371d0362c87d87ddc01"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","9b85e8f55ed67746fe514113aed3a3c2"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","fd81849121172eb4d3fd40ef90096009"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","83fa8716267c65ec09444638c851428e"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","0cd8ea4461453bb804e3a9b4ae56c567"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","0de2b2de66ea8bb0215947e8f43116a4"],["E:/awesomeProject/blog/public/css/index.css","c801c59d4435268981cd5f72d60ee19c"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","e78c36e1e51fd66cefc28cf29425e9a0"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","9175115193e0945867e18b6c4c5f8618"],["E:/awesomeProject/blog/public/movies/index.html","c7d5792a8cf24160b4afdf4c42f4e1ee"],["E:/awesomeProject/blog/public/music/index.html","31ebf26ad1f4b15bdd081e7838ca0d6a"],["E:/awesomeProject/blog/public/page/2/index.html","be10a4e800aead0d3e0d011ba7fd59f2"],["E:/awesomeProject/blog/public/tags/C/index.html","56bd4111fd1718f6965a46c26ed7c46c"],["E:/awesomeProject/blog/public/tags/CDN/index.html","6bdd5bbc6b0889be8c15284b0779e48c"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","7a23045d0be0eca3001cb3de0e23b8e0"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","e333fb5f4d0496dc318bdd31a5072a59"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","5ce910a202d2a5f95f2c60c9bb8d3ffd"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","96007ee95053346517f0ec20707cc24e"],["E:/awesomeProject/blog/public/tags/Python/index.html","920d7a9dd79abc29d7259d8ec50278d1"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","2e7ab7973f032c3af85e1d5e373f811f"],["E:/awesomeProject/blog/public/tags/Vue/index.html","b3bd93f0b9fde48564223daaaef75fc7"],["E:/awesomeProject/blog/public/tags/ajax/index.html","e28089a114685f63f00bd1baca089112"],["E:/awesomeProject/blog/public/tags/index.html","1d6b95d3f4845257572275f6c82c6577"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","009a04cb411122239a84d1dbea135655"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","acbc37b7cb3eccb8aa8379ea17fab37a"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","03673bad4dfbef9a4690c1d82bf71b27"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","0c79ca59a0cfeb2587f98416d8785e0c"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","cc63a9c1fce12469e3152178f51bdab7"],["E:/awesomeProject/blog/public/tags/词云/index.html","83bdf89cc0b65887acc3fed8c40457db"],["E:/awesomeProject/blog/public/tags/验证码/index.html","ab7bdce54cc45180225547d6196b2515"]];
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







