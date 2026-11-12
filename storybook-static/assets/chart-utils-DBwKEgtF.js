import { _ as __decorate, C as Component, a as ChangeDetectionStrategy, i as input, I as Input } from './angular-platform-Dxt0cssM.js';

/** Card shell shared by the chart components: optional header text, projected plot, optional footer text. */
let ChartFrameComponent = class ChartFrameComponent {
    title = input();
    description = input();
    footerTitle = input();
    footerNote = input();
    align = input('left');
    static propDecorators = {
        title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: false, transform: undefined },] }],
        description: [{ type: Input, args: [{ isSignal: true, alias: "description", required: false, transform: undefined },] }],
        footerTitle: [{ type: Input, args: [{ isSignal: true, alias: "footerTitle", required: false, transform: undefined },] }],
        footerNote: [{ type: Input, args: [{ isSignal: true, alias: "footerNote", required: false, transform: undefined },] }],
        align: [{ type: Input, args: [{ isSignal: true, alias: "align", required: false, transform: undefined },] }]
    };
};
ChartFrameComponent = __decorate([
    Component({
        selector: 'app-chart-frame',
        changeDetection: ChangeDetectionStrategy.OnPush,
        host: { class: 'bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6 shadow-sm' },
        template: `
    @if (title() || description()) {
      <div class="flex flex-col gap-1.5" [class.text-center]="align() === 'center'">
        @if (title()) {
          <h3 class="leading-none font-medium">{{ title() }}</h3>
        }
        @if (description()) {
          <p class="text-muted-foreground text-sm">{{ description() }}</p>
        }
      </div>
    }
    <ng-content />
    @if (footerTitle() || footerNote()) {
      <div class="flex flex-col gap-1" [class.text-center]="align() === 'center'">
        @if (footerTitle()) {
          <p class="text-sm leading-none font-medium">{{ footerTitle() }}</p>
        }
        @if (footerNote()) {
          <p class="text-muted-foreground text-sm">{{ footerNote() }}</p>
        }
      </div>
    }
  `,
    })
], ChartFrameComponent);

/** Shared, dependency-free helpers for the SVG chart components. */
const ZERO_RANGE = { y0: 0, y1: 0 };
const CHART_PALETTE = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];
function paletteColor(color, index) {
    return color ?? CHART_PALETTE[index % CHART_PALETTE.length] ?? 'var(--chart-1)';
}
function seriesColor(series, index) {
    return paletteColor(series.color, index);
}
function valueOf(datum, key) {
    const value = datum[key];
    return typeof value === 'number' ? value : 0;
}
function linearScale(d0, d1, r0, r1) {
    const span = d1 - d0 || 1;
    return (value) => r0 + ((value - d0) / span) * (r1 - r0);
}
/** Evenly splits [r0, r1] into `count` bands; `padding` is the share of each step left empty. */
function bandScale(count, r0, r1, padding = 0.3) {
    const step = (r1 - r0) / Math.max(count, 1);
    const width = step * (1 - padding);
    return {
        width,
        start: (index) => r0 + index * step + (step - width) / 2,
        center: (index) => r0 + index * step + step / 2,
    };
}
/** Rounds `max` up to a tidy axis ceiling and returns evenly spaced ticks from 0. */
function niceScale(max, count = 3) {
    const raw = max > 0 ? max / count : 1;
    const magnitude = 10 ** Math.floor(Math.log10(raw));
    const step = ([1, 2, 2.5, 5, 10].map((c) => c * magnitude).find((s) => s >= raw) ?? raw) || 1;
    return { max: step * count, ticks: Array.from({ length: count + 1 }, (_, i) => i * step) };
}
/** Cumulative [y0, y1] ranges per series (outer) and datum (inner). */
function stackSeries(data, keys) {
    const totals = data.map(() => 0);
    return keys.map((key) => data.map((datum, i) => {
        const y0 = totals[i] ?? 0;
        const y1 = y0 + valueOf(datum, key);
        totals[i] = y1;
        return { y0, y1 };
    }));
}
function horizontalGrid(ticks, yScale, x1, x2) {
    return ticks.map((tick) => ({ x1, x2, y1: yScale(tick), y2: yScale(tick) }));
}
/** Angles are in degrees, 0 at 12 o'clock, increasing clockwise. */
function polarToCartesian(cx, cy, radius, angle) {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + radius * Math.sin(rad), y: cy - radius * Math.cos(rad) };
}
const round = (n) => Math.round(n * 100) / 100;
function pointsAttr(points) {
    return points.map((p) => `${round(p.x)},${round(p.y)}`).join(' ');
}
function linePath(points) {
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${round(p.x)} ${round(p.y)}`).join(' ');
}
/** Closed area between a top edge (left to right) and a bottom edge (left to right). */
function areaPath(top, bottom) {
    const back = [...bottom].reverse();
    return `${linePath(top)} ${back.map((p) => `L${round(p.x)} ${round(p.y)}`).join(' ')} Z`;
}
/** Ring segment (or pie wedge when `inner` is 0) between two angles. */
function arcPath(cx, cy, outer, inner, startAngle, endAngle) {
    const end = Math.min(endAngle, startAngle + 359.99);
    const large = end - startAngle > 180 ? 1 : 0;
    const os = polarToCartesian(cx, cy, outer, startAngle);
    const oe = polarToCartesian(cx, cy, outer, end);
    const outerArc = `M${round(os.x)} ${round(os.y)} A${outer} ${outer} 0 ${large} 1 ${round(oe.x)} ${round(oe.y)}`;
    if (inner <= 0)
        return `${outerArc} L${cx} ${cy} Z`;
    const is = polarToCartesian(cx, cy, inner, startAngle);
    const ie = polarToCartesian(cx, cy, inner, end);
    return `${outerArc} L${round(ie.x)} ${round(ie.y)} A${inner} ${inner} 0 ${large} 0 ${round(is.x)} ${round(is.y)} Z`;
}

export { ChartFrameComponent as C, ZERO_RANGE as Z, stackSeries as a, linePath as b, areaPath as c, bandScale as d, arcPath as e, polarToCartesian as f, pointsAttr as g, horizontalGrid as h, linearScale as l, niceScale as n, paletteColor as p, seriesColor as s, valueOf as v };
