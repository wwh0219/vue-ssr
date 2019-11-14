import { createApp } from './create-app';
export default async (context: any) => {
  const { app, store, router } = createApp()
  store.commit('SET_URL', context.url)
  await store.dispatch('prefetch')
  context.state = store.state
  console.log(context.url)
  router.push(context.url)
  return Promise.reject({
    error:404
  })
  return new Promise((resolve, reject) => {
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}