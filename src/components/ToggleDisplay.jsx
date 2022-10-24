const ToggleDisplay = ({ toggleDisplay, displayType }) => {
    return (
        <button className="btn" onClick={() => toggleDisplay()}>
            {displayType ? 'Normal' : 'Gradient'}
        </button>
    )
}

export default ToggleDisplay