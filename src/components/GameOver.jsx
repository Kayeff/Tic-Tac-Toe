export default function GameOver({winner, isDraw, handleReset}) {
  return (
    <div className="w-[500px] h-[500px] bg-basix-brown flex items-center justify-center flex-col space-y-10">
      <div className="flex items-center justify-center flex-col space-y-2">
        <h1 className="font-Aspect-Range text-4xl">Game Over</h1>
        <h1 className="font-Urbanist">{winner && `${winner} won`}{isDraw && "It's a Draw!!"}</h1>
      </div>
      <button className="bg-matt-black px-4 py-2 font-Urbanist hover:bg-teal-green transition-colors" onClick={handleReset}>Rematch</button>
    </div>
  )
}
