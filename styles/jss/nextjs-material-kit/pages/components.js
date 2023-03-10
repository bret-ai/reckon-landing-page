import { container } from "/styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    display: "flex",
    // flex: "1",
    flexWrap: "wrap",
    textAlign: "left"
  },
  hero_item: {
    flex: "50%",
  },
  title: {
    ...container,
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    ...container,
    fontSize: "1.613rem",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  sup: {
    fontSize: "0.6rem",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    // paddingTop: "5rem"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
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
