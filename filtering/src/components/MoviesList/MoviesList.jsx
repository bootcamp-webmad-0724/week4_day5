import { useState } from 'react'
import moviesData from './../../data/moviesData.json'
import MovieCard from '../MovieCard/MovieCard'
import MovieFilter from '../MovieFilter/MovieFilter'

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)
    const [moviesBackup, setMoviesBackup] = useState(moviesData)

    const filterMovies = query => {
        const filteredMovies = moviesBackup.filter(elm => elm.title.toLowerCase().includes(query))
        setMovies(filteredMovies)
    }

    return (
        <div className="MoviesList">

            <MovieFilter filterMovies={filterMovies} />

            <hr />

            <h1>Películas</h1>

            {
                movies.map(eachMovie => {
                    return (
                        <MovieCard key={eachMovie._id} {...eachMovie} />
                    )
                })
            }

        </div>
    )
}


export default MoviesList