import './App.css';
import { connect } from 'react-redux';
import React,{Suspense, memo} from 'react';
import Navbar from './Component/Navbar'
import Main from './Pages/Routes/Main';
import Public from './Pages/Routes/Public'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const App=(props)=> {
  const {auth}=props;
  return (
    <div className="App">
    <Navbar/>
      <Suspense>
          <ToastContainer />
           {auth.logged_in?<Main/>:<Public/>}
        </Suspense>
      
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(memo(App));

