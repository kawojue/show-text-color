import { createContext, useState, useEffect } from "react";

const Context = createContext({})

export const DataContext = ({ children }) => {
    const [info, setInfo] = useState("")
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

    useEffect(() => {
        setInfo("Add color names seperated with commas.")
        setTimeout(() => {
            setInfo("")
        }, 4000);
    }, [displayType])

    return (
        <Context.Provider value={{
            inputColor, setInputColor,
            toggleHexValue, toggleDisplay,
            toggle, setToggle, displayType,
            setInfo, hexValue, setHexValue,
            setDisplayType, color, setColor, info,
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context