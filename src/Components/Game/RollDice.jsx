
function RollDice() {
  return (
    <div className="flex flex-col justify-center h-full items-center text-center mt-20">
        <div className="cursor-pointer"><img src="/images/dice_1.png" alt="dice_1" /></div>
        <div className="font-semibold text-3xl mt-6">Click on Dice to roll</div>
        <div className="text-xl font-medium border w-60 mt-4 bg-black text-white p-2 rounded-md cursor-pointer">Reset Score</div>
        <div className="text-xl font-medium border w-60 mt-2 bg-black text-white p-2 rounded-md cursor-pointer">Show Rules</div>
    </div>
  )
}

export default RollDice