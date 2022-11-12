import { useState } from "react";
import ScrollMagic from "scrollmagic";

import First from "./sections/First";
export default function Main() {
  const [scrollMagic] = useState({
    controller: new ScrollMagic.Controller()
  });
  const { controller } = scrollMagic;

  return (
    <>
      <First controller={controller} />
    </>
  );
}
