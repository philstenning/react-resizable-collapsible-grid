import React from 'react'
import styles from './resizableHorizontalDivider.module.css'

type DividerProps = {
  id: number
  isCollapsed: boolean
  // eslint-disable-next-line
  handleResize: (isResizing: boolean, currentPanel: number) => void
  // eslint-disable-next-line
  resize: (mousePosition: number) => void
}

function Divider({ handleResize, id, isCollapsed, resize }: DividerProps) {
  const handleMouseEvent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation()
    e.preventDefault()
    handleResize(true, id)
  }

  const handleStartTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    // e.preventDefault()
    e.stopPropagation()
    handleResize(true, id)
  }
  const handleEndTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    handleResize(false, id)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    resize(e.nativeEvent.touches[0].clientX)
  }
  return (
    <div
      onMouseDown={handleMouseEvent}
      className={isCollapsed ? '' : styles.divider}
      onTouchStart={handleStartTouch}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEndTouch}
      role="presentation"
    />
  )
}

export default Divider
