import { getScopedI18n } from '@/locales/server'
import { FC } from 'react'
import classes from './underconstruction.module.scss'

export const UnderConstruction: FC = async () => {
  const t = await getScopedI18n('tech')
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>{t('wip')}</p>
    </div>
  )
}
