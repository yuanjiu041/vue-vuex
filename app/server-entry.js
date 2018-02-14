import { createApp } from './app'

export default (ctx) => {
	return new Promise((resolve, reject) => {
		const { app, router } = createApp()
		router.push(ctx.url)
		router.onReady(() => {
			const matchedCmps = router.getMatchedComponents()
			if (!matchedCmps.length) {
				reject({
					code: 404
				})
			}
			resolve(app)
		}, reject)
	})
}