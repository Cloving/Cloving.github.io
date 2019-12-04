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

var precacheConfig = [["E:/awesomeProject/Dream-Blog/public/2018/04/15/二叉树前序遍历/index.html","1eda054222755ff1856053fdb7673be2"],["E:/awesomeProject/Dream-Blog/public/2018/04/24/二叉树中序遍历/index.html","16577f654eac3c934cd99be23dd6d5d4"],["E:/awesomeProject/Dream-Blog/public/2018/05/17/静态资源加速/index.html","3072a6d44490cd7efe51eea99d3a1296"],["E:/awesomeProject/Dream-Blog/public/2018/06/10/Vue生命周期解析/index.html","6ae73aafbe49f7d5a0d50c8f9eafe6e0"],["E:/awesomeProject/Dream-Blog/public/2018/06/13/二分搜索算法/index.html","42651b3b9fec52c00de9b9e1a9054399"],["E:/awesomeProject/Dream-Blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","fe8638ca803bccf95243f86cac3ca8ff"],["E:/awesomeProject/Dream-Blog/public/2018/11/20/抓取知乎用户动态数据/index.html","dcdce1c7c7bc3441dcbe59e6509cb92c"],["E:/awesomeProject/Dream-Blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","6b51c43ee511630043beb8537dac54d2"],["E:/awesomeProject/Dream-Blog/public/2018/12/08/Echarts足迹图/index.html","780f11eeb9ab35316f6551ca7848e9a4"],["E:/awesomeProject/Dream-Blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","dca549bd828ac3312b2e6892c5b5cf6e"],["E:/awesomeProject/Dream-Blog/public/2018/12/20/抓取网易云音乐榜单/index.html","7633be442cf9f9f77322b7ec22b33546"],["E:/awesomeProject/Dream-Blog/public/about/index.html","2334d6c8267d13c584d6a0a90a26b620"],["E:/awesomeProject/Dream-Blog/public/archives/2018/04/index.html","7ba2dffd27097c0fd31a6f21d9376e13"],["E:/awesomeProject/Dream-Blog/public/archives/2018/05/index.html","61b49815208669e5d8d7915bdbbab279"],["E:/awesomeProject/Dream-Blog/public/archives/2018/06/index.html","2e1de80c42e09da020518580aefe8813"],["E:/awesomeProject/Dream-Blog/public/archives/2018/09/index.html","e144c9a539fa82a5f61e05736c15c096"],["E:/awesomeProject/Dream-Blog/public/archives/2018/11/index.html","e0731d25a027145949142dbe5e96a41f"],["E:/awesomeProject/Dream-Blog/public/archives/2018/12/index.html","c5ea0dc22dfa619a116cd6d6d141422a"],["E:/awesomeProject/Dream-Blog/public/archives/2018/index.html","c60c2fb2aa0bb82ee63134a1cd16fb75"],["E:/awesomeProject/Dream-Blog/public/archives/2018/page/2/index.html","46afa35ea12ad11ec795fb36ac70c0fa"],["E:/awesomeProject/Dream-Blog/public/archives/index.html","65ff70a9c7c4033303986fffa8357f83"],["E:/awesomeProject/Dream-Blog/public/archives/page/2/index.html","494f068c088f5c605aca50177a768569"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/Dream-Blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/Dream-Blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/Dream-Blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/Dream-Blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/Dream-Blog/public/categories/Vue/index.html","a41170dd03cb660fe069e221e9482d05"],["E:/awesomeProject/Dream-Blog/public/categories/Vue/基础原理类/index.html","0f398ccceb76407db908feffefe31eae"],["E:/awesomeProject/Dream-Blog/public/categories/index.html","8bbd2eb3b1def6b4ee7110068de02edb"],["E:/awesomeProject/Dream-Blog/public/categories/建站实录/index.html","e99c705bfa141c60e07f2cda42d3014f"],["E:/awesomeProject/Dream-Blog/public/categories/建站实录/足迹图/index.html","6443a7e675231bf3c4e311359df815cd"],["E:/awesomeProject/Dream-Blog/public/categories/建站实录/静态资源加速/index.html","dfe297a2f0fe95dbdb92eb8d607541b3"],["E:/awesomeProject/Dream-Blog/public/categories/念念不忘，必有回响/index.html","0b7f46c12b18fb640694d823aebe9cc1"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/index.html","9c0885974d29c377e76f2674cd8016b0"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/知乎/index.html","7c4c22dcefedd447845bbc3b87799617"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/网易云音乐/index.html","ad6e53acbc31c126185ac8fc9275cf98"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/豆瓣/index.html","9171e5fd39e504919b46a54d80af9a2f"],["E:/awesomeProject/Dream-Blog/public/categories/数据抓取/豆瓣/正则表达式/index.html","a37aa548a3883a6f371bf24a90d45b75"],["E:/awesomeProject/Dream-Blog/public/categories/数据结构与算法/index.html","4d526422ec862eb6f7669b22a393136e"],["E:/awesomeProject/Dream-Blog/public/categories/数据结构与算法/二分查找/index.html","8b1a36fd9b2737d1e330d4f7e91cbf16"],["E:/awesomeProject/Dream-Blog/public/categories/数据结构与算法/二叉树/index.html","27d66e1c944dfe22ba4cd9f63e54ddb6"],["E:/awesomeProject/Dream-Blog/public/css/index.css","29323cdbea2930a80fe3800ebd391fa4"],["E:/awesomeProject/Dream-Blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/Dream-Blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/Dream-Blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/Dream-Blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/Dream-Blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/Dream-Blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/Dream-Blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/Dream-Blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/Dream-Blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/Dream-Blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/Dream-Blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/Dream-Blog/public/index.html","4c20e9db86b6170c3c080a22903285ab"],["E:/awesomeProject/Dream-Blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/Dream-Blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/Dream-Blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/Dream-Blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/Dream-Blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/Dream-Blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/Dream-Blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/Dream-Blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/Dream-Blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/Dream-Blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/Dream-Blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/Dream-Blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/Dream-Blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/Dream-Blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/Dream-Blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/Dream-Blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/Dream-Blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/Dream-Blog/public/link/index.html","b6485d6d40a1f4c86c855092cd9c590f"],["E:/awesomeProject/Dream-Blog/public/movies/index.html","e25055d88aac15c75f3b7f47d1962fe9"],["E:/awesomeProject/Dream-Blog/public/music/index.html","f358c59f24bdcc86a6676b03a17b0e8c"],["E:/awesomeProject/Dream-Blog/public/page/2/index.html","f1bf1aec316b4e76ee1f12347bf84474"],["E:/awesomeProject/Dream-Blog/public/tags/C/index.html","e3eff6edc2eb0dd09c9f63d425fc9876"],["E:/awesomeProject/Dream-Blog/public/tags/CDN/index.html","6e11b1116aa6c7ff265ac0e48502a6c8"],["E:/awesomeProject/Dream-Blog/public/tags/Echarts/index.html","3901a82361a5d4f9ba8096c965466a7b"],["E:/awesomeProject/Dream-Blog/public/tags/Javascript/index.html","732c202d75ec5b2edbc2cdde7b420c9d"],["E:/awesomeProject/Dream-Blog/public/tags/MongoDB/index.html","8894b63ae0b93a14259902ce713cceed"],["E:/awesomeProject/Dream-Blog/public/tags/MySQL/index.html","3a41e612e29849e7da8b69a8989fe67b"],["E:/awesomeProject/Dream-Blog/public/tags/Python/index.html","ac985b5ed580ae86ac29f5f2ca1ae393"],["E:/awesomeProject/Dream-Blog/public/tags/Selenium/index.html","8460e504c68d4bdb46fbb31052dcd823"],["E:/awesomeProject/Dream-Blog/public/tags/Vue/index.html","de7e20b8abe82d4eb0bc5780596f1cfe"],["E:/awesomeProject/Dream-Blog/public/tags/ajax/index.html","8be379f18a368036ba470b95cdadaa34"],["E:/awesomeProject/Dream-Blog/public/tags/cookies/index.html","cb687904de7d906ac8a652ab0a590160"],["E:/awesomeProject/Dream-Blog/public/tags/index.html","f62c260c3bcc9a9ced97f7432748e70c"],["E:/awesomeProject/Dream-Blog/public/tags/二叉树/index.html","f7624c4f680af5e75c7731cffad0d323"],["E:/awesomeProject/Dream-Blog/public/tags/代理/index.html","94cf0149de2c26787fc888954d7ce837"],["E:/awesomeProject/Dream-Blog/public/tags/图片压缩/index.html","c4f5d04332ce32fdd3c63fab806f5ef3"],["E:/awesomeProject/Dream-Blog/public/tags/念念不忘，必有回响/index.html","c729ed250e995f9ed5a1480c4c598211"],["E:/awesomeProject/Dream-Blog/public/tags/数据结构/index.html","5fa553c2d2ef5cb948e16032c71ae418"],["E:/awesomeProject/Dream-Blog/public/tags/模拟登录/index.html","dc5b663ce90a8e97ff3d5fec3d4f8ee5"],["E:/awesomeProject/Dream-Blog/public/tags/正则表达式/index.html","f637905627c53d49addc66fe04e440dc"],["E:/awesomeProject/Dream-Blog/public/tags/词云/index.html","14ddf10384b6b4f35889dc7b8db532ae"],["E:/awesomeProject/Dream-Blog/public/tags/验证码/index.html","ea99b8937e8f30b0a8400a1cf6644849"]];
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







