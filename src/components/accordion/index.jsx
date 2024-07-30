import { useState } from "react";
import data from "../../data";
import "./styles.css";

export default function Accordion() {
  const [index, setIndex] = useState();
  const [selectMultiple, setSelectMultiple] = useState(false);
  const [multiSelectionIndex, setMultidelectionIndex] = useState([]);

  function handleOnClickIndex(itemIndex) {
    let arr = [...multiSelectionIndex];
    if (selectMultiple) {
      setIndex(null);
      arr.includes(itemIndex)
        ? arr.splice(arr.indexOf(itemIndex), 1)
        : arr.push(itemIndex);
      setMultidelectionIndex(arr);
      console.log(arr);
    } else {
      setMultidelectionIndex([]);
      index === itemIndex ? setIndex(null) : setIndex(itemIndex);
    }
  }

  function enableMultiSelection() {
    setSelectMultiple(!selectMultiple);
  }
  return (
    <div>
      <div className="accordion-container">
        <button className="button-selector" onClick={enableMultiSelection}>
          SELECT MULTIPLE:{selectMultiple ? "ENABLE" : "DISABLE"}{" "}
        </button>
        {data.map((item) => (
          <div
            className="button-item"
            key={item.id}
            onClick={() => handleOnClickIndex(item.id)}
          >
            <h1>{item.question}</h1>
            {selectMultiple ? (
              multiSelectionIndex.map((number, i) => (
                <p key={i}>{number === item.id ? item.answer : null}</p>
              ))
            ) : index === item.id ? (
              <p>{item.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
