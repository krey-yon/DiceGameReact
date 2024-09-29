// import { useState } from 'react'

function RollDice( {diceNumber, roleDice, resetScore, showRules, setShowRules } ) { 
    // const [diceNumber, setDiceNumber] = useState(1)
    // const generateRandomNumber = () => {
    //     return Math.floor(Math.random() * 6) + 1 || 1
    // }
    // const roleDice = () => {
    //     setDiceNumber(generateRandomNumber())
    // }

  return (
    <div className="flex flex-col justify-center h-full items-center text-center mt-20">
        <div
        className="cursor-pointer"
        onClick={() =>roleDice()}
        ><img src={`/images/dice_${diceNumber}.png`} alt="dice_1" /></div>
        <div className="font-semibold text-3xl mt-6">Click on Dice to roll</div>
        <div
        className="text-xl font-medium border w-60 mt-4 bg-black text-white p-2 rounded-md cursor-pointer"
        onClick={() => resetScore()}
        >Reset Score</div>
        <div
        className="text-xl font-medium border w-60 mt-2 bg-black text-white p-2 rounded-md cursor-pointer"
        onClick={() => setShowRules((prev) => !prev)}
        >{showRules? "Hide": "Show"} Rules</div>
    </div>
  )
}

export default RollDice