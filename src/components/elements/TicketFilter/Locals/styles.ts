import { styled } from "../../../../styles/stitches.config";

export const LocalCheckboxLabel = styled("label", {
  width: 190,
  height: 34,

  display: "inline-flex",
  alignItems: "center",
  columnGap: 10,
  padding: 10,

  background: "$white",

  fontFamily: "$circularStd",
  fontSize: "$paragraph3",
  fontWeight: "$medium",

  borderRadius: 3,

  marginBottom: 8,
  
  "&:last-child": {
    marginBottom: 0,
  },

  "& input": {
    display: "none",
  },


  variants: {
    type: {
      checked: {
        border: "$blue solid 2px",
        color: "$blue",
        
        "& svg *": {
          stroke: "$blue",
        }
      },
      unchecked: {
        border: "$gray30 solid 2px",
        color: "$gray30",
        
        "& svg *": {
          stroke: "$gray30",
        }
      },
    }
  },

  defaultVariants: {
    type: "unchecked",
  }
})