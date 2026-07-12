import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "../App.css";
import PlaylistCard from "../components/PlaylistCard";

function Home() {
  const [playlists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:8000/playlists");
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
        {playlists.map((playlist) => (
          <div key={playlist.id}><PlaylistCard
              key={playlist.id}
              Playlist={playlist}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
