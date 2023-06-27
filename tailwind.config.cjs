/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['content', 'ol', 'ul', 'has-lg-font-size', 'wp-block-columns', 'wp-block-separator'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#ffffff',
			stockholm:'#FAF6ED',
			salmon: {
				DEFAULT: '#ff9e6e',
				light: '#ffdf9f'
			},
			'blue-parrot': {
				DEFAULT: '#7e7cf8',
				light: '#B5B4FA'
			},
			black: '#000000'
		},
		fontSize: {
			xs: '0.75rem',
			sm: ['0.9rem', 1.1],
			base: ['1.375rem', 1.45],
			xl: ['1.5rem', 1.1],
			'2xl': ['2.2rem', 1.1],
			'3xl': ['2.5', 1.1],
			'4xl': ['3.125', 1],
			'5xl': ['4.625rem', 1.1],
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
