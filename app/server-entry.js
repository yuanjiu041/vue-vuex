import { createApp } from './app'

export default (ctx) => {
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp()
		router.push(ctx.url)

		router.onReady(async () => {
			const matchedCmps = router.getMatchedComponents()
			if (!matchedCmps.length) {
				reject({
					code: 404
				})
			}

			await Promise.all(matchedCmps.map(cmp => {
				if (cmp.asyncData) {
					return cmp.asyncData({
						store,
						route: router.currentRoute
					})
				}
			}))

			ctx.state = store.state

			resolve(app)
		}, reject)
	})
}