const DisplayBox = ({ inputColor, color }) => {
    return (
        <div className="displayBox" style={{ backgroundColor: color }}>
            <h1 className="text-xl">{inputColor === "" ? "Empty Value" : inputColor}</h1>
        </div>
    )
}

export default DisplayBox;