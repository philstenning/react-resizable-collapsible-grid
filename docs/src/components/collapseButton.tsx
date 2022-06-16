import styles from './collapseButton.module.css'

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

type CollapsedGridButtonState = typeof initialButtonState

const initialButtonState = {
  left: false,
  right: false,
  top: false,
  bottom: false,
}

export default function CollapseButton({ children, buttonFor, action }: CollapseButtonProps) {
  return (
    <button
      className={styles.btn}
      onClick={() =>
        action((value) => ({ ...value, [buttonFor]: !value[buttonFor] }))
      }
    >
      {children}
    </button>
  )
}

export {initialButtonState}
export type { CollapsedGridButtonState }
