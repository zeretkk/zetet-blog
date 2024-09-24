import Link from 'next/link'
import { FC } from 'react'
import classes from './header.module.scss'
import clsx from 'clsx'
import { Container, Title } from '@mantine/core'
import { HeaderMenu } from '@/components/HeaderMenu'

export const Header: FC = async () => {
  return (
    <header className={classes.wrapper}>
      <Container className={clsx(classes.content)}>
        <Title component={'p'} c={'black'} className={classes.title}>
          zeRET
        </Title>
        <nav className={classes.navbar}>
          <Link className={classes.link} href='/'>
            Главная
          </Link>
          <Link className={classes.link} href='/about'>
            Информация
          </Link>
          <HeaderMenu />
        </nav>
      </Container>
    </header>
  )
}
