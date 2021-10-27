import { title, container, textAlignCenter } from '../../assets/jss/material-kit-react'

const imagesStyle = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRounded: {
    borderRadius: "6px !important"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem"
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)"
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  }
};

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "100px",
      width: "100%",
      margin: "0 auto 20px",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "auto",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "15px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 0px auto",
    textAlign: "center"
  },
  pContent: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    textAlign: "justify !important"
  },
  gridItemContent: {
    ...textAlignCenter,
    padding: "50px 0px 60px"
  },
  skillsList: {
    display: "flex",
    flexDirection: "column",
    justifycontent: "space-around",
    textAlign: "left",
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    "@media (min-width: 530px)": {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  skillsTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: `"Prime", "Roboto Slab", "Times New Roman", serif`,
    "@media (max-width: 530px)": {
      textAlign: "left",
    }
  },
  skillsUl: {
    listStyleType: "none",
    paddingLeft: "0px",
  },
  skillsFooter: {
    textAlign: "left",
    margin: "1.071rem auto 0",
    maxWidth: "600px",
  }
};

export default profilePageStyle;
