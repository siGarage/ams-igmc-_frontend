import './App.css';
import Login from './Pages/Login/Login'
import Navbar from './Component/Navbar'
import Main from './Pages/Main/Main'

function App() {
  let a=localStorage.getItem('AmsIgmcLoginToken');
  return (
    <div className="App">
      <Navbar/>

    {
  (!a?<Login/>:<Main/>)
    }
    </div>
  );
}

export default App;
