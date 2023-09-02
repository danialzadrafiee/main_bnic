import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            screens: {
                m2xl: { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                mxl: { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                mlg: { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                mmd: { max: "767px" },
                // => @media (max-width: 767px) { ... }

                msm: { max: "639px" },
                // => @media (max-width: 639px) { ... }
                mxs: { max: "415px" },
                // => @media (max-width: 391px) { ... }
            },
        },
    },

});
