const ToggleDisplay = ({ toggleDisplay, displayType }) => {
    return (
        <button className="rounded-md px-3 py-0.5 bg-white w-fit" onClick={() => toggleDisplay()}>
            {displayType ? 'Normal' : 'Linear Gradient'}
        </button>
    )
}

export default ToggleDisplay