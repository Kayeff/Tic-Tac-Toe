export default function Log({ turns, winner, isDraw }) {
  return (
    <div
      className={`border border-beige p-4 ${
        turns.length === 0 ? "hidden" : ""
      }`}
    >
      <h1 className="font-Urbanist">
        {winner && `${winner} won`}
        {isDraw && "Its a Draw"}
      </h1>
      {turns.map((turn) => (
        <h1
          className="font-Urbanist"
          key={`${turn.square.row}${turn.square.column}`}
        >
          {turn.player} selected ( {turn.square.row}, {turn.square.column} )
        </h1>
      ))}
    </div>
  );
}
