import {
  container, grayColor, primaryColor, title
} from "/styles/jss/nextjs-material-kit.js";
import headerLinksStyle from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
  
  const servicesStyle = (theme) => ({
    section: {
      padding: "70px 0",
      paddingTop: "0"
    },
    container,
    section_header: {
      display: "flex",
      justifyContent: 'space-between',
      marginBottom: "2.3rem",
      paddingTop: "2.3rem",
    },
    headline: {
      display: "block"
    },
    headline_title: {
      "&:before": {
      display: "inline-block",
      verticalAlign: "baseline",
      fontSize: "1.3rem",
      lineHeight: "1.6rem",
      fontWeight: '500'
      },
      "&:after": {
        content: '""',
        backgroundColor: "#3c4858",
        display: "inline-block",
        verticalAlign: "baseline",
        height: "0.07rem",
        width: "1.6rem",
        margin: "0 0.2rem 0 0.7rem"
      }
    },
    grid_item: {
      display: "block",
      boxSizing: "border-box",
      padding: "0.5rem",
      marginTop: "-2.6rem",
    },
    grid_title: {
      display: "block",
      backgroundColor: "#fff",
      height: "100%",
      boxSizing: "border-box",
      color: "#000",
      transitionProperty: "box-shadow,transform",
      // transition-property: box-shadow,transform,-webkit-box-shadow,-webkit-transform;
      transitionDuration: ".15s",
      borderRadius: "0.1rem",
      padding: "2rem 2.1rem 2.6rem",
      textDecoration: "none",
      cursor: "pointer"
    },
    grid_tile_icon: {
      display: "block",
      color: "rgba(0, 0, 0, 0.2)",
      width: "9.4rem",
      height: "9.4rem",
      lineHeight: "9.4rem",
      fontSize: "0",
      marginBottom: "1rem"
    },
    tile_img: {
      objectFit: "contain",
    },
    grid_tile_title: {
      display: "block",
      fontSize: "1.2rem",
      marginBottom: "0.8rem",
      fontWeight: "600",
      lineHeight: "3.2rem",
      background: "none",
      color: "#000",
    },
    grid_tile_desc: {
      position: "relative",
      overflow: "hidden",
      fontWeight: "400",
      fontSize: "1rem",
      lineHeight: "1.6rem"
    }
  });
  
  export default servicesStyle;
  