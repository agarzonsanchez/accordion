import { useState } from "react";
import data from "../../data";

export default function Accordion() {
  const [index, setIndex] = useState();

  function handleOnClickIndex(itemIndex) {
    setIndex(itemIndex);
  }
  return (
    <div>
      <div>
        {data.map((item) => (
          <div key={item.id} onClick={() => handleOnClickIndex(item.id)}>
            <h1>{item.question}</h1>
            {index === item.id ? <p>{item.answer}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
