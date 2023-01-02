import { makeStyles } from '@material-ui/core';
import React from 'react';
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";


import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/servicesStyle.js";

const useStyles = makeStyles(styles);

function ServicesSection() {
  const classes = useStyles();
  const tileData = [
    {img: 'https://web-cdn-prod.levinriegner.com/img/services/design.svg', title: 'Ux Design', desc: `Visualizing the most powerful representation of your brand through compelling creative.`},
    {img: 'https://web-cdn-prod.levinriegner.com/img/services/consulting.svg', title: 'Strategy Consulting', desc: `Collaborating with business leaders to define, create, and launch inspiring initiatives.`},
    {img: 'https://web-cdn-prod.levinriegner.com/img/services/branding.svg', title: 'Branding', desc: `Building trust by communicating an authentic character to capture hearts and minds.`},
    {img: 'https://web-cdn-prod.levinriegner.com/img/services/mobile.svg', title: 'Mobile Development', desc: `Redefining modern mobile applications with industry-leading design and engineering.`},
    {img: 'https://web-cdn-prod.levinriegner.com/img/services/research.svg', title: 'Research & Testing', desc: `Exploring the user journey, identifying usage issues, and creating the optimal user experience.`},
    {img: 'https://web-cdn-prod.levinriegner.com/img/services/innovation.svg', title: 'Blockchain & Web3', desc: `Let's push things forward.`}
  ]
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <header className={classes.section_header}>
          <div className={classes.headline}>
            <span className={classes.headline_title}>Services</span>
          </div>
        </header>
        <GridContainer>
          {tileData.map(data => (
            <GridItem className={classes.mainRaised} spacing={2} xs={12} sm={6} md={4} lg={4}>
              <div className={classes.grid_item}>
                <a href="#" className={classes.grid_title}>
                  <span className={classes.grid_tile_icon}>
                    <img src={data.img} alt="tile-icon" className={classes.tile_img} />
                  </span>
                  <span className={classes.grid_tile_title}>{data.title}</span>
                  <span className={classes.grid_tile_desc}>{data.desc}</span>
                </a>
              </div>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  )
}

export default ServicesSection
