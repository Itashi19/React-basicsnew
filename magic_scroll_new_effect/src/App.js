import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import './styles.css';

const Sticky2Styled = styled.div`
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  .section {
    position: relative;
    height: 70vh;
    background: linear-gradient(160deg, #f47c66 0%, #e51906 100%);
  }

  .sticky {
    --size: 50vh;

    height: 100vh;
    position: relative;
    background: linear-gradient(
      160deg,
      #e4f5fc 0%,
      #bfe8f9 26%,
      #9fd8ef 59%,
      #0068f2 100%
    );

    > div {
      position: absolute;
      left: calc(50vw - 30vh);
      top: calc(50vh - 30vh);
      box-shadow: inset 0 0 0 10px pink;
      width: 60vh;
      height: 60vh;
    }

    > div > svg {
      position: absolute;
      fill: currentColor;
    }
  }
`;

const Sticky2 = () => (
  <Sticky2Styled>
    {/* <div className="section"></div> */}
    <Controller>
      <div>
        <Scene triggerHook="onLeave" duration={1000} pin>
          {(progress) => (
            <div className="sticky">
              <div>
                <Timeline
                  progress={progress}
                  paused
                  target={
                    <svg width="55%" height="55%">
                      <circle cx="50%" cy="50%" r="50%" />
                    </svg>
                  }
                >
                  <Tween
                    from={{ left: 0, top: 0, color: 'red' }}
                    to={{
                      scaleX: 0.5,
                      scaleY: 0.5,
                      left: '-70%',
                      top: '-40%',
                      opacity: 0.2,
                      color: 'green'
                    }}
                  />
                </Timeline>
                <Timeline
                  progress={progress}
                  paused
                  target={
                    <>
                      <svg width="55%" height="55%">
                        <circle cx="50%" cy="50%" r="50%" />
                      </svg>
                    </>
                  }
                >
                  <Tween
                    from={{ left: '45.35%', top: 0, color: 'red' }}
                    to={{
                      scaleX: 2,
                      scaleY: 2,
                      left: '120%',
                      top: '-20%',
                      opacity: 0.3,
                      color: 'orange'
                    }}
                  />
                </Timeline>
                <Timeline
                  progress={progress}
                  paused
                  target={
                    <svg
                      width="91%"
                      height="60%"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <polygon points="0,0 100,0 50,100" />
                    </svg>
                  }
                >
                  <Tween
                    from={{ left: '4.6%', top: '42.7%', color: 'red' }}
                    to={{
                      scaleX: 3,
                      scaleY: 3,
                      left: 'calc(50vw - 205px)',
                      top: '80vh',
                      opacity: 0.25,
                      color: 'blue',
                      rotate: -30
                    }}
                  />
                </Timeline>
              </div>
            </div>
          )}
        </Scene>
      </div>
    </Controller>
    <div className="section" />
  </Sticky2Styled>
);

export default Sticky2;
