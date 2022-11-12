
import { useEffect, useState } from 'react';


function HookuseEffect() {
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

//to display width of the screen

const[screenwidth,setScreenWidth]=useState(window.innerWidth);
 useEffect(()=>{
    // setCount({
    //     num:5,
    //     id:"random"
    // })
   console.log("I ran")
   window.addEventListener("resize",()=>{
    setScreenWidth(window.innerWidth);
   })

   //cleanup
   return()=>{window.removeEventListener("resize")}
 },[count])



return (<div className='App'>
<button onClick={handleSubnew}>-</button>
<span>{count.num}</span>


<button onClick={handleAddnew}>+</button>
<p>{screenwidth}</p>
</div>)
}

export default HookuseEffect;
