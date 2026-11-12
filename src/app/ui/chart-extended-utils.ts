/** Pure geometry helpers for the extended chart components (no dependencies). */

export const CARD_CLASS = 'bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6 shadow-sm'

/** CSS variable colour for the nth series (cycles chart-1 ... chart-5). */
export function seriesColor(index: number): string {
  return `var(--chart-${(index % 5) + 1})`
}

export function linearScale(d0: number, d1: number, r0: number, r1: number): (value: number) => number {
  const span = d1 - d0 || 1
  return (value) => r0 + ((value - d0) / span) * (r1 - r0)
}

/** Rounds a maximum up to a "nice" tick-friendly number. */
export function niceMax(max: number): number {
  if (max <= 0) return 1
  const pow = Math.pow(10, Math.floor(Math.log10(max)))
  const n = max / pow
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10
  return nice * pow
}

export function round(value: number): number {
  return Math.round(value * 100) / 100
}

export function linePath(points: readonly Point[]): string {
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${round(p.x)},${round(p.y)}`).join(' ')
}

export interface Point {
  x: number
  y: number
}

/** Angle in degrees: 0 = 12 o'clock, clockwise. */
export function polar(cx: number, cy: number, r: number, deg: number): Point {
  const rad = ((deg - 90) * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

export function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const s = polar(cx, cy, r, startDeg)
  const e = polar(cx, cy, r, endDeg)
  const large = endDeg - startDeg > 180 ? 1 : 0
  return `M${round(s.x)},${round(s.y)} A${r},${r} 0 ${large} 1 ${round(e.x)},${round(e.y)}`
}

export interface Bin {
  x0: number
  x1: number
  count: number
}

export function histogramBins(values: readonly number[], binCount: number): Bin[] {
  if (!values.length || binCount < 1) return []
  const min = Math.min(...values)
  const max = Math.max(...values)
  const width = (max - min) / binCount || 1
  const bins: Bin[] = Array.from({ length: binCount }, (_, i) => ({ x0: min + i * width, x1: min + (i + 1) * width, count: 0 }))
  for (const v of values) {
    const i = Math.min(binCount - 1, Math.floor((v - min) / width))
    const bin = bins[i]
    if (bin) bin.count++
  }
  return bins
}

export interface TreemapInput {
  label: string
  value: number
}

export interface TreemapRect extends TreemapInput {
  x: number
  y: number
  w: number
  h: number
}

/** Squarified treemap layout; items should be sorted descending by value. */
export function squarify(items: readonly TreemapInput[], width: number, height: number): TreemapRect[] {
  const sorted = items.filter((i) => i.value > 0).sort((a, b) => b.value - a.value)
  const total = sorted.reduce((s, i) => s + i.value, 0)
  const out: TreemapRect[] = []
  if (!total) return out
  const area = width * height
  const queue = sorted.map((i) => ({ item: i, area: (i.value / total) * area }))
  let x = 0
  let y = 0
  let w = width
  let h = height

  const worst = (row: number[], side: number): number => {
    const sum = row.reduce((a, b) => a + b, 0)
    const max = Math.max(...row)
    const min = Math.min(...row)
    return Math.max((side * side * max) / (sum * sum), (sum * sum) / (side * side * min))
  }

  while (queue.length) {
    const side = Math.min(w, h)
    const row: typeof queue = []
    while (queue.length) {
      const next = queue[0]
      if (!next) break
      const current = row.map((r) => r.area)
      if (!row.length || worst([...current, next.area], side) <= worst(current, side)) row.push(queue.shift()!)
      else break
    }
    const rowSum = row.reduce((s, r) => s + r.area, 0)
    if (w >= h) {
      const colW = rowSum / h
      let cy = y
      for (const r of row) {
        const rh = r.area / colW
        out.push({ ...r.item, x, y: cy, w: colW, h: rh })
        cy += rh
      }
      x += colW
      w -= colW
    } else {
      const rowH = rowSum / w
      let cx = x
      for (const r of row) {
        const rw = r.area / rowH
        out.push({ ...r.item, x: cx, y, w: rw, h: rowH })
        cx += rw
      }
      y += rowH
      h -= rowH
    }
  }
  return out
}

export interface SankeyLinkInput {
  source: string
  target: string
  value: number
}

export interface SankeyNodeLayout {
  id: string
  x: number
  y: number
  h: number
  color: string
  column: number
}

export interface SankeyLinkLayout extends SankeyLinkInput {
  path: string
  color: string
}

export interface SankeyLayout {
  nodes: SankeyNodeLayout[]
  links: SankeyLinkLayout[]
}

/** Simple left-to-right sankey layout. Node columns come from the longest path from a source. */
export function sankeyLayout(
  nodeIds: readonly string[],
  links: readonly SankeyLinkInput[],
  width: number,
  height: number,
  nodeWidth: number,
  gap: number,
): SankeyLayout {
  const column = new Map<string, number>(nodeIds.map((id) => [id, 0]))
  nodeIds.forEach(() => {
    for (const l of links) column.set(l.target, Math.max(column.get(l.target) ?? 0, (column.get(l.source) ?? 0) + 1))
  })
  const cols = Math.max(...column.values(), 0) + 1
  const outSum = (id: string) => links.filter((l) => l.source === id).reduce((s, l) => s + l.value, 0)
  const inSum = (id: string) => links.filter((l) => l.target === id).reduce((s, l) => s + l.value, 0)
  const nodeValue = (id: string) => Math.max(outSum(id), inSum(id))

  let scale = Infinity
  for (let c = 0; c < cols; c++) {
    const ids = nodeIds.filter((id) => column.get(id) === c)
    const total = ids.reduce((s, id) => s + nodeValue(id), 0)
    if (total > 0) scale = Math.min(scale, (height - gap * (ids.length - 1)) / total)
  }
  if (!isFinite(scale)) scale = 1

  const nodes: SankeyNodeLayout[] = []
  const colorOf = new Map<string, string>()
  nodeIds.forEach((id, i) => colorOf.set(id, seriesColor(i)))
  for (let c = 0; c < cols; c++) {
    let y = 0
    for (const id of nodeIds.filter((n) => column.get(n) === c)) {
      const h = nodeValue(id) * scale
      nodes.push({
        id,
        x: cols > 1 ? (c * (width - nodeWidth)) / (cols - 1) : 0,
        y,
        h,
        color: colorOf.get(id) ?? seriesColor(0),
        column: c,
      })
      y += h + gap
    }
  }
  const outOffset = new Map<string, number>()
  const inOffset = new Map<string, number>()
  const byId = new Map(nodes.map((n) => [n.id, n]))
  const laid: SankeyLinkLayout[] = []
  for (const l of links) {
    const s = byId.get(l.source)
    const t = byId.get(l.target)
    if (!s || !t) continue
    const th = l.value * scale
    const sy = s.y + (outOffset.get(l.source) ?? 0)
    const ty = t.y + (inOffset.get(l.target) ?? 0)
    outOffset.set(l.source, (outOffset.get(l.source) ?? 0) + th)
    inOffset.set(l.target, (inOffset.get(l.target) ?? 0) + th)
    const x0 = s.x + nodeWidth
    const x1 = t.x
    const xm = (x0 + x1) / 2
    const path =
      `M${round(x0)},${round(sy)} C${round(xm)},${round(sy)} ${round(xm)},${round(ty)} ${round(x1)},${round(ty)} ` +
      `L${round(x1)},${round(ty + th)} C${round(xm)},${round(ty + th)} ${round(xm)},${round(sy + th)} ${round(x0)},${round(sy + th)} Z`
    laid.push({ ...l, path, color: s.color })
  }
  return { nodes, links: laid }
}
