import { createApp } from './app'

const { app, store, router } = createApp()

// 服务端绑定的初始化数据，用来更新STORE
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    let diffed = false

    // 找出之前没有渲染的组件
    const activated = matched.filter((cmp, idx) => {
      return diffed || (diffed = (prevMatched[idx] !== cmp))
    })

    if (!activated.length) {
      return next()
    }

    // 获取asyncData
    Promise.all(activated.map(cmp => {
      if (cmp.asyncData) {
        return cmp.asyncData({store, route: to})
      }
    })).then(() => {
      next()
    }).catch(next)
  })
})

app.$mount('#app')
