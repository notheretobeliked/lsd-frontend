/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['content', 'ol', 'ul'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			salmon: {
				DEFAULT: '#ff9e6e',
				light: '#ffdf9f'
			},
			'blue-parrot': '#7e7cf8'
		},
		fontFamily: {
			arsonist: ['Arsonist-Black'],
			serif: ['Signifier', 'serif']
		},

		extend: {
			boxShadow: {
				right: '-15px 0 15px -5px rgba(0, 0, 0, 0.3)'
			}
		}
	},
	plugins: []
}
