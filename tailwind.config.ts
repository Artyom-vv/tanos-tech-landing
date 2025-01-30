import type {Config} from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./screens/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            screens: {
                "xl": "1440px",
                "lg": "1024px",
                "md": "728px",
                "sm": "360px",
            },
            container: {
                screens: {
                    "xl": "1440px",
                    "lg": "1024px",
                    "md": "728px",
                    "sm": "360px",
                },
                center: true,
                padding: {
                    "xl": "56px",
                    "lg": "72px",
                    "md": "48px",
                    "sm": "16px",
                }
            }
        },
    },
    plugins: [require("tailwind-scrollbar")],
} satisfies Config;
