import Link from 'next/link'
import { FC } from 'react'
import classes from './header.module.scss'
import clsx from 'clsx'
import { getScopedI18n } from '@/locales/server'
import { LangSwitch } from '../LangSwitch/LangSwitch'

export const Header: FC = async () => {
  const t = await getScopedI18n('header')
  return (
    <header className={classes.wrapper}>
      <div className={clsx(classes.content, 'container')}>
        <h1 className={classes.title}>zeRET</h1>
        <nav className={classes.navbar}>
          <Link className={classes.link} href='/'>
            {t('home')}
          </Link>
          <Link className={classes.link} href='/about'>
            {t('about')}
          </Link>
          <Link className={classes.link} href='/articles'>
            {t('blog')}
          </Link>
          <LangSwitch variant='link' className={classes.link} />
        </nav>
      </div>
    </header>
  )
}
