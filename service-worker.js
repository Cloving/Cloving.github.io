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

var precacheConfig = [["E:/awesomeProject/blog/public/2018/04/15/二叉树前序遍历/index.html","c730c104f69f76f29a780b8201baff0a"],["E:/awesomeProject/blog/public/2018/04/24/二叉树中序遍历/index.html","f5227ae62e5aa819b50a100d045f4c53"],["E:/awesomeProject/blog/public/2018/05/17/静态资源加速/index.html","f87863c86465ef88e6cfdff35e7f4902"],["E:/awesomeProject/blog/public/2018/06/10/Vue生命周期解析/index.html","7bdda0ff209595c19deb34809d7d3769"],["E:/awesomeProject/blog/public/2018/06/13/二分搜索算法/index.html","85dc8a85deb0f311d7e7d86ef1df575d"],["E:/awesomeProject/blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","bcead757297c1590377bfb229ff64cc4"],["E:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","5c711fb390188f4ae29a0e518e995406"],["E:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","69d20bc83e798f9ceaa2d6081149951b"],["E:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","8d712c2e60a35d0a25789d52cc6d0e94"],["E:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","12fadcdbeb4b9bb693616bc97061888f"],["E:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","8ca88305e2ba42c5272ad1b3608dad46"],["E:/awesomeProject/blog/public/about/index.html","b94139729f4f6d00403d7016aa80d018"],["E:/awesomeProject/blog/public/archives/2018/04/index.html","29b30b8807b7ac305aa98017e9c723ae"],["E:/awesomeProject/blog/public/archives/2018/05/index.html","a15846dc9347c34c8e2716e20390d9b5"],["E:/awesomeProject/blog/public/archives/2018/06/index.html","48a94faa7006c1f6cb1fff9666b81103"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","a7070b4a2759f552e9829c72480901d9"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","71a9e756b786674f58a850fb3fa9f8b7"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","24d84dc85d0611c648feb854752f11c6"],["E:/awesomeProject/blog/public/archives/2018/index.html","1c28232e2148f30073e96bcd8074bbf0"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","3503c9148718d624e8fc19d32d047402"],["E:/awesomeProject/blog/public/archives/index.html","c737adf065b4fea58a10a6bc09e1a535"],["E:/awesomeProject/blog/public/archives/page/2/index.html","e1a3988c4810b743f701d8a9c0b08643"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/categories/Vue/index.html","5df98c5fd8257a3f32f16bc12ebf3645"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","d736d7251539ea8345a9af61e8919538"],["E:/awesomeProject/blog/public/categories/index.html","1fa5d34dccbee71e577b3dc374b46adf"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","585389ccda7c7ea15bb641a08d9af5b5"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","9a36d86fe7d7fee6e212e1c56cea71f0"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","3dd2c3ea3b44870e98c43a5e2fd6c2c6"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","159f3fae469a0a3bfe05373ca1086c86"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","8f368342b3ce320087b89bd138564c5b"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","7b7f17d8da43812f3b531a2272388cd9"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","f42c719c021ce90a352330e7bd3235d8"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","7e6da62cceaf67896697129e32e1ed9e"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","838003bf3827b3caa46cb76ba7fbe0b4"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","0c827e8fc27a1535f2ebea0cd5329fee"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","e3b5d0d7d95cfd6520993add117cc5a7"],["E:/awesomeProject/blog/public/css/index.css","9fda0a7605b84641352a4c52e7451bb7"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","02555673d81081c1ff1be69a251b3b63"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","6cc91782b79d7cf51d2db97c0d42672e"],["E:/awesomeProject/blog/public/movies/index.html","3d41cee4b71f5e513fbb43eb78e838e2"],["E:/awesomeProject/blog/public/music/index.html","8466605a87ffc3c80024646e76658c4e"],["E:/awesomeProject/blog/public/page/2/index.html","651c3e4ae2115ad2a7b9ab712d5fc211"],["E:/awesomeProject/blog/public/tags/C/index.html","cb3210d71aa2a8696964ec284926eff1"],["E:/awesomeProject/blog/public/tags/CDN/index.html","adea20d6095d9c77dec557e9efce014b"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","6bfe08e6e27467efdb8fa3dd91d9e727"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","fa902c32617b2c562039bec7137a32db"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","c8c092e09d39fa3f684d1b26bead263c"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","9bb95c5ee25090277c9f23411f0b0713"],["E:/awesomeProject/blog/public/tags/Python/index.html","9cb481a358a10d47fb47b20ea7c81afa"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","db8f92800d022ca98e92c8f69260932c"],["E:/awesomeProject/blog/public/tags/Vue/index.html","47f9f76891123cce9f510d98b169f0f1"],["E:/awesomeProject/blog/public/tags/ajax/index.html","b29f0d0b6ea15f6a40c99ddc52fb4fbf"],["E:/awesomeProject/blog/public/tags/index.html","05645798f64aeefb89c32b8ccf620593"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","9c474de432ec5855355541b738fefa9e"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","7fd8dcd9b3b791e15b2d74bf200b8240"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","d9bec5cf764a2ab58f7ab1a765726f17"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","0c808ecd32506c6dd3f8c030c04f1453"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","b83c375d005783c4ed033b1af59029cc"],["E:/awesomeProject/blog/public/tags/词云/index.html","17102da683d91bba93f413378d822939"],["E:/awesomeProject/blog/public/tags/验证码/index.html","57a0ab40189049c2d084e71bd41e6f62"]];
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







