import { Metadata, NextPage } from 'next'
import classes from './about.module.scss'
import { getScopedI18n } from '@/locales/server'
import Image from 'next/image'
import { PortfolioItem } from '@/components'
import { Container, Grid, GridCol, Text, Title } from '@mantine/core'

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
    <Container className={classes.wrapper} mb={'1.5rem'}>
      <div className={classes.topGroup}>
        <Title order={1} c={'black'} className={classes.title}>{t('kirill')}</Title>
      </div>
      <main className={classes.mainGroup}>
        <div className={classes.main}>
          <Text>{t('dev')}</Text>
          <Text>{t('main')}</Text>
          <Text>{t('libs')}</Text>
          <Text>{t('also')}</Text>
        </div>
        <div className={classes.imageContainer}>
          <Image src='/CODESych-nobg.png' width={360} height={360} alt='zeRET' />
        </div>
      </main>
      <section className={classes.contentGroup}>
        <div className={classes.contentItem}>
          <Title order={2}>{t('bio')}</Title>
          <hr />
          <Text>{t('bio.text')}</Text>
          <Text>{t('bio.text2')}</Text>
          <Text>{t('bio.text3')}</Text>
        </div>
        <div className={classes.contentItem}>
          <Title order={2}>{t('hobbies')}</Title>
          <hr />
          <Text>{t('hobbies.text')}</Text>
        </div>
      </section>
      <section>
        <Title order={2}>{t('projects.title')}</Title>
        <hr />
        <Grid mt='md'>
          {projects.map((project, idx) => (
            <GridCol span={{base:12, sm: 6}} key={idx}>
              <PortfolioItem project={project}  />
            </GridCol>
          ))}
        </Grid>
      </section>
    </Container>
  )
}

export default AboutPage
