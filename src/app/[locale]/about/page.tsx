import { Metadata, NextPage } from 'next'
import classes from './about.module.scss'
import { getScopedI18n } from '@/locales/server'
import Image from 'next/image'
import clsx from 'clsx'
import { PortfolioItem } from '@/components'

const getProjects = async (): Promise<
  {
    title: string
    description: string
    stack: string[]
    position: string
    imageUrl: string
  }[]
> => {
  const t = await getScopedI18n('about.projects')
  return [
    {
      title: 'IVAO XR Tour System',
      description: t('tours.description'),
      stack: ['React.JS', 'Material UI', 'Nest.JS', 'TypeORM', 'MariaDB'],
      position: t('full'),
      imageUrl: '/projects/tours.png',
    },
    {
      title: 'PlanDi',
      description: t('plandi.description'),
      stack: ['React.JS', 'Next.JS', 'Material UI', 'Redux', 'React Query(Tanstack Query)'],
      position: t('front'),
      imageUrl: '/projects/plandi.png',
    },
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getScopedI18n('meta')
  return {
    title: t('about.title'),
    description: t('main.description'),
  }
}

const AboutPage: NextPage = async () => {
  const t = await getScopedI18n('about')
  const projects = await getProjects()
  return (
    <div className={clsx('container', classes.wrapper)}>
      <div className={classes.topGroup}>
        <h1 className={classes.title}>{t('kirill')}</h1>
      </div>
      <main className={classes.mainGroup}>
        <div className={classes.main}>
          <p>{t('dev')}</p>
          <p>{t('main')}</p>
          <p>{t('libs')}</p>
          <p>{t('also')}</p>
        </div>
        <div className={classes.imageContainer}>
          <Image src='/CODESych-nobg.png' width={360} height={360} alt='zeRET' />
        </div>
      </main>
      <section className={classes.contentGroup}>
        <div className={classes.contentItem}>
          <h2>{t('bio')}</h2>
          <hr />
          <p>{t('bio.text')}</p>
          <p>{t('bio.text2')}</p>
          <p>{t('bio.text3')}</p>
        </div>
        <div className={classes.contentItem}>
          <h2>{t('hobbies')}</h2>
          <hr />
          <p>{t('hobbies.text')}</p>
        </div>
      </section>
      <section>
        <h2>{t('projects.title')}</h2>
        <hr />
        <div className={classes.projectsContainer}>
          {projects.map((project, idx) => (
            <PortfolioItem project={project} key={idx} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
