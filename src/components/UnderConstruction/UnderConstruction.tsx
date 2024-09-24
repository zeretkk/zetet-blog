import { FC } from 'react'
import classes from './underconstruction.module.scss'

export const UnderConstruction: FC = async () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>Страница находится в разработке</p>
    </div>
  )
}
