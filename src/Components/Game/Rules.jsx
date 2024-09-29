
function Rules() {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center">
        <div className="bg-red-100 p-4 mt-2 ">
            <h1 className="font-bold">How to play dice game</h1>
            <p>1. Select a number from 1 to 6</p>
            <p>2. Click on the dice to roll</p>
            <p>3. If the dice number matches the selected number, you get 10 points</p>
            <p>4. If the dice number does not match the selected number, you lose 5 points</p>
            <p>5. You can reset the score at any time</p>
        </div>
    </div>
  )
}

export default Rules