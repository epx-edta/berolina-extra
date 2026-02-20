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
			title: 'Berolina Extra FC - Dein Verein in Berlin',
			htmlAttrs: {
				lang: 'de'
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'description', content: 'Der coolste Jugendfußballverein in Berlin Mitte. Dynamisch, athletisch, unaufhaltsam.' },
				{ name: 'format-detection', content: 'telephone=no' },
				// Open Graph / Facebook
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://berolina-extra.de/' },
				{ property: 'og:title', content: 'Berolina Extra FC - Dein Verein in Berlin' },
				{ property: 'og:description', content: 'Dynamischer Jugendfußball aus Berlin Mitte. Werde Teil der Legende.' },
				{ property: 'og:image', content: '/images/og-image.png' },
				// Twitter
				{ property: 'twitter:card', content: 'summary_large_image' },
				{ property: 'twitter:url', content: 'https://berolina-extra.de/' },
				{ property: 'twitter:title', content: 'Berolina Extra FC - Dein Verein in Berlin' },
				{ property: 'twitter:description', content: 'Dynamischer Jugendfußball aus Berlin Mitte. Werde Teil der Legende.' },
				{ property: 'twitter:image', content: '/images/og-image.png' }
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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

