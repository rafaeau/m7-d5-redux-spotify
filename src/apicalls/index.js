export const fetchAlbum = async (id) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
    let album = await response.json()
    return album
}

export const fetchArtist = async (artistId) => {
    let response = await fetch(`https://api.deezer.com/artist/${artistId}/top?index=10`)
    let artist = await response.json()
    return artist
}