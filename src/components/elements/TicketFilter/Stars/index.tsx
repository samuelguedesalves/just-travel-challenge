import React, { useState } from "react";
import Image from "next/image";

import { StarItemLabel } from "./styles";

const constraints = [
  { starsNumber: 5, amount: 134 },
  { starsNumber: 4, amount: 134 },
  { starsNumber: 3, amount: 72 },
  { starsNumber: 2, amount: 75 },
  { starsNumber: 1, amount: 7 },
];

export function Stars() {
  return (
    <div>
      <p className="title">Tipo de prioridade</p>

      <div>
        {constraints.map((item, index) => (
          <StarItem
            key={index}
            amount={item.amount}
            starsNumber={item.starsNumber}
          />
        ))}
      </div>
    </div>
  );
}

type StarItemProps = {
  starsNumber: number;
  amount: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => {};
};

function StarItem(props: StarItemProps) {
  const [checked, setChecked] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);

    if (props.onChange) {
      props.onChange(e);
    }
  }

  return (
    <StarItemLabel type={checked ? "checked" : "unchecked"}>
      <input type="checkbox" onChange={handleInputChange} />
      <div className="starts-figure">
        {(() => {
          let stars = [];

          for (let i = 0; i < props.starsNumber; i++) {
            stars.push(
              <Image
                key={i}
                src="/assets/star.svg"
                alt="estrela"
                width={24}
                height={24}
              />
            );
          }

          return stars;
        })()}
      </div>
      {props.amount}
    </StarItemLabel>
  );
}
