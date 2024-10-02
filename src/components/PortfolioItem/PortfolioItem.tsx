import Image from 'next/image'
import { FC } from 'react'
import classes from './portfolioitem.module.scss'
import { Card, CardSection, Stack, Text, Title } from '@mantine/core'
import { IPortfolioProject } from '@/lib/api/about/about.types'
type Props = {
  project: IPortfolioProject
}

export const PortfolioItem: FC<Props> = ({ project }) => {
  return (
    <Card>
      <Title order={3}>{project.title}</Title>
      <CardSection>
        {project?.preview && (
          <Image
            className={classes.poster}
            src={project.preview.formats.medium.url}
            alt={project.title}
            width={800}
            height={600}
          />
        )}
      </CardSection>
      <Stack mt={'sm'}>
        <Text>Должность: {project.position}</Text>
        <Text>Стэк технологий: {project.tech}</Text>
        <Text>{project.description}</Text>
      </Stack>
    </Card>
  )
}
