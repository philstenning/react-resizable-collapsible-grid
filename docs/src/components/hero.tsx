import CollapseButton from './collapseButton'

import styles from './hero.module.css'

type Props = {
  dispatchAction: (
    value: React.SetStateAction<{
      left: boolean
      right: boolean
      top: boolean
      bottom: boolean
    }>
  ) => void
}



export default function Hero({ dispatchAction }: Props) {
  return (
    <div className={styles.hero}>
      <h1 className={styles.hero__header}>
        react resizable <br /> collapsible grid
      </h1>

      <h2>components for building resizable web apps</h2>
      <ul className={styles.hero__list}>
        <li>resize handles for changing section size</li>
        <li>Collapsible sections for quick page layout change</li>
      </ul>
      <div className={styles['hero__button-group']}>
        <CollapseButton action={dispatchAction} buttonFor={'left'}>
          Toggle Left
        </CollapseButton>
        <CollapseButton action={dispatchAction} buttonFor={'bottom'}>
          Toggle Bottom
        </CollapseButton>
        <CollapseButton action={dispatchAction} buttonFor={'top'}>
          Toggle Top
        </CollapseButton>
        <CollapseButton action={dispatchAction} buttonFor={'right'}>
          Toggle Right
        </CollapseButton>
      </div>
    </div>
  )
}
