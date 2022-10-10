const dark = {
  grid: {
    container: "142rem",
  },
  border: {
    radius: "0.4rem",
    outlineOffiset: "0.2rem",
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Quicksand, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
    },
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.15s ease-in-out",
  },
  colors: {
    background: "#202024",
    banner: "#121214",
    panel: "#29292E",
    text: "#E1E1E6",
    lightGray: "#C4C4CC",
    red: "#AA2834",
    green: "#015F43",
  },
} as const;

export default dark;
