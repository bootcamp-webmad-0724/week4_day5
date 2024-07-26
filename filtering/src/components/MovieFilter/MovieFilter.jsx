const MovieFilter = ({ filterMovies }) => {

    const handleFilter = event => {
        const { value } = event.target
        filterMovies(value)
    }

    return (
        <div className="MovieFilter">
            <input onKeyUp={handleFilter} type="text" placeholder="Escribe un título..." />
        </div>
    )
}

export default MovieFilter