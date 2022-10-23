const DisplayBox = ({ inputColor, color, hexValue, toggle, displayType }) => {
    const formatColor = color.trim().split(',').join(',')
    return (
        <div className="displayBox" style={{ background: `${displayType ? color : `linear-gradient(${formatColor})`}` }}>
            <h1 className="text-xl">{inputColor === "" ? "Empty Value" : inputColor}</h1>
            {toggle && <h1 className="text-lg">{hexValue}</h1>}
        </div>
    )
}

export default DisplayBox