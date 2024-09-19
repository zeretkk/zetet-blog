'use client'
import { FC } from 'react'
import { useArticleByIdQuery } from '@/lib/api/articles/articles.query'
import dayjs from 'dayjs'
import classes from './articleview.module.scss'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { Anchor, Group, Text, Title } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'
import { useCurrentLocale } from '@/locales/client'

type Props = {
  id: string
}

export const ArticleView: FC<Props> = ({ id }) => {
  const locale = useCurrentLocale()
  const { data: article } = useArticleByIdQuery(id, locale)
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
          <BlocksRenderer
            content={article.body}
            blocks={{
              paragraph: ({ children }) => <Text c={'white'}>{children}</Text>,
              heading: ({ children, level }) => (
                <Title c={'white'} order={level}>
                  {children}
                </Title>
              ),
              link: ({ children, url }) => (
                <Anchor component={Link} href={url} c={'purple'} underline={'always'}>
                  {children}
                </Anchor>
              ),
            }}
          />
        </div>
      </article>
    </div>
  )
}
