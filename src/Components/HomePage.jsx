
function HomePage( {toggleGame} ) {
  return (
    <div className="flex h-screen items-center justify-center">
        <div>
            <img src="images/dices.png" alt="dice-logo" />
        </div>
        <div>
            <div className="font-bold text-8xl">Dice Game</div>
            <div className="flex justify-end w-full">
            <button
            className="w-52 bg-black text-white rounded-sm pt-2 pb-2"
            onClick={toggleGame}
            >Play Now</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage