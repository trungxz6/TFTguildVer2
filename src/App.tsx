import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ChampionInfo from './pages/ChampionInfo'
import TeamComps from './pages/TeamComps'
import MetaReport from './pages/MetaReport'
import TeamBuilder from './pages/TeamBuilder'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/team-comps'
          element={<TeamComps />}
        />
        <Route
          path='/meta-report'
          element={<MetaReport />}
        />
        <Route
          path='/team-builder'
          element={<TeamBuilder />}
        />
        <Route
          path='/champion'
          element={<ChampionInfo />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
