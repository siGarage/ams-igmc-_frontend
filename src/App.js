import './App.css';
import { connect } from 'react-redux';
import React,{memo} from 'react';
import Navbar from './Component/Navbar'
import Main from './Pages/Routes/Main';
import Public from './Pages/Routes/Public'

const App=(props)=> {
  const {auth}=props;
  return (
    <div className="App">
      <Navbar/>
      {auth.logged_in?<Main/>:<Public/>}
    </div>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(memo(App));

