import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  // Initial movies data
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology",
      posterURL: "https://via.placeholder.com/200x300/3498db/fff?text=Inception",
      rating: 9
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy",
      posterURL: "https://via.placeholder.com/200x300/e74c3c/fff?text=Dark+Knight",
      rating: 9.5
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space",
      posterURL: "https://via.placeholder.com/200x300/2ecc71/fff?text=Interstellar",
      rating: 8.5
    }
  ]);

  // Filter states
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState(0);

  // New movie form state
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  // Filter logic
  const filteredMovies = movies.filter(movie => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= rateFilter;
    return matchesTitle && matchesRating;
  });

  // Add movie handler
  const handleAddMovie = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.posterURL) {
      setMovies([...movies, newMovie]);
      // Reset form
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: 0
      });
    }
  };

  return (
    <div className="app">
      <h1>🎬 My Movie App</h1>
      
      {/* Add Movie Form */}
      <div className="add-movie-section">
        <h3>Add New Movie</h3>
        <form onSubmit={handleAddMovie}>
          <input
            type="text"
            placeholder="Title"
            value={newMovie.title}
            onChange={(e) => setNewMovie({...newMovie, title: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newMovie.description}
            onChange={(e) => setNewMovie({...newMovie, description: e.target.value})}
          />
          <input
            type="text"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={(e) => setNewMovie({...newMovie, posterURL: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Rating (0-10)"
            min="0"
            max="10"
            step="0.1"
            value={newMovie.rating}
            onChange={(e) => setNewMovie({...newMovie, rating: Number(e.target.value)})}
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>

      {/* Filter Section */}
      <Filter 
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        rateFilter={rateFilter}
        setRateFilter={setRateFilter}
      />

      {/* Movie List */}
      <h2>Movie List ({filteredMovies.length} movies)</h2>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;