import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";

import Login from '../Login/Login';
import ForgetPassword from '../ForgetPassword/ForgetPassword'
function Public() {
  
  return (
    <>
    <Router>  
        <Routes>
        <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/forgetpassword" element={<ForgetPassword/>}/>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    </Router>
    </>
  );
}

export default Public;
