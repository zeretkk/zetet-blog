'use client'

import { useArticlesQuery } from '@/lib/api/articles/articles.query'
import { FC } from 'react'
import { ArticleItem } from '@/components/ArticleItem/ArticleItem'
import { ArticleItemSkeleton } from '@/components/ArticleItem/ArticleItemSkeleton'
import { Button, Center, Flex } from '@mantine/core'

export const ArticleList: FC = () => {
  const {
    data: articles,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useArticlesQuery()

  if (!isLoading && (articles?.pages?.[0]?.meta?.pagination?.pageCount ?? 0) < 1) {
    return <Center>Записей не найдено</Center>
  }

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
          Больше
        </Button>
      )}
    </Flex>
  )
}
