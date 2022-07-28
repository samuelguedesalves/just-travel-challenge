import React, { useState } from "react";

import { CheckboxInputLabel } from "./styles";

type CheckboxProps = {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => {};
};

export function Checkbox(props: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);

    if (props.onChange) props.onChange(e);
  }

  return (
    <CheckboxInputLabel
      className="checkbox"
      type={checked ? "checked" : "unchecked"}
    >
      <input type="checkbox" onChange={handleInputChange} />
      {props.label}
    </CheckboxInputLabel>
  );
}
