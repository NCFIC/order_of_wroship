/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

var defaultConfig = require("tailwindcss/defaultConfig")();

/*
|-------------------------------------------------------------------------------
| Colors                                    https://tailwindcss.com/docs/colors
|-------------------------------------------------------------------------------
|
| Here you can specify the colors used in your project. To get you started,
| we've provided a generous palette of great looking colors that are perfect
| for prototyping, but don't hesitate to change them for your project. You
| own these colors, nothing will break if you change everything about them.
|
| We've used literal color names ("red", "blue", etc.) for the default
| palette, but if you'd rather use functional names like "primary" and
| "secondary", or even a numeric scale like "100" and "200", go for it.
|
*/

var colors = {
  transparent: "transparent",

  black: "#222b2f",
  "grey-darkest": "#364349",
  "grey-darker": "#596a73",
  "grey-dark": "#70818a",
  grey: "#9babb4",
  "grey-light": "#dae4e9",
  "grey-lighter": "#f3f7f9",
  "grey-lightest": "#fafcfc",
  white: "#ffffff",

  "grey-50": "#f0f0f0",
  "grey-100": "#d9d9d9",
  "grey-200": "#c0c0c0",
  "grey-300": "#a6a6a6",
  "grey-400": "#939393",
  "grey-500": "#808080",
  "grey-600": "#787878",
  "grey-700": "#6d6d6d",
  "grey-800": "#636363",
  "grey-900": "#292a2b",

  "red-darkest": "#420806",
  "red-darker": "#6a1b19",
  "red-dark": "#cc1f1a",
  red: "#e3342f",
  "red-light": "#ef5753",
  "red-lighter": "#f9acaa",
  "red-lightest": "#fcebea",

  "orange-darkest": "#542605",
  "orange-darker": "#7f4012",
  "orange-dark": "#de751f",
  orange: "#f6993f",
  "orange-light": "#faad63",
  "orange-lighter": "#fcd9b6",
  "orange-lightest": "#fff5eb",

  "yellow-darkest": "#453411",
  "yellow-darker": "#684f1d",
  "yellow-dark": "#f2d024",
  yellow: "#ffed4a",
  "yellow-light": "#fff382",
  "yellow-lighter": "#fff9c2",
  "yellow-lightest": "#fcfbeb",

  "green-darkest": "#032d19",
  "green-darker": "#0b4228",
  "green-dark": "#1f9d55",
  green: "#38c172",
  "green-light": "#51d88a",
  "green-lighter": "#a2f5bf",
  "green-lightest": "#e3fcec",

  "teal-darkest": "#0d3331",
  "teal-darker": "#174e4b",
  "teal-dark": "#38a89d",
  teal: "#4dc0b5",
  "teal-light": "#64d5ca",
  "teal-lighter": "#a0f0ed",
  "teal-lightest": "#e8fffe",

  "blue-darkest": "#05233b",
  "blue-darker": "#103d60",
  "blue-dark": "#2779bd",
  blue: "#3490dc",
  "blue-light": "#6cb2eb",
  "blue-lighter": "#bcdefa",
  "blue-lightest": "#eff8ff",

  "indigo-darkest": "#191e38",
  "indigo-darker": "#2f365f",
  "indigo-dark": "#5661b3",
  indigo: "#6574cd",
  "indigo-light": "#7886d7",
  "indigo-lighter": "#b2b7ff",
  "indigo-lightest": "#e6e8ff",

  "purple-darkest": "#1f133f",
  "purple-darker": "#352465",
  "purple-dark": "#794acf",
  purple: "#9561e2",
  "purple-light": "#a779e9",
  "purple-lighter": "#d6bbfc",
  "purple-lightest": "#f3ebff",

  "pink-darkest": "#45051e",
  "pink-darker": "#72173a",
  "pink-dark": "#eb5286",
  pink: "#f66d9b",
  "pink-light": "#fa7ea8",
  "pink-lighter": "#ffbbca",
  "pink-lightest": "#ffebef",

  "ncfic-green-darkest": "#59674e",
  "ncfic-green-darker": "#748962",
  "ncfic-green-dark": "#839e6b",
  "ncfic-green": "#a9b296",
  "ncfic-green-light": "#e1e3d4",
  "ncfic-green-lighter": "#ecece4",
  "ncfic-green-lightest": "#f6f7f061",

  "ncfic-blue-darkest": "#173b58",
  "ncfic-blue-darker": "#1c5280",
  "ncfic-blue-dark": "#548aae",
  "ncfic-blue": "#1c5280",
  "ncfic-blue-light": "#b7c9d5",
  "ncfic-blue-lighter": "#b7c9d56e",
  "ncfic-blue-lightest": "#d8e0e633",

  "ncfic-blue-50": "#edf0f4",
  "ncfic-blue-100": "#d1dae3",
  "ncfic-blue-200": "#b2c2d1",
  "ncfic-blue-300": "#93aabf",
  "ncfic-blue-400": "#7c97b1",
  "ncfic-blue": "#6585a3",
  "ncfic-blue-500": "#6585a3",
  "ncfic-blue-600": "#5d7d9b",
  "ncfic-blue-700": "#537291",
  "ncfic-blue-800": "#496888",
  "ncfic-blue-900": "#375577",

  'ncfic-green-50': 'eef3ec',
  'ncfic-green-100': 'd5e1d0',
  'ncfic-green-200': 'bacdb1',
  'ncfic-green-300': '9eb992',
  'ncfic-green-400': '89aa7a',
  'ncfic-green-500': '749b63',
  'ncfic-green': '749b63',
  'ncfic-green-600': '6c935b',
  'ncfic-green-700': '618951',
  'ncfic-green-800': '577f47',
  'ncfic-green-900': '446d35',
};

