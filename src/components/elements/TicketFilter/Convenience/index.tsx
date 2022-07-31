import React from "react";
import { constants } from "../../../../constants/ticketList";
import { Checkbox } from "../../Checkbox";
import { ConvenienceContainer } from "./styles";

export function Convenience() {
  return (
    <ConvenienceContainer>
      <p className="title">Comodidade</p>

      <div>
        {constants.filters.conveniences.map((convenience, index) => (
          <Checkbox label={convenience} key={index} />
        ))}
      </div>
    </ConvenienceContainer>
  );
}
