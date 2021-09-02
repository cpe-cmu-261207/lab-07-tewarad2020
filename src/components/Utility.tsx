import { ClickClear, ClickRandom } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={ClickClear}>Clear</button>
      <button className="w-36" onClick={ClickRandom}>Random color</button>
    </div>
  )
}

export default Utility
