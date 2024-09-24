import { Metadata, NextPage } from 'next'
import Image from 'next/image'
import classes from './not-found.module.scss'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resource not found',
}

const NotFoundPage: NextPage = async () => {
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
        image by:
        <a href='https://twitter.com/sawaratsuki1004' target='_blank'>
          @sawaratsuki1004
        </a>
      </p>
      <Link href='/' className={classes.link}>
        Back to home
      </Link>
    </div>
  )
}
export default NotFoundPage
