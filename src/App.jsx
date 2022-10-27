import InputColor from "./components/InputColor"
import DisplayBox from './components/displayBox'
import ToggleHexValue from './components/ToggleHexValue'
import ToggleDisplay from './components/ToggleDisplay'

function App() {

  return (
    <>
      <div className="flex flex-col gap-3 w-[275px] justify-center">
        <div className="flex justify-between my-2">
          <ToggleDisplay />
          <ToggleHexValue />
        </div>
        <DisplayBox />
        <InputColor />
      </div>
    </>
  )
}

export default App