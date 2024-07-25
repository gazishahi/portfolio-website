/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			keyframes: {
				typewriter: {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				}
			},
			animation: {
				typewriter: 'typewriter 4s steps(40) 1s forwards'
			}
		},

		fontFamily: {
			finalFantasy: ['FinalFantasy', 'sans-serif'],
			minecraftia: ['Minecraftia', 'sans-serif'],
			pixeloid: ['Pixeloid', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
