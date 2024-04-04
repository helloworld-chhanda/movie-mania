
import './App.css';

function App() {
  const barbieMovies = [
    {
        "id": 1,
        "title": "Barbie in the Nutcracker",
        "year": 2001,
        "director": "Owen Hurley",
        "cast": ["Kelly Sheridan", "Kirby Morrow", "Tim Curry"],
        "synopsis": "A Barbie version of E.T.A. Hoffmann's tale of the..."
    },
    {
        "id": 2,
        "title": "Barbie as Rapunzel",
        "year": 2002,
        "director": "Owen Hurley",
        "cast": ["Kelly Sheridan", "Anjelica Huston", "Cree Summer"],
        "synopsis": "Barbie is an artist who paints her way out of..."
    },
    {
        "id": 3,
        "title": "Barbie of Swan Lake",
        "year": 2003,
        "director": "Owen Hurley",
        "cast": ["Kelly Sheridan", "Mark Hildreth", "Kelsey Grammer"],
        "synopsis": "Barbie comes to life in her third animated movie..."
    },
]
  const handleRandomMovie =()=>{
    const  number = Math.floor(Math.random()*10)%barbieMovies.length;
    console.log(number)
  }
  return (
    <div className="app-container">
      <div>
        Movie Recommender
      </div>
      <button onClick={handleRandomMovie}>
        Movie list
      </button>
    </div>
  );
}

export default App;
