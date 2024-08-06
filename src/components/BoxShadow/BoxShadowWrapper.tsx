'use client'
import { FC, useState } from 'react'
import { Grid, GridCol, Stack } from '@mantine/core'
import { BoxShadowForms } from './BoxShadowForms'
import { BoxShadowCode } from './BoxShadowCode'
import { BoxShadowValues, CanvasParams } from './BoxShadow.types'
import { BoxShadowContext } from './BoxShadowContext'
import { BoxShadowCanvas } from './BoxShadowCanvas'

export const BoxShadowWrapper: FC = () => {
  const [boxShadowValues, setBoxShadowValues] = useState<BoxShadowValues>({
    horizontal: 8,
    vertical: 8,
    blur: 4,
    spread: 0,
    color: '#000000ff',
    isInset: false,
  })
  const [canvasParams, setCanvasParams] = useState<CanvasParams>({
    background: '#fff',
    card: '#7a7878',
  })
  return (
    <BoxShadowContext.Provider
      value={{
        data: boxShadowValues,
        setData: setBoxShadowValues,
        canvasData: canvasParams,
        setCanvasParam: setCanvasParams,
      }}
    >
      <Grid>
        <GridCol span={{ md: 3, base: 12 }}>
          <BoxShadowForms />
        </GridCol>
        <GridCol span={{ md: 9, base: 12 }}>
          <Stack h={'100%'}>
            <BoxShadowCanvas />
            <BoxShadowCode />
          </Stack>
        </GridCol>
      </Grid>
    </BoxShadowContext.Provider>
  )
}
