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

const initialButtonState = {
  left: false,
  right: false,
  top: false,
  bottom: false,
}
type CollapsedGridButtonState = typeof initialButtonState

function App() {
  const [isCollapsed, setIsCollapsed] =
    useState<CollapsedGridButtonState>(initialButtonState)

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
          <CollapseButton action={setIsCollapsed} buttonFor={'left'}>Left</CollapseButton>
          <CollapseButton action={setIsCollapsed} buttonFor={'right'} >Right</CollapseButton>
          <CollapseButton action={setIsCollapsed} buttonFor={'top'} >Top</CollapseButton>
          <CollapseButton action={setIsCollapsed} buttonFor={'bottom'}>Bottom</CollapseButton>
        </div>
      </header>
      <ResizableHorizontalGrid
        initialWidths={getHorizontalGridWidths(5, '15vw', 200)}
        getCurrentState={getGridState}
        gridId={5}
        collapseLeft={isCollapsed.left}
        collapseRight={isCollapsed.right}
      >
        <PlaceholderText title='Left' />
        <ResizableVerticalGrid
          gridId={6}
          initialHeight={getVerticalGridHeight(6)}
          getCurrentState={getGridState}
          collapseTop={isCollapsed.top}
          collapseBottom={isCollapsed.bottom}
        >
          <PlaceholderText title='Top'/>
          <PlaceholderText title='Bottom' />
        </ResizableVerticalGrid>
        <PlaceholderText title='Right' />
      </ResizableHorizontalGrid>
    </div>
  )
}

export default App

type CollapseButtonProps = {
  children: React.ReactNode
  buttonFor: 'left' | 'right' | 'top' | 'bottom'
  action: (
    value: React.SetStateAction<{
      left: boolean
      right: boolean
      top: boolean
      bottom: boolean
    }>
  ) => void
}

function CollapseButton({children, buttonFor, action }: CollapseButtonProps) {
  return (
    <button
      onClick={() =>
        action((value) => ({ ...value, [buttonFor]: !value[buttonFor] }))
      }
    >
      {children}
    </button>
  )
}

function PlaceholderText({title}:{title?:string}) {
  return (
    <div className="resizable-grid__content">
      {title && <h2>{title}</h2>}
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
      inventore eum cum. Ducimus dignissimos sapiente, vero a facilis sit
      eveniet explicabo voluptatibus ullam, hic alias consequuntur ipsum? Quae
      necessitatibus ut rerum corrupti quas esse, iure itaque asperiores, culpa
      porro rem cupiditate, recusandae odit. Ullam placeat, ipsam quos nobis
      cumque repudiandae sunt illo quis ipsa illum qui atque maiores
      reprehenderit eum architecto laborum deleniti eaque sint natus? Harum,
      facere quod. Non, voluptates qui consequatur quisquam illo nisi molestias
      in nulla culpa distinctio alias temporibus quia corrupti sequi provident
      nobis harum officiis maiores atque? Quidem magni aperiam dolor
      perspiciatis neque, ipsa maxime?
    </div>
  )
}
