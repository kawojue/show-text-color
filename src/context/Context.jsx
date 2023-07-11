import { FaCopy } from 'react-icons/fa'
import { createContext, useState } from "react";

const Context = createContext({})

export const DataContext = ({ children }) => {
    const [color, setColor] = useState("")
    const [toggle, setToggle] = useState(false)
    const [hexValue, setHexValue] = useState("")
    const [copy, setCopy] = useState(<FaCopy />)
    const [inputColor, setInputColor] = useState("")
    const [displayType, setDisplayType] = useState(true)

    const toggleHexValue = () => setToggle(!toggle)

    const toggleDisplay = () => setDisplayType(!displayType)

    const onCopy = async value => {
        try {
            await navigator.clipboard.writeText(value)
            setCopy("Copied")
            setTimeout(() => {
                setCopy(<FaCopy />)
            }, 1000)
        } catch (err) {
            setCopy("Failed!")
        }
    }

    return (
        <Context.Provider value={{
            inputColor, setInputColor,
            toggleHexValue, toggleDisplay,
            toggle, setToggle, displayType,
            hexValue, setHexValue, color,
            setColor, setDisplayType, onCopy, copy
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context