import React, { useState, CSSProperties, useRef, useEffect } from 'react'

import styles from './resizableHorizontalGrid.module.css'

type ResizableGrid = {
  children: React.ReactNode[]
  minWidth?: number
  collapseLeft?: boolean
  collapseRight?: boolean
}

function ResizableHorizontalGrid({
  children,
  collapseLeft = false,
  collapseRight = false,
  minWidth = 200,
}: ResizableGrid) {
  const [panelWidths, setPanelWidths] = useState([
    collapseLeft ? 0 : minWidth,
    collapseRight ? 0 : minWidth,
    minWidth,
    minWidth,
  ])
  const [currentPanel, setCurrentPanel] = useState(0)
  const [isResizing, setIsResizing] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const handleResize = (isResizing: boolean, currentPanel: number) => {
    setCurrentPanel(currentPanel)
    setIsResizing(isResizing)
  }

  useEffect(() => {
    if (collapseRight) {
      // save current to [3]
      setPanelWidths((current) => [current[0], 0, current[2], current[1]])
    } else {
      setPanelWidths((current) => [
        current[0],
        current[3], // set to pre-collapsed value [3]
        current[2],
        current[3],
      ])
    }
  }, [collapseRight])

  useEffect(() => {
    if (collapseLeft) {
      // save current to [2]
      setPanelWidths((current) => [0, current[1], current[0], current[3]])
    } else {
      setPanelWidths((current) => [
        current[2], // set to pre-collapsed value [2]
        current[1],
        current[2],
        current[3],
      ])
    }
  }, [collapseLeft])

  /** Called on this grid for resizing */
  const resizeMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // e.stopPropagation()
    // e.preventDefault()
    resize(e.clientX)
  }

  /** Called on divider touch event as well as resizeMouse above*/
  const resize = (mousePosition: number) => {
    if (!isResizing) return
    const gridWidth = gridRef.current?.clientWidth ?? 0
    const leftOffset = gridRef.current?.offsetLeft ?? 0
    const maxRight = gridWidth + leftOffset

    // Left hand panel
    if (currentPanel === 0) {
      let newVal = mousePosition - leftOffset
      // if it is collapsed set to zero
      if (collapseLeft) newVal = 0

      if (
        mousePosition >= leftOffset + minWidth &&
        mousePosition <= maxRight - (minWidth + panelWidths[1])
      ) {
        setPanelWidths((current) => [newVal, current[1], newVal, current[3]])
      }
    } else {
      // right hand panel
      let newVal = gridWidth - (mousePosition - leftOffset)
      if (newVal < minWidth) newVal = minWidth
      if (collapseRight) newVal = 0
      setPanelWidths((current) => [current[0], newVal, current[2], newVal])
    }
  }

  const resizeFinish = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isResizing) {
      setIsResizing(false)
    }
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

  /** changes column count on how many children are passed in*/
  const gridStyle = () => {
    const threeColumn = {
      gridTemplateColumns: `${panelWidths[0]}px ${
        collapseLeft ? '0' : '2px'
      } 1fr ${collapseRight ? '0' : '2px'} ${panelWidths[1]}px`,
    }
    const twoColumn = {
      gridTemplateColumns: `${panelWidths[0]}px ${
        collapseLeft ? '0' : '2px'
      } 1fr`,
    }
    return (children.length >= 3 ? threeColumn : twoColumn) as CSSProperties
  }

  return (
    <div
      ref={gridRef}
      className={styles.container}
      // className="resizable-grid"
      style={gridStyle()}
      onMouseMove={resizeMouse}
      onMouseUp={resizeFinish}
      onMouseLeave={handleLeave}
    >
      {children[0]}
      <Divider
        handleResize={handleResize}
        id={0}
        isCollapsed={collapseLeft}
        resize={resize}
      />
      {children.length >= 2 && children[1]}

      {children.length >= 3 && (
        <Divider
          handleResize={handleResize}
          isCollapsed={collapseRight}
          id={1}
          resize={resize}
        />
      )}
      {children.length >= 3 && children[2]}
    </div>
  )
}

type DividerProps = {
  id: number
  isCollapsed: boolean
  handleResize: (isResizing: boolean, currentPanel: number) => void
  resize: (mousePosition: number) => void
}

const Divider = ({ handleResize, id, isCollapsed, resize }: DividerProps) => {
  const handleMouseEvent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation()
    e.preventDefault()
    handleResize(true, id)
  }

  const handleTouchResize = (e: React.TouchEvent<HTMLDivElement>) => {
    resize(e.nativeEvent.touches[0].clientX)
  }
  return (
    <div
      onMouseDown={handleMouseEvent}
      // className={
      //   isCollapsed
      //     ? ''
      //     : 'resizable-grid__divider resizable-grid__divider--horizontal'
      // }
      className={isCollapsed ? '' : styles.divider}
      onTouchStart={() => handleResize(true, id)}
      onTouchMove={handleTouchResize}
      onTouchEnd={() => handleResize(false, id)}
    ></div>
  )
}

export default ResizableHorizontalGrid
