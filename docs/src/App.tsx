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
        {isCollapsed.top && (
          <div className="button-group">
            {/* <CollapseButton action={setIsCollapsed} buttonFor={'left'}>
            Left
          </CollapseButton>
          <CollapseButton action={setIsCollapsed} buttonFor={'right'}>
            Right
          </CollapseButton> */}
            <CollapseButton action={setIsCollapsed} buttonFor={'top'}>
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
        <PlaceholderText title="Left" />
        <ResizableVerticalGrid
          gridId={6}
          initialHeight={getVerticalGridHeight(6)}
          getCurrentState={getGridState}
          collapseTop={isCollapsed.top}
          collapseBottom={isCollapsed.bottom}
        >
          <PlaceholderText className="centered">
            <div className="hero">
              <h1 className="hero__header">
                react resizable <br /> collapsible grid
              </h1>
              <ul className="hero__list">
                <li>resize handles for changing section size</li>
                <li>Collapsible sections for quick page layout change</li>
              </ul>
              <div className="hero__button-group">
                <CollapseButton action={setIsCollapsed} buttonFor={'left'}>
                  Toggle Right
                </CollapseButton>
                <CollapseButton action={setIsCollapsed} buttonFor={'bottom'}>
                  Toggle Bottom
                </CollapseButton>
                <CollapseButton action={setIsCollapsed} buttonFor={'top'}>
                  Toggle Top
                </CollapseButton>
                <CollapseButton action={setIsCollapsed} buttonFor={'right'}>
                  Toggle Right
                </CollapseButton>
              </div>
            </div>
          </PlaceholderText>
          <PlaceholderText title="Bottom" />
        </ResizableVerticalGrid>
        <PlaceholderText title="Right" />
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

function CollapseButton({ children, buttonFor, action }: CollapseButtonProps) {
  return (
    <button className='hero__btn'
      onClick={() =>
        action((value) => ({ ...value, [buttonFor]: !value[buttonFor] }))
      }
    >
      {children}
    </button>
  )
}

type PlaceholderTextProp = {
  children?: React.ReactNode
  title?: string
  className?: string
}

function PlaceholderText({ title, className, children }: PlaceholderTextProp) {
  return (
    <div className={`resizable-grid__content ${className ? className : ''}`}>
      {/* {title && <h2>{title}</h2>} */}
      {!children && (
        <div className="sudo-text">
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>

          <div className="sudo-text__box sudo-text__box--1"></div>
          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>

          <div className="sudo-text__box sudo-text__box--3"></div>
          <div className="sudo-text__box sudo-text__box--2"></div>
          <div className="sudo-text__box sudo-text__box--1"></div>




         

         
        </div>
      )}
      {children}
    </div>
  )
}
