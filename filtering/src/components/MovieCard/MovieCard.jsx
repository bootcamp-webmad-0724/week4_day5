const MovieCard = ({ title, director, IMDBRating, hasOscars, _id }) => {

    return (
        <div className="MovieCard">

            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {IMDBRating}</p>

            {
                IMDBRating > 8 && <p>¡ES MUY BUENA!</p>
            }

            {
                hasOscars ? <p>¡Tuvo Oscar! 🏆</p> : <p>No tuvo Oscar... 💩</p>
            }

        </div>
    )
}

export default MovieCard