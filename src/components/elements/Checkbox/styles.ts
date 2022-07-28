import { styled } from "../../../styles/stitches.config";

export const CheckboxInputLabel = styled("label", {
  fontFamily: "$circularStd",
  fontSize: "$paragraph3",
  lineHeight: "$paragraph3",
  color: "$black",

  display: "flex",
  alignItems: "center",

  "& input": {
    display: "none",
  },

  "&::before": {
    content: "",
    display: "inline-block",
    width: 20,
    height: 20,
    borderRadius: 3,
    marginRight: 10,
  },

  variants: {
    type: {
      checked: {
        "&::before": {
          backgroundImage: `url(/assets/check.svg);`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          border: "$blue solid 2px",
          backgroundColor: "$blue",
        },
      },
      unchecked: {
        "&::before": {
          border: "$gray40 solid 2px",
        },
      },
    },
  },

  defaultVariants: {
    type: "unchecked",
  },
});