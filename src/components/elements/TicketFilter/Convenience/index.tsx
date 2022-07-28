import React from "react";
import { Checkbox } from "../../Checkbox";
import { ConvenienceContainer } from "./styles";

export function Convenience() {
  return (
    <ConvenienceContainer>
      <p className="title">Comodidade</p>

      <div>
        <Checkbox label="Wi-Fi" />
        <Checkbox label="Cozinha" />
        <Checkbox label="Maquina de lavar" />
        <Checkbox label="Ar-condicionado" />
        <Checkbox label="Secadora" />
      </div>
    </ConvenienceContainer>
  );
}
