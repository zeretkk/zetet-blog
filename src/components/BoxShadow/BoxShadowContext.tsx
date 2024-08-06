import { createContext, Dispatch, SetStateAction } from 'react'
import { BoxShadowValues, CanvasParams } from './BoxShadow.types'

export const BoxShadowContext = createContext<{
  data: BoxShadowValues
  setData?: Dispatch<SetStateAction<BoxShadowValues>>
  canvasData: CanvasParams
  setCanvasParam?: Dispatch<SetStateAction<CanvasParams>>
}>({
  data: { horizontal: 8, vertical: 8, blur: 4, spread: 0, color: '#000000ff', isInset: false },
  canvasData: { card: '#fff', background: '#7a7878' },
})
