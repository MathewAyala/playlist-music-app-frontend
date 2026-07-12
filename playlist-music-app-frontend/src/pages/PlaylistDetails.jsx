import { useEffect, useState } from "react";
import { useParams } from "react-router";

function PlaylistDetails() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/playlists/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPlaylist(data);
      });
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