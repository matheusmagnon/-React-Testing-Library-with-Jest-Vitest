import { useState } from "react";
import "./App.css"
function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [isDisabled, setIsDisabled] = useState(false);
  const nextColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red"
  const className = isDisabled ? "gray" : buttonColor

  
  return (
    <div>
      <button 
        className={className} 
        onClick={() => setButtonColor(nextColor)}
        disabled={isDisabled}
      >
        Change to {nextColor}
      </button>
      <br />
      <input type="checkbox" 
        id="disabled-button-checkbox" 
        defaultChecked={false}
        onChange={(e) => setIsDisabled(!isDisabled)}/>
      <label htmlFor="disabled-button-checkbox">Disable button</label> 
    </div>
  );
}

export default App;
