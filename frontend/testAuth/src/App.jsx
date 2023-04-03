import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

import { Test } from './Test'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)



  return (
<BrowserRouter>

<Routes>
<Route path='/' element ={<Home/>}/>
<Route path='/login' element ={<Login/>}/>
<Route path='/register' element ={<Register/>}/>
</Routes>

</BrowserRouter>
  )
}

export default App
