import { FC } from 'react'
import classes from './hero.module.scss'
import {  getScopedI18n } from '@/locales/server'

export const Hero: FC = async () => {
  const t = await getScopedI18n('hero')
  return (
    <section className={classes.wrapper}>
      <h1 className={classes.title}>{t('title')}</h1>
      <p>{t('description')}</p>
    </section>
  )
}
