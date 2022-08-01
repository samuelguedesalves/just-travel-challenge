import { DatePicker as AntDatePicker } from "antd";
import { styled } from "../../../styles/stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
});

export const LocalInputContainer = styled("div", {
  color: "$blue",
  position: "relative",

  svg: {
    display: "block",
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 1,
  },

  input: {
    height: 48,

    background: "$white",
    borderColor: "$gray20",
    borderStyle: "solid",
    borderWidth: 1,

    paddingInlineEnd: 12,
    paddingInlineStart: 48,

    fontFamily: "$circularStd",
    fontSize: "$paragraph2",
    color: "$black",

    transition: "border-color ease 0.5s",

    "&:hover": {
      borderColor: "$blue",
    },
  
    "&::placeholder": {
      color: "$gray40",
    },

    "&:focus": {
      outlineWidth: 2,
      outlineColor: "$blue",
      outlineStyle: "solid",
    }
  }
});

export const DateInputContainer = styled("div", {
  position: "relative",
  
  svg: {
    color: "$blue",
    display: "block",
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 1,
  },
});

export const DatePicker = styled(AntDatePicker, {
  height: 48,
  fontFamily: "$circularStd",
  borderColor: "$gray20",
  borderRadius: 0,
  borderLeft: "none",
  marginLeft: 2,
  
  "&.ant-picker": {
    paddingLeft: 48,
  },

  "&:hover": {
    borderColor: "$blue",
  },

  "&.ant-picker-focused": {
    outlineWidth: 2,
    outlineColor: "$blue",
    outlineStyle: "solid",
  },

  "& .ant-picker-suffix": {
    display: "none",
  }
});

export const SearchButton = styled("button", {
  height: 48,
  width: 48,
  background: "$white",
  borderColor: "$gray20",
  borderStyle: "solid",
  borderWidth: 1,
  color: "$gray20",
  borderLeft: "none",

  transition: "color ease 0.5s",

  "&:hover": {
    color: "$blue",
  }
});
