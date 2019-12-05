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

var precacheConfig = [["E:/awesomeProject/blog/public/2018/04/15/二叉树前序遍历/index.html","ef2b40274b0b036fa49f499351420284"],["E:/awesomeProject/blog/public/2018/04/24/二叉树中序遍历/index.html","9ab3d982e84339e31acd6ee4bf05341c"],["E:/awesomeProject/blog/public/2018/05/17/静态资源加速/index.html","c80755c08093b6d3477f484ebf05925d"],["E:/awesomeProject/blog/public/2018/06/10/Vue生命周期解析/index.html","16383986e797b042ef4a448a99be12b0"],["E:/awesomeProject/blog/public/2018/06/13/二分搜索算法/index.html","75513ec16c97aa9661ca38c387d8dd23"],["E:/awesomeProject/blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","007e8d22611354c32b7757d9ea8b3731"],["E:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","dac3825f4322dde5bacf74f686365ca0"],["E:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","8605eb4684711a5232fca77afe1bd079"],["E:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","c0ac2837272147c994c8ba827f5b1871"],["E:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","395e828cf8a3c798db7dcbeabb4257db"],["E:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","843454f92b14ed43b37e633ea015a37b"],["E:/awesomeProject/blog/public/about/index.html","9239cd607520252c319323f6dacf09f6"],["E:/awesomeProject/blog/public/archives/2018/04/index.html","cb91b02e06c104d92aedc1d9ecdf586c"],["E:/awesomeProject/blog/public/archives/2018/05/index.html","875a5ec03297040651943396526345b9"],["E:/awesomeProject/blog/public/archives/2018/06/index.html","874bdb056e37f82f218ccae3ab5ffe73"],["E:/awesomeProject/blog/public/archives/2018/09/index.html","9c577216451040a5efccc29b9d7f1ac7"],["E:/awesomeProject/blog/public/archives/2018/11/index.html","9ecb9b738f15de7086d9c528de6ec9b8"],["E:/awesomeProject/blog/public/archives/2018/12/index.html","dccbbe476ef1799cf42d49390753bb1f"],["E:/awesomeProject/blog/public/archives/2018/index.html","a8321c496d23e595fd9376021b2df3e7"],["E:/awesomeProject/blog/public/archives/2018/page/2/index.html","1f7eafc923b0c52709c8311747ad05fc"],["E:/awesomeProject/blog/public/archives/index.html","8b8fe3dba313ac19d668f7bb4b79b48a"],["E:/awesomeProject/blog/public/archives/page/2/index.html","55120fa2b0db3d27152b79f2d7cd0cd1"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["E:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["E:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["E:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["E:/awesomeProject/blog/public/books/index.html","873efa8db6adbf65bd624007e7334708"],["E:/awesomeProject/blog/public/categories/Vue/index.html","43d4e8c49d17b04739d632639eb26e27"],["E:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","1fe344b5aa5f282b81ed4a04f83b35e4"],["E:/awesomeProject/blog/public/categories/index.html","2bf28e0696fac4d434d7b19cf82d696b"],["E:/awesomeProject/blog/public/categories/建站实录/index.html","06e85c8b022d580fbf76e9bedbb6b547"],["E:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","323aa6d28f01e2b1d8bfc3392ff9de92"],["E:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","fb38646a2b36998f8d40c5a8fce58def"],["E:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","39198dda194df20333da6a12c3160368"],["E:/awesomeProject/blog/public/categories/数据抓取/index.html","7ecc5f2c95ba89f703194bbd4f82fb48"],["E:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","61237535f3a350a906825e604c541ad3"],["E:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","109932c4af5cdbc67e788ef687283cd1"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","d71de920391acdd343066feed3320faa"],["E:/awesomeProject/blog/public/categories/数据抓取/豆瓣/正则表达式/index.html","2bb7cea321143569324f54b2a2ad1351"],["E:/awesomeProject/blog/public/categories/数据结构与算法/index.html","fa416777eacc239cf51180703f1a978e"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","999be6794605d6bb80bfae0b18d5b7ee"],["E:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","f622887c079269af5ec9a7bad1399746"],["E:/awesomeProject/blog/public/css/index.css","e72be2e4bc7aa0aae0b61a82ac475bf2"],["E:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["E:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["E:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["E:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["E:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["E:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["E:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["E:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["E:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["E:/awesomeProject/blog/public/index.html","963b1c908fbb49f696fd1d042abaae4e"],["E:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["E:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["E:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["E:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["E:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["E:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["E:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["E:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["E:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["E:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["E:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["E:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["E:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["E:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["E:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["E:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["E:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["E:/awesomeProject/blog/public/link/index.html","8a3ac5538ace651f5a6f800707aa92bb"],["E:/awesomeProject/blog/public/movies/index.html","edda8751064c535eaa01e4bffa9363dd"],["E:/awesomeProject/blog/public/music/index.html","77315826e512117d83b39f1edd78f6b1"],["E:/awesomeProject/blog/public/page/2/index.html","9578c93166550bfae570df9fa11a417d"],["E:/awesomeProject/blog/public/tags/C/index.html","70df6b4223f0e033629b5fa131414d74"],["E:/awesomeProject/blog/public/tags/CDN/index.html","2139e6c517cb6082c154ed4547d48376"],["E:/awesomeProject/blog/public/tags/Echarts/index.html","e3e08789e3da70a7f6a53bf9c74f0e92"],["E:/awesomeProject/blog/public/tags/Javascript/index.html","5883bc399c06841c8a77f5c32ee0ec89"],["E:/awesomeProject/blog/public/tags/MongoDB/index.html","f24b78eacdaa12f4892c8b84daccbdc2"],["E:/awesomeProject/blog/public/tags/MySQL/index.html","e94efed430a265da4ad1a8d96cce34ed"],["E:/awesomeProject/blog/public/tags/Python/index.html","79f89bdb32b5eea4b0fe090dcc60f55a"],["E:/awesomeProject/blog/public/tags/Selenium/index.html","ef687a9f5677c82a69279baf436f9a57"],["E:/awesomeProject/blog/public/tags/Vue/index.html","d2fd629b963054b6b327f2a3c49e0543"],["E:/awesomeProject/blog/public/tags/ajax/index.html","af55d4ff164c5172cc8db78a5f69e486"],["E:/awesomeProject/blog/public/tags/cookies/index.html","1ecd371282af10fdbe94b36e8c94d59e"],["E:/awesomeProject/blog/public/tags/index.html","6167dc7402097eb10f48bfeeeb173e51"],["E:/awesomeProject/blog/public/tags/二叉树/index.html","592906d992778f6c9432997b85f362ff"],["E:/awesomeProject/blog/public/tags/代理/index.html","f7c57baef69060b13cf0a515fee79024"],["E:/awesomeProject/blog/public/tags/图片压缩/index.html","513f829d87c64b56a2e9879300e56201"],["E:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","b7bef9733b67ff74b8e9bfb2902dc5e5"],["E:/awesomeProject/blog/public/tags/数据结构/index.html","61015f7dbfacf34e27bd1f9773237356"],["E:/awesomeProject/blog/public/tags/模拟登录/index.html","639f98bdc95c1ba0445e8f3464ee3339"],["E:/awesomeProject/blog/public/tags/正则表达式/index.html","bd16c5e1f4b982ce8cadf7df3763715c"],["E:/awesomeProject/blog/public/tags/词云/index.html","2873c60012ac888684d9b972f470b7f8"],["E:/awesomeProject/blog/public/tags/验证码/index.html","0badb90fa6c0a3b5c3ba3c6a7882f46f"]];
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







