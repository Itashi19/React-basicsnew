import React from "react"
import Die from "./Die"
import "./style.css";
import { nanoid } from "nanoid";
import Confetti from "react-confetti"
export default function App() {
const[dice,setDice]=React.useState(allNewDice());
const [tenzies, setTenzies] = React.useState(false)
    

//this useffect will always keep the check on the dice state if all values same then you won would be there
React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
}, [dice])

function generateNewDie() {
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}

function allNewDice(){
    const newDice=[]
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())   
    }
        return newDice
}

 
// function holdDice(id) {
//     console.log(id)
// }

//updating an array in the state,changing isHeld property
function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}


// function rollDice(){
//     setDice(allNewDice())
// }

//we will see if the die is held or not ,if the die is held then return the same die else
//return or generate new dies


function rollDice() {
    if(!tenzies) {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
}
const diceElements=dice.map(die=>(<Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
))
    return (
        <main>
        {tenzies && <Confetti />}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>{tenzies?"New Game":"Roll"}</button>
        </main>
    )
}