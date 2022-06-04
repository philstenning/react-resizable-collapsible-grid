import {useState} from 'react'
import {
  ResizableHorizontalGrid,
  ResizableVerticalGrid,
} from 'react-resizable-collapsible-grid'
import './App.css'
import 'react-resizable-collapsible-grid/dist/resizableGrid.css'


function App() {
  const [horizontalGridSize, setHorizontalGridSize] = useState([0,0,0])
  return (
    <div className="App">
      <ResizableHorizontalGrid>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          harum perferendis placeat dicta id, quo nulla iure sequi explicabo
          laudantium.
        </div>
        <ResizableVerticalGrid>
          <div>
            {' '}
            <h1>Hello</h1>
            {horizontalGridSize}
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
      </ResizableHorizontalGrid>
    </div>
  )
}

export default App
