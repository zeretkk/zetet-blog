import { FC } from 'react'
import { IArticleItem } from '@/lib/api/articles/articles.types'
import dayjs from 'dayjs'
import classes from './articleitem.module.scss'
import Link from 'next/link'
import { Anchor, Group, Text, Title } from '@mantine/core'
type Props = {
  article: IArticleItem
}

export const ArticleItem: FC<Props> = (props) => {
  const article = props.article
  return (
    <article>
      <div className={classes.top}>
        <Group gap={10} align={'center'}>
          <Anchor component={Link} href={`/articles/${article.documentId}`} underline={'always'}>
            <Title order={2}>{article.title}</Title>
          </Anchor>
        </Group>
        <Text c={'dark.1'} className={classes.timeDesktop}>
          {dayjs(article.publishedAt).format('DD.MM.YYYY HH:mm')}
        </Text>
      </div>
      <div>
        <Text c={'dark.1'}>{article.description}</Text>
      </div>
    </article>
  )
}
