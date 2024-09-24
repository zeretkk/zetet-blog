import { FC } from 'react'
import { Flex, Text, Title } from '@mantine/core'

export const Hero: FC = async () => {
  return (
    <Flex direction={'column'} align={'center'} justify={'center'} mih={'100dvh'}>
      <Title order={1}>Kirill zeRET</Title>
      <Text>персональная страница web-разработчика</Text>
    </Flex>
  )
}
