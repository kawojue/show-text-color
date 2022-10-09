import colorNames from "colornames";
const InputColor = ({ inputColor, onSetInputColor, onSetColor, onSetHexValue, onSetToggle, toggle }) => {
    const handleOnChange = (e) => {
        e.preventDefault();
        onSetInputColor(e.target.value)
        onSetColor(e.target.value)
        onSetHexValue(colorNames(e.target.value))
        e.target.value === "" ? onSetToggle(false) : onSetToggle(toggle)
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" autoFocus placeholder='Add Color Name' className='p-0.5'
                value={inputColor} onChange={handleOnChange} />
        </form>
    )
}

export default InputColor