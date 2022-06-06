import { useState } from 'react'
import {
  ResizableHorizontalGrid,
  ResizableVerticalGrid,
  HorizontalGridWidths,
} from 'react-resizable-collapsible-grid'
import './App.css'
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'

function App() {
  const [initialHorizontalGridWidths, setHorizontalGridSize] =
    useState<HorizontalGridWidths>({ left: 500, right: 400 })

    const getHorizontalGridWidths = (currentWidths: HorizontalGridWidths) => {
      console.log(JSON.stringify(currentWidths))
      setHorizontalGridSize(currentWidths)
    }

  return (
    <div className="App">
      <ResizableHorizontalGrid
        initialWidths={{left:300,right:200}}
        getCurrentWidths={getHorizontalGridWidths}
        gridId={5}
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          harum perferendis placeat dicta id, quo nulla iure sequi explicabo
          laudantium.
        </div>
        <ResizableVerticalGrid initialHeight={200}>
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
        </ResizableVerticalGrid>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          harum perferendis placeat dicta id, quo nulla iure sequi explicabo
          laudantium.
        </div>
      </ResizableHorizontalGrid>
    </div>
  )
}

export default App
