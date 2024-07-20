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
          <p className={classes.author}>{article.attributes.author.data.attributes.firstname}</p>
          <IconSlash className={classes.icon} />
          <Link href={`/articles/${article.id}`} className={classes.heading}>
            <h2>{article.attributes.title}</h2>
          </Link>
        </div>
        <p className={classes.timeDesktop}>
          {dayjs(article.attributes.createdAt).format('DD.MM.YYYY HH:mm')}
        </p>
      </div>
      <div>
        <p>{article.attributes.description}</p>
      </div>
    </article>
  )
}
