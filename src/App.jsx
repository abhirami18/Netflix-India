import './App.css'
import Cover from './components/Cover'
import Nav from './components/Nav'
import Row from './components/Row'

import requests  from './request'
function App() {
 

  return (
    <>
      <Nav/>
      <Cover fetchUrl={requests.fetchNetflixOriginals}/>
      <Row isPoster='true' title='Trending Movies' fetchUrl={requests.fetchTrending} />
      <Row  title='netflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row  title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row  title='Action' fetchUrl={requests.fetchActionMovies}  />
      <Row  title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      <Row  title='Horrer' fetchUrl={requests.fetchHorrorMovies} />
      <Row  title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row  title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      
    </>
  )
}

export default App
