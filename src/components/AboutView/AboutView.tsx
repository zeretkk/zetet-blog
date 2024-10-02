'use client'
import { FC } from 'react'
import { Box, Divider, Flex, Grid, GridCol, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import { PortfolioItem } from '@/components/PortfolioItem'
import { useAboutQuery } from '@/lib/api/about/about.query'
import { notifications } from '@mantine/notifications'
import { CustomBlockRenderer } from '@/components/CustomBlockRenderer/CustomBlockRenderer'
import { useRouter } from 'next/navigation'

export const AboutView: FC = () => {
  const { data, isError } = useAboutQuery()
  const router = useRouter()
  if (!data || isError) {
    notifications.show({
      title: 'Ошибка',
      message: 'Данные страницы не загрузились, вы будете перенаправлены на главную страницу',
      color: 'red',
    })
    router.push('/')
    return null
  }
  return (
    <Box>
      <Flex direction={'row'}>
        <Title order={1} c={'black'} bg={'yellow'} fz={'2.7rem'} px={'1rem'} pt={'0.3em'}>
          {data.name}
        </Title>
      </Flex>
      <Grid mt={'md'}>
        <GridCol span={{ md: 6, base: 12 }}>
          <Stack>
            <Text>{data.position}</Text>
            <Text>Знаком с технологиями: {data.familar}</Text>
            <Text>Также изучал/применял: {data.also}</Text>
          </Stack>
        </GridCol>
        {data?.avatar && (
          <GridCol span={{ md: 6, base: 12 }}>
            <Flex justify={{ base: 'center', md: 'flex-end' }} direction={'row'}>
              <Image src={data.avatar.formats.medium.url} width={360} height={360} alt='zeRET' />
            </Flex>
          </GridCol>
        )}
      </Grid>
      <Grid component={'section'} gutter={'md'} mt={'md'}>
        {data?.bio && (
          <GridCol span={{ md: 6, base: 12 }}>
            <Title order={2}>Биография</Title>
            <Divider size={'md'} color={'white'} />
            <CustomBlockRenderer body={data.bio} />
          </GridCol>
        )}
        {data?.hobby && (
          <GridCol span={{ md: 6, base: 12 }}>
            <Title order={2}>Хобби</Title>
            <Divider size={'md'} color={'white'} />
            <CustomBlockRenderer body={data.hobby} />
          </GridCol>
        )}
      </Grid>
      {data?.projects && (
        <Box component={'section'} mt={'md'}>
          <Title order={2}>Проекты</Title>
          <Divider size={'md'} color={'white'} />
          <Grid mt='md'>
            {data.projects.map((project) => (
              <GridCol span={{ base: 12, sm: 6 }} key={project.id}>
                <PortfolioItem project={project} />
              </GridCol>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  )
}
