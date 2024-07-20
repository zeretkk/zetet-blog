'use client'
import { FC } from 'react'
import { useArticleByIdQuery } from '@/lib/api/articles/articles.query'
import dayjs from 'dayjs'
import { notFound } from 'next/navigation'
import classes from './articleview.module.scss'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { Anchor, Text, Title } from '@mantine/core'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  id: number
}

export const ArticleView: FC<Props> = ({ id }) => {
  const { data } = useArticleByIdQuery(id)
  const article = data?.attributes
  if (!article) {
    notFound()
  }
  return (
    <div className={classes.wrapper}>
      <article className={classes.content}>
        <div className={classes.head}>
          <div className={classes.headInfo}>
            <h1 className={classes.heading}>{article?.title}</h1>
            <p>{dayjs(article?.createdAt).format('DD.MM.YYYY HH:mm')}</p>
          </div>
          {article?.poster && (
            <Image
              className={classes.image}
              alt={article.title}
              src={article.poster.data.attributes.formats.medium.url}
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
