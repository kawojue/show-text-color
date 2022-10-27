import { useContext } from 'react'
import Context from '../context/Context'

const ToggleHexValue = () => {
    const { toggleHexValue } = useContext(Context)

    return (
        <button className="btn" onClick={() => toggleHexValue()}>
            Hex Value
        </button>
    )
}

export default ToggleHexValue