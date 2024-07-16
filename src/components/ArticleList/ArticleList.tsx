'use client'

import { useArticlesQuery } from '@/lib/api/articles/articles.query'
import { FC } from 'react'
import { ArticleItem } from '../ArticleItem/ArticleItem'
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton'
import { Flex } from '@mantine/core'

export const ArticleList: FC = () => {
  const { data: articles, isLoading } = useArticlesQuery()
  return (
    <Flex align={'stretch'} direction={'column'} gap={'md'}>
      {isLoading ? (
        new Array(12).fill(0).map((_, idx) => <ArticleItemSkeleton key={idx} />)
      ) : (
        <>
          {articles?.pages?.map((page) =>
            page.data?.map((article) => <ArticleItem article={article} key={article.id} />),
          )}
        </>
      )}
    </Flex>
  )
}
