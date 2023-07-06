import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  fonts,
  radii,
  space,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
} from '@ignite-ui/tokens'

export const {
  css,
  styled,
  theme,
  config,
  keyframes,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
