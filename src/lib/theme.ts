import { Container, MantineTheme, rem, Text, Title } from '@mantine/core'
import { DraculaTheme } from 'dracula-mantine'
import { PartialObjectDeep } from 'type-fest/source/partial-deep'
import { NextFontWithVariable } from 'next/dist/compiled/@next/font'
const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(900),
  xl: rem(1440),
}
export const theme = (
  textFont: NextFontWithVariable,
  headingFont: NextFontWithVariable,
): PartialObjectDeep<MantineTheme, {}> => ({
  ...DraculaTheme,
  colors: {
    ...DraculaTheme.colors,
    dark: [
      '#94959b',
      '#7e7f86',
      '#696a72',
      '#53555e',
      '#3e3f4a',
      '#282a36',
      '#242631',
      '#20222b',
      '#1c1d26',
      '#181920',
    ],
  },
  primaryColor: 'purple',
  fontFamily: textFont.style.fontFamily,
  headings: {
    fontFamily: headingFont.style.fontFamily,
  },
  components: {
    Title: Title.extend({
      defaultProps: {
        c: 'white',
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: 'white',
      },
    }),
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
      defaultProps: {
        size: 'xl',
      },
    }),
  },
})
