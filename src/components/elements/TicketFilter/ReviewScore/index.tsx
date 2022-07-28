import { useState } from "react";
import { Fill, ScoreItemLabel } from "./styles";

export function ReviewScore() {
  return (
    <div>
      <p className="title">Review Score</p>

      <div>
        <ScoreItem amount={543} type="great" score={9} />
        <ScoreItem amount={543} type="veryGood" score={8} />
        <ScoreItem amount={543} type="good" score={7} />
        <ScoreItem amount={543} type="bad" score={6} />
        <ScoreItem amount={14} type="veryBad" score={2} />
      </div>
    </div>
  );
}

enum ScoreItemType {
  great = "Exelente",
  veryGood = "Muito Bom",
  good = "Bom",
  bad = "Ruim",
  veryBad = "Pessímo",
}

type ScoreItemProps = {
  score: number;
  amount: number;
  type: keyof typeof ScoreItemType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => {};
};

function ScoreItem(props: ScoreItemProps) {
  const [checked, setChecked] = useState<boolean>(false);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
  }

  return (
    <ScoreItemLabel type={checked ? "checked" : "unchecked"}>
      <input type="checkbox" onChange={handleInputChange} />

      <Fill
        css={{
          "&::before": {
            content: `+${props.score}`,
          },
          "& .tint": {
            width: `${props.score * 10}%`,
          },
        }}
      >
        <div className="tint" />
      </Fill>

      {`${ScoreItemType[props.type]} (${props.amount})`}
    </ScoreItemLabel>
  );
}
