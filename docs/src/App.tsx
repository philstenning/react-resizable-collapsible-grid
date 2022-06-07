import { useState } from 'react'
import {
  ResizableHorizontalGrid,
  ResizableVerticalGrid,
  GridState,
  isHorizontalGrid,
  HorizontalGridState,
  VerticalGridState,
} from 'react-resizable-collapsible-grid'
import './App.css'
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'

type UseStorage = [
  onReload: (gridId: number | string) => GridState,
  setResizableGrid: (gridState: GridState) => void
]

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

  const resizableGrid = (gridId: number | string) => {
    const result = state.filter((s) => s.gridId === gridId)[0] ?? []
    return result
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

function App() {
  const { getVerticalGridHeight, getHorizontalGridWidths, setResizeState } =
    useResizeGridLocalStorage()

  const getGridState = (gridState: GridState) => {
    if (isHorizontalGrid(gridState)) {
      // Resizable Horizontal Grid
    } else {
      // Resizable Vertical Grid
    }

    setResizeState(gridState)
  }

  return (
    <div className="App">
      <ResizableHorizontalGrid
        // initialWidths={{ left: gridH.__typeName==='HorizontalGrid'?gridH.left.currentSize:300, right: 200 }}
        initialWidths={getHorizontalGridWidths(5, 300, 200)}
        getCurrentState={getGridState}
        gridId={5}
      >
        <div>
          Lorem ipsum dolor sit amet, {getHorizontalGridWidths(5).left}{' '}
          consectetur adipisicing elit. Dolores harum perferendis placeat dicta
          id, quo nulla iure sequi explicabo laudantium.
        </div>
        <ResizableVerticalGrid
          gridId={6}
          initialHeight={getVerticalGridHeight(6)}
          getCurrentState={getGridState}
        >
          <div>
            {' '}
            {/* <h1>Hello</h1> */}
            <button
            // onClick={() => setHorizontalGridSize({ left: 300, right: 400 })}
            >
              click
            </button>
            {/* {JSON.stringify(initialHorizontalGridWidths)}  */}
            Lorem ipsum {getVerticalGridHeight(6).toString()} dolor sit amet
            consectetur adipisicing elit. Quae, eius iste. Ullam quae cumque
            explicabo recusandae praesentium magnam harum nam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eius
            iste. Ullam quae cumque explicabo recusandae praesentium magnam
            harum nam.
          </div>
        </ResizableVerticalGrid>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          harum perferendis placeat dicta id, quo nulla iure sequi explicabo
          laudantium.
        </div>
        {/* <ResizableVerticalGrid
          gridId={6}
          initialHeight={'1fr'}
          getCurrentState={getGridState}
        >
          <div>
            {' '}
            <h1>Hello</h1>
            <button
              onClick={() => setHorizontalGridSize({ left: 300, right: 400 })}
            >
              click
            </button>
            {JSON.stringify(initialHorizontalGridWidths)} Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quae, eius iste. Ullam quae
            cumque explicabo recusandae praesentium magnam harum nam.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eius
            iste. Ullam quae cumque explicabo recusandae praesentium magnam
            harum nam.
          </div>
        </ResizableVerticalGrid> */}
      </ResizableHorizontalGrid>
    </div>
  )
}

export default App
