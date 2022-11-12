import { useRef, useState, useEffect } from "react";
import { TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { timelineMaxTo } from "./utils";

ScrollMagicPluginGsap(ScrollMagic, TimelineMax);

const coordinates = [
  {
    y: -100,
    x: -150
  },
  {
    y: -150,
    x: -250
  },
  {
    y: -80,
    x: -100
  },
  {
    y: -100,
    x: -150
  },
  {
    y: -80,
    x: -200
  },
  {
    y: -100,
    x: -350
  },
  {
    y: -50,
    x: -150
  },
  {
    y: 50,
    x: -350
  },
  {
    y: 100,
    x: -200
  }
];

export function useFirst(controller) {
  const refCurrent = useRef([]);
  const refSection = useRef(null);
  const [timelineMax] = useState(new TimelineMax());

  useEffect(() => {
    timelineMaxTo(coordinates, timelineMax, refCurrent);

    // timelineMax
    //   .from(refCurrent.current[0], 4, {
    //     y: -100,
    //     x: -150,
    //     ease: "Power3.easeInOut"
    //   })
    //   .from(
    //     refCurrent.current[1],
    //     4,
    //     {
    //       y: -150,
    //       x: -250,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   )
    //   .from(
    //     refCurrent.current[2],
    //     4,
    //     {
    //       y: -80,
    //       x: -100,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   )
    //   .from(
    //     refCurrent.current[3],
    //     4,
    //     {
    //       y: -100,
    //       x: -150,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   )
    //   .from(
    //     refCurrent.current[4],
    //     4,
    //     {
    //       y: -80,
    //       x: -200,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   )
    //   .from(
    //     refCurrent.current[5],
    //     4,
    //     {
    //       y: -100,
    //       x: -350,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   )
    //   .from(
    //     refCurrent.current[6],
    //     4,
    //     {
    //       y: -50,
    //       x: -150,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   )
    //   .from(
    //     refCurrent.current[7],
    //     4,
    //     {
    //       y: 50,
    //       x: -350,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   )
    //   .from(
    //     refCurrent.current[8],
    //     4,
    //     {
    //       y: 100,
    //       x: -200,
    //       ease: "Power3.easeInOut"
    //     },
    //     "-=4"
    //   );

    new ScrollMagic.Scene({
      triggerElement: refSection.current,
      duration: "20%",
      triggerHook: 0,
      offset: "100"
    })
      .setTween(timelineMax)
      .setPin(refSection.current)
      .addTo(controller);
  });

  return [refSection, refCurrent];
}
