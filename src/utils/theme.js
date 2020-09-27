export const theme = {
  useBodyStyles: true,
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 40, 64, 128, 256, 512],
  initialColorModeName: "light",
  colors: {
    text: ["#4D5362", "#4D5362"],
    accent: ["#eebb4d", "white"],
    background: ["#ddd", "#f8f9fc"],
    primary: "#639",
    secondary: "#462121",
    modes: {
      dark: {
        text: ["#f8f9fc", "#c8c8c8"],
        secondary: "#ddd",
        background: ["#393e46", "#222831"],
        primary: "#eeeeee",
      },
      rimi: {
        text: "#f6c667",
        background: ["#C53030", "#22543D"],
        primary: "#ffaf00",
        secondary: "Yellow",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
    testing: "sans-serif, sans-serif",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],

  text: {
    heading: {},
    menu: {
      mt: 4,
      pb: 4,
      position: "relative",
      display: "flex",
      justifyContent: "center",
    },

    contacts: {
      color: "text",
      opacity: ".5",
      pb: 0,
    },

    posts: {
      color: "text",
      margin: "0 auto",
      width: "default",
      a: {
        color: "secondary",
      },
      h3: {
        color: "secondary",
      },
      h2: {
        color: "secondary",
      },
      span: {
        fontSize: 1,
      },
    },

    post: {
      m: 0,
      p: 0,
      borderRadius: 15,
      minHeight: "250px",
      // display: "Flex",
      // flexDirection: "column",
      // justifyContent: "flex-end",
      border: "1px solid rgba(0,0,0,.15)",

      div: {
        minHeight: "100%",
        minWidth: "100%",
      },

      h3: {
        background: "white",
        padding: 0,
        margin: 0,
        width: "100%",
      },
      span: {
        padding: 0,
        margin: 0,
      },
      a: {
        padding: 0,
        margin: 0,
      },
      img: {
        border: "1px solid blue",
        width: "100%",
        height: "200px",
      },
    },
  },

  layout: {
    container: {
      color: "text",
      padding: 5,
      height: "100%",
      display: "flex",
      // justifyContent: "center",
    },
  },

  styles: {
    p: {
      color: "text",
    },
    h2: {
      // fontSize: 32,
      // fontWeight: "heading",
      color: "text",
    },
    h3: {
      color: "secondary",
    },
    img: {
      border: `2px solid`,
      borderColor: "accent.1",
      borderRadius: "50%",
      p: 1,
      width: 150,
    },
    ul: {},
  },
}

export default theme
