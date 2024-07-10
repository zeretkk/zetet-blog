import Link from 'next/link'
import { FC } from 'react'
import classes from './header.module.scss'
import clsx from 'clsx'

export const Header: FC = () => {
  return (
    <header className={classes.wrapper}>
      <div className={clsx(classes.content, 'container')}>
        <h1 className={classes.title}>zeRET</h1>
        <nav className={classes.navbar}>
          <Link className={classes.link} href='/'>
            Главная
          </Link>
          <Link className={classes.link} href='/about'>
            Информация
          </Link>
          <Link className={classes.link} href='/articles'>
            Блог
          </Link>
        </nav>
      </div>
    </header>
  )
}
