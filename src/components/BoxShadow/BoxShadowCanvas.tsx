'use client'
import { FC, useContext } from 'react'
import { Box, Card, ColorPicker, ColorSwatch, Group, Popover } from '@mantine/core'
import { BoxShadowContext } from './BoxShadowContext'

export const BoxShadowCanvas: FC = () => {
  const { canvasData, setCanvasParam, data } = useContext(BoxShadowContext)
  return (
    <>
      <Group>
        <Group>
          Цвет полотна
          <Popover>
            <Popover.Target>
              <ColorSwatch color={canvasData.background} />
            </Popover.Target>
            <Popover.Dropdown>
              <ColorPicker
                color={canvasData.background}
                onChange={(value) =>
                  setCanvasParam &&
                  setCanvasParam((prev) => ({
                    ...prev,
                    background: value,
                  }))
                }
              />
            </Popover.Dropdown>
          </Popover>
        </Group>
        <Group>
          Цвет карточки
          <Popover>
            <Popover.Target>
              <ColorSwatch color={canvasData.card} />
            </Popover.Target>
            <Popover.Dropdown>
              <ColorPicker
                color={canvasData.card}
                onChange={(value) =>
                  setCanvasParam &&
                  setCanvasParam((prev) => ({
                    ...prev,
                    card: value,
                  }))
                }
              />
            </Popover.Dropdown>
          </Popover>
        </Group>
      </Group>
      <Card
        mih={500}
        bg={canvasData.background}
        styles={{
          root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: '1 1 100%',
          },
        }}
      >
        <Box
          h={'50%'}
          w={'50%'}
          bg={canvasData.card}
          display={'block'}
          py={'xl'}
          px={'xl'}
          style={{
            boxShadow: `${data.horizontal}px ${data.vertical}px ${data.blur}px ${data.spread}px ${data.color}${data.isInset ? ' inset' : ''}`,
          }}
        >
          Test content
        </Box>
      </Card>
    </>
  )
}
