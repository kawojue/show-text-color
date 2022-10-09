import { useState } from 'react'
import InputColor from "./components/InputColor"
import DisplayBox from './components/displayBox'
import ToggleHexValue from './components/ToggleHexValue'

function App() {
  const [inputColor, setInputColor] = useState("")
  const [color, setColor] = useState("")
  const [hexValue, setHexValue] = useState("")
  const [toggle, setToggle] = useState(false);

  const toggleHexValue = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <DisplayBox inputColor={inputColor} color={color} hexValue={hexValue} toggle={toggle} />
      <InputColor inputColor={inputColor} onSetInputColor={setInputColor} onSetColor={setColor} onSetHexValue={setHexValue} onSetToggle={setToggle} toggle={toggle} />
      <ToggleHexValue toggleHexValue={toggleHexValue} />
    </>
  )
}

export default App
