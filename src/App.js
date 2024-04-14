
import './App.css';

function App() {
  const data = [
    {
        "id": 1,
        "title": "Barbie in the Nutcracker",
        "image": "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    },
    {
        "id": 2,
        "title": "Barbie as Rapunzel",
        "image": "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    },
    {
        "id": 3,
        "title": "Barbie of Swan Lake",
        "image": "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    },
    {
        "id": 4,
        "title": "Barbie as the Princess and the Pauper",
        "image": "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
    },
    
]
  const handleRandomMovie =()=>{
    const  number = Math.floor(Math.random()*10)%data.length;
    console.log(number)
  }
  return (
    <div className="app-container">
      <div>
        <b>Movie Recommender</b>
      </div>
      <div>
        Search the movie you want to watch:
      </div>
      <input placeholder='movie name'>
      </input>
      <button onClick={handleRandomMovie}>
        Search
      </button>
      <div>
        <h1>Movie results:</h1>
        <div>
          {
            data.map((movie)=>{
              return <div>{movie.id} {movie.title} <img className="movie-img" src={movie.image} alt={movie.title} /></div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
