import React, { useState } from "react";

import Add from "./components/Add";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [list, setList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [itemIdToEdit, setItemIdToEdit] = useState("");
  return (
    <div className="App">
      <Header />
      <List
        itemIdToEdit={itemIdToEdit}
        setItemIdToEdit={setItemIdToEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        inputVal={inputVal}
        setInputVal={setInputVal}
        setList={setList}
        list={list}
      />
      <Add
        itemIdToEdit={itemIdToEdit}
        setItemIdToEdit={setItemIdToEdit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        inputVal={inputVal}
        setInputVal={setInputVal}
        setList={setList}
        list={list}
      />
    </div>
  );
}

export default App;
