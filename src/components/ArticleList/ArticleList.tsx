'use client'

import { useArticlesQuery } from '@/lib/api/articles/articles.query'
import { FC } from 'react'
import { ArticleItem } from '../ArticleItem/ArticleItem'
import { ArticleItemSkeleton } from '../ArticleItem/ArticleItemSkeleton'
import { Button, Flex } from '@mantine/core'
import { useI18n } from '@/locales/client'

export const ArticleList: FC = () => {
  const {
    data: articles,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useArticlesQuery()
  const t = useI18n()
  return (
    <Flex align={'stretch'} direction={'column'} gap={'md'} py='md'>
      {isLoading ? (
        new Array(12).fill(0).map((_, idx) => <ArticleItemSkeleton key={idx} />)
      ) : (
        <>
          {articles?.pages?.map((page) =>
            page.data?.map((article) => <ArticleItem article={article} key={article.id} />),
          )}
        </>
      )}
      {hasNextPage && (
        <Button
          variant='subtle'
          color='green'
          loading={isFetchingNextPage}
          disabled={isFetchingNextPage}
          onClick={() => {
            fetchNextPage()
          }}
        >
          {t('button.more')}
        </Button>
      )}
    </Flex>
  )
}
