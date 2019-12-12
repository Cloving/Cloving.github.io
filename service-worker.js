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

var precacheConfig = [["E:/awesomeProject/blog/public/2018/09/15/二叉树前序遍历/index.html","200bf07d9b316c4d64e4df9f198852f9"],["E:/awesomeProject/blog/public/2018/09/24/二叉树中序遍历/index.html","3184d95ba51fc0fbbc5935304668bc79"],["E:/awesomeProject/blog/public/2018/09/30/静态资源加速/index.html","3c02edcc1424cfb62ac43fd2fb7c2728"],["E:/awesomeProject/blog/public/2018/10/10/Vue生命周期解析/index.html","291f09ad93e900263665b0d1cd6116cd"],["E:/awesomeProject/blog/public/2018/10/13/二分搜索算法/index.html","ec4d68afb5a73205ccac1d82f7630c21"],["E:/awesomeProject/blog/public/2018/10/21/三寸气在千般用，一旦无常万事休/index.html","e44874da3b89f08ebeb65e72619d3d77"],["E:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","d2d9589f4f639f02dfef4a1e3a2765de"],["E:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","9e398dd736670b6d6c6466d984f7d127"],["E:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","cde898bc3d1bdf9e5bf890679cf505c8"],["E:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","e17b74b9b5dbe2c46563acb357771f65"],["E:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","bbd7ac706d446499b9554f6292c27b3d"],["E:/awesomeProject/blog/public/about/index.html","c5f9da2f7467c6723caabbdbf40a865f"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","95724f960d13ca60dc87505c4473ec27"],["E:/awesomeProject/blog/public/archives/2018/10/index.html","71540a3f110d50d344e01a24b4eb4d35"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","5fbb17ba45f7a5dfbccedc8db1267c8a"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","acbce3d28ff8077962de4e64659db58a"],["E:/awesomeProject/blog/public/archives/2018/index.html","5118f0188aa8bdf5bf81b56d5d8292a9"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","def7d689c0def23df58e7ddc8bd81d85"],["E:/awesomeProject/blog/public/archives/index.html","6b7bbdda796035d1c57cad69c93a1f09"],["E:/awesomeProject/blog/public/archives/page/2/index.html","06259eddbd393a945827c7429d5dbf62"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/books/index.html","291d59c36015ea861034fe59c2124573"],["E:/awesomeProject/blog/public/categories/Vue/index.html","a32beaa3d6a743854d95ac290c1b710b"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","4524f53ce5528478ca6525e2fea9c31b"],["E:/awesomeProject/blog/public/categories/index.html","1f7607ecfdb5eb5e17baa301ebe90d53"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","91f2023752d45328e701cc7539c2b0ae"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","efd29415769abb2c4a967ec6282656ba"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","01bd525a5e5ce16b2235d7ec3b620b30"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","7e1b9e8b35f32acb4cc4f96f1d865830"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","78d43fa25b7ef9424ccf9e6a97397af9"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","d69b6407fcea6783204743dc8f147cd9"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","60bb576f17ffaf350c8026f4b9c9f58c"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","1e98c21cd87726987bd014a786d3f407"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","4c6c095c2356cef1959f3f9f01483516"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","9765c80d44e31253be964e9c34597aa9"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","0879754c7f72aa3a4d0335dc9b012807"],["E:/awesomeProject/blog/public/css/index.css","c801c59d4435268981cd5f72d60ee19c"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","2d88abe7255c0692ffaaa3352ebbd82a"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","1b86a5139a27da534107a02af6e4fb97"],["E:/awesomeProject/blog/public/movies/index.html","c7d5792a8cf24160b4afdf4c42f4e1ee"],["E:/awesomeProject/blog/public/music/index.html","945da98c06e65a89e629e77dd1599a40"],["E:/awesomeProject/blog/public/page/2/index.html","fcbc4b3e64a7b499f32e17dc68b0f941"],["E:/awesomeProject/blog/public/tags/C/index.html","a663a684416a2fa00eb655725fd21071"],["E:/awesomeProject/blog/public/tags/CDN/index.html","556de2ad06a6936face3b846d08f1ca0"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","da4ed94bacb186a65260be6f2349519a"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","50a513c22a90a103f59362cd10e114cd"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","885567a91356332fe52d247973b58cfe"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","82f6e96da0f92e9c0603ff60e66aeb1e"],["E:/awesomeProject/blog/public/tags/Python/index.html","53092673cf6e858cb321c22e14edb726"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","edc1c85fdf5d6f7ceabe296bd6fb8b4f"],["E:/awesomeProject/blog/public/tags/Vue/index.html","cdae9fea9537f807f515cc7d48edff29"],["E:/awesomeProject/blog/public/tags/ajax/index.html","8acd4dd897b53a873d8cb853f71c122c"],["E:/awesomeProject/blog/public/tags/index.html","ed0285caf97491811875dac0b7670b4f"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","d8ad3feb058222e4769e5fab8dcf9a3b"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","4eac8ab16f7be03bd35af7ddcfc44696"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","ad646cd7a228f4363f529cbab9afead6"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","5332326bb504540622413599a0857e3f"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","9abae3f8fec95fe7b0881cf70d633006"],["E:/awesomeProject/blog/public/tags/词云/index.html","21676cf730c5041bfb175b5ec30e08cf"],["E:/awesomeProject/blog/public/tags/验证码/index.html","d73a1b85b4eeab657977daae812b4baa"]];
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







