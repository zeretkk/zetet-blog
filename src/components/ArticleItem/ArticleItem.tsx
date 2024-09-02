import { FC } from 'react'
import { Article } from '@/lib/api/articles/articles.types'
import dayjs from 'dayjs'
import { IconSlash } from '@tabler/icons-react'
import classes from './articleitem.module.scss'
import Link from 'next/link'
import { Anchor, Group, Text, Title } from '@mantine/core'
type Props = {
  article: Article
}

export const ArticleItem: FC<Props> = (props) => {
  const article = props.article
  return (
    <article>
      <div className={classes.top}>
        <Group gap={10} align={'center'}>
          <Text c={article.attributes.author?.data ? 'green' : 'gray'} fz={'h3'}>
            {article.attributes.author?.data
              ? article.attributes.author?.data?.attributes.firstname
              : 'Unknown author'}
          </Text>
          <IconSlash className={classes.icon} />
          <Anchor component={Link} href={`/articles/${article.id}`} underline={'always'}>
            <Title order={2}>{article.attributes.title}</Title>
          </Anchor>
        </Group>
        <Text c={'dark.1'} className={classes.timeDesktop}>
          {dayjs(article.attributes.createdAt).format('DD.MM.YYYY HH:mm')}
        </Text>
      </div>
      <div>
        <Text c={'dark.1'}>{article.attributes.description}</Text>
      </div>
    </article>
  )
}
