import { useState, useEffect } from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Gallery from './components/Gallery/Gallery';
import './App.css';

// REPLACE THIS WITH YOUR ACTUAL UNSPLASH ACCESS KEY
const ACCESS_KEY = 'pOH2MrraH8wH7EUqvjzKKAmHuNRqiIrERTFxN2JFLR8';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchImages = async (term) => {
    if (!term) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Check if API key is still the placeholder
      if (ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY' || ACCESS_KEY === 'your_actual_unsplash_access_key_here') {
        throw new Error('Please add your Unsplash API key in App.js');
      }
      
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${term}&per_page=20&client_id=${ACCESS_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      setImages(data.results || []);
    } catch (err) {
      setError(err.message);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load popular images on initial render
    searchImages('nature');
  }, []);

  return (
    <FavoritesProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <SearchBar onSearch={searchImages} />
          {error && <div className="error-message">Error: {error}</div>}
          {loading ? (
            <div className="loading">Loading images...</div>
          ) : (
            <Gallery images={images} />
          )}
        </main>
      </div>
    </FavoritesProvider>
  );
}

export default App;