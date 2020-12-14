import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import axios from '../data/axios'
import './Row.css'
const baseUrl = 'https://image.tmdb.org/t/p/original'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 850, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1150, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
    { width: 1750, itemsToShow: 7, itemsToScroll: 7 },
]

function Row(props) {
    const history = useHistory()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(props.fetchUrl)
            .then(res => {
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const clickHandler = (id) => {
        history.push(`/${id}`)
    }

    return (
        <div className="row">
            <h2 className="title">{props.title}</h2>

            <div className="row_posters">
                <Carousel breakPoints={breakPoints}>

                    {movies.map(movie => {
                        return <img onClick={() => clickHandler(movie.id)} className="row_poster" src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
                    })}
                </Carousel>

            </div>

        </div>
    )
}

export default Row
