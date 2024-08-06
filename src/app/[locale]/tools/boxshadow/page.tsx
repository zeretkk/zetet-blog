import '@mantine/code-highlight/styles.css'
import { NextPage } from 'next'
import { Container, Title } from '@mantine/core'
import { BoxShadowWrapper } from '@/components/BoxShadow'

const BoxShadowPage: NextPage = () => {
  return (
    <Container mih={'100dvh'}>
      <Title my={'md'}>Boxshadow generator</Title>
      <BoxShadowWrapper />
    </Container>
  )
}
export default BoxShadowPage
