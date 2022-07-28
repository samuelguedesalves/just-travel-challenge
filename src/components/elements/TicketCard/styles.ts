import { styled } from "../../../styles/stitches.config";

export const TicketCardContainer = styled("div", {
  width: "$full",
  maxWidth: 929,
  background: "$white",

  display: "grid",
  gridTemplateColumns: "213px 1fr",

  "& .left-content": {
    width: 213,
    height: 233,

    position: "relative",
  },
  
  "& .left-content .label": {
    width: "fit-content",
    height: 24,

    background: "$white",
    
    position: "absolute",
    top: 14,
    left: 14,
    
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
    borderRadius: 15,
    paddingInline: 14,
    
    fontFamily: "$circularStd",
    fontSize: "$paragraph4",
    fontWeight: "$medium",
    color: "$black",
  },
  
  "& .left-content .like-button": {
    width: "fit-content",
    height: "fit-content",

    background: "none",
    border: "none",
    
    position: "absolute",
    top: 14,
    right: 14,
  
    color: "$white",
  },

  "& .left-content img": {
    width: 213,
    height: 233,

    objectFit: "cover",
    objectPosition: "center",
  },

  "& .right-content": {
    paddingInline: 24,
    marginBlock: "auto",

    display: "grid",
    gridTemplateColumns: "1fr 178px",
  },
  
  "& .right-content p.title": {
    fontFamily: "$circularStd",
    fontSize: "$header3",
    fontWeight: "$bold",
    color: "$black",

    marginBottom: 8,
  },

  "& .right-content .local": {
    display: "flex",
    alignItems: "center",
    columnGap: 4,

    marginBottom: 44,
  },

  "& .right-content .local svg": {
    color: "$blue",
  },

  "& .right-content .local span": {
    fontFamily: "$circularStd",
    fontSize: "$paragraph2",
    lineHeight: "$paragraph2",
  },
  
  "& .right-content .score": {
    // display: "inline-block"
    // fontFamily: "$circularStd",
    // fontSize: "$paragraph2",
    // lineHeight: "$paragraph2",
  },
  
  "& .right-content .score .score-note": {
    display: "inline-flex",
    width: 40,
    height: 38,
    background: "$blue",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    color: "$white",
    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    lineHeight: "$paragraph3",
  },
  
  "& .right-content .score .score-label": {
    display: "inline-flex",

    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    lineHeight: "$paragraph3",

    color: "$black",

    marginLeft: 8,
  },
  
  "& .right-content .score .review-amount": {
    display: "inline-flex",

    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    lineHeight: "$paragraph3",

    color: "$gray40",

    marginLeft: 11,
  },
  
  "& .right-content .price": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    borderLeft: "$gray10 solid 2px",
    paddingLeft: 24,
  },

  "& .right-content .price .total-price": {
    display: "block",

    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    lineHeight: "$paragraph3",

    color: "$gray50",
  },
  
  "& .right-content .price .selling-price": {
    display: "block",

    fontFamily: "$circularStd",
    fontSize: "$header2",
    lineHeight: "$header2",
    fontWeight: "$bold",

    color: "$blue",

    marginBottom: 24,
  },

  "& .right-content .price .selling-price .symbol": {
    display: "inline-block",

    fontFamily: "$circularStd",
    fontSize: "$paragraph3",
    lineHeight: "$paragraph3",
    fontWeight: "$normal",

    verticalAlign: "top",

    color: "$black",

    marginRight: 3,
  },
});