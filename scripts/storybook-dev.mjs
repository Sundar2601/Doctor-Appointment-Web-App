// Starts Storybook with Tailwind kept in sync: compiles src/styles.css, recompiles whenever a source file changes
// (so classes used only in new or edited components are generated), and runs the Storybook dev server.
import { spawn } from 'node:child_process'
import { readFileSync, watch, writeFileSync } from 'node:fs'
import postcss from 'postcss'
import tailwindcss from '@tailwindcss/postcss'

const FROM = 'src/styles.css'
const TO = '.storybook/generated.css'

async function compile() {
  const result = await postcss([tailwindcss()]).process(readFileSync(FROM, 'utf8'), { from: FROM, to: TO })
  if (result.css !== safeRead(TO)) writeFileSync(TO, result.css)
  return result.css.length
}

function safeRead(path) {
  try {
    return readFileSync(path, 'utf8')
  } catch {
    return ''
  }
}

console.log(`[storybook-dev] compiled ${TO} (${await compile()} bytes)`)

let timer
const watcher = watch('src', { recursive: true }, (_event, file) => {
  if (!file || !/\.(ts|css|html)$/.test(file)) return
  clearTimeout(timer)
  timer = setTimeout(() => compile().catch((err) => console.error('[storybook-dev] tailwind failed:', err.message)), 250)
})

const storybook = spawn('npx', ['ng', 'run', 'doctor-appointment-app:storybook', ...process.argv.slice(2)], { stdio: 'inherit' })
const stop = (code) => {
  watcher.close()
  process.exit(code ?? 0)
}
storybook.on('exit', stop)
process.on('SIGINT', () => storybook.kill('SIGINT'))
process.on('SIGTERM', () => storybook.kill('SIGTERM'))
