import { useState, useEffect } from "react";
import { Link } from "react-router";
import "../App.css";
import PlaylistCard from "../components/PlaylistCard";
const VITE_API_URL=https://playlist-music-app-backend.onrender.com
    

function Home() {
  const [playlists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}`);
        if (!response.ok) {
          throw new Error("Failed to load playlists");
        }
        const data = await response.json();
        setList(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Loading playlists...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="grid">
        {playlists.map((playlist) => {
          return (
            <div key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>
                {<PlaylistCard key={playlist.id} Playlist={playlist} />}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
