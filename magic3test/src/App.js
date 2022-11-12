import ScrollMagic from "scrollmagic";
import { Controller, Scene } from "react-scrollmagic";
import './App.css';

function App() {
  return (
   <>
   <section>
      <div class="reveal">
        <div id="trigger1"></div>
        <div id="revealbox1" class="box">
          <h2>first</h2>
        </div>
      </div>
      <div class="reveal">
        <div id="trigger2"></div>
        <div id="revealbox2" class="box">
          <h2>second</h2>
        </div>
      </div>
      <div class="reveal">
        <div id="trigger3"></div>
        <div id="revealbox3" class="box">
          <h2>third</h2>
        </div>
      </div>
    </section>
   </>
  );
}

export default App;
