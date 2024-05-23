import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar.js";
import MovieList from './MovieList';
import tophits from './movies.json'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <section>
        <MovieList />
      </section>
    </div>
  );
}

export default App;
