import { getScopedI18n } from '@/locales/server'
import Image from 'next/image'
import { FC } from 'react'
import classes from './portfolioitem.module.scss'
import { Card, Text, Title } from '@mantine/core'
type Props = {
  project: {
    title: string
    description: string
    stack: string[]
    position: string
    imageUrl: string
  }
}

export const PortfolioItem: FC<Props> = async ({ project }) => {
  const t = await getScopedI18n('about.projects')
  return (
    <Card>
      <Title order={3}>{project.title}</Title>
      <Image
        className={classes.poster}
        src={project.imageUrl}
        alt={project.title}
        width={800}
        height={600}
      />
      <div className={classes.textContainer}>
        <Text>
          {t('position')}: {project.position}
        </Text>
        <Text>
          {t('stack')}: {project.stack.join(', ')}
        </Text>
        <Text>{project.description}</Text>
      </div>
    </Card>
  )
}
