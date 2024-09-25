import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductInfoComponent from './components/productInfo/ProductInfoComponent'
import { SignupPage } from './pages/SignupPage';
import store from './core/redux/store/store';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/info' element={<ProductInfoComponent/>}/>

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
