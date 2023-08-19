/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
			 '88': '22rem'
			}
		},
		height: {
			'100': '30rem',
		   },
		rotate: {
			 '-90': '-90deg',
			 '0': '0',
			 '45': '45deg',
			 '90': '90deg',
			'30': '30deg',
			 '180': '180deg',
			'270': '270deg',
		   }
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
