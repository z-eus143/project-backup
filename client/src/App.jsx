import './App.css'
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import { Home } from './components/home/home'
import { Wishlist } from './components/Wishlist/wishlist'
import {Signup} from './components/Signupdata/signupdata'
import { CreatePost } from './components/createPost/createPost'
import { Provider } from 'react-redux'
import { store } from './store'
function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/wishlist' element={<Wishlist />}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/createPost' element={<CreatePost/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
