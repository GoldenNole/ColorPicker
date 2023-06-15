import { useState } from "react";

// Write your Color component here
//{setSelectedColor && color ? "selected" : ""}

const Color = ({color, setSelectedColor, selected}) => {
  return (
    <div 
      className= { `${color} ${selected}`}
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  console.log(selectedColor)
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} selected ={selectedColor === "red" ? "selected" : ""}  />
        <Color color="orange" setSelectedColor={setSelectedColor} selected ={selectedColor === "orange" ? "selected" : ""} />
        <Color color="yellow" setSelectedColor={setSelectedColor}  selected ={selectedColor === "yellow" ? "selected" : ""}/>
        <Color color="green" setSelectedColor={setSelectedColor} selected ={selectedColor === "green" ? "selected" : ""} />
        <Color color="blue" setSelectedColor={setSelectedColor}  selected ={selectedColor === "blue" ? "selected" : ""}/>
        <Color color="violet" setSelectedColor={setSelectedColor}  selected ={selectedColor === "violet" ? "selected" : ""}/>
      </div>
    </div>
  );
};

export default App;
