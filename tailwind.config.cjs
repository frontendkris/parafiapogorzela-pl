/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'red': '#FF0029',
        'luckypoint': '#293459',
        'bastille': '#2B2B35',
        'nero': '#1E1E1E',
      },
    },
	},
	plugins: [],
}
