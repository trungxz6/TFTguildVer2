import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ChampionInfo from './pages/ChampionInfo'
import TeamComps from './pages/TeamComps'
import ItemBuilder from './pages/ItemBuilder'
import Champions from './pages/Champions'
import MetaReport from './pages/MetaReport'
import Database from './pages/Database'
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
          path='/champions'
          element={<Champions />}
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
          path='/champions/aatrox'
          element={<MetaReport />}
        />
        <Route
          path='/champion'
          element={<ChampionInfo />}
        />
        <Route
          path='/item-builder'
          element={<ItemBuilder />}
        />
        <Route
          path='/database/champions'
          element={<Database />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
