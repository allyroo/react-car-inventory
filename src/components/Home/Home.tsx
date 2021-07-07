import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import car_image from "../../assets/images/pexels-tito-noverian-putra-1657066.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: "0",
    margin: "0",
  },
  navbar_container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: "0 0 0 0.45em",
  },
  logo_a: {
    color: "rgb(28,24,22)",
  },
  logo_navigation: {
    listStyle: "none",
    textTransform: "uppercase",
    textDecoration: "none",
  },
  navigation: {
    display: "flex",
  },
  nav_a: {
    display: "block",
    padding: "1em",
    color: "black",
  },
  main: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${car_image});`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
  },
  main_text: {
    textAlign: "center",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  p_text: {
    padding: "10px",
  },
});

interface Props {
  title: string;
}

export const Home = (props: Props) => {
  // New classes variable code
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*New and Updated HTML Code */}
      <nav>
        <div className={classes.navbar_container}>
          <h1 className={`${classes.logo} `}>
            <a
              href="#"
              className={`${classes.logo_a} ${classes.logo_navigation}`}
            >
              REAL FAKE CARS
            </a>
          </h1>
          <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
            <li>
              <Link to="/" href="" className={classes.nav_a}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className={classes.nav_a}>
                About
              </Link>
            </li>
            <li>
              <Link to="/signin" className={classes.nav_a}>
                Learn More
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>
        <div className={classes.main_text}>
          <h1>{props.title}</h1>
          <p className={classes.p_text}>
            Cars So Fake, Mother Truckers Wanna Buy Me
          </p>
          <Button color="primary" variant="contained">
            Click Me
          </Button>
        </div>
      </main>
    </div>
  );
};
