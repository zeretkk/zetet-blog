import Image from 'next/image'
import { FC } from 'react'
import classes from './portfolioitem.module.scss'
import { Card, CardSection, Stack, Text, Title } from '@mantine/core'
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
  return (
    <Card>
      <Title order={3}>{project.title}</Title>
      <CardSection>
        <Image
          className={classes.poster}
          src={project.imageUrl}
          alt={project.title}
          width={800}
          height={600}
        />
      </CardSection>
      <Stack mt={'sm'}>
        <Text>Должность: {project.position}</Text>
        <Text>Стэк технологий: {project.stack.join(', ')}</Text>
        <Text>{project.description}</Text>
      </Stack>
    </Card>
  )
}
