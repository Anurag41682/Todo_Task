import React, { useState } from "react";
function Add(props) {
  const [inputVal, setInputVal] = useState("");

  function handleSubmit() {
    const id = Date.now();
    props.setList([...props.list, { id, content: inputVal }]);
    setInputVal("");
  }

  return (
    <>
      <div className="add">
        <input
          className="inputArea"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          type="text"
        />
        <button className="btn" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </>
  );
}
export default Add;
