import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Button from "/components/CustomButtons/Button.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Hero from "/components/Parallax/Hero.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionExamples.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import ServicesSection from "/pages-sections/Components-Sections/ServicesSection.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="ReckonKE"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Hero>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <div className={classes.hero_item}>
                  <h1 className={classes.title}>Design & technology.</h1>
                </div>
                <div className={classes.hero_item}>
                  <h3 className={classes.subtitle}>
                    Reckon<sup className={classes.sup}>KE</sup> is a Design and Mobile Technology Studio and Brand Strategy Consulting Firm. Maximizing utility with the balance of Strategy + Aesthetics.
                  </h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Hero>

      <div className={classNames(classes.main)}>
        <ServicesSection />
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin /> */}
        {/* <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}
