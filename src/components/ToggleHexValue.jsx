const ToggleHexValue = ({ toggleHexValue }) => {
    return (
        <button className="rounded-md px-3 py-0.5 bg-white w-fit" onClick={() => toggleHexValue()}>
            Toggle Hex Value
        </button>
    )
}

export default ToggleHexValue