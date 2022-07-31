import React, { useState } from "react";
import { constants } from "../../../../constants/ticketList";
import { formatAmount } from "../../../../utils/formatAmount";
import { PriceOptionContainer } from "./styles";

export function Price() {
  return (
    <div>
      <p className="title">Preço</p>

      <div>
        {constants.filters.prices.map((price, index) => (
          <PriceOption price={price} key={index} />
        ))}
      </div>
    </div>
  );
}

type PriceOptionProps = {
  price: {
    min: number;
    max: number;
  };
};

function PriceOption({ price }: PriceOptionProps) {
  const [checked, setChecked] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
  }

  return (
    <PriceOptionContainer type={checked ? "active" : "unactive"}>
      <input type="checkbox" onChange={handleInputChange} />
      {`${formatAmount(price.min / 100)} - ${formatAmount(price.max / 100)}`}
    </PriceOptionContainer>
  );
}
