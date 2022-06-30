import React, { useState, CSSProperties, useRef, useEffect } from 'react'
import Divider from './resizableHorizontalDivider'
import styles from './resizableHorizontalGrid.module.css'

export type HorizontalGridWidths = {
  left: number | string
  right: number | string
}

export type HorizontalGridSideState = {
  isCollapsed: boolean
  // preCollapsedSize: number | string
  currentSize: number | string
}
export type HorizontalGridState = {
  __typeName: 'HorizontalGrid'
  gridId: number | string
  left: HorizontalGridSideState
  right: HorizontalGridSideState
}

type ResizableHorizontalGridProps = {
  children: React.ReactNode[]
  gridId?: number | string
  minWidth?: number
  collapseLeft?: boolean
  collapseRight?: boolean
  initialWidths?: HorizontalGridWidths
  className?: string

  // eslint-disable-next-line
  getCurrentState?: ({ gridId, left, right }: HorizontalGridState) => void
}

function ResizableHorizontalGrid({
  children,
  getCurrentState,
  initialWidths = { left: '20%', right: '20vw' },
  collapseLeft = false,
  collapseRight = false,
  minWidth = 50,
  gridId = 0,
  className,
}: ResizableHorizontalGridProps) {
  const [panelWidths1, setPanelWidths1] = useState({
    left: initialWidths.left,
    right: initialWidths.right,
  })

  const [leftIsCollapsed, setLeftIsCollapsed] = useState(collapseLeft)
  const [rightIsCollapsed, setRightIsCollapsed] = useState(collapseRight)

  const [currentPanel, setCurrentPanel] = useState(0)
  const [isResizing, setIsResizing] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const updateParentContainer = () => {
    // return state to parent container
    if (getCurrentState) {
      getCurrentState({
        __typeName: 'HorizontalGrid',
        gridId,
        left: {
          currentSize: panelWidths1.left,
          isCollapsed: collapseLeft,
        },
        right: {
          currentSize: panelWidths1.right,
          isCollapsed: collapseLeft,
        },
      })
    }
  }

  const handleResize = (_isResizing: boolean, _currentPanel: number) => {
    setCurrentPanel(_currentPanel)
    setIsResizing(_isResizing)
    if (!_isResizing) {
      updateParentContainer()
    }
  }

  useEffect(() => {
    setRightIsCollapsed(collapseRight)
  }, [collapseRight])

  useEffect(() => {
    setLeftIsCollapsed(collapseLeft)
  }, [collapseLeft])

  /** Called on divider touch event as well as resizeMouse above*/
  const resize = (mousePosition: number) => {
    if (!isResizing) return
    const gridWidth = gridRef.current?.clientWidth ?? 0
    const leftOffset = gridRef.current?.offsetLeft ?? 0
    // the right hand side of the grid relative to the
    // position of grid in the viewport
    const maxRight = gridWidth + leftOffset

    // Left hand panel
    if (currentPanel === 0) {
      let newVal = mousePosition - leftOffset

      // the value might be a string, if it is we can't convert to a number, so set to the
      // minimum width value. As soon as the mouse/touch has moved it will be a number.
      const maybeInitialString =
        typeof panelWidths1.right === 'number' ? panelWidths1.right : minWidth
      // if it is collapsed set to zero
      if (collapseLeft) newVal = 0

      if (
        mousePosition >= leftOffset + minWidth &&
        mousePosition <= maxRight - (minWidth + maybeInitialString)
      ) {
        // setPanelWidths((current) => [newVal, current[1], newVal, current[3]])
        setPanelWidths1((current) => ({ ...current, left: newVal }))
      }
    } else {
      // right hand panel
      let newVal = gridWidth - (mousePosition - leftOffset)
      if (newVal < minWidth) newVal = minWidth
      if (collapseRight) newVal = 0
      // setPanelWidths((current) => [current[0], newVal, current[2], newVal])
      setPanelWidths1((current) => ({ ...current, right: newVal }))
    }
  }

  /** Called on this grid for resizing */
  const resizeMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    resize(e.clientX)
  }

  const resizeFinish = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isResizing) {
      e.stopPropagation()
      setIsResizing(false)
    }
    updateParentContainer()
  }

  /**  If the mouse cursor goes outside of the grid
   *  we need to cancel resizing*/
  const handleLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const gridWidth = gridRef.current?.clientWidth ?? 0
    const offset = gridRef.current?.offsetLeft ?? 0
    const mousePosition = e.clientX
    const zero = offset - mousePosition

    if (mousePosition === zero || mousePosition >= gridWidth + offset) {
      setIsResizing(false)
    }
  }

  const columnWidthAsString = (
    cssWidth: number | string,
    isCollapsed: boolean
  ) => {
    if (typeof cssWidth === 'number') {
      return isCollapsed ? '' : `${cssWidth}px`
    }
    return `${isCollapsed ? '' : cssWidth}`
  }
  /** changes column count on how many children are passed in*/
  const gridStyle = () => {
    if (children.length > 2) {
      return {
        gridTemplateColumns: `${columnWidthAsString(
          panelWidths1.left,
          leftIsCollapsed
        )} ${leftIsCollapsed ? '' : '2px'} 1fr ${
          rightIsCollapsed ? '' : '2px'
        } ${columnWidthAsString(panelWidths1.right, rightIsCollapsed)}`,
      } as CSSProperties
    }
    // Two columns
    return {
      gridTemplateColumns: `${columnWidthAsString(
        panelWidths1.left,
        leftIsCollapsed
      )} ${leftIsCollapsed ? '' : '2px'} 1fr`,
    } as CSSProperties
  }

  return (
    <div
      ref={gridRef}
      className={`${styles.container} ${className}`}
      style={gridStyle()}
      onMouseMove={resizeMouse}
      onMouseUp={resizeFinish}
      onMouseLeave={handleLeave}
      role="presentation"
    >
      {!leftIsCollapsed && children[0]}
      {!leftIsCollapsed && (
        <Divider
          handleResize={handleResize}
          id={0}
          isCollapsed={leftIsCollapsed}
          resize={resize}
        />
      )}
      {children.length >= 2 && children[1]}

      {!rightIsCollapsed && children.length >= 3 && (
        <Divider
          handleResize={handleResize}
          isCollapsed={rightIsCollapsed}
          id={1}
          resize={resize}
        />
      )}
      {!rightIsCollapsed && children.length >= 3 && children[2]}
    </div>
  )
}

export default ResizableHorizontalGrid
