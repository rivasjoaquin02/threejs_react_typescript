/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1F1F1F",
                elispse: "#433E50",
                secondary: {
                    100: "#727272",
                    200: "#008C8C8C",
                },
            },
            fontFamily: {
                body: ["Raleway"],
            },
        },
    },
    plugins: [],
};
