'use client'
import { FC, useContext, useEffect } from 'react'
import { useForm } from '@mantine/form'
import { Box, Card, ColorPicker, Slider, Stack, Switch, Text } from '@mantine/core'
import { BoxShadowContext } from './BoxShadowContext'

export const BoxShadowForms: FC = () => {
  const { setData } = useContext(BoxShadowContext)
  const form = useForm({
    initialValues: {
      horizontal: 8,
      vertical: 8,
      blur: 4,
      spread: 0,
      color: '#000000ff',
      isInset: false,
    },
  })
  useEffect(() => {
    setData && setData(form.values)
  }, [form, setData])
  return (
    <Card px={'lg'} py={'md'} mih={'100%'}>
      <Stack>
        <Switch label='Внутренняя' key={form.key('isInset')} {...form.getInputProps('isInset')} />
        <Box py={'sm'}>
          <Text mb={0} pb={0}>
            Горизонтальное смещение
          </Text>
          <Slider
            min={-100}
            max={100}
            step={1}
            label={(value) => `${value}px`}
            marks={[
              { value: -100, label: '-100px' },
              { value: 100, label: '100px' },
            ]}
            pt={0}
            mt={0}
            key={form.key('horizontal')}
            {...form.getInputProps('horizontal')}
          />
        </Box>
        <Box py={'sm'}>
          <Text mb={0} pb={0}>
            Вертикальное смещение
          </Text>
          <Slider
            min={-100}
            max={100}
            step={1}
            label={(value) => `${value}px`}
            marks={[
              { value: -100, label: '-100px' },
              { value: 100, label: '100px' },
            ]}
            pt={0}
            mt={0}
            key={form.key('vertical')}
            {...form.getInputProps('vertical')}
          />
        </Box>
        <Box py={'sm'}>
          <Text mb={0} pb={0}>
            Размытие
          </Text>
          <Slider
            min={-100}
            max={100}
            step={1}
            label={(value) => `${value}px`}
            marks={[
              { value: -100, label: '-100px' },
              { value: 100, label: '100px' },
            ]}
            pt={0}
            mt={0}
            key={form.key('blur')}
            {...form.getInputProps('blur')}
          />
        </Box>
        <Box py={'sm'}>
          <Text mb={0} pb={0}>
            Растяжение
          </Text>
          <Slider
            min={-100}
            max={100}
            step={1}
            label={(value) => `${value}px`}
            marks={[
              { value: -100, label: '-100px' },
              { value: 100, label: '100px' },
            ]}
            pt={0}
            mt={0}
            key={form.key('spread')}
            {...form.getInputProps('spread')}
          />
        </Box>
        <Box py={'sm'}>
          <Text mb={0} pb={0}>
            Цвет
          </Text>

          <ColorPicker
            fullWidth
            format={'hexa'}
            key={form.key('color')}
            {...form.getInputProps('color')}
          />
        </Box>
      </Stack>
    </Card>
  )
}
