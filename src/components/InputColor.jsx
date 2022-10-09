import React from 'react'

const InputColor = ({ inputColor, onSetInputColor, onSetColor }) => {
    const handleOnChange = (e) => {
        e.preventDefault();
        onSetInputColor(e.target.value)
        onSetColor(e.target.value)
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" autoFocus placeholder='Add Color Name' className='p-0.5'
                value={inputColor} onChange={handleOnChange} />
        </form>
    )
}

export default InputColor