/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['"Roboto", sans-serif'],
			},
			container: {
				center: true,
				padding: "1rem",
			},

			screens: {
				sm: "576px",
				// => @media (min-width: 640px) { ... }
			},
		},
	},
	plugins: [],
};
