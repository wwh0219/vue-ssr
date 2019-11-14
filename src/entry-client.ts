import { createApp } from './create-app';
import './style/style.scss'
const { app, store, router} = createApp()
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
// app.$mount('#app')
router.onReady(() => {
  app.$mount('#app')
})