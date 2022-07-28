import React from "react";
import Styles from "./styles";

enum ButtonTypes {
  primary,
  secondary,
  disabled,
}

enum ButtonSize {
  large,
  medium,
  small,
}

type ButtonProps = {
  type: keyof typeof ButtonTypes;
  size: keyof typeof ButtonSize;
  children?: React.ReactNode;
  icon?: JSX.Element;
  onClick?: () => {};
};

export function Button(props: ButtonProps) {
  function handleOnClick() {
    if (props.onClick) props.onClick();
  }

  return (
    <>
      <Styles.Button
        type={props.type}
        size={props.size}
        onClick={handleOnClick}
      >
        {props.children}
        {props.icon && props.icon}
      </Styles.Button>
    </>
  );
}
