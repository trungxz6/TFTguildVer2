import './App.css'
import { Route, Routes, BrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ChampionInfo from './pages/ChampionInfo'
import TeamComps from './pages/TeamComps'
import ItemBuilder from './pages/ItemBuilder'
import Champions from './pages/Champions'

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
        ></Route>
        <Route
          path='/aatrox'
          element={<ChampionInfo />}
        />
        <Route
          path='/item-builder'
          element={<ItemBuilder />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
