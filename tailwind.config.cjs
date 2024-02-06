/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'88': '22rem'
			},
			width: {
				'13vw': '13vw'
			},
		},
		height: {
			'100': '30rem',
			'13vh': '13vh',
			'30vh': '30vh'
		   },
		rotate: {
			 '-90': '-90deg',
			 '0': '0',
			 '45': '45deg',
			 '90': '90deg',
			'30': '30deg',
			 '180': '180deg',
			'270': '270deg',
		   },
		fontFamily: {
			'mono': ['Space Mono'],
			'definition': ['Playfair Display']
		  },
		colors: {
			'background': '#2A303C',
			'use-cases': '#2F3541',
			'use-cases-hover': '#44474F',
			'text': '#F1FAEE',
			'light': '#76869D',
			'link': '#E63946'
			}
	},
	plugins: [require("@tailwindcss/typography")],
}
