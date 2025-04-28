export default {
	bundler: "vite",
	client: {
		// Any vite config can be put in client object in order to configure the bundling.
		// It will be merged with the default config bundled with imba
		plugins: [], // same for plugins
	},
	// server: {
	// 	proxy: {
	// 		'/api': {
	// 			target:'http://localhost:8080',
	// 			changeOrigin: true,
	// 			rewrite: (path) => path.replace(/^\/api/, ''),
	// 		}
	// 	}
	// }
}