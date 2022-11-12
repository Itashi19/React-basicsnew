import { useFirst } from "../../hooks/useFirst";
import Section from "../Section";

export default function First({ controller }) {
  const [refSection, refCurrent] = useFirst(controller);

  return (
    <Section
      className={"first-section"}
      title={`Make Your Site Move with <br />Animation`}
      refSection={(el) => (refSection.current = el)}
    >
      <div className="images-wrapper">
        <img className="section_1_bg" src="img/section_1_bg.webp" alt="" />
        <div className="ingredient-images">
          {Array(9)
            .fill()
            .map((_, index) => {
              return (
                <img
                  key={index}
                  ref={(el) => (refCurrent.current[index] = el)}
                  className={`section_1_0${index + 1}`}
                  src={`img/section_1_0${index + 1}.webp`}
                  alt=""
                />
              );
            })}
        </div>
      </div>

      <div>
      <p>Draw Attention Where You Want it Most
      A great animation effect is impossible to ignore</p>
      </div>
    </Section>
  );
}
