import { container } from "@assets/jss/index.js";

const componentsStyle = {
  '@global': {
    body: {
        margin: "0px"
    }
  },
  container:{
    textAlign: "left",
    zIndex: "12",
    ...container
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
    zIndex: "12"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 0px 0px",
    padding: "10px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  '@media (min-width: 1024px)': {
    mainRaised: {
      margin: "-60px 30px 0px"
    }
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
