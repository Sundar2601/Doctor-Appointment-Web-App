// Compiles src/styles.css (Tailwind v4: @theme, @plugin, @source) into .storybook/generated.css for Storybook.
import { readFileSync, writeFileSync } from 'node:fs'
import postcss from 'postcss'
import tailwindcss from '@tailwindcss/postcss'

const from = 'src/styles.css'
const result = await postcss([tailwindcss()]).process(readFileSync(from, 'utf8'), { from, to: '.storybook/generated.css' })
writeFileSync('.storybook/generated.css', result.css)
console.log(`Wrote .storybook/generated.css (${result.css.length} bytes)`)
