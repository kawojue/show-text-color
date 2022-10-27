import { useContext } from 'react'
import Context from '../context/Context'

const ToggleDisplay = () => {
    const { toggleDisplay, displayType } = useContext(Context)

    return (
        <button className="btn" onClick={() => toggleDisplay()}>
            {displayType ? 'Normal' : 'Gradient'}
        </button>
    )
}

export default ToggleDisplay