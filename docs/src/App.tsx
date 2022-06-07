import { useState } from 'react'
import {
  ResizableHorizontalGrid,
  ResizableVerticalGrid,
  GridState,
  isHorizontalGrid,
  useResizeGridLocalStorage,
} from 'react-resizable-collapsible-grid'
import './App.css'
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'

function App() {
  const [isCollapsed, setIsCollapsed] = useState([false, false, false, false])
  const { getVerticalGridHeight, getHorizontalGridWidths, setResizeState } =
    useResizeGridLocalStorage()

  const getGridState = (gridState: GridState) => {
    if (isHorizontalGrid(gridState)) {
      // Resizable Horizontal Grid
    } else {
      // Resizable Vertical Grid
    }
    // save to localStorage
    setResizeState(gridState)
  }

  return (
    <div className="App">
      <header className="header">
        <div className="button-group">
          <button
            onClick={() => setIsCollapsed((c) => [!c[0], c[1], c[2], c[3]])}
          >
            left
          </button>
          <button
            onClick={() => setIsCollapsed((c) => [c[0], !c[1], c[2], c[3]])}
          >
            right
          </button>
          <button
            onClick={() => setIsCollapsed((c) => [c[0], c[1], !c[2], c[3]])}
          >
            top
          </button>
          <button
            onClick={() => setIsCollapsed((c) => [c[0], c[1], c[2], !c[3]])}
          >
            bottom
          </button>
        </div>
      </header>
      <ResizableHorizontalGrid
        // initialWidths={{ left: gridH.__typeName==='HorizontalGrid'?gridH.left.currentSize:300, right: 200 }}
        initialWidths={getHorizontalGridWidths(5, '15vw', 200)}
        getCurrentState={getGridState}
        gridId={5}
        collapseLeft={isCollapsed[0]}
        collapseRight={isCollapsed[1]}
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
          collapseTop={isCollapsed[2]}
          collapseBottom={isCollapsed[3]}
        >
          <div> dolor sit amet
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
         ipsum dolor sit amet, consectetur adipisicing elit. Dolores
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
