'use client'
import { FC, useContext } from 'react'
import { CodeHighlight } from '@mantine/code-highlight'
import { BoxShadowContext } from './BoxShadowContext'

export const BoxShadowCode: FC = () => {
  const { data } = useContext(BoxShadowContext)
  const code = `
-webkit-box-shadow: ${data.horizontal}px ${data.vertical}px ${data.blur}px ${data.spread}px ${data.color}${data.isInset ? ' inset' : ''};
-moz-box-shadow: ${data.horizontal}px ${data.vertical}px ${data.blur}px ${data.spread}px ${data.color}${data.isInset ? ' inset' : ''};
box-shadow: ${data.horizontal}px ${data.vertical}px ${data.blur}px ${data.spread}px ${data.color}${data.isInset ? ' inset' : ''};
`
  return <CodeHighlight code={code} language={'css'} withCopyButton />
}
