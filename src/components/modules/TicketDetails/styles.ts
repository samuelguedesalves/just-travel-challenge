import { styled } from "../../../styles/stitches.config";

export const TicketDetailsSection = styled("section", {
  width: "$full",
  background: "$background",
  paddingBlock: 33,

  "& .content": {
    width: "full",
    maxWidth: "$container-width",
    marginInline: "auto",
    paddingInline: "$container-inline-padding",
  },
  
  "& .content header .header-top": {
    display: "flex",
    alignItems: "top",
    marginBottom: 34,
  },
  
  "& .content header .header-top button.header-back-button": {
    background: "none",
    border: "none",
    height: "fit-content",
    marginRight: 15,
  },
  
  "& .content header .header-top h1.title": {
    fontFamily: "$circularStd",
    fontWeight: "bold",
    fontSize: "$header2",
    color: "$black",
  },
  
  "& .content header .header-top .location": {
    display: "flex",
    alignItems: "center",

    "& svg": {
      color: "$blue",
    },
    
    "& p.local-name": {
      color: "$black",
      fontSize: "$paragraph3",
      fontWeight: "$normal",
      marginLeft: 4,
    },
  },
  
  "& .content header .image-cover": {
    width: "$full",
    height: "$full",
    maxHeight: 434,
    position: "relative"
  },
  
  "& .content header .image-cover .see-more-img-button": {
    position: "absolute",
    top: 2,
    right: 2,
    zIndex: 1,
    fontWeight: "$bold",
  },
  
  "& .content header .image-cover img": {
    width: "$full",
    height: "$full",
    objectFit: "cover",
    objectPosition: "center center",
  },

  "& .content main": {
    paddingTop: 38,

    display: "grid",
    gridTemplateAreas: `
      "summary details"
      "description details"
    `,
    gridTemplateColumns: "1fr 353px",
    columnGap: 38,
    gridTemplateRows: "min-content 1fr",
  },

  "& .content main .ticket-summary": {
    gridArea: "summary"
  },

  "& .content main .ticket-summary .score": {
    display: "flex",
    alignItems: "center",
  },
  
  "& .content main .ticket-summary .score .score-note": {
    width: 40,
    height: 38,
    background: "$blue",
    color: "$gray10",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    fontFamily: "$circularStd",
  },

  "& .content main .ticket-summary .score .score-label": {
    color: "$black",
    fontFamily: "$circularStd",
    fontSize: "$paragraph2",
    marginLeft: 6,
  },
  
  "& .content main .ticket-summary .score .view-amount": {
    color: "$gray70",
    fontFamily: "$circularStd",
    fontSize: "$paragraph2",
    marginLeft: 12,
  },
  
  "& .content main .ticket-summary .items": {
    marginTop: 24,
  },

  "& .content main .ticket-summary .items .item": {
    display: "inline-flex",
    alignItems: "center",
    columnGap: 8,
    marginRight: 14,
    
    "&:last-child": {
      marginRight: 0,
    },
    
    "& .item-icon": {
      display: "flex",
      alignItems: "center",
    },

    "& .item-icon svg *": {
      stroke: "$gray50",
    },
    
    "& .item-label": {
      display: "block",
      color: "$gray50",
      fontFamily: "$circularStd",
    },
  },

  "& .content main .ticket-description": {
    gridArea: "description",
    marginTop: 34,
  },

  "& .content main .ticket-description article": {
    display: "block",
    marginBottom: 24,
    
    "&:last-child": {
      marginBottom: 0,
    },
  },

  "& .content main .ticket-description article h2": {
    marginBottom: 8,
    color: "$black",
  },

  "& .content main .ticket-description article p": {
    color: "$gray40",
    fontFamily: "$circularStd",
    fontSize: "$paragraph2",
    fontWeight: "$normal",
  },

  "& .content main .more-ticket-details": {
    gridArea: "details",
    height: "min-content",
    background: "$white",
    padding: 24,
    borderRadius: 8,
  },
  
  "& .content main .more-ticket-details .item": {
    paddingBottom: 24,
    borderBottom: "solid 2px $gray10",
    
    "&:not(:first-child)": {
      paddingTop: 24,
    },
    
    "&.block": {
      display: "flex",

      "& .icon": {
        color: "$blue",
        marginRight: 14,
      },
      
      "& .label": {
        display: "block",
        color: "$black",
        fontWeight: "$bold",
        marginRight: 14,
        fontFamily: "$circularStd",
        fontSize: "$paragraph2"
      },
      
      "& .value": {
        display: "block",
        color: "$gray40",
        marginRight: 14,
        fontFamily: "$circularStd",
        fontSize: "$paragraph2",
      },
  
    },

    "& .ticket-type": {
      display: "flex",
      justifyContent: "space-between",

      fontFamily: "$circularStd",
      fontSize: "$paragraph2",
      color: "$gray40",
    },
  },

  "& .content main .more-ticket-details .total": {
    paddingTop: 24,

    "& .total-amount": {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "$paragraph2",
      fontWeight: "$bold",
      
      "& span": {
        fontSize: "$header2",
        color: "$blue",
      },
    },

    "& .button-buy-ticket": {
      width: "$full",
      marginTop: 24,
    }
  },
});