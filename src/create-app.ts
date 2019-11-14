import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import ElementUI from 'element-ui';

Vue.use(Router)
Vue.use(ElementUI);
Vue.use(Vuex)

export const createApp = () => {
  const store = createStore()
  const router = createRouter()
  const app = new Vue({
    store,
    router,
    render: h => h(App)
  })
  return {
    app,
    store,
    router
  }
}

export const createStore = () => {
  return new Vuex.Store({
    state: {
      url: '',
      list: []
    },
    actions: {
      async prefetch({ commit }) {
        const res = await Promise.resolve([
          {
            name: 'dasdas'
          },
          {
            name: '12312'
          },
          {
            name: 'qqqqqqqqq'
          }
        ])
        commit('SET_LIST', res)
      }
    },
    mutations: {
      SET_URL(state, url: string) {
        state.url = url
      },
      SET_LIST(state, list: any[]) {
        //@ts-ignore
        state.list = list
      }
    }
  })
}

export const createRouter = () => {
  return new Router({
    mode: 'history',
    routes: [
      // ...
      {
        path: '/',
        component: () => import('./views/form.vue')
      },
      {
        path: '*',
        component: () => import('./views/404.vue')
      }
    ]
  })
}