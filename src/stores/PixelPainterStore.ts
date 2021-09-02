import {Store} from 'pullstate'

type PixelPainterStoreType = {
  canvas: string[][] 
  statusSelect: boolean[]
  color: string[]
}

const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const paintCellBox = (x :number, y :number) => {
  PixelPainterStore.update(
    s => {
      for (let i=0; i<12; i++) 
        if (s.statusSelect[i]) s.canvas[y][x] = s.color[i]
    }
  )
}

const initiateselectColorBox = () => {
  const output: boolean[] = []
  for (let i=0; i<12 ; i++) {
    output[i] = false
  }
  output[0] = true
  return output
}

const initiateColor = () => {
  const output: string[] = []
  output[0] = '#000000'
  output[1] = '#804000'
  output[2] = '#FE0000'
  output[3] = '#FE6A00'
  output[4] = '#FFD800'
  output[5] = '#00FF01'
  output[6] = '#FFFFFF'
  output[7] = '#01FFFF'
  output[8] = '#0094FE'
  output[9] = '#0026FF'
  output[10] = '#B100FE'
  output[11] = '#FF006E'
  return output
}

export const toggleselectColorBox = (keys :number) => {
  let arr :boolean[] = []
  for (let i=0; i<12 ; i++) {
    arr[i] = false
  }
  arr[keys] = true
  PixelPainterStore.update(
    s => {
      s.statusSelect = arr
    }
  )
}

export const ClickClear = () => {
  PixelPainterStore.update(
    s => {
      s.canvas = createEmptyCanvas()
    }
  )
}

export const ClickRandom = () => {
  let output :string[][] = []

  PixelPainterStore.update (
    s => {
      for (let i=0; i<16; i++) 
        for (let j=0; j<16 ; j++) 
          s.canvas[i][j] = s.color[Math.floor(Math.random() * 12)]
    } 
  )
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  statusSelect: initiateselectColorBox(),
  color: initiateColor()
})
