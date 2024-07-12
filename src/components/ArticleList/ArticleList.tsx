'use client'

import { useArticlesQuery } from '@/lib/api/articles/articles.query'
import { FC } from 'react'
import { ArticleItem } from '../ArticleItem/ArticleItem'
import classes from './articlelist.module.scss'
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton'

export const ArticleList: FC = () => {
  const { data: articles, isLoading } = useArticlesQuery()
  return (
    <section className={classes.wrapper}>
      {isLoading ? (
        new Array(12).fill(0).map((_, idx) => <ArticleItemSkeleton key={idx} />)
      ) : (
        <>
          {articles?.pages?.map((page) =>
            page.data?.map((article) => <ArticleItem article={article} key={article.id} />),
          )}
        </>
      )}
    </section>
  )
}
