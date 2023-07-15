import { useContext } from 'react'
import Context from '../context/Context'

const DisplayBox = () => {
    const { inputColor, color,
        hexValue, toggle, displayType,
        onCopy, copy } = useContext(Context)

    const formatColor = color.trim().split(',').join(',')

    return (
        <div className="displayBox max-w-md" style={{
            background:
                `${displayType ? color :
                    `linear-gradient(${formatColor})`}`
        }}>
            <h1 className="text-xl max-w-[300px]">
                {inputColor === '' ? 'Empty Value' : inputColor}
            </h1>
            {toggle &&
                <div className="hex-container">
                    <h1 className="text-lg">
                        {hexValue}
                    </h1>
                    <button onClick={() => onCopy(hexValue)}>
                        {copy}
                    </button>
                </div>
            }
        </div>
    )
}

export default DisplayBox