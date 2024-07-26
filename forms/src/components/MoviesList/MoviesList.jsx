import { useState } from 'react'
import moviesData from './../../data/moviesData.json'
import MovieCard from '../MovieCard/MovieCard'
import NewMovieForm from '../NewMovieForm/NewMovieForm'

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)

    const removeMovie = movieIdToDelete => {
        const filteredMovies = movies.filter(elm => elm._id != movieIdToDelete)
        setMovies(filteredMovies)
    }

    const addNewMovie = newMovie => {
        const fullMovies = [newMovie, ...movies]
        setMovies(fullMovies)
    }

    return (
        <div className="MoviesList">

            <NewMovieForm addNewMovie={addNewMovie} />

            <hr />

            <h1>Películas</h1>

            {
                movies.map(eachMovie => {
                    return (
                        <MovieCard key={eachMovie._id} {...eachMovie} deleteMovie={removeMovie} />
                    )
                })
            }

        </div>
    )
}


export default MoviesList