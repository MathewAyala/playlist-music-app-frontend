function SongCard({songs}){
    return(
        <div className="card">
            <h2>{songs.title}</h2>
            <p>{songs.artiest}</p>
        </div>
    )
}

export default SongCard