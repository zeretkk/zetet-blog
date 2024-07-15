'use client'
import { FC } from 'react'
import { useArticleByIdQuery } from '@/lib/api/articles/articles.query'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import classes from './articleview.module.scss'

type Props = {
  id: number
}

export const ArticleView: FC<Props> = ({ id }) => {
  const { data: article } = useArticleByIdQuery(id)
  if (!article) {
    notFound()
  }
  return (
    <div className={classes.wrapper}>
      <article className={classes.content}>
        <div className={classes.head}>
          <div className={classes.headInfo}>
            <h1 className={classes.heading}>{article?.title}</h1>
            <p>{dayjs(article?.created_at).format('DD.MM.YYYY HH:mm')}</p>
          </div>
          {article.posterUrl && (
            <Image
              className={classes.image}
              alt={article.title}
              src={article.posterUrl}
              width={600}
              height={300}
            />
          )}
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: article?.body }} className={classes.body}></div>
      </article>
      <div className={classes.commentsContainer}>
        <hr />
        <p className={classes.commentsHeading}>Комментарии:</p>
        {/* <hr /> */}
      </div>
    </div>
  )
}
