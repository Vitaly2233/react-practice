import React, { useState } from "react"
function App() {
  const [a, setA] = useState(0)

  function increment() {
    setA(a + 1)
  }
  return (
    <div className="App">
      <button onClick={increment}>Increment</button>
      <button onClick={() => a -= 1}>decrement</button>
      {a}
    </div>
  );
}

export default App;
