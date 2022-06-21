import React, { useState } from 'react'
/** Library we are using for demo */
import {
  ResizableHorizontalGrid,
  ResizableVerticalGrid,
  GridState,
  isHorizontalGrid,
  useResizeGridLocalStorage,
} from 'react-resizable-collapsible-grid'

/** Local Components */
import Header from './components/header'
import PlaceholderText from './components/placeholderText'
import CollapseButton, {
  initialButtonState,
  CollapsedGridButtonState,
} from './components/collapseButton'
import Hero from './components/hero'

/** CSS */
import './App.css'

function App() {
  const [isCollapsed, setIsCollapsed] =
    useState<CollapsedGridButtonState>(initialButtonState)

  const { getVerticalGridHeight, getHorizontalGridWidths, setResizeState } =
    useResizeGridLocalStorage()

  /**
   * If you need to do store the state of your components,
   * use a function like this to access it, then use the
   * libraries isHorizontalGrid or isVerticalGrid to further
   * filter your data if need be.
   */
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
        {isCollapsed.top && (
          <div className="button-group">
            <CollapseButton action={setIsCollapsed} buttonFor="top">
              Toggle Top
            </CollapseButton>
          </div>
        )}
      </header>
      <ResizableHorizontalGrid
        initialWidths={getHorizontalGridWidths(5, '15vw', 200)}
        getCurrentState={getGridState}
        gridId={5}
        collapseLeft={isCollapsed.left}
        collapseRight={isCollapsed.right}
      >
        <PlaceholderText />
        <ResizableVerticalGrid
          gridId={6}
          initialHeight={getVerticalGridHeight(6)}
          getCurrentState={getGridState}
          collapseTop={isCollapsed.top}
          collapseBottom={isCollapsed.bottom}
        >
          <PlaceholderText className="centered">
            <Header />
            <Hero dispatchAction={setIsCollapsed} />
          </PlaceholderText>
          <PlaceholderText />
        </ResizableVerticalGrid>
        <PlaceholderText />
      </ResizableHorizontalGrid>
    </div>
  )
}

export default App
