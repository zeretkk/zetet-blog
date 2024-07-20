import { FC } from 'react'
import { Article } from '@/lib/api/articles/articles.types'
import dayjs from 'dayjs'
import { IconSlash } from '@tabler/icons-react'
import classes from './articleitem.module.scss'
import Link from 'next/link'
import { Anchor } from '@mantine/core'
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
          <Anchor component={Link} href={`/articles/${article.id}`} underline={'always'}>
            <h2>{article.attributes.title}</h2>
          </Anchor>
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
