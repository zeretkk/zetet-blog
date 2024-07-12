import { ArticleItem } from './ArticleItem'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { IconSlash } from '@tabler/icons-react'

import classes from './articleitem.module.scss'

export const ArticleItemSkeleton: FC = () => {
  return (
    <article>
      <div className={classes.top}>
        <div className={classes.headingSection}>
          <Skeleton width={80} className={classes.author} />
          <IconSlash className={classes.icon} />
          <Skeleton className={classes.heading} width={200} />
        </div>
        <Skeleton className={classes.timeDesktop} />
      </div>
      <div>
        <Skeleton width={'100%'} count={2} />
      </div>
    </article>
  )
}
