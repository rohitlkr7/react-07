
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const poster = movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png";
  return (
    <div className="movie-card">
      <img src={poster} alt={movie.Title} className="poster" />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>   
        <Link to={`/movie/${movie.imdbID}`} className="details-link">View Details</Link>
      </div>      
    </div>
  );
}
