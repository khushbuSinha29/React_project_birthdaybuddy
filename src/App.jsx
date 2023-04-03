import { useState } from "react";
import data from "./data";
import List from "./List";
const App = () => {
  const [mainData, setMainData] = useState(data);
  console.log(mainData);
  function clickHandler(){
    setMainData([]);
  }
  return <main>
    <div className="container">
      <h3>{mainData.length} Birthdays Today</h3>
      <List people = {mainData}/>

      {/* {mainData.map((item) => {
        return <div>
        <img src={item.image} className="img"></img>
        <h1>{item.name}</h1>
        <h3>{item.age}</h3>
        </div>
      })} */}
      <button type = 'button' className="btn btn-block" onClick={clickHandler}>Clear All</button>
    </div>
  </main>
};
export default App;
