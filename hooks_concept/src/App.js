
import './App.css';
import HookuseState from './Hooks/HookuseState';
import HookUseMemo from './Hooks/HookUseMemo';
import HookuseEffect from './Hooks/HookuseEffect';
function App() {
//const [count,setCount]=useState(0)
return(
  <>
  <HookuseState/>
<HookuseEffect/>
<HookUseMemo/>
  </>
)
}

export default App;
