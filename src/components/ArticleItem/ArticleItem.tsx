import { FC } from 'react'
import { Article } from '../../lib/api/articles/articles.types'
import dayjs from 'dayjs'
import { IconSlash } from '@tabler/icons-react'
import classes from './articleitem.module.scss'
import Link from 'next/link'
type Props = {
  article: Article
}

export const ArticleItem: FC<Props> = (props) => {
  const article = props.article
  return (
    <article>
      <div className={classes.top}>
        <div className={classes.headingSection}>
          <p className={classes.author}>{article.author.username}</p>
          <IconSlash className={classes.icon} />
          <Link href={`/articles/${article.id}`} className={classes.heading}>
            <h2>{article.title}</h2>
          </Link>
        </div>
        <p className={classes.timeDesktop}>
          {dayjs(article.created_at).format('DD.MM.YYYY HH:mm')}
        </p>
      </div>
      <div>
        <p>{article.description}</p>
      </div>
    </article>
  )
}
