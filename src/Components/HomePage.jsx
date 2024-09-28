
function HomePage() {
  return (
    <div className="flex h-screen items-center justify-center">
        <div>
            <img src="/dices.png" alt="dice-logo" />
        </div>
        <div>
            <div className="font-bold text-8xl">Dice Game</div>
            <div className="flex justify-end w-full">
            <button className="w-52 bg-black text-white rounded-sm" >Play Now</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage