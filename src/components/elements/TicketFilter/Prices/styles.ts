import { styled } from "../../../../styles/stitches.config";

export const PriceOptionContainer = styled("label", {
  height: 34,
  paddingInline: 6,
  fontSize: "$paragraph3",
  fontFamily: "$circularStd",
  border: "transparent",
  borderRadius: 2,

  width: "fit-content",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 6,
  marginRight: 6,

  "& input": {
    display: "none",
  },

  variants: {
    type: {
      active: {
        background: "$blue",
        color: "$white",

        border: "$blue solid 2px",
      },
      unactive: {
        background: "$white",
        color: "$gray20",
        border: "$gray20 solid 2px",
      },
    },
  },
  defaultVariants: {
    type: "unactive",
  },
});