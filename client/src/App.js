import React , {useState} from "react";

import Add from "./components/Add";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [list,setList] = useState([]);
  return (
    <div className="App">
      <Header />
      <List setList={setList} list={list} />
      <Add  setList={setList} list={list}/>
    </div>
  );
}

export default App;
