import dayjs from 'dayjs'
import { FC } from 'react'
import classes from './footer.module.scss'
import clsx from 'clsx'
import { IconBrandGithub, IconBrandVk } from '@tabler/icons-react'
import { Container } from '@mantine/core'

export const Footer: FC = () => {
  return (
    <footer className={classes.wrapper}>
      <Container className={clsx(classes.content)}>
        <p>
          Kirill <span>Zeret</span> &copy; {dayjs().year()}
        </p>
        <div className={classes.socialLinks}>
          <a href='https://vk.com/kirillzeret' target='_blank' rel='nofollow noreferrer'>
            <IconBrandVk />
          </a>
          <a href='https://github.com/zeretkk' target='_blank' rel='nofollow noreferrer'>
            <IconBrandGithub />
          </a>
        </div>
      </Container>
    </footer>
  )
}
