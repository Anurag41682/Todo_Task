import React, { useState, useEffect } from "react";

import Add from "./components/Add";
import Header from "./components/Header";
import List from "./components/List";
import { fetchData } from "./api";

function App() {
  const [list, setList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [itemIdToEdit, setItemIdToEdit] = useState("");
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetchData();
        const dataFromApi = response.data;
        const newData = dataFromApi.map((item) => ({
          id: item.ID,
          content: item.CONTENT,
        }));
        setList(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromApi();
  }, []);

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
