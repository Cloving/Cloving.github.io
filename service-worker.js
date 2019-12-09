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

var precacheConfig = [["e:/awesomeProject/blog/public/2018/04/15/二叉树前序遍历/index.html","4e039dc042e88564a63426ad258bc2eb"],["e:/awesomeProject/blog/public/2018/04/24/二叉树中序遍历/index.html","c0a6b295263a16cdcf627555129e6ece"],["e:/awesomeProject/blog/public/2018/05/17/静态资源加速/index.html","55e194eb957d92759f234b8f2706f39a"],["e:/awesomeProject/blog/public/2018/06/10/Vue生命周期解析/index.html","c68e543dacfddcc74b1a8e5be570e282"],["e:/awesomeProject/blog/public/2018/06/13/二分搜索算法/index.html","f7ac25823368b2ab5103a81e3bcbcbdc"],["e:/awesomeProject/blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","bff6855a045a3a76bb4e3604aa617bb5"],["e:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","5d807b04bffdb8f33696134a96380762"],["e:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","e28a0304968a2cd4f95ec7cdd34ff2e1"],["e:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","219345bb76eb4a1c05298e8a4a1ee562"],["e:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","fbde91266c1cad17b3903a84083ed11f"],["e:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","cf17e83837fd816235ca94fe6a179c3c"],["e:/awesomeProject/blog/public/about/index.html","3566961620a9ca7322656c2c25ddb3f5"],["e:/awesomeProject/blog/public/archives/2018/04/index.html","e5f5dd6f467cc020c397613b2ca094cb"],["e:/awesomeProject/blog/public/archives/2018/05/index.html","50387d618ec36ac640d7b02f8274d8db"],["e:/awesomeProject/blog/public/archives/2018/06/index.html","dcc6ab0c57b7b1d8c11ec28b791b88fd"],["e:/awesomeProject/blog/public/archives/2018/09/index.html","327b077ab868c0d9c48d1d5e7a0f6901"],["e:/awesomeProject/blog/public/archives/2018/11/index.html","903aa2e96a065dc61f3289b9caef1e0d"],["e:/awesomeProject/blog/public/archives/2018/12/index.html","54f977912ccd0e24ce337cc0b6ae875d"],["e:/awesomeProject/blog/public/archives/2018/index.html","dd4c4fcffec88e43e6256cfc60e7c68e"],["e:/awesomeProject/blog/public/archives/2018/page/2/index.html","ade5bb2cd6b80729e5f71915e9c93f6b"],["e:/awesomeProject/blog/public/archives/index.html","3005b9772327bdb7208d4d3191dff9c6"],["e:/awesomeProject/blog/public/archives/page/2/index.html","b53c7454e606a7282462f3b6583b7cba"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["e:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["e:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["e:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["e:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["e:/awesomeProject/blog/public/books/index.html","800846b64fba7a989ac1375ea20331b7"],["e:/awesomeProject/blog/public/categories/Vue/index.html","011adc044b25d565844ef7b8ec6d18ac"],["e:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","65c380c2c0872cd61ce13c5060976d5f"],["e:/awesomeProject/blog/public/categories/index.html","2570d3ea318adc0b822cdbb8ca7fa5f7"],["e:/awesomeProject/blog/public/categories/建站实录/index.html","10f631a14d8d0d9d18e7a57ce5ac01a0"],["e:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","384a892636ea0424d54629ebcef6deb4"],["e:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","fdcc3b885d35772a53f99fce5f770717"],["e:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","bb6ba63cbdb335244d882e4c2012b127"],["e:/awesomeProject/blog/public/categories/数据抓取/index.html","fb3dc91e0cb4806c9727e0eeb02f4713"],["e:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","85ddbc4941c6a8d345e5929f44c5a8e3"],["e:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","418a5063f1f9b97fd6bf53a137b3f96d"],["e:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","3d0dd8eb748e7221405cc6edc2636884"],["e:/awesomeProject/blog/public/categories/数据抓取/豆瓣/正则表达式/index.html","45db8dad8cfa4240a32c031060b48ba6"],["e:/awesomeProject/blog/public/categories/数据结构与算法/index.html","2905c12ca712ce6508fa7e866c02577a"],["e:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","92792a08ea3cf01e588cf7d9426f35e6"],["e:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","caaf818ca258e82a39a2ade17da7dd36"],["e:/awesomeProject/blog/public/css/index.css","e72be2e4bc7aa0aae0b61a82ac475bf2"],["e:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["e:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["e:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["e:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["e:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["e:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["e:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["e:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["e:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["e:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["e:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["e:/awesomeProject/blog/public/index.html","dbb074370f8347660a7574ffd21aff18"],["e:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["e:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["e:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["e:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["e:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["e:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["e:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["e:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["e:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["e:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["e:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["e:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["e:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["e:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["e:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["e:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["e:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["e:/awesomeProject/blog/public/link/index.html","5613e00b00605d5affc9bf08f9dcc670"],["e:/awesomeProject/blog/public/movies/index.html","2f6c7912c8ab5d4541215694ab62c4d2"],["e:/awesomeProject/blog/public/music/index.html","a5267221372cb9124cfe637b57d6dfcf"],["e:/awesomeProject/blog/public/page/2/index.html","dcfb3933867b637d3e09293ce5e9bf9f"],["e:/awesomeProject/blog/public/tags/C/index.html","81b187b57f86b13987fa74fb1ddf4f13"],["e:/awesomeProject/blog/public/tags/CDN/index.html","38076484bbd5064c01c0166d3b22ff6e"],["e:/awesomeProject/blog/public/tags/Echarts/index.html","02b4b154f0a16d8ecd987ca34f8f81fb"],["e:/awesomeProject/blog/public/tags/Javascript/index.html","c7036974623c47a4fbb8c82efe8cbd5b"],["e:/awesomeProject/blog/public/tags/MongoDB/index.html","e9a6be4eaab148ebad8f02608e998322"],["e:/awesomeProject/blog/public/tags/MySQL/index.html","bf08a0ad2bbf729d21f3ed295dd97f0d"],["e:/awesomeProject/blog/public/tags/Python/index.html","3cccbb5c9b120d1d0b71402e0f0520df"],["e:/awesomeProject/blog/public/tags/Selenium/index.html","62453469dcf50eb600ec12e05aad02db"],["e:/awesomeProject/blog/public/tags/Vue/index.html","87d4be4459351a6fe89de4a27fb6b05d"],["e:/awesomeProject/blog/public/tags/ajax/index.html","97baf2c6ac98a4e20956e9f2d05cab88"],["e:/awesomeProject/blog/public/tags/cookies/index.html","5ea9e2af34e897f9b909ecf7d1457266"],["e:/awesomeProject/blog/public/tags/index.html","2acfe8f7bc37aeb6205f6cefef875555"],["e:/awesomeProject/blog/public/tags/二叉树/index.html","c9978aa72ee37a8fc45d59965973c8be"],["e:/awesomeProject/blog/public/tags/代理/index.html","f350b9862a5145cae7139f89d0ca694e"],["e:/awesomeProject/blog/public/tags/图片压缩/index.html","f746ee58a84e54f27c99867543968974"],["e:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","60acce43457d9305fe5e796a25160cd4"],["e:/awesomeProject/blog/public/tags/数据结构/index.html","76ba760ec937e262df5d661e7b2f7854"],["e:/awesomeProject/blog/public/tags/模拟登录/index.html","eb580b7d0ec645756d89efb5e396e3ee"],["e:/awesomeProject/blog/public/tags/正则表达式/index.html","1bf063fe38756e241183740496032f90"],["e:/awesomeProject/blog/public/tags/词云/index.html","f80f0b36daeefe062d3e721a78bbd55d"],["e:/awesomeProject/blog/public/tags/验证码/index.html","e8873b07c3834d2fe1e3c184f95d4af2"]];
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







