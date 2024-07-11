'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { FC, useCallback, MouseEvent, ChangeEvent } from 'react'
import { IconWorld } from '@tabler/icons-react'
type Props = {
  variant: 'link' | 'select'
  className?: string
}

export const LangSwitch: FC<Props> = ({ variant, className }) => {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()
  const handleChangeLocale = useCallback(
    (e: MouseEvent | ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault()
      if (currentLocale === 'ru') {
        return changeLocale('en')
      }
      return changeLocale('ru')
    },
    [changeLocale, currentLocale],
  )
  if (variant === 'link') {
    return (
      <a
        className={className}
        href={currentLocale === 'ru' ? '#En' : '#Ru'}
        onClick={handleChangeLocale}
        aria-label='Change language'
      >
        <IconWorld />
      </a>
    )
  }
  return null
}
