const dark = {
  grid: {
    container: " 74rem",
  },
  border: {
    radius: "0.25rem",
    outlineOffiset: "0.125rem",
  },
  font: {
    family:
      "Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Poppins, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
    sizes: {
      xsmall: "0.75rem",
      small: "0.875rem",
      medium: "1rem",
      large: "1.125rem",
      xlarge: "1.25rem",
      xxlarge: "1.75rem",
    },
  },
  spacings: {
    xxsmall: "0.5rem",
    xsmall: "1rem",
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem",
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
    green: "#76D8A4",
  },
} as const;

export default dark;
