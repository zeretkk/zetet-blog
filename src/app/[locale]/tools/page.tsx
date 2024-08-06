import { getScopedI18n } from '@/locales/server'
import { Anchor, Card, Container, Grid, GridCol, Stack, Title, Text } from '@mantine/core'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'

export const generateMetadata: () => Promise<Metadata> = async () => {
  const t = await getScopedI18n('tools')
  return {
    title: t('heading'),
    description: t('description'),
    twitter: {
      title: t('heading'),
      description: t('description'),
    },
    openGraph: {
      title: t('heading'),
      description: t('description'),
    },
  }
}

const ToolsPage: NextPage = async () => {
  const t = await getScopedI18n('tools')
  return (
    <Container py={'md'} mih={'100dvh'}>
      <Title mb={'md'}>{t('heading')}</Title>
      {t('description')}
      <Grid>
        <GridCol span={{ md: 4, sm: 6, base: 12 }}>
          <Anchor component={Link} href={'/tools/boxshadow'} underline={'hover'}>
            <Card>
              <Stack>
                <Title order={2}>Boxshadow generator</Title>
                <Text td={'none'}>{t('boxshadow.description')}</Text>
              </Stack>
            </Card>
          </Anchor>
        </GridCol>
      </Grid>
    </Container>
  )
}

export default ToolsPage
