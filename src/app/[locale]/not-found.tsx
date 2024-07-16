import { NextPage } from 'next'
import Image from 'next/image'
import classes from './not-found.module.scss'
import Link from 'next/link'
import { getScopedI18n } from '@/locales/server'

const NotFoundPage: NextPage = async () => {
  const t = await getScopedI18n('tech.notFound')
  return (
    <div className={classes.wrapper}>
      <Image
        src={'/404 NotFound.png'}
        className={classes.image}
        width={600}
        height={340}
        alt='404'
      />
      <p className={classes.rights}>
        {t('author')}:{' '}
        <a href='https://twitter.com/sawaratsuki1004' target='_blank'>
          @sawaratsuki1004
        </a>
      </p>
      <Link href='/' className={classes.link}>
        {t('link')}
      </Link>
    </div>
  )
}
export default NotFoundPage
