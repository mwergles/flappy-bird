const cacheName = 'flappy-bird-v1'

const appFiles = [
  // App Shell
  '/index.html',
  '/style.css',
  '/favicon.ico',
  '/flappy-bird.js',
  // Game Sprites
  '/images/sprites.png',
  // Game objects
  '/src/objects/Background.js',
  '/src/objects/Bottom.js',
  '/src/objects/Pipes.js',
  '/src/objects/Player.js',
  '/src/objects/SplashScreenBanner.js',
  // Game screens
  '/src/screens/MainScreen.js',
  '/src/screens/SplashScreen.js',
  // App State
  '/src/state/screensOrder.js',
  '/src/state/state.js',
  // Game Sound Effects
  '/sound/collision.wav',
  '/sound/jump.wav',
  '/sound/score.wav',
  // Icons (not sure if need to cache all this)
  '/images/icons/android-icon-36x36.png',
  '/images/icons/android-icon-48x48.png',
  '/images/icons/android-icon-72x72.png',
  '/images/icons/android-icon-96x96.png',
  '/images/icons/android-icon-144x144.png',
  '/images/icons/android-icon-192x192.png',
  '/images/icons/android-icon-512x512.png',
  '/images/icons/apple-icon.png',
  '/images/icons/apple-icon-57x57.png',
  '/images/icons/apple-icon-60x60.png',
  '/images/icons/apple-icon-72x72.png',
  '/images/icons/apple-icon-76x76.png',
  '/images/icons/apple-icon-114x114.png',
  '/images/icons/apple-icon-120x120.png',
  '/images/icons/apple-icon-144x144.png',
  '/images/icons/apple-icon-152x152.png',
  '/images/icons/apple-icon-180x180.png',
  '/images/icons/favicon-16x16.png',
  '/images/icons/favicon-32x32.png',
  '/images/icons/favicon-96x96.png'
]

async function cacheAppFiles () {
  const cache = await caches.open(cacheName)

  return cache.addAll(appFiles)
}

async function handleRequest (request) {
  try {
    const cachedRequest = await caches.match(request)

    if (cachedRequest) {
      return cachedRequest
    }

    const response = await fetch(request)
    const cache = await caches.open(cacheName)

    await cache.put(request, response.clone())

    return response
  } catch (err) {
    console.error(err)

    return fetch(request)
  }
}

self.addEventListener('install', async e => {
  e.waitUntil(cacheAppFiles())
})

self.addEventListener('fetch', async e => {
  e.respondWith(handleRequest(e.request))
})