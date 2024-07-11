import { getScopedI18n } from '@/locales/server'
import Image from 'next/image'
import { FC } from 'react'
import classes from './portfolioitem.module.scss'
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
    <div className={classes.wrapper}>
      <h3>{project.title}</h3>
      <Image
        className={classes.poster}
        src={project.imageUrl}
        alt={project.title}
        width={360}
        height={180}
      />
      <div className={classes.textContainer}>
        <p>
          {t('position')}: {project.position}
        </p>
        <p>
          {t('stack')}: {project.stack.join(', ')}
        </p>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
