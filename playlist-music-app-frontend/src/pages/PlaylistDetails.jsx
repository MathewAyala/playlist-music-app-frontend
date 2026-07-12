import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../App.css";
import SongCard from "../components/SongCard";

function PlaylistDetails() {
  const [songs, setSongList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const playlistRes = await fetch(
          `http://localhost:8000/playlists/${id}`,
        );
        if (!playlistRes.ok) throw new Error("Failed to load playlist");
        const playlistData = await playlistRes.json();

        const songIds = playlistData.songs.id; // match your actual field name
        if (!songIds || songIds.length === 0) {
          setSongList([]);
          console.log("songIds:", songIds);
          return;
        }

        const songResponses = await Promise.all(
          songIds.map((songId) =>
            fetch(`http://localhost:8000/songs/${songsId}`),
          ),
        );
        for (const res of songResponses) {
          if (!res.ok) throw new Error("Failed to load one or more songs");
        }
        const songsData = await Promise.all(
          songResponses.map((res) => res.json()),
        );
        setSongList(songsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);

  if (loading) return <div>Loading songs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="grid">
        {songs.map((song) => (
          <div key={song.id}>
            <SongCard Songs={song} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlaylistDetails;
