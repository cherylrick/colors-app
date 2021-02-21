import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    width: "20%",
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: 1,
      transition: "0.5s"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: props => (props.showingFullPalette ? "20%" : "33.3333%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.showingFullPalette ? "10%" : "20%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => (props.showingFullPalette ? "5%" : "10%")
    }
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#333" : "#fff"
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? "#fff" : "#333"
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#333" : "#fff",
    position: "absolute",
    padding: "10px",
    right: 0,
    bottom: 0,
    border: "none",
    background: "rgba(255, 255, 255, 0.3)",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "#333" : "#fff",
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
    border: "none",
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    padding: "10px",
    width: "100%",
    left: 0,
    bottom: 0,
    color: "#000",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)"
  },
  showOverlay: {
    opacity: 1,
    transform: "scale(50)",
    zIndex: 10,
    position: "absolute"
  },
  copyMessage: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    color: "#fff",
    transform: "scale(0.1)",
    opacity: 0,
    "& h1": {
      fontWeight: 400,
      textShadow: "1px 2px #000",
      background: "rgba(255, 255, 255, 0.3)",
      width: "100%",
      textAlign: "center",
      marginBottom: 0,
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "6rem"
      }
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: 100
    }
  },
  showMessage: {
    opacity: 1,
    transform: "scale(1)",
    zIndex: 11,
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
};
