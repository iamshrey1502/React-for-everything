import React, {useState} from 'react'

const App = () => {
  
  const [first, setfirst] = useState(10);
  const btnClicked=()=>{
    console.log("Clicked");
    setfirst(first+10);
  }
  const btnClicked2=()=>{
    console.log("Clicked");
    setfirst(first-10);
  }
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={btnClicked}> Increase</button>
      <button onClick={btnClicked2}> Decrease</button>
    </div>
  )
}

export default App