import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Login from '../Login/Login';
import ForgetPassword from '../ForgetPassword/ForgetPassword'
function Main() {
  
  return (
    <>
    <Router>  
        <Routes>
        <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/forgetpassword" element={<ForgetPassword/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default Main;
