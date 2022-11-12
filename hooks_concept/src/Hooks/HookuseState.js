
import { useState } from 'react';


function HookuseState() {
//const [count,setCount]=useState(0)

const [count,setCount]=useState({
  num:1,
  id:"abcd",
})

const handleAddnew=()=>{
  setCount((prev)=>{
    return{
      ...prev,
    num:prev.num+1,
    }
  })
}


const handleSubnew=()=>{
  setCount((prev)=>{
    return{
      ...prev,
    num:prev.num-1,
    }
  })
}

// const handleAdd=()=>{
//   // setCount(count+1)  //this is asynchronous way as if we write setCount two time but still it will be updated a single time
//   // setCount(count+1)


//   setCount((prev)=>prev+1)//callback works synchronously
//   setCount((prev)=>prev+1)
//   //console.log(count+1);
// }

// const handleSub=()=>{
//   setCount(count-1)
// }
return (<div className='App'>
<button onClick={handleSubnew}>-</button>
<span>{count.num}</span>
<button onClick={handleAddnew}>+</button>
</div>)
}

export default HookuseState;
