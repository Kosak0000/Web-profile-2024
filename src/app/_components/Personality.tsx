import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Reasonable (INTJ)</p>
        <p className="pb-2">
          Thought constitutes the greatness of man. Man is a reed, the feeblest thing in nature, but 
          he is a thinking reed.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
