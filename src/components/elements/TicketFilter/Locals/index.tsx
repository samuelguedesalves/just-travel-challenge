import React, { useState } from "react";
import { LocalCheckboxLabel } from "./styles";
import { constants } from "../../../../constants/ticketList";

export function Locals() {
  return (
    <div>
      <p className="title">Tipo de propriedades</p>

      <div>
        {constants.filters.locals.map(({ label, icon: Icon }, index) => (
          <LocalCheckbox label={label} icon={<Icon />} key={index} />
        ))}
      </div>
    </div>
  );
}

type LocalCheckboxProps = {
  label: string;
  icon: JSX.Element;
};

function LocalCheckbox(props: LocalCheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
  }

  return (
    <LocalCheckboxLabel type={checked ? "checked" : "unchecked"}>
      <input type="checkbox" onChange={handleInputChange} />
      {props.icon}
      <span>{props.label}</span>
    </LocalCheckboxLabel>
  );
}
