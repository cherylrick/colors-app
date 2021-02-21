import sizes from "./sizes";

export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    opacity: 1,
    backgroundColor: "#000",
    "& a": {
      color: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100px",
      height: "30px",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      textDecoration: "none",
      textTransform: "uppercase",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      border: "none"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  }
};
