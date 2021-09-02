import SelectColorButton from "./SelectColorButton"

const ColorPicker = () => {
  return (
    <div>
      <div className="mx-auto my-4 flex justify-center space-x-4">
          <SelectColorButton keys={0} color='#000000' />
          <SelectColorButton keys={1} color='#804000' />
          <SelectColorButton keys={2} color='#FE0000' />
          <SelectColorButton keys={3} color='#FE6A00' />
          <SelectColorButton keys={4} color='#FFD800' />
          <SelectColorButton keys={5} color='#00FF01' />
        </div>
        <div className="mx-auto my-4 flex justify-center space-x-4">
          <SelectColorButton keys={6} color='#FFFFFF' />
          <SelectColorButton keys={7} color='#01FFFF' />
          <SelectColorButton keys={8} color='#0094FE' />
          <SelectColorButton keys={9} color='#0026FF' />
          <SelectColorButton keys={10} color='#B100FE' />
          <SelectColorButton keys={11} color='#FF006E' />
        </div>
    </div>
  )
}

export default ColorPicker
