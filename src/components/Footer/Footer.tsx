import dayjs from 'dayjs'
import { FC } from 'react'
import classes from './footer.module.scss'
import clsx from 'clsx'
import { IconBrandGithub, IconBrandVk } from '@tabler/icons-react'

export const Footer: FC = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={clsx(classes.content, 'container')}>
        <p>
          Kirill <span>Zeret</span> &copy; {dayjs().year()}
        </p>
        <div className={classes.socialLinks}>
          <a href='https://vk.com/kirillzeret' target='_blank'>
            <IconBrandVk />
          </a>
          <a href='https://github.com/zeretkk' target='_blank'>
            <IconBrandGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}
