import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
export default function scroll() {
  const scrollTracer = document.querySelector('.scroll-tracker');

  scrollTracer.animate(
    { transform: ['scaleX(0)', 'scaleX(1)'] },
    {
      duration: 10000,
      fill: 'both',
      timeline: new ScrollTimeline({
        scrollOffsets: [CSS.percent(0), CSS.percent(100)],
      }),
    }
  );
}
