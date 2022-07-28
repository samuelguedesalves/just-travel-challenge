import { styled } from "../../../styles/stitches.config";

export const Container = styled("section", {
  width: "$full",
  maxWidth: 408,
  height: "fit-content",
  padding: 24,

  background: "$white",

  "& header": {
    display: "flex",
    justifyContent: "space-between",
  },

  "& header button": {
    fontSize: "$paragraph3",
    background: "none",
    border: "none",
    color: "$blue",
    fontFamily: "$circularStd",
  },

  "& p.title": {
    fontFamily: "$circularStd",
    fontWeight: "$bold",
    fontSize: "$paragraph2",
    color: "$black",
    marginBottom: 14,
  },

  boxShadow: "$shadow-s",
});

export const Divider = styled("div", {
  width: "$full",
  height: 1,
  background: "$gray10",
  marginBlock: 24,
});
