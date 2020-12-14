import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams, NavLink } from 'react-router-dom'
import axios from '../data/axios'
import './Movie.css'

function Movie() {
    const { id } = useParams()
    const [youtubeKey, setYoutubeKey] = useState('')

    useEffect(() => {
        axios.get(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=6d0c4c775463ca5290316fa0398e562b`)
            .then(res => {
                setYoutubeKey(res.data.results[0].key)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className="movie-player-container">
            <div className="close-player">
                <NavLink to="/"><i class="fa fa-times-circle"></i></NavLink>
            </div>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${youtubeKey}`} width="1200px" height="675px" />
        </div>
    )
}

export default Movie