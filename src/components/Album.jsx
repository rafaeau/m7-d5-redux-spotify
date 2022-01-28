import { fetchAlbum } from "../apicalls"
import { useEffect, useState } from "react"
import Song from "./Song"
import '../style/Album.css'
import { useParams } from "react-router-dom"

const Album = (props) => {

    const [album, setAlbum] = useState({})

    let {id} = useParams()

    useEffect(() => {
        fetchAlbum(id).then((res) => setAlbum(res))
    }, [])

    return (
        <div className="album-wrap">
            <div className="album-left-info mt-5">
                <img src={album.cover_medium} alt="cover" />
                <h3 className="mt-2">{album.title}</h3>
            </div>
            <div className="album-right-info mt-5">
                {album?.tracks?.data.map((song) => 
                    <span className="d-flex flex-wrap justify-content-between">
                        <div>
                        <p className="mr-5">{song.title}</p>
                        <p className="mt-n3 text-muted">{song.artist.name}</p>
                        </div>
                        <div>
                        <small className="duration mr-5" style={{ color: "white" }}>
                        {Math.floor(parseInt(song.duration) / 60)}:
                        {parseInt(song.duration) % 60 < 10
                            ? "0" + (parseInt(song.duration) % 60)
                            : parseInt(song.duration) % 60}
                        </small>
                        </div>
                    </span>
                )}

            </div>
        </div>
    )
}

export default Album