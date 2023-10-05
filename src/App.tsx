import './App.css'
import ChampionInfo from './pages/ChampionInfo'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ItemPopup from './components/ItemPopup'

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
          path='/champion'
          element={<ChampionInfo />}
        />
        <Route
          path='/item'
          element={<ItemPopup />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
