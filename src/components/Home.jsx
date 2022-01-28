import React from 'react'
import { useState, useEffect } from 'react'
import Song from './Song'
import '../style/Home.css'
import { Spinner } from 'react-bootstrap'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Loader from './Loader'

const mapStateToProps = (state) => ({
    favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (song) => {
        dispatch({
            type: 'ADD_TO_FAVORITES',
            payload: song
        })
    },
    delFromFavorites: (id) => {
        dispatch({
            type: 'DEL_FROM_FAVORITES',
            payload: id
        })
    },
})

const Home = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [artists, setArtists] = useState(null)

    useEffect(async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
            if (response.ok) {
                let data = await response.json()
                setArtists(data.data)
                setIsLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    /* const isFavorite = favorites.some((_song) => _song.id === props.song.id)
    const toggleFavorite = isFavorite ? props.delFromFavorites : props.addToFavorites */

    return (
        <Container className='home'>
            <div className='home-links'>
                <a>TRENDING</a>
                <a>PODCAST</a>
                <a>MOODS AND GENRES</a>
                <a>NEW RELEASES</a>
                <a>DISCOVER</a>
            </div>
            <h1 className='font-weight-bold text-white pt-5'>#THROWBACKTHURSDAY</h1>
            <Row className='pt-4'>
                {
                    isLoading ? <Loader /> : artists.slice(0, 8).map((album) => {
                        return (
                            <>
                                <Song src={album.album.cover_medium} key={album.album.id} id={album.album.id} title={album.album.title} artist={album.artist.name} artistId={album.artist.id}/>
                                    <Button className='fav-btn btn-sm ml-2' onClick={() => {
                                        props.addToFavorites(album)
                                    }}>
                                        +
                                    </Button>
                            </>
                               
                        )
                    })
                }

            </Row>
        </Container>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
