import React from "react";
import { PriceOption } from "./styles";

export function Price() {
  return (
    <div>
      <p className="title">Preço</p>

      <div>
        <PriceOption type="active">R$ 10,00 - R$ 390,00</PriceOption>
        <PriceOption>R$ 10,00 - R$ 390,00</PriceOption>
        <PriceOption>R$ 10,00 - R$ 390,00</PriceOption>
        <PriceOption>R$ 10,00 - R$ 390,00</PriceOption>
      </div>
    </div>
  );
}
