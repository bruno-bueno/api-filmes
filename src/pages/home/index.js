import { useEffect, useState } from "react";
import { Container, Movie, MovieList, BarraSuperior } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const KEY = process.env.REACT_APP_KEY;
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchQuery}&language=pt-BR`)
          .then((response) => response.json())
          .then((data) => {
            setSearchResults(data.results);
            console.log(setSearchResults);
          });

      };

    return (
        <Container>
            <BarraSuperior>
            <nav class="navbar w-100">
                <div class="container-fluid">
                <h1 className="mx-5">BUENO FILMES</h1>
                    <form class="d-flex"onSubmit={handleSearch}>
                    <input type="text" className="form-control me-2" placeholder="Pesquisar filmes..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type="submit" className="btn btn-outline-secondary ">Pesquisar</button>
                    </form>
                </div>
            </nav>           
            </BarraSuperior>

            <MovieList>
            {(searchResults.length > 0 ? searchResults : movies).map((movie) => (
                <Movie key={movie.id}>
                    <Link to={`/${movie.id}`}>
                    <img
                        src={`${imagePath}${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <span>{movie.title}</span>
                    </Link>
                </Movie>
            ))}
            </MovieList>

            
        </Container>
    );
}

export default Home;
