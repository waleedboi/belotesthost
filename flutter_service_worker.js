'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b6994c471512b009bdab3bdcbe108139",
"assets/AssetManifest.bin.json": "0ff198268fdd7292169be9dca2f94999",
"assets/AssetManifest.json": "3ea02c54316f930c491dee6d0f36895d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e2d8532af3652d9d61ba5694f6b13838",
"assets/images/1.svg": "5197e9452f6a61acb47f55d8b28b8106",
"assets/images/1role.png": "63a0db6e92c2d966130cb3fc2a3173cc",
"assets/images/2.svg": "6484184dca75ae6620d5ef8112cded3b",
"assets/images/3.svg": "1db20c6bc7924b77240c6da47c109db6",
"assets/images/3role.png": "db52ab39c722412eaca6dcf51b8224c2",
"assets/images/4.svg": "d48170c142cf94224d6c6dd109975a96",
"assets/images/add.svg": "63ec3236000e1b9e15a60851c0782aa9",
"assets/images/addcircle.svg": "b2a684fd91326cb56c423bb6ba05ed54",
"assets/images/amex.png": "295e54d55c8024b9540fc8070dbf92e4",
"assets/images/archivedjobs.svg": "adbee401c815522716014c9dc9a9f288",
"assets/images/arrow-left.svg": "09a4883fb1faa400c455c4ef68365405",
"assets/images/arrow-right.svg": "5544510674519bc68d0e29e19d06acaf",
"assets/images/arrowback.svg": "4d848a38a59f2829cfc526ed827097ab",
"assets/images/arrowdown.svg": "c997398d3575202aaaf7d944c83523bc",
"assets/images/billing.svg": "c8b64436cee5fbd855d56f4c21a1953f",
"assets/images/bold.svg": "579732ac3b52edff1f1af368844d8e59",
"assets/images/calender.svg": "6fb73e102f104ccf86db9c8425d63aed",
"assets/images/candidate.svg": "fb12e87c23a6cedcc23f199dd1d72b7e",
"assets/images/center.svg": "87402da1dc0683d985f7106e1e0d6033",
"assets/images/check.svg": "b8efd2089fd21e07ab040b24d143cb86",
"assets/images/contactus.svg": "6685a1204101f90fe95e37425b320364",
"assets/images/cv.png": "6ef0dfe0bb1b15428234e6b29cda34a7",
"assets/images/dashboard.svg": "1817b13485932aa547f01e6fa5bf73bb",
"assets/images/delete.svg": "f639db14d08e2369e115732eb9e5518d",
"assets/images/diners.png": "3e98aff71132322d609979e7344c44c9",
"assets/images/document.svg": "45a9a6a88cc32f0b4907829126d594d0",
"assets/images/dropbox.svg": "1b6fea536db8d340988d1ba18120a549",
"assets/images/edit.svg": "620631af1011a556c5ab56363d62008e",
"assets/images/Ellipse%25207.png": "213c8c081fd989d4cf7dd4c2e557db4f",
"assets/images/email.svg": "354edc86df29c1ca6ff9ce4e198c5dc4",
"assets/images/emaildashboard.svg": "4229c388578979acecb4795ec144c469",
"assets/images/filter.svg": "fcb45e31481431a86e20191df6047489",
"assets/images/gettingstarted.svg": "f54253c9270d68c2805c908b70b144f6",
"assets/images/help%2520center.png": "db69ae14ba73fda921f76c1b9556e8c7",
"assets/images/help.svg": "5e593778393d26fc48ca139964655fca",
"assets/images/integration.svg": "1561700781d9d0872a88d5448525e279",
"assets/images/left.svg": "695bf0e8302a0fb483aa856279174a83",
"assets/images/location.svg": "cdd0026563d5c70cadb337a9a63f6876",
"assets/images/lock.svg": "d56b07719ffbb86eb7745a9dec485f0f",
"assets/images/logo.png": "d9f89b44c3d064ccae536e384c68d563",
"assets/images/master.png": "83444b8f1765bcb8e6eac1f5e9f7ebad",
"assets/images/menu.svg": "e6ca6ed1360a9dbbf1584bb0fe70840e",
"assets/images/menue.svg": "950748cd11bfbb8edafab582a56f420a",
"assets/images/newcandidate.svg": "85c0fefc75d21243b56b6ac82d9b5d04",
"assets/images/open_roles.svg": "5c472830b76df3569c89a9aeefd0633d",
"assets/images/paypal.png": "fce961c9b465d41cad5d6169a93b4aa4",
"assets/images/pdf.png": "971f51deb2b89410099e4af9ab772054",
"assets/images/phone.svg": "e9de156dd7d4401f1ddd1d1adebed415",
"assets/images/profile.png": "7eb4df327a95fcd0ebd28fa757fd15fb",
"assets/images/profile.svg": "4def7c00c9c413bfef2cca812211b1fa",
"assets/images/right.svg": "c8b75693eec73c3299621386a7c93a0a",
"assets/images/roles.svg": "870b7b58ad017ccf23e6a013d192e725",
"assets/images/schedule.svg": "544f0a13294176767a614609b324fc5a",
"assets/images/search.svg": "d8d0df88d86644ce772a4b31b6118523",
"assets/images/setting.svg": "d3c9ec395883806787fe758c80d79342",
"assets/images/share.svg": "76013e832fa88fc40c2e88dd75aae4b1",
"assets/images/smile.svg": "02dce30590ecdd8450cb5a33be6e5120",
"assets/images/Subscription%2520&%2520Billing.png": "03198f6e46149711ec47477e7e912b27",
"assets/images/subscription.svg": "87be0cc6b9c0b3d13464523d59d4c348",
"assets/images/team.svg": "992cb315f3bc0d3e145419b29ddbf091",
"assets/images/terms.svg": "16071bd83a957a2d334ce9aaa6070724",
"assets/images/troubleshooting.svg": "251022fa82b8b4210bcb605d5da9fc6c",
"assets/images/upload.svg": "646b19c395c241cd4eb87d8b5d8f16c7",
"assets/images/uploadimg.svg": "4157d229a703833c1729ab8a94647615",
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
"favicon.png": "a12dda56af2ad5e45762c95997c7024f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "1e8ee3a3a42a659b20b1eea7746c7722",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2c8b7dd31dee275b69cd7d281a6f4e22",
"/": "2c8b7dd31dee275b69cd7d281a6f4e22",
"main.dart.js": "e69e2efe4695869197f6f9423d83f4b6",
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
