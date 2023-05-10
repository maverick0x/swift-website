'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b934ddef395aeeef863c0726643565f0",
"/": "b934ddef395aeeef863c0726643565f0",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "ec044804437623bfea11d9652e40e109",
"assets/AssetManifest.json": "9bd326d14fa537a5eb464c625f1393d6",
"assets/NOTICES": "15225dbe52d45b6b12bf2c2431b9e9b1",
"assets/assets/fonts/Manrope-Light.ttf": "e1c75da3b3cd6ffe401521025ac98125",
"assets/assets/fonts/Manrope-Medium.ttf": "e7e9d7a44e798ebf4fa77f45f6814c0b",
"assets/assets/fonts/Manrope-Regular.ttf": "1c42bf193afbb1701dd097b4b4c5e3dd",
"assets/assets/fonts/Manrope-ExtraLight.ttf": "6bd7ddf3cff0a4771924cafcb2926d91",
"assets/assets/fonts/Manrope-Bold.ttf": "091b06ee2d5a17cc0f0ce1fbea318317",
"assets/assets/fonts/Manrope-ExtraBold.ttf": "c179027b1017e4eda5439a92fe61f16c",
"assets/assets/images/phone.png": "808a9dd60975169b25ed24263e807ac6",
"assets/assets/images/card_bg.png": "bdbd9cbf2d94513ec8339620d3ac2530",
"assets/assets/images/Icon%2520(8).png": "1715a6cb254077a649d1648561c54777",
"assets/assets/images/Icon%2520(6).png": "f8b6f4a2c50793be7da3e15553932446",
"assets/assets/images/2023.png": "6077cdece558aafb5ea8dbe0c29c0fe8",
"assets/assets/images/blacklogo.png": "848f701d0a664bdd90cd19707df33ded",
"assets/assets/images/investors_d.png": "dd579ac2e83ab6c7b0bad80193df7be6",
"assets/assets/images/Img.png": "770c5b4f1c3ca4b06a276aea576c7234",
"assets/assets/images/thro1.png": "8e609106b2c7d0c4566da70ad47ab10e",
"assets/assets/images/app_bg.png": "9724375eaed5bf166e685db4c0e33017",
"assets/assets/images/cards.png": "767da3152a09b5e605c3df97574e23ce",
"assets/assets/images/horizon.png": "49189a21a41a80e34dad5ed15ad56b64",
"assets/assets/images/logoo.png": "1fd38421a55c77bc37cdca7351384f22",
"assets/assets/images/swift_lite.png": "f310894c07987e086f199e932073fbee",
"assets/assets/images/Monitor%2520XDR.png": "9ae03c9440aeb81a6a62ad887583e398",
"assets/assets/images/investors_m.png": "1def02ec2781f7280d18b0015c273669",
"assets/assets/images/Icon%2520(9).png": "46f3308fc355cc5965e6f4e31a2dec94",
"assets/assets/images/Icon%2520(5).png": "f596e8981cf7d32d036fd19bbeee2222",
"assets/assets/images/desktop_app.png": "73f1958cd977d76e84fec14f3154e245",
"assets/assets/images/youtube.png": "242fa229f8ae7a42a4e4105708841628",
"assets/assets/images/cube1.png": "57e657c14b6eccb5a18aa1742bbba8d4",
"assets/assets/images/Icon%2520(3).png": "a7ee0ddc980fe8554d237d1e16d38b48",
"assets/assets/images/arrow1.png": "b12d33a7564650510546dd96f45053a9",
"assets/assets/images/swift_pro.png": "97bb5caf033a4154a6f21a4e3a145837",
"assets/assets/images/Icon%2520(4).png": "8ba9d969db814cb236908c9ffaf52dc4",
"assets/assets/images/layer1.png": "23b0b7ce23ce6b07f8a612135e80c06c",
"assets/assets/images/Icon%2520(2).png": "e6c0efb19c60530ef32b98fc3bd52dfb",
"assets/assets/images/Mask_group.png": "e72893e333edbed4f5e083c936da4eea",
"assets/assets/images/Socials.png": "13e8a55de71b86f06f65bfb00a5f3901",
"assets/assets/images/Icon%2520(7).png": "ce58c8d45a6415f45fa635bd6fb5b848",
"assets/loading.gif": "d41d8cd98f00b204e9800998ecf8427e",
"assets/splashwhite.gif": "7660404e58f84262dfb85dab4e4034c7",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/splashblack.gif": "e692f15b1e3af2774cad1b141fd59e0b",
"main.dart.js": "91d2c39433d03881eb04e1a0e703ee0c",
"version.json": "90ac4b9a2274f1180d11efc3280407e1",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"manifest.json": "6378f5b1c6cdf74a599f747614f90a94",
".git/packed-refs": "c1fbc380dc847f70b32acc2106211e7d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/HEAD": "52da29904275748a42c6e329853a4322",
".git/logs/refs/remotes/origin/HEAD": "52da29904275748a42c6e329853a4322",
".git/logs/refs/heads/main": "52da29904275748a42c6e329853a4322",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "cbda66bb9a379c18686c708e54dd374d",
".git/config": "f5552daf73b7133cc7b2b20a7bf964a1",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/heads/main": "127354391343623ac7eaf742125c3609",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/index": "99dc78084a8e59f9fcffc5be11dbc7a2",
".git/objects/pack/pack-796eb5ea9e837a91e557d0bc62b5b1901d0499a3.pack": "e57ae20f236d27fa53a2e38292968241",
".git/objects/pack/pack-796eb5ea9e837a91e557d0bc62b5b1901d0499a3.idx": "25046c2bbac11ef788f378ea89491763"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
