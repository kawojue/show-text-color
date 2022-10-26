import colorNames from "colornames"
const InputColor = ({ inputColor, onSetInputColor, onSetColor,
    onSetHexValue, onSetToggle, toggle, displayType }) => {
    const handleOnChange = (e) => {
        e.preventDefault()
        onSetInputColor(e.target.value)
        onSetColor(e.target.value)
        onSetHexValue(colorNames(e.target.value))
        e.target.value === "" ? onSetToggle(false) : onSetToggle(toggle)
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" autoFocus className='px-0.5 py-1 w-full'
                value={inputColor} onChange={handleOnChange}
                placeholder={`Add Color ${displayType ? 'Name' : 'Names'}`}
            />
        </form>
    )
}

export default InputColor