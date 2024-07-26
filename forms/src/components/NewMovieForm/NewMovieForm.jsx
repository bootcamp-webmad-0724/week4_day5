import { useState } from 'react'
import './NewMovieForm.css'

const NewMovieForm = ({ addNewMovie }) => {

    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [IMDBRating, setIMDBRating] = useState(0)
    const [hasOscars, setHasOscars] = useState(false)

    const handleTitleChange = event => {
        const { value } = event.target
        setTitle(value)
    }

    const handleDirectorChange = event => {
        const { value } = event.target
        setDirector(value)
    }

    const handleRatingChange = event => {
        const { value } = event.target
        setIMDBRating(value)
    }

    const handleOscarsChange = event => {
        const { checked } = event.target
        setHasOscars(checked)
    }

    const handleFormSubmit = event => {

        event.preventDefault()              // Evita el envío
        const movieData = { title, director, hasOscars, IMDBRating }            // Edulcorante sitáctico para claves

        addNewMovie(movieData)
    }

    return (
        <div className="NewMovieForm">
            <h1>Nueva película</h1>
            <hr />

            <form onSubmit={handleFormSubmit}>

                Título:
                <input type="text" value={title} onChange={handleTitleChange} />

                Director:
                <input type="text" value={director} onChange={handleDirectorChange} />

                Puntuación:
                <input type="number" value={IMDBRating} onChange={handleRatingChange} />

                Tuvo Oscar?:
                <input type="checkbox" checked={hasOscars} onChange={handleOscarsChange} />

                <input type="submit" value={'Crear película'} />

            </form>
        </div>
    )
}

export default NewMovieForm