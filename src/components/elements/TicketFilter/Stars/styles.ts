import { styled } from "../../../../styles/stitches.config";

export const StarItemLabel = styled("label", {
  width: "fit-content",
  height: 34,

  paddingInline: 6,

  display: "inline-flex",
  columnGap: 6,
  alignItems: "center",
  justifyContent: "center",

  fontFamily: "$circularStd",
  color: "$gray30",

  marginBottom: 6,
  marginRight: 6,

  borderRadius: 3,

  "&:last-child": {
    marginRight: 0,
  },

  "& input": {
    display: "none",
  },

  "& .starts-figure": {
    height: 24,
  },

  variants: {
    type: {
      checked: {
        background: "$white",

        border: "$blue solid 2px"
      },
      unchecked: {
        background: "$white",

        border: "$gray20 solid 2px",
      },
    },
  },
  defaultVariants: {
    type: "unactive",
  },
});