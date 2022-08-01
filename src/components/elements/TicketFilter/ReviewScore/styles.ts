import { styled } from "../../../../styles/stitches.config";

export const ScoreItemLabel = styled("label", {
  display: "flex",
  alignItems: "center",
  columnGap: 10,

  fontFamily: "$circularStd",
  

  "& input": {
    display: "none",
  },

  marginBottom: 12,

  "&::last-child": {
    marginBottom: 0,
  },

  variants: {
    type: {
      checked: {
        color: "$blue",
      },
      unchecked: {
        color: "$gray70",
      },
    }
  },

  defaultVariants: {
    type: "unchecked",
  }
});

export const Fill = styled("div", {
  width: 189,
  height: 30,
  background: "$gray20",

  display: "inline-flex",
  alignItems: "center",

  position: "relative",

  "&::before": {
    content: "",
    display: "block",
    position: "absolute",
    marginLeft: 7,
    color: "$white",
  },

  "& .tint": {
    background: "$yellow",
    height: "$full"
  }
});