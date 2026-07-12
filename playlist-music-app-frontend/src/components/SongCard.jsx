function SongCard({songs}){
    return(
        <div className="card">
            <h1>{songs.title}</h1>
            <p>{songs.artiest}</p>
        </div>
    )
}

export default SongCard