/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"**/*.{html, jsx, js}",
		"**/*.js",
		"**/*.html",
	],
	darkMode: 'class',
	theme: {
		extend: {
			 
			fontFamily: {
				'sans': ['Quicksand', 'sans-serif'],
				'quicksand': ['Quicksand', 'sans-serif'],
				'varela': ['Varela Round', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				'brand-blue': '#76B1FF',
				'brand-black': '#000000',
			},
			backgroundImage: {
				'purple-gradient': 'linear-gradient(45deg, #8B5CF6, #EC4899)',
			}
		},
	},
	plugins: [
		function({ addVariant }) {
			addVariant('firefox', ':-moz-any(&)')
		}
	],
}

