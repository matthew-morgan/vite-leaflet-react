import { useState } from 'react'
import './App.css'
import MapBoxWithMarkers from "./MapWithMarkers";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MapBoxWithMarkers selectedPath={[
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
      ]} />
    </div>
  )
}

export default App
