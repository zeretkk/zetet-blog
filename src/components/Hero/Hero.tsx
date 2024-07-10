import { FC } from 'react'
import classes from './hero.module.scss'

export const Hero: FC = () => {
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.title}>Kirill zeRET</h1>
      <p>персональная страница frontend-разработчика</p>
    </section>
  )
}
