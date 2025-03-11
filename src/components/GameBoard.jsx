export default function GameBoard({ onClickSquare, gameBoard }) {
    return (
        <div className="w-[500px] h-[500px]">
            <div className="w-full h-full grid grid-rows-3 gap-2 bg-beige">
                {
                    gameBoard.map((rows, rowIndex) => {
                        return <div
                            className="w-full "
                            key={rowIndex}>
                            <div className="gap-2 bg-beige grid grid-cols-3 w-full h-full selection:bg-none">
                                {rows.map((playerSymbol, colsIndex) => {
                                    return <div
                                        className="bg-matt-black flex items-center justify-center"
                                        key={colsIndex}>
                                        <button
                                            className="w-full h-full flex justify-center items-center font-Aspect-Range text-8xl font-light"
                                            onClick={() => onClickSquare(rowIndex, colsIndex)}
                                            disabled={playerSymbol !== null}>
                                            {playerSymbol}
                                        </button>
                                    </div>
                                })}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
