import { styled } from "../../../../styles/stitches.config";

export const PriceOption = styled("button", {
  height: 34,
  paddingInline: 6,
  fontSize: "$paragraph3",
  fontFamily: "$circularStd",
  border: "transparent",
  borderRadius: 2,

  width: "fit-content",
  display: "inline-block",
  marginBottom: 6,
  marginRight: 6,

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