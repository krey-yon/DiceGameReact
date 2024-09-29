import { useState } from 'react'

function ScoreNSelection() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [ selectedNumber, setSelectedNumber ] = useState();

  return (
    <div className="flex justify-center h-full">
    <div className="flex justify-between h-36 w-3/4 mt-8">
        <div className="flex flex-col h-full justify-center">
            <div className="text-8xl font-bold w-full text-center">0</div>
            <div className="text-3xl font-bold">Total Score</div>
        </div>
        <div className="flex-col">

            <div className="flex gap-4 mt-8 font-bold text-xl">
            {numbers.map((number) => (
                <div
                className={`border border-black h-20 w-20 flex items-center justify-center cursor-pointer hover:bg-gray-950 hover:text-white ${selectedNumber === number ? 'bg-gray-950 text-white' : ''}`}
                key={number}
                onClick={() => setSelectedNumber(number)}
                >
                {number}
                </div>
            ))}
            </div>

            <div className="flex h-full w-full justify-center mt-4">
                <div className="font-bold">Select Number</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ScoreNSelection