module.exports = {
  /*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | The color palette defined above is also assigned to the "colors" key of
  | your Tailwind config. This makes it easy to access them in your CSS
  | using Tailwind's config helper. For example:
  |
  | .error { color: config('colors.red') }
  |
  */

  colors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Screens in Tailwind are translated to CSS media queries. They define the
  | responsive breakpoints for your project. By default Tailwind takes a
  | "mobile first" approach, where each screen size represents a minimum
  | viewport width. Feel free to have as few or as many screens as you
  | want, naming them in whatever way you'd prefer for your project.
  |
  | Tailwind also allows for more complex screen definitions, which can be
  | useful in certain situations. Be sure to see the full responsive
  | documentation for a complete list of options.
  |
  | Class name: .{screen}:{utility}
  |
  */

  screens: {
    xs: "400px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    '2xl': "1500px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your project's font stack, or font families.
  | Keep in mind that Tailwind doesn't actually load any fonts for you.
  | If you're using custom fonts you'll need to import them prior to
  | defining them here.
  |
  | By default we provide a native font stack that works remarkably well on
  | any device or OS you're using, since it just uses the default fonts
  | provided by the platform.
  |
  | Class name: .font-{name}
  |
  */

  fonts: {
    sans: ["Montserrat"],
    serif: ["Noto Serif"],
    mono: [
      "Menlo",
      "Monaco",
      "Consolas",
      "Liberation Mono",
      "Courier New",
      "monospace"
    ]
  },

  /*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text sizes. Name these in whatever way
  | makes the most sense to you. We use size names by default, but
  | you're welcome to use a numeric scale or even something else
  | entirely.
  |
  | By default Tailwind uses the "rem" unit type for most measurements.
  | This allows you to set a root font size which all other sizes are
  | then based on. That said, you are free to use whatever units you
  | prefer, be it rems, ems, pixels or other.
  |
  | Class name: .text-{size}
  |
  */

  textSizes: {
    "3xs": ".25rem", // 6px
    "2xs": ".5rem", // 8px
    xs: ".75rem", // 12px
    sm: ".875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "4rem",
    "7xl": "5rem",
    "8xl": "6rem",
    "9xl": "7rem"
  },

  /*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your font weights. We've provided a list of
  | common font weight names with their respective numeric scale values
  | to get you started. It's unlikely that your project will require
  | all of these, so we recommend removing those you don't need.
  |
  | Class name: .font-{weight}
  |
  */

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },

  /*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line height values, or as we call
  | them in Tailwind, leadings.
  |
  | Class name: .leading-{size}
  |
  */

  leading: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2
  },

  /*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your letter spacing values, or as we call
  | them in Tailwind, tracking.
  |
  | Class name: .tracking-{size}
  |
  */

  tracking: {
    tight: "-0.05em",
    normal: "0",
    wide: "0.05em",
    xl: "0.1em",
    "2xl": "0.2em",
    "3xl": "0.3em",
    "4xl": "0.4em",
    "5xl": "0.5em"
  },

  /*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your text colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Class name: .text-{color}
  |
  */

  textColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your background colors. By default these use
  | the color palette we defined above, however you're welcome to set
  | these independently if that makes sense for your project.
  |
  | Class name: .bg-{color}
  |
  */

  backgroundColors: colors,

  /*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border widths. Take note that border
  | widths require a special "default" value set as well. This is the
  | width that will be used when you do not specify a border width.
  |
  | Class name: .border{-side?}{-width?}
  |
  */

  borderWidths: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "5": "5px",
    "6": "6px",
    "8": "8px"
  },

  /*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border colors. By default these use the
  | color palette we defined above, however you're welcome to set these
  | independently if that makes sense for your project.
  |
  | Take note that border colors require a special "default" value set
  | as well. This is the color that will be used when you do not
  | specify a border color.
  |
  | Class name: .border-{color}
  |
  */

  borderColors: Object.assign({ default: colors["grey-light"] }, colors),

  /*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your border radius values. If a `default` radius
  | is provided, it will be made available as the non-suffixed `.rounded`
  | utility.
  |
  | Class name: .rounded{-radius?}
  |
  */

  borderRadius: {
    default: ".25rem",
    sm: ".125rem",
    med: ".25rem",
    lg: ".5rem",
    xl: "1rem",
    '2xl': "2rem",
    '3xl': "3rem",
    '4xl': "3rem",
    full: "9999px",
    100: "100%",
    none: "0"
  },

  /*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your width utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale, a percentage
  | based fraction scale, plus some other common use-cases. You
  | can, of course, modify these values as needed.
  |
  |
  | It's also worth mentioning that Tailwind automatically escapes
  | invalid CSS class name characters, which allows you to have
  | awesome classes like .w-2/3.
  |
  | Class name: .w-{size}
  |
  */

  width: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "170": "42rem",
    "1/2": "50%",
    "1/3": "33.33333%",
    "2/3": "66.66667%",
    "1/4": "25%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.66667%",
    "5/6": "83.33333%",
    "1/7": "14.2857142857%",
    "2/7": "28.5714285714%",
    "3/7": "42.8571428571%",
    "4/7": "57.1428571429%",
    "5/7": "71.4285714286%",
    "6/7": "85.7142857143%",
    full: "100%",
    screen: "100vw"
  },

  /*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your height utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based numeric scale plus some other
  | common use-cases. You can, of course, modify these values as
  | needed.
  |
  | Class name: .h-{size}
  |
  */

  height: {
    auto: "auto",
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "80": "20rem",
    "96": "24rem",
    "112": "28rem",
    "128": "32rem",
    "160": "40rem",
    "192": "48rem",
    "256": "64rem",
    "512": "128rem",

    full: "100%",
    screen: "100vh",
    "75": "75vh",
    "50": "50vh",
    "25": "25vh"
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .min-w-{size}
  |
  */

  minWidth: {
    "0": "0",
    "2xs": "10rem",
    xs: "20rem",
    sm: "30rem",
    md: "40rem",
    lg: "50rem",
    xl: "60rem",
    "2xl": "70rem",
    "3xl": "80rem",
    "4xl": "90rem",
    "5xl": "100rem",
    full: "100%",
    "1/4": "25%"
  },

  /*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your minimum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | few common use-cases by default. You can, of course, modify these
  | values as needed.
  |
  | Class name: .min-h-{size}
  |
  */

  minHeight: {
    "0": "0",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    full: "100%",
    screen: "100vh"
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum width utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default
  | we provide a sensible rem based scale and a "full width" size,
  | which is basically a reset utility. You can, of course,
  | modify these values as needed.
  |
  | Class name: .max-w-{size}
  |
  */

  maxWidth: {
    "2xs": "10rem",
    xs: "20rem",
    sm: "30rem",
    md: "40rem",
    lg: "50rem",
    xl: "60rem",
    "2xl": "70rem",
    "3xl": "80rem",
    "4xl": "90rem",
    "5xl": "100rem",
    full: "100%",
    "1/4": "25%"
  },

  /*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your maximum height utility sizes. These can
  | be percentage based, pixels, rems, or any other units. We provide a
  | couple common use-cases by default. You can, of course, modify
  | these values as needed.
  |
  | Class name: .max-h-{size}
  |
  */

  maxHeight: {
    px: "1px",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "24": "6rem",
    "32": "8rem",
    "48": "12rem",
    "64": "16rem",
    "96": "24rem",
    "128": "32rem",
    "160": "40rem",
    "192": "48rem",
    "256": "64rem",
    "512": "128rem",
    full: "100%",
    screen: "100vh",
    "75": "75vh",
    "50": "50vh",
    "25": "25vh"
  },

  /*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your padding utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .p{side?}-{size}
  |
  */

  padding: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem"
  },

  /*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your margin utility sizes. These can be
  | percentage based, pixels, rems, or any other units. By default we
  | provide a sensible rem based numeric scale plus a couple other
  | common use-cases like "1px". You can, of course, modify these
  | values as needed.
  |
  | Class name: .m{side?}-{size}
  |
  */

  margin: {
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem"
  },

  /*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your negative margin utility sizes. These can
  | be percentage based, pixels, rems, or any other units. By default we
  | provide matching values to the padding scale since these utilities
  | generally get used together. You can, of course, modify these
  | values as needed.
  |
  | Class name: .-m{side?}-{size}
  |
  */

  negativeMargin: {
    '2px': "2px",
    px: "1px",
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "14": "3.5rem",
    "16": "4rem",
    "24": "6rem",
    "28": "7rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "64": "16rem",
    "128": "32rem",
  },

  /*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your shadow utilities. As you can see from
  | the defaults we provide, it's possible to apply multiple shadows
  | per utility using comma separation.
  |
  | If a `default` shadow is provided, it will be made available as the non-
  | suffixed `.shadow` utility.
  |
  | Class name: .shadow-{size?}
  |
  */

  shadows: {
    default: "0 2px 4px 0 rgba(0,0,0,0.10)",
    md: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
    lg: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none"
  },

  /*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your z-index utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .z-{index}
  |
  */

  zIndex: {
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "40": 40,
    "50": 50,
    auto: "auto"
  },

  /*
  |-----------------------------------------------------------------------------
  | Line Clamp                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your line-clamp utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .lc-{index}
  |
  */

  lineClamp: {
    none: "none",
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "8": 8,
    "10": 10,
    "12": 12,
    "15": 15,
    "25": 25,
    "50": 50,
    "100": 100
  },

  /*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Here is where you define your opacity utility values. By default we
  | provide a sensible numeric scale. You can, of course, modify these
  | values as needed.
  |
  | Class name: .opacity-{name}
  |
  */

  opacity: {
    "0": "0",
    "25": ".25",
    "50": ".5",
    "75": ".75",
    "85": ".85",
    "100": "1"
  },

  /*
  |-----------------------------------------------------------------------------
  | Packages
  |-----------------------------------------------------------------------------
  |
  | Here is where you can define the configuration for any Tailwind packages
  | you're using. These can be utility packs, component bundles, or even
  | complete themes. You'll want to reference each package's
  | documentation for a list of settings available for it.
  |
  */

  packages: {}
};
