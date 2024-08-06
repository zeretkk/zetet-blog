import Link from 'next/link'
import { FC } from 'react'
import classes from './header.module.scss'
import clsx from 'clsx'
import { getScopedI18n } from '@/locales/server'
import { LangSwitch } from '@/components/LangSwitch'
import { Container, Title } from '@mantine/core'
import { HeaderMenu } from '@/components/HeaderMenu'

export const Header: FC = async () => {
  const t = await getScopedI18n('header')
  return (
    <header className={classes.wrapper}>
      <Container className={clsx(classes.content)}>
        <Title component={'p'} c={'black'} className={classes.title}>
          zeRET
        </Title>
        <nav className={classes.navbar}>
          <Link className={classes.link} href='/'>
            {t('home')}
          </Link>
          <Link className={classes.link} href='/about'>
            {t('about')}
          </Link>
          <HeaderMenu />
          <LangSwitch variant='link' className={clsx(classes.link, classes.link_always)} />
        </nav>
      </Container>
    </header>
  )
}
