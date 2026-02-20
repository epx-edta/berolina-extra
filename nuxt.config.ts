import env from "./app/lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },

	modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
	colorMode: {
		classSuffix: ''
	},
	devServer: {
		port: 3332
	},
	app: {
		head: {
			title: 'Berolina Extra',
			meta: [
				{ name: 'description', content: 'Berolina Extra Website' }
			]
		}
	},
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			'@tailwindcss/postcss': {},
			autoprefixer: {}
		}
	},
	runtimeConfig: {
		public: {
			nodeEnv: env.NODE_ENV,
			cacheDriver: env.CACHE_DRIVER,
			logLevel: env.LOG_LEVEL
		}
	}
})

