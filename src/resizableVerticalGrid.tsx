import React, { useState, useRef, useEffect } from 'react'

import styles from './resizableVerticalGrid.module.css'

type ResizableGrid = {
  children: React.ReactNode[]
  minHeight?: number
  collapseTop?: boolean
  collapseBottom?: boolean
  initialHeight?: string
}

function ResizableVerticalGrid({
  children,
  minHeight = 100,
  initialHeight = '1fr',
  collapseTop = false,
  collapseBottom = false,
}: ResizableGrid) {
  const [panelHeight, setPanelHeight] = useState(
    collapseBottom || collapseTop ? -2 : -1
  )
  const [storedPanelHeight, setStoredHeight] = useState(0)

  const [isResizing, setIsResizing] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  /** Called on this grid for resizing */
  const resizeMouse = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    resize(e.clientY)
  }

  const resize = (mouseY: number) => {
    if (!isResizing) return
    const gridHeight = gridRef.current?.clientHeight ?? 0
    const topOffset = gridRef.current?.offsetTop ?? 0
    const minBottom = gridHeight - minHeight

    let newPosition = mouseY - topOffset
    if (newPosition < minHeight) newPosition = minHeight
    if (newPosition > minBottom) {
      newPosition = minBottom
    }
    setPanelHeight(newPosition)
  }

  const resizeFinish = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isResizing) {
      setIsResizing(false)
    }
  }

  const handleLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const gridHeight = gridRef.current?.clientHeight ?? 0
    const topOffset = gridRef.current?.offsetHeight ?? 0
    const mouseY = e.clientY
    const gridTop = topOffset - mouseY
    if (mouseY <= gridTop || mouseY >= gridHeight + topOffset) {
      setIsResizing(false)
    }
  }

  const gridStyle = () => {
    // initially set to -1 on render
    if (panelHeight === -1) {
      return {
        gridTemplateRows: `calc(50% - 2px) 5px 1fr`,
      }
    }
    // if any are collapsed show single cell
    if (collapseTop || collapseBottom) {
      return { gridTemplateRows: `1fr` }
    }
    // split at the stored value.
    return { gridTemplateRows: `${panelHeight}px 5px 1fr` }
  }

  useEffect(() => {
    const gridHeight = gridRef.current?.clientHeight ?? 1

    // initial render panelHeight is -1 or -2 if collapsed
    // we can set storedPanelHeight to 50% of gridHeight
    if (panelHeight < 0) {
      setStoredHeight(gridHeight / 2)
    }
    if (collapseBottom || collapseTop) {
      // storedPanelHeight initial value is 0
      if (storedPanelHeight === 0) {
        setStoredHeight(gridHeight / 2)
      } else {
        setStoredHeight(panelHeight)
      }
    } else if (panelHeight > 0) {
      setPanelHeight(storedPanelHeight)
    }
  }, [collapseBottom, collapseTop])

  return (
    <div
      ref={gridRef}
      className={styles.container}
      style={gridStyle()}
      onMouseMove={resizeMouse}
      onMouseUp={resizeFinish}
      onMouseLeave={handleLeave}
    >
      {children.length > 0 && !collapseTop && children[0]}
      {!collapseTop && !collapseBottom && (
        <Divider setIsResizing={setIsResizing} resize={resize} />
      )}
      {!collapseBottom && children.length > 1 && children[1]}
    </div>
  )
}

type DividerProps = {
  setIsResizing: React.Dispatch<React.SetStateAction<boolean>>
  isCollapsed?: boolean
  resize: (mouseY: number) => void
}

function Divider({ setIsResizing, isCollapsed = false, resize }: DividerProps) {
  return (
    <div
      className={isCollapsed ? '' : styles.divider}
      // className={
      //   isCollapsed
      //     ? ''
      //     : 'resizable-grid__divider resizable-grid__divider--vertical'
      // }
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={() => setIsResizing(true)}
      onTouchEnd={() => setIsResizing(false)}
      onTouchMove={(e) => resize(e.nativeEvent.touches[0].clientY)}
    ></div>
  )
}

export default ResizableVerticalGrid
