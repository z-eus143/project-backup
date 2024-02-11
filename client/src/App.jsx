import './App.css'
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import { Home } from './components/home/home'
import { Wishlist } from './components/Wishlist/wishlist'
import {Signup} from './components/Signupdata/signupdata'
import { CreatePost } from './components/createPost/createPost'
import { Provider } from 'react-redux'
import { store } from './store'
import { Account } from './components/Account/Account'
import {Footer} from './components/Footer/Footer'
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
          <Route path='/Account' element={<Account/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
      <Footer/>
    </>
  )
}

export default App
