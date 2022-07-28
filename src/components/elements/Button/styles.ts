import {  } from '@stitches/react';
import { styled } from "../../../styles/stitches.config";

export const Button = styled("button", {
  fontFamily: "$circularStd",
  // width: 100%;
  paddingInline: 20,
  border: "transparent",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 10,

  variants: {
    type: {
      primary: {
        background: "$blue",
        color: "$white"
      },
      secondary: {
        background: "$white",
        color: "$blue",
        borderWidth: 1,
        borderColor: "$blue",
        borderStyle: "solid"
      },
      disabled: {
        background: "$gray10",
        color: "$gray30",
      }
    },
    size: {
      large: {
        height: 58,
        borderRadius: 4,
        fontSize: 16,
      },
      medium: {
        height: 50,
        borderRadius: 4,
        fontSize: 16,
      },
      small: {
        height: 39,
        fontSize: 14,
        borderRadius: 3,
      }
    }
  },

  defaultVariants: {
    type: "primary",
    size: "medium",
  }
})

const Styles = {
  Button,
}

export default Styles;