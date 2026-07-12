function PlaylistCard ({Playlist}){
    return(
        <div className="card">
            <h2>{Playlist.title}</h2>
            <h3>{Playlist.description}</h3>
        </div>
    )
}

export default PlaylistCard;