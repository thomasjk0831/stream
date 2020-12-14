import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../data/axios'
import Carousel from 'react-elastic-carousel'
import './Header.css'
{/* <img className = "main-poster" src = {`${baseUrl}${movie.backdrop_path}`} alt={movie.title} /> */ }

const baseUrl = 'https://image.tmdb.org/t/p/original'
const API_KEY = "6d0c4c775463ca5290316fa0398e562b";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
]

function Header(props) {
    let history = useHistory()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`/movie/popular?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                //dont display Header DOM until fully loaded

                setLoading(false)
                //array too long. decided to cut it to half the size
                setMovies(res.data.results.filter((item, index) => index % 2))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    const clickHandler = (id) => {
        history.push(`/${id}`)
    }

    if (loading) {
        return <div className="navbar">
            <img className="logo" src="./img/logo3.png" alt="logo" />
        </div>
    }
    else return (
        <>
            <div className="navbar">
                <img className="logo" src="./img/logo3.png" alt="logo" />
            </div>
            <div className="main-container">
                <Carousel>
                    {
                        movies.map(movie => {
                            return (<div className="banner"
                                style={{
                                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                                }}>

                                <div className="banner-content">
                                    <div className="banner-header">
                                        <h1>{movie.title}</h1>
                                        <div onClick={() => clickHandler(movie.id)} className="play">PLAY</div>
                                    </div>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </Carousel>
            </div>


        </>
    )
}

export default Header
