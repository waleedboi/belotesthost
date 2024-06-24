'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b6994c471512b009bdab3bdcbe108139",
"assets/AssetManifest.bin.json": "0ff198268fdd7292169be9dca2f94999",
"assets/AssetManifest.json": "3ea02c54316f930c491dee6d0f36895d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e2d8532af3652d9d61ba5694f6b13838",
"assets/images/1.svg": "82e02e842c88c91bf45d203a88773b88",
"assets/images/1role.png": "63a0db6e92c2d966130cb3fc2a3173cc",
"assets/images/2.svg": "eabec612a0ac7facf16cba134040c800",
"assets/images/3.svg": "d5c639fae3ec7113a6e2c619cbf8da00",
"assets/images/3role.png": "db52ab39c722412eaca6dcf51b8224c2",
"assets/images/4.svg": "94111a86252050de7db3abdf9d87710d",
"assets/images/add.svg": "0b81a38ce48fd81f65f01f18434df2af",
"assets/images/addcircle.svg": "bdd2cbb2d07336068383de6f96f28c30",
"assets/images/amex.png": "295e54d55c8024b9540fc8070dbf92e4",
"assets/images/archivedjobs.svg": "1d3ca5cd25be8d7184b2ddf374f0c545",
"assets/images/arrow-left.svg": "3e04195ce7c5230b7b91f1fa22ee3d5c",
"assets/images/arrow-right.svg": "438317c3d7e1c8c1b86ea50bd605aeb9",
"assets/images/arrowback.svg": "dadb175926e3b1eeb1f49d885f7b473f",
"assets/images/arrowdown.svg": "e3da0441ecb7428d81f6867cca4ba000",
"assets/images/billing.svg": "eba53dd4e09c78936870cbe69f89ae18",
"assets/images/bold.svg": "f3986554bd09fb12bc199c4ecef22998",
"assets/images/calender.svg": "9df1268a510952226b1fb11cff38ce59",
"assets/images/candidate.svg": "ddf1c9c9808638a0c07f431dfcc78273",
"assets/images/center.svg": "44ff3b168d08637268da85c92cadbc9b",
"assets/images/check.svg": "1b9011e454b9a384a5ab43de0801a437",
"assets/images/contactus.svg": "7e5d9d4df6a6252533ba85b67251c249",
"assets/images/cv.png": "6ef0dfe0bb1b15428234e6b29cda34a7",
"assets/images/dashboard.svg": "9e107a7580f4372e53381b02556278a0",
"assets/images/delete.svg": "53ad9c4760681aacdee4d79fea87ba14",
"assets/images/diners.png": "3e98aff71132322d609979e7344c44c9",
"assets/images/document.svg": "70c56f06e3b39143fef9256360f3e4be",
"assets/images/dropbox.svg": "0aa405a6a8839fc4491f5e40fc09bc91",
"assets/images/edit.svg": "60c814b8e6421d38e23032d4935ed687",
"assets/images/Ellipse%25207.png": "213c8c081fd989d4cf7dd4c2e557db4f",
"assets/images/email.svg": "c471fcd1ffd716adef025f5462befa28",
"assets/images/emaildashboard.svg": "c0efcef13d91fcbd6e29c178bc4e9d61",
"assets/images/filter.svg": "0f3841f77fe942c99cf1d1b5455be0d2",
"assets/images/gettingstarted.svg": "bda8ee7fde12ccb43bbeeaa3afd7a5a0",
"assets/images/help%2520center.png": "db69ae14ba73fda921f76c1b9556e8c7",
"assets/images/help.svg": "80c88dd1da5387b8be79a9cf7f22144c",
"assets/images/integration.svg": "847df515fc89c0106b85f9672cfa76a4",
"assets/images/left.svg": "80addda7122df966c26ea7544e7876d1",
"assets/images/location.svg": "15bb30c32be0712c89ebe41116a91851",
"assets/images/lock.svg": "b985daeb97738127fc7cc91083fcebb4",
"assets/images/logo.png": "d9f89b44c3d064ccae536e384c68d563",
"assets/images/master.png": "83444b8f1765bcb8e6eac1f5e9f7ebad",
"assets/images/menu.svg": "648669e3a9861d63e2fd3cecf1b09a8e",
"assets/images/menue.svg": "25e25ad15f60fd464c1bd0d4382f6903",
"assets/images/newcandidate.svg": "853b82ae23cf1a18b08f379d6c518684",
"assets/images/open_roles.svg": "a182162361a1c46dfbc1f71c8e4d3c32",
"assets/images/paypal.png": "fce961c9b465d41cad5d6169a93b4aa4",
"assets/images/pdf.png": "971f51deb2b89410099e4af9ab772054",
"assets/images/phone.svg": "dd7616d1323c62e7f820edd2291627c2",
"assets/images/profile.png": "7eb4df327a95fcd0ebd28fa757fd15fb",
"assets/images/profile.svg": "9bd64e01964fe5fa2e5035697ab22143",
"assets/images/right.svg": "611fc2a7a9287cdf38c5bea07e24e571",
"assets/images/roles.svg": "7a0a10147e8e688bc215097799b76661",
"assets/images/schedule.svg": "2eae6838610b508d066b27820624096e",
"assets/images/search.svg": "5c8ea806c7b2057004fbc3082c2c28a3",
"assets/images/setting.svg": "d3c9ec395883806787fe758c80d79342",
"assets/images/share.svg": "dd71d3e4a119451c43874ed49dbb9be7",
"assets/images/smile.svg": "fdaefb7acc7b582fb8ed8cab594a5b02",
"assets/images/Subscription%2520&%2520Billing.png": "03198f6e46149711ec47477e7e912b27",
"assets/images/subscription.svg": "4c40b8ce69ac69e40b85ae443f23c2f0",
"assets/images/team.svg": "71360dd1fa89936b8da4a55d07e5c451",
"assets/images/terms.svg": "efffe29ec2514dc7fb24be392fbd7eba",
"assets/images/troubleshooting.svg": "b177b8beb665d2e38bd965d541efe8e2",
"assets/images/upload.svg": "c46a7004b5be12e92120ecea5ab21820",
"assets/images/uploadimg.svg": "4ee780dac4c222532c36bf59d2451ab7",
"assets/images/visa.png": "cfdfbe778f890c4b5d67005aeaec1264",
"assets/images/Waleedscv.pdf": "386f3170639fdcfc1c20d35e356782bc",
"assets/NOTICES": "89eb1a789cbf12a4494461114b593f9a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "84d784ebe3321d9f98cf34fee964833c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07100803bd80e2aa904e806216730155",
"/": "07100803bd80e2aa904e806216730155",
"main.dart.js": "4c16c13b3b48eb2e311bfbcab479eb53",
"manifest.json": "81d84a0a46681b283171ac0df435b9fd",
"version.json": "1dd7a78841daa81ea5038a288d7d125c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
