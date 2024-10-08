'use client'
import { FC } from 'react'
import { useArticleByIdQuery } from '@/lib/api/articles/articles.query'
import dayjs from 'dayjs'
import classes from './articleview.module.scss'
import { Group, Text, Title } from '@mantine/core'
import Image from 'next/image'
import { CustomBlockRenderer } from '@/components/CustomBlockRenderer/CustomBlockRenderer'

type Props = {
  id: string
}

export const ArticleView: FC<Props> = ({ id }) => {
  const { data: article } = useArticleByIdQuery(id)
  if (!article) {
    return null
  }
  return (
    <div className={classes.wrapper}>
      <article className={classes.content}>
        <div className={classes.head}>
          <Group justify={'space-between'}>
            <Title order={1} my={'md'}>
              {article?.title}
            </Title>
            <Text c={'dark.1'}>{dayjs(article?.createdAt).format('DD.MM.YYYY HH:mm')}</Text>
          </Group>
          {article?.poster && (
            <Image
              className={classes.image}
              alt={article.title}
              src={article.poster.formats.large.url}
              width={600}
              height={300}
            />
          )}
        </div>
        <hr />
        <div className={classes.body}>
          <CustomBlockRenderer body={article.body} />
        </div>
      </article>
    </div>
  )
}
