import {useState} from 'react'
import {
  ResizableHorizontalGrid,
  ResizableVerticalGrid,
  GridState,
  isHorizontalGrid,
  HorizontalGridState,
} from 'react-resizable-collapsible-grid'
import './App.css'
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'

type UseStorage = [
  onReload:(gridId:number|string)=>  GridState,
  setResizableGrid: (gridState: GridState) => void
]


function useResizeGridLocal=Storage():UseStorage {
  const [state , setState ] =useState<GridState[]>([])

  const setResizeState = (state1: GridState) =>{
     const newState = [...state]//todo 
  }
  const resizableGrid=(gridId:number|string)=>  {
    return state.filter(s=>s.gridId ===gridId)
  }
  
  return [resizableGrid, setResizeState]
}

function App() {
  const [fff, setCurrentGridState] = useResizeGridLocalStorage()

  const val = fff(5)
  // val.
  // window.localStorage.setItem('width','345')
  // const w = localStorage.getItem('resizableGrid-5')
  // const gridH = w
  //   ? (JSON.parse(w) as HorizontalGridState)
  //   : ({} as HorizontalGridState)

  const getGridState = (gridState: GridState) => {
    if (isHorizontalGrid(gridState)) {
      // Resizable Horizontal Grid
    } else {
      // Resizable Vertical Grid
    }
    localStorage.setItem(
      `resizableGrid-${gridState.gridId}`,
      JSON.stringify(gridState)
    )
    console.log(JSON.stringify(gridState))
  }

  return (
    <div className="App">
      <ResizableHorizontalGrid
        // initialWidths={{ left: gridH.__typeName==='HorizontalGrid'?gridH.left.currentSize:300, right: 200 }}
        initialWidths={{ left: 300, right: 200 }}
        getCurrentState={getGridState}
        gridId={5}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          harum perferendis placeat dicta id, quo nulla iure sequi explicabo
          laudantium.
        </div>
        <ResizableVerticalGrid
          gridId={6}
          initialHeight={'1fr'}
          getCurrentState={getGridState}
        >
          <div>
            {' '}
            <h1>Hello</h1>
            <button
            // onClick={() => setHorizontalGridSize({ left: 300, right: 400 })}
            >
              click
            </button>
            {/* {JSON.stringify(initialHorizontalGridWidths)}  */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eius
            iste. Ullam quae cumque explicabo recusandae praesentium magnam
            harum nam.
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
