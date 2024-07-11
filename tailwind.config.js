/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontSize: {
                xs: ["12px", { lineHeight: "18px" }],
                sm: ["14px", { lineHeight: "22px" }],
                base: ["16px", { lineHeight: "24px" }],
                lg: ["20px", { lineHeight: "30px" }],
                xl: ["24px", { lineHeight: "36px" }],
                "2xl": ["32px", { lineHeight: "48px" }],
                "3xl": ["48px", { lineHeight: "64px" }],
            },
            fontWeight: {
                thin: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
            },
            colors: {
                primary: {
                    DEFAULT: "#8AFF05",
                    dark: "#001600",
                },
                gray: {
                    200: "#BEBEBE",
                    400: "#737373",
                    600: "#393939",
                    800: "#191919",
                },
                literal: {
                    error: "#FF4545",
                    angry: "#FF8373",
                    joy: "#FF953F",
                    happy: "#FFD250",
                    sorrow: "#6164fa",
                },
            },
            fontFamily: {
                body: ["Pretendard-Regular", "sans-serif"],
                title: ["HS-Regular", "sans-serif"],
            },
        },
    },

    plugins: [],
};
