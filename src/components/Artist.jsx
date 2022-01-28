import { fetchArtist } from "../apicalls"
import { useEffect, useState } from "react"
import '../style/Album.css'
import { useParams } from "react-router-dom"

const Artist = (props) => {

    const [artist, setArtist] = useState({})

    let {artistId} = useParams()

    useEffect(() => {
        fetchArtist(artistId).then((res) => setArtist(res))
        console.log(artist)
    }, [])

    return (
        <div className="album-wrap">
            <div className="album-left-info mt-5">
                <img src={artist.data.picture_medium} alt="cover" />
                <h3>{artist.data.artist.name}</h3>
            </div>
            <div className="album-right-info mt-5">
                <ul>
                    {artist.data?.map((track) => 
                    <>
                        <li>
                            <h6>{track.title}</h6>
                            <h6>{track.artist.name}</h6>
                            <h6>{track.duration / 60}</h6>
                        </li>
                    </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Artist