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

var precacheConfig = [["e:/awesomeProject/blog/public/2018/04/15/二叉树前序遍历/index.html","eaf98031b9c23d910145593a03b00c4f"],["e:/awesomeProject/blog/public/2018/04/24/二叉树中序遍历/index.html","07168af11af162b7c441e63bd846362c"],["e:/awesomeProject/blog/public/2018/05/17/静态资源加速/index.html","4c3679e477cdbafd962f0b3e770e8bb1"],["e:/awesomeProject/blog/public/2018/06/10/Vue生命周期解析/index.html","e8db96109bf9c0b3771cc1790fa54d4f"],["e:/awesomeProject/blog/public/2018/06/13/二分搜索算法/index.html","4991dab67ef8a5f379f4867f0f883f20"],["e:/awesomeProject/blog/public/2018/09/21/三寸气在千般用，一旦无常万事休/index.html","3ac12063ff74bbeb1ec2207dfd90a035"],["e:/awesomeProject/blog/public/2018/11/20/抓取知乎用户动态数据/index.html","6fc67f612afe870bab2fa970e6e38693"],["e:/awesomeProject/blog/public/2018/11/30/Python模拟豆瓣登录（一）/index.html","4c6d268deb371fd53d0a7c8dbf779bc2"],["e:/awesomeProject/blog/public/2018/12/08/Echarts足迹图/index.html","6d9d752996261cc554daf7c419a7edf4"],["e:/awesomeProject/blog/public/2018/12/13/抓取知乎用户粉丝数据/index.html","a2e8efefc0a983147ea0d730719364fa"],["e:/awesomeProject/blog/public/2018/12/20/抓取网易云音乐榜单/index.html","7ea01787f2439be406d4268bbd9cfe72"],["e:/awesomeProject/blog/public/about/index.html","160df61cacbcc07291ff51a23f1d8881"],["e:/awesomeProject/blog/public/archives/2018/04/index.html","77c4d053d2a66143d251ef5a2dd9872e"],["e:/awesomeProject/blog/public/archives/2018/05/index.html","8b485e24bfbf92a4f7f05073381106e0"],["e:/awesomeProject/blog/public/archives/2018/06/index.html","312b424b81403bbbdd825133c3e7723e"],["e:/awesomeProject/blog/public/archives/2018/09/index.html","6160629b001bd7dd1979c1961a24e26a"],["e:/awesomeProject/blog/public/archives/2018/11/index.html","c0d02af24bdbbb84cff633904f975890"],["e:/awesomeProject/blog/public/archives/2018/12/index.html","80eef64c453cf0d09341fac4b27e750a"],["e:/awesomeProject/blog/public/archives/2018/index.html","44c3d6b209db5c1ccbe50251615b5db3"],["e:/awesomeProject/blog/public/archives/2018/page/2/index.html","fa68a47f814bcccf3cbc992c05bb5a23"],["e:/awesomeProject/blog/public/archives/index.html","63856ddaea89a5a460ed7f4fa045849e"],["e:/awesomeProject/blog/public/archives/page/2/index.html","15555a39ba99baa57e6ce9a4c8bc1dbe"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["e:/awesomeProject/blog/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["e:/awesomeProject/blog/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["e:/awesomeProject/blog/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["e:/awesomeProject/blog/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["e:/awesomeProject/blog/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["e:/awesomeProject/blog/public/books/index.html","d89df3e5e8766322f5dd96374334a7ca"],["e:/awesomeProject/blog/public/categories/Vue/index.html","75f53b314edaf78e3f1008c813490350"],["e:/awesomeProject/blog/public/categories/Vue/基础原理类/index.html","0676c1af54029fa9278e722c27e37f1f"],["e:/awesomeProject/blog/public/categories/index.html","0fc64fd4a2c30b2cd287bdd30a15d3c7"],["e:/awesomeProject/blog/public/categories/建站实录/index.html","f7effe98cdf7fbbc779088a73aefac4c"],["e:/awesomeProject/blog/public/categories/建站实录/足迹图/index.html","d15f540ee81ad1593aed9e89b1c596b5"],["e:/awesomeProject/blog/public/categories/建站实录/静态资源加速/index.html","e797584c954e784786f6eed1912ab067"],["e:/awesomeProject/blog/public/categories/念念不忘，必有回响/index.html","05d6e2e75cb595d002b3519e09525fc6"],["e:/awesomeProject/blog/public/categories/数据抓取/index.html","520ef2b52f89d20103a5b1a67540ff77"],["e:/awesomeProject/blog/public/categories/数据抓取/知乎/index.html","cb103ab2143c41cb5c933a81be843c1f"],["e:/awesomeProject/blog/public/categories/数据抓取/网易云音乐/index.html","13db62ebaa2ca5fbaf91e7826be2a0ae"],["e:/awesomeProject/blog/public/categories/数据抓取/豆瓣/index.html","1ec3e969689d683526e5185049bfb73f"],["e:/awesomeProject/blog/public/categories/数据抓取/豆瓣/正则表达式/index.html","8c5b705e5735b650294a7145593a32f1"],["e:/awesomeProject/blog/public/categories/数据结构与算法/index.html","d123db04215eb2ce9ef1285ba977dc60"],["e:/awesomeProject/blog/public/categories/数据结构与算法/二分查找/index.html","2a711cf709e8df4034430446dfc65268"],["e:/awesomeProject/blog/public/categories/数据结构与算法/二叉树/index.html","8c791bae1ee65f76be235dd1161fb983"],["e:/awesomeProject/blog/public/css/index.css","9fda0a7605b84641352a4c52e7451bb7"],["e:/awesomeProject/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["e:/awesomeProject/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["e:/awesomeProject/blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["e:/awesomeProject/blog/public/img/alipay.jpg","e8d95a02186bc735ed394d8fc9a8c885"],["e:/awesomeProject/blog/public/img/avatar.jpg","f08f6c3d51449b71f32cbcf7d89395e1"],["e:/awesomeProject/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["e:/awesomeProject/blog/public/img/favicon.png","2e9ec0a400dade172079a1c3a49294de"],["e:/awesomeProject/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["e:/awesomeProject/blog/public/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["e:/awesomeProject/blog/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["e:/awesomeProject/blog/public/img/wechat.jpg","1883d3f6a601bcdf2cc2ce8e1b58630d"],["e:/awesomeProject/blog/public/index.html","a22801569859f29655dc74f8e31609be"],["e:/awesomeProject/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["e:/awesomeProject/blog/public/js/main.js","0b15be83da948ee5f70ed624c29d2b1d"],["e:/awesomeProject/blog/public/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["e:/awesomeProject/blog/public/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["e:/awesomeProject/blog/public/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["e:/awesomeProject/blog/public/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["e:/awesomeProject/blog/public/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["e:/awesomeProject/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["e:/awesomeProject/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["e:/awesomeProject/blog/public/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["e:/awesomeProject/blog/public/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["e:/awesomeProject/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["e:/awesomeProject/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["e:/awesomeProject/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["e:/awesomeProject/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["e:/awesomeProject/blog/public/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["e:/awesomeProject/blog/public/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["e:/awesomeProject/blog/public/link/index.html","e244fa4a60d082ac222a7400afebcf50"],["e:/awesomeProject/blog/public/movies/index.html","ff618c97325900cc9abce2d8aa2ceb49"],["e:/awesomeProject/blog/public/music/index.html","1d321631201c6bdc97f30664d16e8f4e"],["e:/awesomeProject/blog/public/page/2/index.html","890e244c33f26af2ab0c4acc04789b36"],["e:/awesomeProject/blog/public/tags/C/index.html","f32a568f005158e57dabe0ea43c46bc7"],["e:/awesomeProject/blog/public/tags/CDN/index.html","3090f3a06d52dd240518366628b926e4"],["e:/awesomeProject/blog/public/tags/Echarts/index.html","d559fed3f222b9c4419dd4ae818aea18"],["e:/awesomeProject/blog/public/tags/Javascript/index.html","2aeab203c4a461fc0de4a836f786b457"],["e:/awesomeProject/blog/public/tags/MongoDB/index.html","5f1f5be4508f911f583b0785229d4843"],["e:/awesomeProject/blog/public/tags/MySQL/index.html","119b25584545b053f9d110d3413f8b66"],["e:/awesomeProject/blog/public/tags/Python/index.html","1ec25bf04b90c80d3856baf666514722"],["e:/awesomeProject/blog/public/tags/Selenium/index.html","13f1fd5248c96bd7b42b9ca56f32bade"],["e:/awesomeProject/blog/public/tags/Vue/index.html","a0764f40e2c896f4065e5716131b8b06"],["e:/awesomeProject/blog/public/tags/ajax/index.html","ca8fedca6408d1284be2568c12db3ea0"],["e:/awesomeProject/blog/public/tags/cookies/index.html","1c3f2188ed7560ffe1d108f5883f3254"],["e:/awesomeProject/blog/public/tags/index.html","d3c67f81c76652dfb9e8773423122569"],["e:/awesomeProject/blog/public/tags/二叉树/index.html","b1a16c93be45d1c7cb5b7563b209cf1a"],["e:/awesomeProject/blog/public/tags/代理/index.html","67efa8ede7243d4e2cb71f46c3403c3b"],["e:/awesomeProject/blog/public/tags/图片压缩/index.html","30e7b270a8fa601fdc998ac15b9452e7"],["e:/awesomeProject/blog/public/tags/念念不忘，必有回响/index.html","8fb09e32b1c2ee555aa09f4c32053b37"],["e:/awesomeProject/blog/public/tags/数据结构/index.html","2646103f280083d986dcf565ae76c55b"],["e:/awesomeProject/blog/public/tags/模拟登录/index.html","f5b1180dcb5fe0f6586a82853bae2f2d"],["e:/awesomeProject/blog/public/tags/正则表达式/index.html","2c9657d4e84ed8c61deaf3cfd2f86d1d"],["e:/awesomeProject/blog/public/tags/词云/index.html","98798925bf03835188846aa7c0d60e22"],["e:/awesomeProject/blog/public/tags/验证码/index.html","85db3e212edeb0e732573859b9af845a"]];
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







