 

export function Cards(stuffs){
    console.log("rendeing list of cards");
    return (
        <div className="cards">
            {stuffs.map(
                x => <div className="card">{x}</div>
            )}
        </div>
    )
}