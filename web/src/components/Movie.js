import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams, NavLink } from 'react-router-dom'
import axios from '../data/axios'
import ReactLoading from 'react-loading'
import './Movie.css'

function Movie() {
    const { id } = useParams()
    const [youtubeKey, setYoutubeKey] = useState('')

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6d0c4c775463ca5290316fa0398e562b`)
            .then(res => {
                console.log(res.data.results[0].key)
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
            {
                youtubeKey ? <ReactPlayer url={`https://www.youtube.com/watch?v=${youtubeKey}`} width="1200px" height="675px" /> : "Error Loading Video"
            }
        </div>
    )
}

export default Movie
