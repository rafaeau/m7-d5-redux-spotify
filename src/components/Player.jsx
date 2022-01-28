import React from 'react'
import '../style/Player.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from 'react-icons/bs'

const mapStateToProps = (state) => ({
    isPlaying: state.isPlaying,
})


const Player = ({ isPlaying }) => {


    return (
        <div className='row player d-flex flex-column text-white justify-content-around align-items-center'>
            <div className='col-2 d-flex align-items-center'>
                <img src={isPlaying.album.cover_small} height={50} width={50} className='mr-1'/>
                <div className='d-flex flex-column mt-3'>
                <p className='title-player my-auto'>{isPlaying.title}</p>
                <p className='title-player text-muted'>{isPlaying.artist.name}</p>
                </div>
                
            </div>

            <div className='col-8'>
            <div className='player-icons d-flex justify-content-around align-items-center'>
                <i class="bi bi-shuffle"></i>
                <i class="bi bi-caret-left-fill"></i>
                <i class="bi bi-play-circle"></i>
                <i class="bi bi-caret-right-fill"></i>
                <i class="bi bi-arrow-repeat"></i>
            </div>
            <div className='player-slide'>
                <div className='slider mt-2'></div>
            </div>
            </div>

            <div className='col-2 d-flex ml-auto align-items-center mt-n5 mr-4 justify-content-end'>
                <BsFillVolumeMuteFill/>
                <input
                    type="range"
                    min={0}
                    max={100}
                />
                <BsFillVolumeUpFill />
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Player)
