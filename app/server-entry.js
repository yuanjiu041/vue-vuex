import { createApp } from './app'

export default (ctx) => {
	return new Promise((resolve, reject) => {
		const { app, router, store } = createApp()
		router.push(ctx.url)
		router.onReady(() => {
			const matchedCmps = router.getMatchedComponents()
			if (!matchedCmps.length) {
				reject({
					code: 404
				})
			}

			Promise.all(matchedCmps.map((cmp) => {
				if (cmp.asyncData) {
					return cmp.asyncData({
						store
					})
				}
			})).then(() => {
				ctx.state = store.state
				resolve(app)
 			}).catch(reject)
		}, reject)
	})
}