import { FC } from 'react'
import { Anchor, Text, Title } from '@mantine/core'
import Link from 'next/link'
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'

type Props = {
  body: BlocksContent
}

export const CustomBlockRenderer: FC<Props> = ({ body }) => {
  return (
    <BlocksRenderer
      content={body}
      blocks={{
        paragraph: ({ children }) => (
          <Text c={'white'} my={'sm'}>
            {children}
          </Text>
        ),
        heading: ({ children, level }) => (
          <Title c={'white'} order={level} mt={'md'} mb={'sm'}>
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
  )
}
