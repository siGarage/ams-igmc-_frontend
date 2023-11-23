import './App.css';
import Login from './Pages/Login/Login'
import Navbar from './Component/Navbar'
import Main from './Pages/Main/Main'
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import { useState } from 'react';
function App() {
  let [toggleValue,setToggleValue]=useState(0)
  let a=localStorage.getItem('AmsIgmcLoginToken');
  return (
    <div className="App">
      <Navbar/>

    {
  (!a?(toggleValue===0?<Login setToggleValue={setToggleValue}/>:<ForgetPassword setToggleValue={setToggleValue}/>):<Main/>)
    }
    </div>
  );
}

export default App;
