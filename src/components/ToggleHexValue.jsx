const ToggleHexValue = ({ toggleHexValue }) => {
    return (
        <button className="btn" onClick={() => toggleHexValue()}>
            Hex Value
        </button>
    )
}

export default ToggleHexValue