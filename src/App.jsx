import { useState, useEffect } from 'react'
import InputColor from "./components/InputColor"
import DisplayBox from './components/displayBox'
import ToggleHexValue from './components/ToggleHexValue'
import ToggleDisplay from './components/ToggleDisplay'

function App() {
  const [inputColor, setInputColor] = useState("")
  const [toggle, setToggle] = useState(false)
  const [displayType, setDisplayType] = useState(true)
  const [color, setColor] = useState("")
  const [info, setInfo] = useState("")
  const [hexValue, setHexValue] = useState("")

  const toggleHexValue = () => {
    setToggle(!toggle)
  }

  const toggleDisplay = () => {
    setDisplayType(!displayType)
  }

  useEffect(() => {
    setInfo("Add color names seperated with commas.")
    setTimeout(() => {
      setInfo("")
    }, 4000);
  }, [displayType])

  return (
    <>
      <p className={`show ${!displayType ? 'active' : ''}`}>
        {info}
      </p>
      <div className="flex justify-between my-2">
        <ToggleDisplay toggleDisplay={toggleDisplay} displayType={displayType} />
        <ToggleHexValue toggleHexValue={toggleHexValue} />
      </div>
      <DisplayBox inputColor={inputColor} color={color} hexValue={hexValue}
        toggle={toggle} displayType={displayType} />
      <InputColor inputColor={inputColor} onSetInputColor={setInputColor}
        onSetColor={setColor} onSetHexValue={setHexValue}
        onSetToggle={setToggle} toggle={toggle} displayType={displayType} />
    </>
  )
}

export default App