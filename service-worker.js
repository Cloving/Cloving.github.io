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

var precacheConfig = [["E:/awesomeProject/Dream-Blog/public/2018/04/15/二叉树前序遍历/index.html","9035f280b7d161575c1592eb856a0c6e"],["E:/awesomeProject/Dream-Blog/public/2018/04/24/二叉树中序遍历/index.html","894eecd824e20bbda5e519016015551f"],["E:/awesomeProject/Dream-Blog/public/2018/05/17/静态资源加速/index.html","03fea8f00fc710156adc92f585b4a8f9"],["E:/awesomeProject/Dream-Blog/public/2018/06/10/Vue生命周期解析/index.html","29a623210e7933f9ed824e1bb071de38"],["E:/awesomeProject/Dream-Blog/public/2018/06/13/二分搜索算法/index.html","ce535a22af93b00e17fed14ec29a5327"],["E:/awesomeProject/Dream-Blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","053fd56e7b6f89101c2049b0288deed6"],["E:/awesomeProject/Dream-Blog/public/2018/11/20/抓取知乎用户动态数据/index.html","b4defe99fe48365330bea44f582ddfd4"],["E:/awesomeProject/Dream-Blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","aa985db8200f35612d173d85788d0e86"],["E:/awesomeProject/Dream-Blog/public/2018/12/08/Echarts足迹图/index.html","469ceb299007698b5597a9358b801d46"],["E:/awesomeProject/Dream-Blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","6c1b48cf88e041ff4b1508f093bb8ce8"],["E:/awesomeProject/Dream-Blog/public/2018/12/20/抓取网易云音乐榜单/index.html","680b450938112cd0cc0673f5fbffcfa1"],["E:/awesomeProject/Dream-Blog/public/about/index.html","c5f6f5cf1ee709c397c218d70fc66f9c"],["E:/awesomeProject/Dream-Blog/public/archives/2018/04/index.html","1fad7a58f7f2469c212b28a14bdbc3e4"],["E:/awesomeProject/Dream-Blog/public/archives/2018/05/index.html","9b87080166a81e7f2f8f083e7df518d4"],["E:/awesomeProject/Dream-Blog/public/archives/2018/06/index.html","0e0dfee7ba8e094b89bfb603e1505a60"],["E:/awesomeProject/Dream-Blog/public/archives/2018/09/index.html","b09ccaf851fe030dd8ad81381232e396"],["E:/awesomeProject/Dream-Blog/public/archives/2018/11/index.html","2fe21d881314fc6a7e00074d2294288e"],["E:/awesomeProject/Dream-Blog/public/archives/2018/12/index.html","3c007d25cd29753c76f29c8f30726c2a"],["E:/awesomeProject/Dream-Blog/public/archives/2018/index.html","e6b4de5a21ff967a97f19508dd5636d5"],["E:/awesomeProject/Dream-Blog/public/archives/2018/page/2/index.html","d7e50eaf6351b63f8d7a8a064e23633a"],["E:/awesomeProject/Dream-Blog/public/archives/index.html","a2aa265fdff2adf875123a6553cd0e27"],["E:/awesomeProject/Dream-Blog/public/archives/page/2/index.html","5f6f008c156eac4f8eae02691cba4d88"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/Dream-Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/Dream-Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/Dream-Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/Dream-Blog/public/categories/Vue/index.html","30275cd8d5dc20207b11fcee1b82020c"],["E:/awesomeProject/Dream-Blog/public/categories/Vue/基础原理类/index.html","8bdd73a922fc6c7a1b4a93a2e33bfa47"],["E:/awesomeProject/Dream-Blog/public/categories/index.html","b543d5879ef3092c26f4e068c0e6d257"],["E:/awesomeProject/Dream-Blog/public/categories/建站实录/index.html","543f1f7f7d886ee4a91dc3aca401974d"],["E:/awesomeProject/Dream-Blog/public/categories/建站实录/足迹图/index.html","1450537da20e636df34623dc554dc27f"],["E:/awesomeProject/Dream-Blog/public/categories/建站实录/静态资源加速/index.html","0336ec1a28bae5845dd3b9f35331e868"],["E:/awesomeProject/Dream-Blog/public/categories/念念不忘，必有回响/index.html","45d7cbf301b60f067d8817efe58b4423"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/index.html","38bee067d0aa90ba606eb29617c6769d"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/知乎/index.html","2a02f262019fdd46340c031dbac508ba"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/网易云音乐/index.html","b73197fde5f8540e322db9bfd4528566"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/豆瓣/index.html","b8d1de12f34e13e9b8267957f9513400"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/豆瓣/正则表达式/index.html","430854266ffb4a66d05a7572d21277cf"],["E:/awesomeProject/Dream-Blog/public/categories/数据结构与算法/index.html","1eaafcba40345f35df0afda7efd2f86c"],["E:/awesomeProject/Dream-Blog/public/categories/数据结构与算法/二分查找/index.html","41cd6eadc6b15ba2fa899852528cb05e"],["E:/awesomeProject/Dream-Blog/public/categories/数据结构与算法/二叉树/index.html","6f91271987221be836a3b628a4bbb05f"],["E:/awesomeProject/Dream-Blog/public/css/index.css","29323cdbea2930a80fe3800ebd391fa4"],["E:/awesomeProject/Dream-Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/Dream-Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/Dream-Blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/Dream-Blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/Dream-Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/Dream-Blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/Dream-Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/Dream-Blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/Dream-Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/Dream-Blog/public/index.html","4a34a4ba015da5dc0446121a4fbd9e52"],["E:/awesomeProject/Dream-Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/Dream-Blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/Dream-Blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/Dream-Blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/Dream-Blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/Dream-Blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/Dream-Blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/Dream-Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/Dream-Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/Dream-Blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/Dream-Blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/Dream-Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/Dream-Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/Dream-Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/Dream-Blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/Dream-Blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/Dream-Blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/Dream-Blog/public/link/index.html","49ee7d74358aaeb52741fad3bfaccb45"],["E:/awesomeProject/Dream-Blog/public/movies/index.html","342593537fae886b3a2ea52a0c23e77b"],["E:/awesomeProject/Dream-Blog/public/music/index.html","48c9efb9a0963277777b2d4d0f9d7281"],["E:/awesomeProject/Dream-Blog/public/page/2/index.html","2bdecbd920e45c565da0d5f0cec79ac0"],["E:/awesomeProject/Dream-Blog/public/page/3/index.html","8ebdb7f88ab8bb158950245fceb17d55"],["E:/awesomeProject/Dream-Blog/public/tags/C/index.html","ee9dd2959d402950912d3e5b8a40270f"],["E:/awesomeProject/Dream-Blog/public/tags/CDN/index.html","e804fed12e99649e28c1db7993df683d"],["E:/awesomeProject/Dream-Blog/public/tags/Echarts/index.html","2a2a51ac0221d938bf29597e674d8669"],["E:/awesomeProject/Dream-Blog/public/tags/Javascript/index.html","f8a6dece8074373269e4183dbe300c93"],["E:/awesomeProject/Dream-Blog/public/tags/MongoDB/index.html","d51c08747f9492794631fc05a6a20d83"],["E:/awesomeProject/Dream-Blog/public/tags/MySQL/index.html","6304cff9ae6f95fcf5a46c588069aa67"],["E:/awesomeProject/Dream-Blog/public/tags/Python/index.html","210fa3c18a50477433c3873093685fd8"],["E:/awesomeProject/Dream-Blog/public/tags/Selenium/index.html","5df07ddbedc984720221a9da60f2670f"],["E:/awesomeProject/Dream-Blog/public/tags/Vue/index.html","eb5c3528fd488262ac12ba55ea0818a8"],["E:/awesomeProject/Dream-Blog/public/tags/ajax/index.html","1484f7dd6c9cf90618e9b74c16bb4829"],["E:/awesomeProject/Dream-Blog/public/tags/cookies/index.html","69f3370a929292ce7fb3a22dcf3dd86e"],["E:/awesomeProject/Dream-Blog/public/tags/index.html","9967d832aa87bcbffe10d9ba687b74d1"],["E:/awesomeProject/Dream-Blog/public/tags/二叉树/index.html","900f1b556463a4f8621858c70d4aaa7b"],["E:/awesomeProject/Dream-Blog/public/tags/代理/index.html","a05ff5bf90b9ce64f92f5001210ff29b"],["E:/awesomeProject/Dream-Blog/public/tags/图片压缩/index.html","0d0a9d19e7a49df0d94075afb2562664"],["E:/awesomeProject/Dream-Blog/public/tags/念念不忘，必有回响/index.html","167d1320a9ceb1ad8b8c7f9c1d6c65a5"],["E:/awesomeProject/Dream-Blog/public/tags/数据结构/index.html","011af9f1cc03a4149546ea9a11b962da"],["E:/awesomeProject/Dream-Blog/public/tags/模拟登录/index.html","18b65a9f23b35c8263387f3bf960d305"],["E:/awesomeProject/Dream-Blog/public/tags/正则表达式/index.html","eb3286ac5e5de3265154e78996b0bcc2"],["E:/awesomeProject/Dream-Blog/public/tags/词云/index.html","5c5785d5cab9ab112a781f7ab64f9518"],["E:/awesomeProject/Dream-Blog/public/tags/验证码/index.html","e0cd8a759f94402cbe6dc4a89e869d79"]];
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







