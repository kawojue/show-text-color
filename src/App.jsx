import { useState } from 'react'
import InputColor from "./components/InputColor"
import DisplayBox from './components/displayBox'
import ToggleHexValue from './components/ToggleHexValue'
import ToggleDisplay from './components/ToggleDisplay'

function App() {
  const [inputColor, setInputColor] = useState("")
  const [color, setColor] = useState("")
  const [hexValue, setHexValue] = useState("")
  const [toggle, setToggle] = useState(false)
  const [displayType, setDisplayType] = useState(true)

  const toggleHexValue = () => {
    setToggle(!toggle)
  }

  const toggleDisplay = () => {
    setDisplayType(!displayType)
  }

  return (
    <>
      <ToggleDisplay toggleDisplay={toggleDisplay} displayType={displayType} />
      <DisplayBox inputColor={inputColor} color={color} hexValue={hexValue} toggle={toggle} displayType={displayType} />
      <InputColor inputColor={inputColor} onSetInputColor={setInputColor} onSetColor={setColor} onSetHexValue={setHexValue} onSetToggle={setToggle} toggle={toggle} />
      <ToggleHexValue toggleHexValue={toggleHexValue} />
    </>
  )
}

export default App
