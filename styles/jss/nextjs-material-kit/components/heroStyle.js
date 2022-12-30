const heroStyle = (theme) => ({
    parallax: {
      height: "90vh",
      maxHeight: "1000px",
      overflow: "hidden",
      position: "relative",
      backgroundImage: "linear-gradient(270deg,#0369fb 0,#72da0e 16.67%,#f7c233 33.34%,#ee7e33 50.01%,#e93f33 66.68%,#a552f2 83.35%,#0369fb)",
      backgroundSize: "2000% 400%",
      backgroundColor: "#fff",
      animation: `$bgAnimatedGradient 30s infinite linear`,
    //   backgroundPosition: "center top",
    //   backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",
    },
    filter: {
    //   "&:before": {
    //     background: "rgba(0, 0, 0, 0.5)",
    //   },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    small: {
      height: "380px",
    },
    parallaxResponsive: {
      [theme.breakpoints.down("md")]: {
        minHeight: "660px",
      },
    },
    // sectionGradient: {
    //     backgroundImage: "linear-gradient(270deg,#0369fb 0,#72da0e 16.67%,#f7c233 33.34%,#ee7e33 50.01%,#e93f33 66.68%,#a552f2 83.35%,#0369fb)",
    //     backgroundSize: "2000% 400%",
    //     backgroundColor: "#fff",
    //     animation: `bgAnimatedGradient 30s infinite linear`,
    // },
    "@keyframes bgAnimatedGradient": {
        "0%": {
            backgroundPosition: "100% 0"
        },
        "100%": {
            backgroundPosition: "-5% 0"
        }
    }
  });
  
  export default heroStyle;
  