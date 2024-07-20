'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { FC, useCallback, MouseEvent, ChangeEvent } from 'react'
import { IconWorld } from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
type Props = {
  variant: 'link' | 'select'
  className?: string
}

export const LangSwitch: FC<Props> = ({ variant, className }) => {
  const currentLocale = useCurrentLocale()
  const pathname = usePathname()
  const router = useRouter()
  const changeLocale = useChangeLocale()
  const handleChangeLocale = useCallback(
    (e: MouseEvent | ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault()
      const are = /\/articles\/\d/gm
      if (are.test(pathname)) {
        return router.push(`/${currentLocale === 'ru' ? 'en' : 'ru'}/articles/`)
      }
      changeLocale(currentLocale === 'ru' ? 'en' : 'ru')
    },
    [changeLocale, currentLocale, pathname, router],
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
