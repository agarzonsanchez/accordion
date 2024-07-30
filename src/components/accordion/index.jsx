import { useState } from "react";
import data from "../../data";
import "./styles.css";

export default function Accordion() {
  const [index, setIndex] = useState();
  const [selectMultiple, setSelectMultiple] = useState(false);

  function handleOnClickIndex(itemIndex) {
    index === itemIndex ? setIndex(null) : setIndex(itemIndex);
  }

  function enableMultiSelection() {}
  return (
    <div>
      <div className="accordion-container">
        <button onClick={enableMultiSelection}>
          Select mutiple:{selectMultiple ? "enable" : "disable"}{" "}
        </button>
        {data.map((item) => (
          <div
            className="button-item"
            key={item.id}
            onClick={() => handleOnClickIndex(item.id)}
          >
            <h1>{item.question}</h1>
            {index === item.id ? <p>{item.answer}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
