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
                <h3>{album.title}</h3>
            </div>
            <div className="album-right-info mt-5">
                {album?.tracks?.data.map((song) => 
                    <span className="d-flex flex-wrap">
                        <div>
                        <p className="mr-5">{song.title}</p>
                        <p className="ml-5">{song.artist.name}</p>
                        </div>
                        <div>
                        <p>{song.duration / 60}</p>
                        </div>
                    </span>
                )}

            </div>
        </div>
    )
}

export default Album