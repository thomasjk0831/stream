import React from 'react'
import Row from './components/Row'
import Header from './components/Header'
import apiCalls from './data/apicalls'
import './App.css'
import { Route } from 'react-router-dom'
import Movie from './components/Movie'

function App(props) {
  return (
    <div className="app">
      <Route exact path='/'>
        <Header />

        {
          apiCalls.map(item => <Row title={item.title} fetchUrl={item.fetchUrl} />)
        }
      </Route>
      <Route exact path='/:id'>
        <Movie />
      </Route>
    </div>
  )
}



export default App
