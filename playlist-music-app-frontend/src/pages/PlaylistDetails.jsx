import { useEffect, useState } from "react";
import { useParams } from "react-router";
const VITE_API_URL=https://playlist-music-app-backend.onrender.com


function PlaylistDetails() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    async function fullPlaylist(){
        const response = await fetch(`${VITE_API_URL}/${id}`)
        const data = await response.json();
        setPlaylist(data);
        };
        fullPlaylist();
  }, [id]);

  if (!playlist) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{playlist.title}</h1>
      <h3>{playlist.description}</h3>

      {playlist.songs.map((song) => (
        <div key={song.id}>
          <p>{song.title}</p>
          <p>{song.artist}</p>
          <br/>
        </div>
      ))}
    </div>
  );
}

export default PlaylistDetails;