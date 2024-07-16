'use client'
import { Menu, MenuDropdown, MenuItem, MenuTarget } from '@mantine/core'
import { FC, useState } from 'react'
import classes from './headermenu.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
import { useScopedI18n } from '@/locales/client'
import { IconMenu } from '@tabler/icons-react'

export const HeaderMenu: FC = () => {
  const [opened, setOpened] = useState(false)
  const t = useScopedI18n('header')

  return (
    <Menu trigger='click-hover' opened={opened} onChange={setOpened}>
      <MenuTarget>
        <p className={clsx(classes.trigger, { [classes.activeTrigger]: opened })}>
          <IconMenu />
        </p>
      </MenuTarget>
      <MenuDropdown
        classNames={{
          dropdown: classes.dropdown,
        }}
      >
        <MenuItem
          component={Link}
          href={'/articles'}
          py={12}
          pr={36}
          pl={'sm'}
          c='white'
          classNames={{
            item: classes.itemRoot,
            itemLabel: classes.itemLabel,
          }}
        >
          {t('blog')}
        </MenuItem>
      </MenuDropdown>
    </Menu>
  )
}
