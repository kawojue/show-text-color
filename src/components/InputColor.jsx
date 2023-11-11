import { useContext } from 'react'
import colorNames from 'colornames'
import Context from '../context/Context'


const InputColor = () => {
    const {
            inputColor, setInputColor,
            setColor, setHexValue,
            setToggle, toggle,
        } = useContext(Context)

    const handleOnChange = (e) => {
        e.preventDefault()
        setInputColor(e.target.value)
        setColor(e.target.value)
        setHexValue(colorNames(e.target.value))
        e.target.value === "" ? setToggle(false) : setToggle(toggle)
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" autoFocus className='px-0.5 py-1 w-full'
                value={inputColor} onChange={(e) => handleOnChange(e)}
                placeholder={`Add Color Name(s)`}
            />
        </form>
    )
}

export default InputColor