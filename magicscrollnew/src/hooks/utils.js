// https://greensock.com/forums/topic/14938-tween-through-array-for-values/
// var colors = ['#6a71e6','#0192ff','#2dbae7','#48dc6c','#ffa500','#ff5534','#fe4a65'];
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// var tl2 = new TimelineMax({ repeat: -1 });
// colors.forEach(function(color, i) {
//   tl2.to("#ring2", time / colors.length, { borderColor: color });
// });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// var tl1 = colors.reduce(function(tl, color, i) {
//   return tl.to("#ring1", time / colors.length, { borderColor: color });
// }, new TimelineMax({ repeat: -1 }));

// var lulz = new TimelineMax({ease: Linear.easeNone, repeat:-1});
// lulz.to('div', time/7, {borderColor:colors[0]})
//    .to('div', time/7, {borderColor:colors[1]})
//    .to('div', time/7, {borderColor:colors[2]})
//    .to('div', time/7, {borderColor:colors[3]})
//    .to('div', time/7, {borderColor:colors[4]})
//    .to('div', time/7, {borderColor:colors[5]})
//    .to('div', time/7, {borderColor:colors[6]})
//    .to('div', time/7, {borderColor:colors[7]})

// coordinates.map(({ x, y }, index) => {
//   return timelineMax.from(
//     refCurrent.current[index],
//     4,
//     {
//       y,
//       x,
//       ease: "Power3.easeInOut"
//     },
//     "-=4"
//   );
// });

// offsets.reduce((tl, { x, y }, i) => {
//   console.log(tl);
//   return tl.to(
//     refCurrent.current[i],
//     4,
//     {
//       y,
//       x,
//       ease: "Power3.easeInOut"
//     },
//     "-=4"
//   );
// }, timelineMax);

export function timelineMaxTo(array, timelineMax, refCurrent) {
    return array.map(({ x, y }, index) => {
      return timelineMax.from(
        refCurrent.current[index],
        4,
        {
          y,
          x,
          ease: "Power3.easeInOut"
        },
        "-=4"
      );
    });
  }
  