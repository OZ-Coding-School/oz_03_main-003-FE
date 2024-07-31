/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                width: {
                    "0%": { width: "0%" },
                    "100%": { width: "var(--target-width, 100%)" },
                },
                height: {
                    "0%": { height: "0%" },
                    "100%": { height: "var(--target-height, 100%)" },
                },
                blur: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                gravity: {
                    "0%": { transform: "translateY(5px)" },
                    "50%": { transform: "translateY(0px)" },
                    "100%": { transform: "translateY(5px)" },
                },
            },
            animation: {
                width: "width 0.3s ease-out forwards",
                height: "height 1s ease-out forwards",
                blur: "blur 0.5s ease-out forwards",
                gravity: "gravity 3s ease-in-out infinite",
            },

            screens: {
                "3xl": "1930px",
            },

            fontSize: {
                zero: ["0"],
                xs: ["12px", { lineHeight: "18px", letterSpacing: "-0.1px" }],
                sm: ["14px", { lineHeight: "22px", letterSpacing: "-0.5px" }],
                base: ["16px", { lineHeight: "24px", letterSpacing: "-0.5px" }],
                lg: ["20px", { lineHeight: "30px", letterSpacing: "-1.2px" }],
                xl: ["24px", { lineHeight: "36px", letterSpacing: "-1.7px" }],
                "2xl": ["32px", { lineHeight: "48px", letterSpacing: "-2.3px" }],
                "3xl": ["48px", { lineHeight: "64px", letterSpacing: "-3px" }],
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
                    light: "#b5ec66",
                },
                gray: {
                    200: "#BEBEBE",
                    400: "#737373",
                    600: "#393939",
                    800: "#191919",
                },
                literal: {
                    error: "#FF4545",
                    angry: "#FF3F3F",
                    joy: "#FF953F",
                    happy: "#FFD250",
                    sorrow: "#3F61FF",
                    worry: "#7A53FF",
                },
            },
            fontFamily: {
                body: ["Pretendard-Regular", "sans-serif"],
                title: ["HS-Regular", "sans-serif"],
            },
            width: {
                4.5: "18px",
            },
            height: {
                4.5: "18px",
            },
            padding: {
                2.4: "11px",
            },
            top: {
                "-33px": "-33px",
            },
            translate: {
                "-1/2": "-50%",
            },
        },
    },
    variants: {
        extend: {
            fill: ["hover", "group-hover"], // hover 및 group-hover 변형을 활성화
        },
    },

    plugins: [],
};
