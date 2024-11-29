import { Component } from 'react';
import { Container } from 'react-bootstrap';


class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true
    };
  }

// Metodo per caricare i dati all'inizializzazione del componente
  componentDidMount() {
    this.fetchMovies(this.props.searchQuery);
  }

  // Funzione per fare la richiesta API
  fetchMovies(query) {
    const apiUrl = `http://www.omdbapi.com/?apikey=61aec85f&s=${query}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          this.setState({ movies: data.Search, loading: false });
        } else {
          console.error('No movies found');
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <Container fluid className="bg-dark text-white py-4">
        <h2 className="text-center mb-4">{this.props.searchQuery} Movies</h2>

        {loading ? (
          <div className="text-center text-white">Loading...</div> // Messaggio di caricamento
        ) : (
          <div className="image-carousel">
            {movies.map((movie, index) => (
              <div key={index} className="image-item">
                <img src={movie.Poster} alt={movie.Title} className="carousel-image" />
              </div>
            ))}
          </div>
        )}
      </Container>
    );
  }
}

export default MyCarousel;