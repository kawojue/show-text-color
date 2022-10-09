const DisplayBox = ({ inputColor, color, hexValue, toggle }) => {
    return (
        <div className="displayBox" style={{ backgroundColor: color }}>
            <h1 className="text-xl">{inputColor === "" ? "Empty Value" : inputColor}</h1>
            {toggle && <h1 className="text-lg">{hexValue}</h1>}
        </div>
    )
}

export default DisplayBox;