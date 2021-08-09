import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from '../src/pages/Search'
import Gif from './pages/Gif'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  return (
    <div className='App'>
      <Router>
        <GifsContextProvider>
          <Switch>
            <Route path='/gif/:id'>
              <Gif />
            </Route>
            <Route path='/search/:keyword/:rating?'>
              <Search />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </GifsContextProvider>
      </Router>
    </div>
  )
}

export default App
