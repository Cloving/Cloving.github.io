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

var precacheConfig = [["E:/awesomeProject/blog/public/Echarts足迹图/index.html","9bba8af93531a5cc49b67d6e337ae5be"],["E:/awesomeProject/blog/public/Python模拟豆瓣登录（一）/index.html","dfeba13f2f7a5ce6cd31a92f9d58ab2f"],["E:/awesomeProject/blog/public/Vue生命周期解析/index.html","b18d5dd808b55248481a9f83954ddcdb"],["E:/awesomeProject/blog/public/about/index.html","35588dbceeb78ba569b6bc5e355000e0"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","be23d3805570eb5482227d6ef8d6d510"],["E:/awesomeProject/blog/public/archives/2018/10/index.html","0197d4b3aebab035c54b65478d6e834d"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","7f2c63fcc807a7873c151bc3305514f3"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","7d834cd4959b2ba35884c5a70b2778c6"],["E:/awesomeProject/blog/public/archives/2018/index.html","7b99f24116b918f6385924d36ee926ca"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","607babd78aa1540cdf8bcfb39d042bbf"],["E:/awesomeProject/blog/public/archives/index.html","81727450a582e53e2b0da03b0bc688d2"],["E:/awesomeProject/blog/public/archives/page/2/index.html","6277e48ca5e7cd696771229a70c4a06d"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/books/index.html","6e51bfffc264d218dac96753df60e1f4"],["E:/awesomeProject/blog/public/categories/Vue/index.html","7e0b00bc2eab13c75a02eccaa5308e51"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","59e7056c8ac216185e2f62392b9f87b8"],["E:/awesomeProject/blog/public/categories/index.html","0805941c19bf0bc6c3f7776eaf72007e"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","f308fbbb74541520a6b825bc7ef44453"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","7995542701c4b0ae2e54c95b0f556cdb"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","239f0ce30fd7df60aab9edbf901603d7"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","e48b2d9d496da913c75f0801b26ade4c"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","a5c8fa79fe9d1a8e5139b1e27c4e1261"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","725e88ec9dee4843d1f374ec4ffd44df"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","d4f9f0d61b194adf41ad2d00a6f200e4"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","22fe4aec94c81487ccc2fa1e9fc519f1"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","c91edfe42088792071cb9c0862d7ee32"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","3d8dc8975b738616d00749826bc40ca3"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","5f222d46b3f679fb632c9e04787b57c7"],["E:/awesomeProject/blog/public/css/index.css","2d85c674bcdbc821db99a26e4ca6158a"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","7785e7b9115ef42e41b3b17ca9b0ff5c"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","515f1c3fd110749d1de9c815b9621657"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","c3feadfa5f76dd05522030c17adbb73f"],["E:/awesomeProject/blog/public/movies/index.html","883cc4bca900dc19a60ac0ba5a11a31f"],["E:/awesomeProject/blog/public/music/index.html","e7161a4dbc644d2af53bdff3ab95dbf4"],["E:/awesomeProject/blog/public/page/2/index.html","585847c50841b6f9ca4115973da6a623"],["E:/awesomeProject/blog/public/tags/C/index.html","d0723e18195df3c12f3f089ff39804d5"],["E:/awesomeProject/blog/public/tags/CDN/index.html","ba1883ebe03cc8f5c3d8300ef8bd51e4"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","ae3863669575b83bd93ddf3e00a3d09e"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","a6485d1bd407845f1afff6dc6d6c7bd5"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","729182807540a9a27ff1a98ea4f9c3fe"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","6814266a83dfd38eda8c26f31a8e7879"],["E:/awesomeProject/blog/public/tags/Python/index.html","dba1f3950b72418853e4c9be3cfde7e9"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","dcb07bd77f809a8a74351a778992fa24"],["E:/awesomeProject/blog/public/tags/Vue/index.html","28d4ae9cb6deebd3be62cb0939a07e17"],["E:/awesomeProject/blog/public/tags/ajax/index.html","10d1b84b6178456040fbede46dddf0f3"],["E:/awesomeProject/blog/public/tags/index.html","2c6acaf807ac33ac9a45ed23038cce3a"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","4c3673684467ba753e9f669bbf29b54b"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","cdbda9ab5c1befd432fa299f663abf82"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","0d028f6db56b8bd2e5701da2d0d3d793"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","dde0e0486a581fea31e47cd05621b6ee"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","c4821c79a1a7544bc55e85ccd32afa0f"],["E:/awesomeProject/blog/public/tags/词云/index.html","e0f4901758c8a0dc950245ea59a5a96f"],["E:/awesomeProject/blog/public/tags/验证码/index.html","12e002247f9b641c2c5d5381b91513b8"],["E:/awesomeProject/blog/public/三寸气在千般用，一旦无常万事休/index.html","c251e7cd82cab80f9c0980ae0be334e9"],["E:/awesomeProject/blog/public/二分搜索算法/index.html","ebd51de9c77b03e2b09739f80c985fd4"],["E:/awesomeProject/blog/public/二叉树中序遍历/index.html","ad9be11ce3ed257dba971d7e99daf63b"],["E:/awesomeProject/blog/public/二叉树前序遍历/index.html","4e2fa31145e06f828ff8aa073e9d2c47"],["E:/awesomeProject/blog/public/抓取知乎用户动态数据/index.html","d9e85b74ce2347e7e08784448e7bf810"],["E:/awesomeProject/blog/public/抓取知乎用户粉丝数据/index.html","40b4c5af4cdb39a4b90ebc6b8a56c01e"],["E:/awesomeProject/blog/public/抓取网易云音乐榜单/index.html","301529b7d44124673c719ee9b0083600"],["E:/awesomeProject/blog/public/静态资源加速/index.html","b9539a24d80bb302f3249f7ffb520db8"]];
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







