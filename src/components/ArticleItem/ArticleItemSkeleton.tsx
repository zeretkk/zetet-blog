import { FC } from 'react'
import { IconSlash } from '@tabler/icons-react'

import classes from './articleitem.module.scss'
import { Skeleton } from '@mantine/core'

export const ArticleItemSkeleton: FC = () => {
  return (
    <article>
      <div className={classes.top}>
        <div className={classes.headingSection}>
          <Skeleton width={80} height={18} className={classes.author} />
          <IconSlash className={classes.icon} />
          <Skeleton className={classes.heading} height={16} width={200} />
        </div>
        <Skeleton className={classes.timeDesktop} height={18} width={200} />
      </div>
      <div>
        <Skeleton width={'100%'} height={32} />
      </div>
    </article>
  )
}
