import movies from "./MovieList.js"

function Movie(props) {
    return (
        <div className="movie">
            <h2 className="fw-bold text-primary">Title: {props.name}</h2>
            <p className="text-secondary">Release Year: {props.year}</p>
            <p className="text-info">Rating: {props.rating}</p>
        </div>
    )
}

export default Movie;