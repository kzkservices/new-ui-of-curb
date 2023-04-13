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
    width: "105%",
    height: "100vh",
    backgroundColor: colors?.primary,
  },
  logo: {
    position:'absolute',
    top:20,
    left:40
  },
  layer: {
    width: "50%",
    opacity: 0.7,
    height: "100vh",
    position: "absolute",
    objectFit: "cover",
    mixBlendMode: "color-burn"
  },
  svg: {
    zIndex: 20,
    position: "absolute",
    top: "50%",
    left: "22%",
    transform: "translate(-50%, -50%)",
  },
  rightContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: colors?.white,
    zIndex: 100,
    boxShadow: "-12px -3px 42px rgba(0, 0, 0, 0.12)",
    borderTopLeftRadius:30,
    borderBottomLeftRadius:30,
  },
  rightInner: {
    width: "30%",
    height: 200,
    zIndex: 20,
    position: "absolute",
    top: "50%",
    left: "75%",
    transform: "translate(-50%, -50%)",
  },
  header: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  skip: {
    fontSize: 16,
    color: colors?.primary,
    cursor: "pointer",
    marginRight:-10
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors?.secondary,
    width: "90%",
    margin: "auto",
    marginLeft: 5,
    marginRight: 5,
  },
  description: {
    fontSize: 20,
    color: colors?.tertiary,
    textAlign: "center",
    marginTop: 30,
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
    marginTop: 50,
  },
  "@media (max-width: 900px)": {
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

const Introduction = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={5.5} md={5.5} lg={5.5} xl={5.5}>
        <div className={classes.leftContainer}>
          <img alt="" src={logo} className={classes.logo} />
          <img alt="" src={imageLayer} className={classes.layer} />
          <div className={classes.svg}>
          <img alt="" src={menLogo} style={{width:300, height:300, objectFit:'cover'}} />

          </div>
        </div>
      </Grid>
      <Grid item sm={6.5} md={6.5} lg={6.5} xl={6.5}>
        <div className={classes.rightContainer}>
          <div className={classes.rightInner}>
            <div className={classes.header}>
              <ArrowBackIcon
                sx={{ cursor: "pointer", color: colors?.primary, marginLeft:-3 }}
              />
              <div className={classes.skip}>Skip</div>
            </div>
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

export default Introduction;
