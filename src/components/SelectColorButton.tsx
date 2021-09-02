import { PixelPainterStore, toggleselectColorBox } from "../stores/PixelPainterStore"

type SelectColorButtonProps = {
  color: string;
  keys: number;
}

const SelectColorButton = ({ keys, color }: SelectColorButtonProps) =>  {
  const state = PixelPainterStore.useState()
  
  const computeRingSize = () => {
    if (state.statusSelect[keys]) {
      PixelPainterStore.update(
        s => {
          s.color[keys] = color
        }
      )
      return "ring-8 ring-green-400"
    }
    else return ''
  }

  return (
    <div className={`${computeRingSize()} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick={() => {
        toggleselectColorBox(keys)
      }}
    >
    </div>
  )
}

export default SelectColorButton
