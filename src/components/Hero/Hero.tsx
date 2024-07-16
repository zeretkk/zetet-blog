import { FC } from 'react'
import {  getScopedI18n } from '@/locales/server'
import { Flex, Text, Title } from '@mantine/core'

export const Hero: FC = async () => {
  const t = await getScopedI18n('hero')
  return (
    <Flex direction={'column'} align={'center'} justify={'center'} mih={'100dvh'}>
      <Title order={1}>{t('title')}</Title>
      <Text>{t('description')}</Text>
    </Flex>
  )
}
