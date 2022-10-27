import { createContext, useState, useEffect } from "react";

const Context = createContext({})

export const DataContext = ({ children }) => {
    const [color, setColor] = useState("")
    const [toggle, setToggle] = useState(false)
    const [hexValue, setHexValue] = useState("")
    const [inputColor, setInputColor] = useState("")
    const [displayType, setDisplayType] = useState(true)

    const toggleHexValue = () => {
        setToggle(!toggle)
    }

    const toggleDisplay = () => {
        setDisplayType(!displayType)
    }

    return (
        <Context.Provider value={{
            inputColor, setInputColor,
            toggleHexValue, toggleDisplay,
            toggle, setToggle, displayType,
            hexValue, setHexValue, color,
            setColor, setDisplayType,
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context