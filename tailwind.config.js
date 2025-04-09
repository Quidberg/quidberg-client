/** @type {import('tailwindcss').Config} */

function pxToRem(value) {
  return `${value / 16}rem`;
}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg}"],
  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "Roboto",
        "Nunito Sans",
        "Inter",
        "sans-serif",
        "Arial",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        '"Helvetica Neue"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ],
    }, //Nunito Sans,sans-serif,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Helvetica Neue;

    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: "#1DA1F2",
        main_bg: "#1DA1F2",
        light_bg: "#FFFFFF",
        light_nav_bg: "#D9D9D9",
        nav_link: "#263238",
        main_font: "#0A0A0A",
        light_font: "#858181",
        main_button_color: "#FFFFFF",
        white_button_color: "#FFFFFF",
        light_border_color: "#E2E1E1",
        light_form_bg: "#1DA1F2",
        light_pry_bg: "#FFFFFF",
        button_color: "#1DA1F2",
        button_text_color: "#FFFFFF",
        blue_text: "#1DA1F2",
        subtitle_color: "#858181",
        light_gray_bg: "#CDC9C9",
        checked: "#1DA1F2",
        border_focus_color: "#1DA1F2",
        warning_red: "#ff0f0f",
        remove_red: "#F21D6A",
        gold: "#D4AF37",
        light_gold: "#FFFBEE",
        drop_down_bg: "#f9fafb",
        from_banner: "#010B19",
        to_banner: "#021C40",
        super_light_gray: "#F9F9F9",
        black: "#000000",

        // input styling
        light_input_bg: "#FFFFFF"
      },
      fontSize: {
        default: "16px",
        reg_size: "16px",
        main_header_size: "18px",
        sub_header_size: "14px",
        "5xl": pxToRem(46),
        "3xl": pxToRem(32),
        "2xl": pxToRem(26),
        xl: pxToRem(24),
        lg: pxToRem(20),
        18: pxToRem(18),
        16: pxToRem(16),
      },

      fontWeight: {
        default:"400",
        main_header_weight: "700",
        sub_header_weight: "400",
        button_weight: "600",
      },
      // fontFamily: {
      //   default: [
      //     "Inter",
      //     "Roboto",
      //     "-apple-system",
      //     "BlinkMacSystemFont",
      //     '"Segoe UI"',
      //     '"Helvetica Neue"',
      //     "Arial",
      //     "sans-serif",
      //     '"Apple Color Emoji"',
      //     '"Segoe UI Emoji"',
      //     '"Segoe UI Symbol"',
      //   ],
      //   roboto: "Roboto",
      // },
      borderWidth: {
        border_width: "1px",
      },
      borderColor: {
        border_color: "D9D9D9",
      },
      borderRadius: {
        border_radius: "8px",
      },

      zIndex: {
        drop_down_menu: "600",
        nav_bar: "400",
        side_bar:"300",
        floater: "200",
      },
    },
  },
  plugins: [],
};
