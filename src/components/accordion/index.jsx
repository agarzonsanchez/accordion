import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const multiSelectionButton = () => {
    setEnableMultiselection(!enableMultiSelection);
    setSelected(null);
    setMultiple([]);
  };

  const expandOption = (id) => {
    selected === id ? setSelected(null) : setSelected(id);
  };

  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  };
  console.log(multiple);
  return (
    <div>
      <button onClick={() => multiSelectionButton()}>
        Enable Multi Selection
      </button>

      {data && data.length <= 0 ? (
        <>Data not found</>
      ) : (
        data.map((dataItem) => (
          <div
            onClick={
              enableMultiSelection
                ? () => handleMultiSelection(dataItem.id)
                : () => expandOption(dataItem.id)
            }
            key={dataItem.id}
          >
            <h3>{dataItem.question}</h3>
            {dataItem.id === selected ||
            multiple.indexOf(dataItem.id) !== -1 ? (
              <>{dataItem.answer}</>
            ) : (
              <></>
            )}
          </div>
        ))
      )}
    </div>
  );
}
