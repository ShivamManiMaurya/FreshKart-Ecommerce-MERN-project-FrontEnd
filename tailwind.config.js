/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                slideFrom: {
                    "0%": {
                        transform: "translateY(-100px)",
                    },
                    "100%": {
                        transform: "translateY(0px)",
                    },
                },
                scaleUp: {
                    "0%": {
                        transform: "scaleY(0.4)",
                        transformOrigin: "100% 0%",
                    },
                    "100%": {
                        transform: "scaleY(1)",
                        transformOrigin: "100% 0%",
                    },
                },
                scaleDown: {
                    "0%": {
                        transform: "scaleY(1)",
                        transformOrigin: "100% 0%",
                        opacity: "1",
                    },
                    "100%": {
                        transform: "scaleY(0.4)",
                        transformOrigin: "100% 0%",
                        opacity: "1",
                    },
                },

                open: {
                    "0%": {
                        transform: "scaleY(1)",
                        transformOrigin: "100% 0%",
                    },
                    "100%": {
                        transform: "scaleY(0.4)",
                        // transformOrigin: "100% 0%",
                        display: "hidden",
                    },
                },
            },

            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
                slideFrom: "slideFrom 1s ease-in-out",
                scaleUp: "scaleUp 0.1s ease-out",
                scaleDown: "scaleDown 0.1s ease-in",
                menuOpen: "open 0.1s ease-out",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
