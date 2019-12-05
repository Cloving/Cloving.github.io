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

var precacheConfig = [["E:/awesomeProject/blog/public/2018/04/15/二叉树前序遍历/index.html","5531f262800e74923c4048b4b7e11c65"],["E:/awesomeProject/blog/public/2018/04/24/二叉树中序遍历/index.html","ff5da9d1414909031e2e88367dbef44e"],["E:/awesomeProject/blog/public/2018/05/17/静态资源加速/index.html","6757669db3f7a72cd7d4aa3ca34111f8"],["E:/awesomeProject/blog/public/2018/06/10/Vue生命周期解析/index.html","eccdd5d5bb21516f1e4fb92cbee0587f"],["E:/awesomeProject/blog/public/2018/06/13/二分搜索算法/index.html","ef27b066a6db5c4ebcf8c43b2097dca9"],["E:/awesomeProject/blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","a8b3eef4b3cb35c70e24cb7c4473c757"],["E:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","6e37f91e67f1e2e9f685b008fe987f45"],["E:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","28137e721c9092fe3df31e29c39b77a2"],["E:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","9edb1c74292a7fa03114b2d9220a783e"],["E:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","e092ba6aead8099c93d3d5cb5751f099"],["E:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","1b66f3c2ba24ea13b7f8baa0d767261f"],["E:/awesomeProject/blog/public/about/index.html","866f39fd61481b336e780284da285fee"],["E:/awesomeProject/blog/public/archives/2018/04/index.html","1a06cf6cfbf3b7b69af1f06e0ae084e0"],["E:/awesomeProject/blog/public/archives/2018/05/index.html","58594bf7dc466a49329ea21aa750e234"],["E:/awesomeProject/blog/public/archives/2018/06/index.html","78d5879d091e1e8b74df35589199d361"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","a165c9b0d39340287f9c08a9274e8c39"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","aade05c3ab0971b1d70ae218fc31a86a"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","46459ce486b2d8275f37e108b7d42fa2"],["E:/awesomeProject/blog/public/archives/2018/index.html","5fa6c1d73bd5825e9b9755c80b77a3aa"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","ddbec70e26f20d64bf55201b1878de02"],["E:/awesomeProject/blog/public/archives/index.html","00fd344f8eb48cd952d95a25cf2d33c4"],["E:/awesomeProject/blog/public/archives/page/2/index.html","a9e50d5dd1e3bf735e2a6b2e957d3a43"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/books/index.html","873efa8db6adbf65bd624007e7334708"],["E:/awesomeProject/blog/public/categories/Vue/index.html","49fcbb3261d97ea78e9f7e92084dc717"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","025dd2d25fb157e06d4a0a43748a1d20"],["E:/awesomeProject/blog/public/categories/index.html","024e92faea496d8976a40bf762c37248"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","71f83fee47562d506b186984b679bfc5"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","77ccf74c594dfa28b50440e09cef0c31"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","9a340066575be1b48da3ff45c04e4d11"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","561b65f0a191900de2639824e0fa4f23"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","8d967805dde4baaf08105af48eb77b5c"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","f44302e967a0ce1aa987325d2432ffb9"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","8a86beff7a819709525fc688622314b7"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","0427f26c4678cbccb4c117768116a595"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/正则表达式/index.html","49dfcbd72f42f821beb6f5d4b76c439c"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","cd9e187b7e6ba4ccb600401a32275146"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","797c2820527639b4d4f9205230da67d0"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","766fa3b35a831d5763ab3d327fe32d10"],["E:/awesomeProject/blog/public/css/index.css","e72be2e4bc7aa0aae0b61a82ac475bf2"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","eba9ce3fd3918b4419045766f2f1ca48"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","0bd8c901090619259e13e68975a66a05"],["E:/awesomeProject/blog/public/movies/index.html","edda8751064c535eaa01e4bffa9363dd"],["E:/awesomeProject/blog/public/music/index.html","08be6ea9ed75ba7c40983aaa4650bf91"],["E:/awesomeProject/blog/public/page/2/index.html","30f9286abffdf9a0f0b4e969fca7ba0f"],["E:/awesomeProject/blog/public/tags/C/index.html","78f4775740dcbecc0ef82b2de9cd7402"],["E:/awesomeProject/blog/public/tags/CDN/index.html","ada68e5567fa7aa09c295e28b5ef85c1"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","0383a5a76236db0eca649bd71ace4ff2"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","83a1a548b568cafb43a410d9b1dc6d48"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","dfdfa02e59f44f1b3a88a13b59c1de42"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","111a1a8ab98958436ff839895cd7be34"],["E:/awesomeProject/blog/public/tags/Python/index.html","85be80af291c6851c9ca056164272bba"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","af68926271abecd5f6a0f2542ca868e9"],["E:/awesomeProject/blog/public/tags/Vue/index.html","67c3959208c164252ab4065f8b0bc21d"],["E:/awesomeProject/blog/public/tags/ajax/index.html","bece49905bd72568bdacc8c2be13f95e"],["E:/awesomeProject/blog/public/tags/cookies/index.html","271cc3bce727a92e191425fc5006a71d"],["E:/awesomeProject/blog/public/tags/index.html","e386a9dca27f9c1a773c0c5607e81660"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","7353f693286fd2f22ae232a29b389935"],["E:/awesomeProject/blog/public/tags/代理/index.html","b552a1bda5b8f75fd01c22ef71cc8103"],["E:/awesomeProject/blog/public/tags/图片压缩/index.html","eb506faa302813c5b54c8f43d5f19af5"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","d7e810cfa57fd29a0a411de7961e8732"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","bd86119da3c740418913e80ab9356e95"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","908d451c466377d6d7ddb79262a86ad5"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","4bfe61b75681301bd7547a9cfa7dca06"],["E:/awesomeProject/blog/public/tags/词云/index.html","1fdcda296f3a3c5ee71a743fd33f20de"],["E:/awesomeProject/blog/public/tags/验证码/index.html","c9f191440d80b284f09294fdb940e684"]];
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







