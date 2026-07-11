import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


    const [playlists, setList ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0);

useEffect(() => {
    const getData = async () => {
        try{
            const response = await fetch('http://localhost:6000/')
            const data = response.json();
            console.log(data)
            setList([...data.results])
         }catch(err){

         }
    }

})


function App() {   
    const 
  return (
    <div>
    <div className="grid">
        {playlists.map((playlist) => (
          //outer most component must have a key. 
          <div key={playlist.id}>
            <Link to ={`/playlists/${playlist.id}`} >{<MovieCard 
              key={playlist.id}
              movie={} 
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />}</Link>
          </div>
        ))}
    </div>
    </div>
  )
}

export default App