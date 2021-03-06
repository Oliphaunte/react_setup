/* eslint-disable no-console */
const host = window.location.hostname
const host_match = /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
const isLocalhost = Boolean(
  host === 'localhost' ||
  host === '[::1]' || // [::1] is the IPv6 localhost address.
  host.match(host_match) // 127.0.0.1/8 is considered localhost for IPv4.
)

const checkValidServiceWorker = (swUrl) => {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)
    .then(res => {
      // Ensure service worker exists, and that we really are getting a JS file.
      if ( res.status === 404 || res.headers.get('content-type').indexOf('javascript') === -1 ) {
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => window.location.reload())
        })
      } else registerValidSW(swUrl)
    })
    .catch(() => console.log('No internet connection found. App is running in offline mode.'))
}

const registerValidSW = (swUrl) => {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('New content is available; please refresh.') // refresh to display new content
            } else {
              console.log('Content is cached for offline use.')
            }
          }
        }
      }
    })
    .catch(error => console.error('Error during service worker registration:', error));
}

export default {
  register: () => {
    if ('serviceWorker' in navigator) {
      // The URL constructor is available in all browsers that support SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location)

      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      if (publicUrl.origin !== window.location.origin) return
  
      window.addEventListener('load', () => {
        const swUrl = `/service-worker.js`
  
        if (isLocalhost) {
          // This is running on localhost. Lets check if a service worker still exists or not.
          checkValidServiceWorker(swUrl)
  
          // Add some additional logging to localhost, pointing developers to the
          // service worker/PWA documentation.
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service ' +
                'worker. To learn more, visit https://goo.gl/SC7cgQ'
            )
          })
        } else registerValidSW(swUrl)
      })
    }
  },

  unregister: () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => registration.unregister())
    }
  }
}
/* eslint-enable no-console */