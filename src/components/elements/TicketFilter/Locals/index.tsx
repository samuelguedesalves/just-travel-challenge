import React, { useState } from "react";
import Image from "next/image";
import { LocalCheckboxLabel } from "./styles";
import Icons from "./icons/index";

export function Locals() {
  return (
    <div>
      <p className="title">Tipo de propriedades</p>

      <div>
        <LocalCheckbox label="Casa (346)" icon={<Icons.Apto />} />
        <LocalCheckbox label="Apartamento (234)" icon={<Icons.Apto />} />
        <LocalCheckbox label="Hotel (23)" icon={<Icons.Hotel />} />
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
