import React from 'react'
import styles from './collapseButton.module.css'

type CollapseButtonProps = {
  children: React.ReactNode
  buttonFor: 'left' | 'right' | 'top' | 'bottom'
  action: (
    // eslint-disable-next-line
    value: React.SetStateAction<{
      left: boolean
      right: boolean
      top: boolean
      bottom: boolean
    }>
  ) => void
}

const initialButtonState = {
  left: false,
  right: false,
  top: false,
  bottom: false,
}

type CollapsedGridButtonState = typeof initialButtonState

export default function CollapseButton({
  children,
  buttonFor,
  action,
}: CollapseButtonProps) {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() =>
        action((value) => ({ ...value, [buttonFor]: !value[buttonFor] }))
      }
    >
      {children}
    </button>
  )
}

export { initialButtonState }
export type { CollapsedGridButtonState }
