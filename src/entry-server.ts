import { createApp } from './create-app';
export default async (context: any) => {
  const { app, store, router } = createApp()
  store.commit('SET_URL', context.url)
  await store.dispatch('prefetch')
  context.state = store.state
  router.push(context.url)
  return new Promise((resolve, reject) => {
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}