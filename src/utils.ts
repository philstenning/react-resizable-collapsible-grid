import { VerticalGridState, HorizontalGridState } from './index'

type GridState = HorizontalGridState | VerticalGridState

const isHorizontalGrid = (
  gridState: GridState
): gridState is HorizontalGridState => {
  return gridState.__typeName === 'HorizontalGrid'
}
const isVerticalGrid = (
  gridState: GridState
): gridState is VerticalGridState => {
  return gridState.__typeName === 'VerticalGrid'
}

export type { GridState }
export { isHorizontalGrid, isVerticalGrid }



