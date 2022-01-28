import React from 'react'
import Logo from '../assets/Logo.png'
import '../style/Navbar.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { BsFillTrashFill } from "react-icons/bs";

const mapStateToProps = (state) => ({
    favorites: state.favorites
})

const mapDispatchToProps = (dispatch) => ({
    delFromFavorites: (i) => {
        dispatch({
            type: 'DEL_FROM_FAVORITES',
            payload: i
        })
    },
})

const Navbar = ({ favorites, delFromFavorites }) => {
    return (
        <div className='navbar w-100 d-flex flex-column justify-content-evenly p-0' style={{ height: '90vh' }}>
            <div>
                <img src={Logo} style={{ width: '7em' }} className='d-block py-3' />
                <Link to='/'>
                    <div className='nav-link'><i class="bi bi-house-door-fill"></i> Home</div>
                </Link>
                <Link to='/album'>
                    <div className='nav-link'><i class="bi bi-music-note-list"></i> Album</div>
                </Link>
                <Link to='/artist'>
                    <div className='nav-link'><i class="bi bi-person"></i> Artist</div>
                </Link>
            <div>
                <h5 className='mb-4 mt-1 text-white'>Favorite songs:</h5>
                {favorites && favorites.map((song, i) => (
                    <>
                        <div key={song._id} className='d-flex'>
                            <Link to={'album/' + song._id}><h6 className='text-white'>{song.title}</h6></Link>
                            <span>
                                <Button className='del-btn btn-sm ml-2' onClick={() => {
                                    delFromFavorites(i)
                                }}>
                                    <BsFillTrashFill />
                                </Button>
                            </span>
                            <hr />
                        </div>
                        <h6 className="mb-2 mt-n2 ml-1 text-white">{song.artist.name}</h6>
                    </>
                ))}
            </div>
            </div>


            <div className='d-flex flex-column justify-content-center' style={{ width: '85%' }}>
                <Button variant="light mb-3" style={{ borderRadius: '15px' }}>Sign up</Button>
                <Button variant="outline-secondary">Login</Button>
                <div className='footer-link mx-auto'>
                    <a className='text-muted'>Cookie | </a>
                    <a className='text-muted'>Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
