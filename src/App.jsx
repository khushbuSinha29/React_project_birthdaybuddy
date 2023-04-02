import { useState } from "react";
import data from "./data";

const App = () => {
  const [mainData, setMainData] = useState(data);
  console.log(mainData);
  function clickHandler(){
    setMainData([]);
  }
  return <div className="container">
    <div>
      <h2>5 Birthdays Today</h2>
      {mainData.map((item) => {
        return <div>
        <img src={item.image} className="img"></img>
        <h1>{item.name}</h1>
        <h3>{item.age}</h3>
        </div>
      })}
      <button className=".btn" onClick={clickHandler}>Clear All</button>
    </div>
  </div>;
};
export default App;
