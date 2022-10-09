import { useState } from 'react'
import InputColor from "./components/InputColor"
import DisplayBox from './components/displayBox';
function App() {
  const [inputColor, setInputColor] = useState("");
  const [color, setColor] = useState("white")
  return (
    <>
      <DisplayBox inputColor={inputColor} color={color} />
      <InputColor inputColor={inputColor} onSetInputColor={setInputColor} onSetColor={setColor} />
    </>
  )
}

export default App
