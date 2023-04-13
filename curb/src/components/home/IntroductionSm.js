import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import imageLayer from "../../assets/images/home/layer.png";
import logo from "../../assets/images/global/logo_white.png";
import menLogo from "../../assets/images/home/men.svg"

const useStyles = makeStyles(() => ({
  leftContainer: {
    width: "100vw",
    height: "60vh",
    backgroundColor: colors?.primary,
  },
  logo: {
    position: "absolute",
    top: "5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  layer: {
    width: "100%",
    opacity: 0.7,
    height: "60vh",
    position: "absolute",
    objectFit: "cover",
    mixBlendMode: "color-burn",
  },
  svg: {
    zIndex: 20,
    position: "absolute",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  rightContainer: {
    width: "100vw",
    height: "42vh",
    backgroundColor: colors?.white,
    zIndex: 100,
    boxShadow: "-12px -3px 42px rgba(0, 0, 0, 0.12)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: "-2vh",
  },
  rightInner: {
    width: "100%",
    zIndex: 20,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    top:"4%",
  },
  skip: {
    fontSize: 16,
    color: colors?.white,
    cursor: "pointer",
    marginRight:'2%'
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors?.secondary,
    margin: 20,
  },
  description: {
    fontSize: 20,
    color: colors?.tertiary,
    textAlign: "center",
    margin: 20,
  },
  button: {
    width: "90%",
    height: 40,
    cursor: "pointer",
    backgroundColor: colors?.primary,
    color: colors?.white,
    fontSize: 16,
    border: "none",
    borderRadius: 10,
    marginTop: 20,
  },
  "@media (max-width: 400px)": {
    heading: {
      fontSize: 24,
    },
    description: {
      fontSize: 16,
      marginTop: 10,
    },
    button: {
      marginTop: 20,
    },
  },
}));

const IntroductionSm = () => {
  const classes = useStyles();
  return (
    <Grid container sx={{ overflowX: "hidden" }}>
      <Grid item sm={12} md={12} lg={12} xl={12}>
        <div className={classes.leftContainer}>
          <div className={classes.header}>
            <ArrowBackIcon sx={{ cursor: "pointer", color: colors?.white, ml:'2%' }} />
            <div className={classes.skip}>Skip</div>
          </div>
          <img alt="" src={logo} className={classes.logo} />
          <img alt="" src={imageLayer} className={classes.layer} />
          <div className={classes.svg}>
            <img alt="" src={menLogo} style={{width:250, height:250, objectFit:'cover'}} />
          </div>
        </div>
      </Grid>
      <Grid item sm={12} md={12} lg={12} xl={12}>
        <div className={classes.rightContainer}>
          <div className={classes.rightInner}>
            <div className={classes.heading}>
              Sorry to hear that you're experiencing a temptation to drink, we
              know it can be tough, but we're here to help.
            </div>
            <div className={classes.description}>
              Here are a few tools proven to help you beat the temptation to
              drink in just a few seconds.
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className={classes.button}>Help me</button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default IntroductionSm;
