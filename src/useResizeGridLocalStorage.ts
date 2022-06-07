import { useState } from 'react'
import { GridState, VerticalGridState, HorizontalGridState } from './index'

function useResizeGridLocalStorage() {
  const [state, setState] = useState<GridState[]>(
    JSON.parse(localStorage.getItem('gridState') ?? '[]') as GridState[]
  )

  const setResizeState = (gridState: GridState) => {
    const existingState = state.filter((s) => s.gridId !== gridState.gridId)
    const newState = [...existingState, gridState]
    setState(newState)
    localStorage.setItem('gridState', JSON.stringify(newState))
  }

  
  const getVerticalGrid = (gridId: number | string) => {
    return (state.filter(
      (s) => s.__typeName === 'VerticalGrid' && s.gridId === gridId
    )[0] ?? {}) as VerticalGridState
  }
  const getVerticalGridHeight = (
    gridId: number | string,
    defaultHeight: number | string = '50%'
  ) => {
    const result = state.filter(
      (s) => s.__typeName === 'VerticalGrid' && s.gridId === gridId
    ) as VerticalGridState[]
    if (!result.length) {
      return defaultHeight
    }
    return result[0].height
  }
  const getHorizontalGridWidths = (
    gridId: number | string,
    defaultLeft: number | string = '25vw',
    defaultRight: number | string = '25vw'
  ) => {
    const result = state.filter(
      (s) => s.__typeName === 'HorizontalGrid' && s.gridId === gridId
    ) as HorizontalGridState[]
    if (!result.length) {
      return { left: defaultLeft, right: defaultRight }
    }
    const grid = result[0]
    return { left: grid.left.currentSize, right: grid.right.currentSize }
  }

  return {
    getVerticalGrid,
    getVerticalGridHeight,
    getHorizontalGridWidths,
    setResizeState,
  }
}


export default useResizeGridLocalStorage