import {
  ResizableHorizontalGrid,
  ResizableVerticalGrid,
} from 'react-resizable-collapsible-grid'
// import Grid from 'react-resizable-collapsible-grid/src/grid'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <ResizableHorizontalGrid>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          harum perferendis placeat dicta id, quo nulla iure sequi explicabo
          laudantium.
        </div>
        <ResizableVerticalGrid>
          <div>
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
