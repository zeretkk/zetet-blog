import { Metadata, NextPage } from 'next'
import classes from './about.module.scss'
import Image from 'next/image'
import { PortfolioItem } from '@/components/PortfolioItem'
import { Box, Container, Grid, GridCol, Text, Title } from '@mantine/core'

const getProjects = async (): Promise<
  {
    title: string
    description: string
    stack: string[]
    position: string
    imageUrl: string
  }[]
> => {
  return [
    {
      title: 'IVAO XR Tour System',
      description:
        'Система используется руководством для публикации дивизионных туров и отслеживания прогресса выполнения этапов тура пользователями сети IVAO. Руководство дивизиона может опубликовать новые туры, рассматривать отчеты о выполнении очередного этапа, и назначать награды для пользователей выполнивших все условия для получения. Пользователь может видеть активные туры и описание их этапов, оставлять отчеты о выполнении отдельных этапов, знакомиться со своим прогрессом и сравнивать его со статистикой других пользователей.',
      stack: ['React.JS', 'Material UI', 'Nest.JS', 'TypeORM', 'MariaDB'],
      position: 'Fullstack-разработчик',
      imageUrl: '/projects/tours.png',
    },
    {
      title: 'PlanDi',
      description:
        'Сайт для проектировщиков архитекторов и инженеров. Пользователи могут найти работу, опубликовать свои вакансии или заказы для фрилансеров. Проектировщики и инженеры имеют возможность опубликовать и продавать свои проекты и модели. На проекте также доступен сервис "Онлайн офис", который дает командам интерфейс для управления проектом, с канбан доской и отображением задач на диаграмме Гантта. Администрация и пользователи сайта также могут создавать записи для блога.',
      stack: ['React.JS', 'Next.JS', 'Material UI', 'Redux', 'React Query(Tanstack Query)'],
      position: 'Frontend-разработчик',
      imageUrl: '/projects/plandi.png',
    },
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Информация о разработчике',
    description: 'персональная страница web-разработчика',
  }
}

const AboutPage: NextPage = async () => {
  const projects = await getProjects()
  return (
    <Container className={classes.wrapper} mb={'1.5rem'}>
      <div className={classes.topGroup}>
        <Title order={1} c={'black'} className={classes.title}>
          Кирилл
        </Title>
      </div>
      <main className={classes.mainGroup}>
        <div className={classes.main}>
          <Text>Fullstack-разработчик</Text>
          <Text>Разрабатываю веб приложения</Text>

          <Text>
            Знаком с технологиями: TypeScript, React.JS, Next.JS, Redux, Redux ToolKit, Tanstak
            Query, Tanstak Router, Effector, Material UI, Mantine, Bootstrap, Styled Components,
            Formik, Yup, Zod, Prisma, Nest.JS, Express.
          </Text>
          <Text>
            Также изучал/применял: Svelte, Astro, Python, Flask, Go, Supabase, Firebase, SQL,
            MongoDB, ChatGPT
          </Text>
        </div>
        <div className={classes.imageContainer}>
          <Image src='/CODESych-nobg.png' width={360} height={360} alt='zeRET' />
        </div>
      </main>
      <section className={classes.contentGroup}>
        <div className={classes.contentItem}>
          <Title order={2}>Биография</Title>
          <hr />
          <Text>
            Разработкой увлекся когда начал посещать первые уроки информатики. Тогда нам преподавали
            Pascal.ABC. На этом языке я написал свои первые программы, которые представляли из себя
            калькуляторы, помогавшие мне при решение математических задач, что не очень нравилось
            моему преподавателю математики xD
          </Text>
          <Text>
            После того как доступ к интернету упростился и у меня впервые появился собственный
            ноутбук, я стал интересоваться устройством веб-сайтов. Первый мой сайт был написан на
            основе фреймворка Flask для python, и представлял несколько страниц, текст на которые
            выводился из текстовых файлов. Исходники этого сайта к сожалению утеряны в веках
          </Text>
          <Text>
            Позже я решил, что буду развиваться в направлении фронтенд разработки и начал изучать
            React. Немного разобравшись я присоединился к команде по разработке веб интерфейсов для
            русскоговорящего дивизиона сети IVAO, где познакомился с современными концепциями
            разроботки, и принципами работы в команде.
          </Text>
        </div>
        <div className={classes.contentItem}>
          <Title order={2}>Хобби</Title>
          <hr />
          <Text>
            В свободное время люблю играть в игры, чаще всего в жанре RPG. Увлекшись авиацией, много
            времени провел в авиасимуляторах и сетях для любителей виртуальной авицаии, где выполнял
            полеты в качестве пилота и обслуживал воздушное пространство в качестве диспетчера, сдал
            диспетчерский экзамен в сети IVAO.
          </Text>
        </div>
      </section>
      <Box component={'section'} mt={'md'}>
        <Title order={2}>Проекты</Title>
        <hr />
        <Grid mt='md'>
          {projects.map((project, idx) => (
            <GridCol span={{ base: 12, sm: 6 }} key={idx}>
              <PortfolioItem project={project} />
            </GridCol>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default AboutPage
