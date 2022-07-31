import { styled } from "../../../styles/stitches.config";

export const FooterContainer = styled("footer", {
  "& section.footer-details": {
    width: "$full",
    background: "$blue",
    paddingTop: 65,
    paddingBottom: 37,
  },

  "& section.footer-details .content": {
    width: "$full",
    maxWidth: "$container-width",
    paddingInline: "$container-inline-padding",
    marginInline: "auto",

    display: "flex",
    justifyContent: "space-between",
  },

  "& section.footer-details .content .left-content .short-description-about": {
    color: "$white",
    maxWidth: 384,
    fontSize: "$paragraph3",
    lineHeight: "$paragraph3",
    marginTop: 18,
  },
  
  "& section.footer-details .content .left-content .social-networks-links": {
    marginTop: 26,

    "& a": {
      marginLeft: 11,
      
      "&:first-child": {
        marginLeft: 0,
      }
    }
  },

  "& .right-content .footer-navbar": {
    display: "flex",
    columnGap: 36,
  },
  
  "& .right-content .footer-navbar .navigation-column-title": {
    display: "block",
    fontFamily: "$circularStd",
    fontSize: "$paragraph2",
    fontWeight: "$bold",
    color: "$white",
    marginBottom: 8,
  },
  
  "& .right-content .footer-navbar .navigation-column-link": {
    display: "block",
    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    fontWeight: "$normal",
    color: "$white",
    marginBottom: 8,
  },

  "& section.footer-copyright": {
    width: "$full",
    background: "$green",
    paddingBlock: 32,
  },
  
  "& section.footer-copyright .content": {
    width: "$full",
    maxWidth: "$container-width",
    paddingInline: "$container-inline-padding",
    marginInline: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  "& section.footer-copyright .content .copyright-details": {
    display: "block",
    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    fontWeight: "$normal",
    color: "$white",
  },
  
  "& section.footer-copyright .content .madein-details": {
    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    fontWeight: "$normal",
    color: "$white",
    display: "flex",
    alignItems: "center",
    columnGap: 16,
  },
});