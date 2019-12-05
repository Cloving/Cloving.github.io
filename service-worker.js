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

var precacheConfig = [["E:/awesomeProject/blog/public/2018/04/15/二叉树前序遍历/index.html","246d6ef34f8058a05f807348d8499a45"],["E:/awesomeProject/blog/public/2018/04/24/二叉树中序遍历/index.html","89319b2b268bc902d0c54f65f3b7ffdb"],["E:/awesomeProject/blog/public/2018/05/17/静态资源加速/index.html","557397ce5fce45dd5e73f86b7dd0c3d2"],["E:/awesomeProject/blog/public/2018/06/10/Vue生命周期解析/index.html","e51303518f8e6469dcb939e654bf4f73"],["E:/awesomeProject/blog/public/2018/06/13/二分搜索算法/index.html","1f7fd4fae3e96b611c250e6ebbda7f4b"],["E:/awesomeProject/blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","846d9b0091434c13f111513b7c01ecbd"],["E:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","148d451d0828628ea897fe1d2c6dd00d"],["E:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","05fa6aa084c771463b5a407c64bf2fc3"],["E:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","8ba85e20dd17935304b618b539cff080"],["E:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","6d6adbd6642a8637ee9a280aaec95ce1"],["E:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","da3b5d5c39e5a11337cba0dd43ccfb0c"],["E:/awesomeProject/blog/public/about/index.html","59dedfdfdff3e5fadcd1f787aed5d57e"],["E:/awesomeProject/blog/public/archives/2018/04/index.html","6efc3cd3e1e9d95192285c0882c7d1ac"],["E:/awesomeProject/blog/public/archives/2018/05/index.html","7bba8b7c9be69c23b63ad61e09048a5f"],["E:/awesomeProject/blog/public/archives/2018/06/index.html","9c6342a7f82ea008cc3d79544d1c9f90"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","3b628e381043cac9d948c292107b3c4d"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","2ae5a63ab2e7e7ca748e05e8b8ebadf3"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","af587701264a8600d03ca475ce6fc5d0"],["E:/awesomeProject/blog/public/archives/2018/index.html","e6b0abb16d5bb49bc2a74cf4978b8813"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","0ed33cb89fbf9406f3e4455fcc621f53"],["E:/awesomeProject/blog/public/archives/index.html","6d6014a9932316e11508c74afb5406cd"],["E:/awesomeProject/blog/public/archives/page/2/index.html","0eb4854d63193bd5a5e02789970e07ea"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/books/index.html","800846b64fba7a989ac1375ea20331b7"],["E:/awesomeProject/blog/public/categories/Vue/index.html","30b9be4040b829465ef18ebd777930bd"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","0e0923c19e579a72358648d9c9057e3d"],["E:/awesomeProject/blog/public/categories/index.html","413552463dec0758b226775fcf946a93"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","087dc803a9a0d90d2e7bd5137a14b0cc"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","c9c25f5b4e69d5bf719829f1ceb8e55c"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","518e774de7d51c92ff0223b1c2fe6ccc"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","7c484c29f88f6c69a90bfadbd490d869"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","0140c0d94bc318861206f5450f7fbab4"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","9b22fb313c37722063962a88a4a9f1d7"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","e58b88e02479a9f5055fe9ba0548ebcc"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","fe59827ef1f9743ef115398893a2eb76"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/正则表达式/index.html","dea618dd0cf2c641c1ae6a723776c1c8"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","b9ada59b975feaadd3b9c4bfc9bfb9e1"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","5b9b4a3cb2c25d001c92d32d3fa41e09"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","e6bc73df672686e8c112ed80cec9409a"],["E:/awesomeProject/blog/public/css/index.css","e72be2e4bc7aa0aae0b61a82ac475bf2"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","46e669c6b69b99199cd6e36203be5cfc"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","c11b7520cf76a765a80235613830fc87"],["E:/awesomeProject/blog/public/movies/index.html","2f6c7912c8ab5d4541215694ab62c4d2"],["E:/awesomeProject/blog/public/music/index.html","dadd5be35ab8e539c64ef5249a406645"],["E:/awesomeProject/blog/public/page/2/index.html","5292297301402f3049a95d4959f04a6a"],["E:/awesomeProject/blog/public/tags/C/index.html","60907f01c66f48d057586da274587600"],["E:/awesomeProject/blog/public/tags/CDN/index.html","0c73b50b970c525c212c2526cc02d23e"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","9684cad78256298c772fa71ac33f8991"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","012bcf2a453716fedf930870ef9eced0"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","8205b96c31a4ab4dd6006cc20fd69508"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","650647ffb3552727118b005afaf0f25d"],["E:/awesomeProject/blog/public/tags/Python/index.html","74983cd0e61517c59d40576d75f3b617"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","fddf712c30e789d69414ddf99a7fbfc3"],["E:/awesomeProject/blog/public/tags/Vue/index.html","8c53f41724c10412f7992b045b2d4ebc"],["E:/awesomeProject/blog/public/tags/ajax/index.html","08b294354669d34a10e784861df38f9f"],["E:/awesomeProject/blog/public/tags/cookies/index.html","fc9d153e767f0e08e2eb0932658f3fc8"],["E:/awesomeProject/blog/public/tags/index.html","0c61ca04afa0cf369c781b0e864d3fa7"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","5d86b476ef12cc779771aa7b24684661"],["E:/awesomeProject/blog/public/tags/代理/index.html","2e161a3c594e0f1ed64f3a79dd027773"],["E:/awesomeProject/blog/public/tags/图片压缩/index.html","176389ffa9d73a1aaf5a010e104a4fbc"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","eb82ab60940960bd24e16b44358b8fee"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","82591f6135a0b174f2121f792d59e499"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","1c978cfd2c3518ab685697d833160cd9"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","08e7c2dadf9bb822946f117bf01efc4f"],["E:/awesomeProject/blog/public/tags/词云/index.html","eb9e8098782c67cae3b193c2f3793a03"],["E:/awesomeProject/blog/public/tags/验证码/index.html","74ae98828d61be108dbf2b4ec0ac5721"]];
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







