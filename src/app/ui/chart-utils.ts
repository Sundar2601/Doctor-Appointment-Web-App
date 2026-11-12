/** Shared, dependency-free helpers for the SVG chart components. */

export interface ChartSeries {
  key: string
  label: string
  color?: string
}

export interface ChartDatum {
  label: string
  [key: string]: string | number
}

export interface ChartSlice {
  label: string
  value: number
  color?: string
}

export interface ChartPoint {
  x: number
  y: number
}

export interface ChartLine {
  x1: number
  y1: number
  x2: number
  y2: number
}

export interface ChartLabel {
  x: number
  y: number
  text: string
  anchor: 'start' | 'middle' | 'end'
}

export interface StackedValue {
  y0: number
  y1: number
}

export interface Band {
  width: number
  start: (index: number) => number
  center: (index: number) => number
}

export const ZERO_RANGE: StackedValue = { y0: 0, y1: 0 }

export const CHART_PALETTE = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)']

export function paletteColor(color: string | undefined, index: number): string {
  return color ?? CHART_PALETTE[index % CHART_PALETTE.length] ?? 'var(--chart-1)'
}

export function seriesColor(series: ChartSeries, index: number): string {
  return paletteColor(series.color, index)
}

export function valueOf(datum: ChartDatum, key: string): number {
  const value = datum[key]
  return typeof value === 'number' ? value : 0
}

export function linearScale(d0: number, d1: number, r0: number, r1: number): (value: number) => number {
  const span = d1 - d0 || 1
  return (value) => r0 + ((value - d0) / span) * (r1 - r0)
}

/** Evenly splits [r0, r1] into `count` bands; `padding` is the share of each step left empty. */
export function bandScale(count: number, r0: number, r1: number, padding = 0.3): Band {
  const step = (r1 - r0) / Math.max(count, 1)
  const width = step * (1 - padding)
  return {
    width,
    start: (index) => r0 + index * step + (step - width) / 2,
    center: (index) => r0 + index * step + step / 2,
  }
}

/** Rounds `max` up to a tidy axis ceiling and returns evenly spaced ticks from 0. */
export function niceScale(max: number, count = 3): { max: number; ticks: number[] } {
  const raw = max > 0 ? max / count : 1
  const magnitude = 10 ** Math.floor(Math.log10(raw))
  const step = ([1, 2, 2.5, 5, 10].map((c) => c * magnitude).find((s) => s >= raw) ?? raw) || 1
  return { max: step * count, ticks: Array.from({ length: count + 1 }, (_, i) => i * step) }
}

/** Cumulative [y0, y1] ranges per series (outer) and datum (inner). */
export function stackSeries(data: ChartDatum[], keys: string[]): StackedValue[][] {
  const totals = data.map(() => 0)
  return keys.map((key) =>
    data.map((datum, i) => {
      const y0 = totals[i] ?? 0
      const y1 = y0 + valueOf(datum, key)
      totals[i] = y1
      return { y0, y1 }
    }),
  )
}

export function horizontalGrid(ticks: number[], yScale: (value: number) => number, x1: number, x2: number): ChartLine[] {
  return ticks.map((tick) => ({ x1, x2, y1: yScale(tick), y2: yScale(tick) }))
}

/** Angles are in degrees, 0 at 12 o'clock, increasing clockwise. */
export function polarToCartesian(cx: number, cy: number, radius: number, angle: number): ChartPoint {
  const rad = (angle * Math.PI) / 180
  return { x: cx + radius * Math.sin(rad), y: cy - radius * Math.cos(rad) }
}

const round = (n: number): number => Math.round(n * 100) / 100

export function pointsAttr(points: ChartPoint[]): string {
  return points.map((p) => `${round(p.x)},${round(p.y)}`).join(' ')
}

export function linePath(points: ChartPoint[]): string {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${round(p.x)} ${round(p.y)}`).join(' ')
}

/** Closed area between a top edge (left to right) and a bottom edge (left to right). */
export function areaPath(top: ChartPoint[], bottom: ChartPoint[]): string {
  const back = [...bottom].reverse()
  return `${linePath(top)} ${back.map((p) => `L${round(p.x)} ${round(p.y)}`).join(' ')} Z`
}

/** Ring segment (or pie wedge when `inner` is 0) between two angles. */
export function arcPath(cx: number, cy: number, outer: number, inner: number, startAngle: number, endAngle: number): string {
  const end = Math.min(endAngle, startAngle + 359.99)
  const large = end - startAngle > 180 ? 1 : 0
  const os = polarToCartesian(cx, cy, outer, startAngle)
  const oe = polarToCartesian(cx, cy, outer, end)
  const outerArc = `M${round(os.x)} ${round(os.y)} A${outer} ${outer} 0 ${large} 1 ${round(oe.x)} ${round(oe.y)}`
  if (inner <= 0) return `${outerArc} L${cx} ${cy} Z`
  const is = polarToCartesian(cx, cy, inner, startAngle)
  const ie = polarToCartesian(cx, cy, inner, end)
  return `${outerArc} L${round(ie.x)} ${round(ie.y)} A${inner} ${inner} 0 ${large} 0 ${round(is.x)} ${round(is.y)} Z`
}
