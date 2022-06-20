import React from 'react'
import styles from './resizableVerticalDivider.module.css'

type DividerProps = {
  setIsResizing: React.Dispatch<React.SetStateAction<boolean>>
  isCollapsed?: boolean
  // eslint-disable-next-line
  resize: (mouseY: number) => void
  // eslint-disable-next-line
  resizeFinished: (e: React.TouchEvent<HTMLDivElement>) => void
}

function Divider({
  setIsResizing,
  isCollapsed = false,
  resize,
  resizeFinished,
}: DividerProps) {
  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsResizing(true)
  }
  const handleEndTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    resizeFinished(e)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.stopPropagation()
    resize(e.nativeEvent.touches[0].clientY)
  }
  return (
    <div
      className={isCollapsed ? '' : styles.divider}
      onMouseDown={() => setIsResizing(true)}
      onTouchStart={handleTouch}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEndTouch}
      role="presentation"
    />
  )
}

export default Divider
