import { Anchor, Card, Container, Grid, GridCol, Stack, Title, Text } from '@mantine/core'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'

export const generateMetadata: () => Promise<Metadata> = async () => {
  return {
    title: 'Инструменты',
    description: 'Инструменты которые используются разработчиком в разных ситуациях',
    twitter: {
      title: 'Инструменты',
      description: 'Инструменты которые используются разработчиком в разных ситуациях',
    },
    openGraph: {
      title: 'Инструменты',
      description: 'Инструменты которые используются разработчиком в разных ситуациях',
    },
  }
}

const ToolsPage: NextPage = async () => {
  return (
    <Container py={'md'} mih={'100dvh'}>
      <Title mb={'md'}>Инструменты</Title>
      <Text>Инструменты которые используются разработчиком в разных ситуациях</Text>
      <Grid mt={'md'}>
        <GridCol span={{ md: 4, sm: 6, base: 12 }}>
          <Anchor component={Link} href={'/tools/boxshadow'} underline={'hover'}>
            <Card>
              <Stack>
                <Title order={2}>Boxshadow generator</Title>
                <Text td={'none'}>
                  Инструмент для генерации кода CSS box-shadow с возможностью задать необходимые
                  параметры и просмотреть их на живом примере.
                </Text>
              </Stack>
            </Card>
          </Anchor>
        </GridCol>
      </Grid>
    </Container>
  )
}

export default ToolsPage
