import './Main.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Link} from 'react-router-dom'
import Image1 from './Attendance.png'
import Image2 from './Dashboard.png'
import Image3 from './Report.png'
import Image4 from './Student.png'
import Image5 from './Logout.png'
import Attendance from '../Attendance/Attendance'
import Dashboard from '../Dashboard/Dashboard'
import Student from '../Student/Student'
import Report from '../Report/Report'
function Main() {
  function logOut(){
    localStorage.removeItem('AmsIgmcLoginToken')
    window.location.reload(true);
  }
  return (
    <>
    <Router>
    
    <div className='Main' style={{backgroundColor:'#F6F9FF',height:'90vh',display:'flex',flexDirection:'row'}}>
    <div style={{height:'100%',width:'15%',backgroundColor:'white',padding:'10px 10px',boxShadow:'2px 5px 2px 2px grey'}}>
        <div style={{margin:'10px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Open Sans',fontSize:'11px',fontWeight:'600',color:'#899BBD'}}>TRACK</div>
            <Link to='/attendance' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image1} alt='attendance'/><div>&nbsp;&nbsp;Attendance Sheet</div></div></Link>
        </div>
        <div style={{margin:'10px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Open Sans',fontSize:'11px',fontWeight:'600',color:'#899BBD'}}>ANALYZE</div>
            <Link to='/dashboard' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image2} alt='attendance'/><div>&nbsp;&nbsp;Dashboard</div></div></Link>
            <Link to='/report' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image3} alt='attendance'/><div>&nbsp;&nbsp;&nbsp;Report</div></div></Link>
        </div>
        <div style={{margin:'10px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Open Sans',fontSize:'11px',fontWeight:'600',color:'#899BBD'}}>MANAGE</div>
            <Link to='/student' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image4} alt='attendance'/><div>&nbsp;&nbsp;Student</div></div></Link>
        </div>
        <div style={{margin:'10px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Open Sans',fontSize:'11px',fontWeight:'600',color:'#899BBD'}}>EXIT</div>
            <div onClick={logOut} style={{cursor:'pointer',fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image5} alt='attendance'/><div>&nbsp;&nbsp;&nbsp;Logout</div></div>
        </div>
    </div>
    <div style={{height:'100%',width:'85%'}}>
        
        <Routes>
          <Route exact path="/attendance" element={<Attendance/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/report" element={<Report/>}/>
          <Route exact path="/student" element={<Student/>}/>
        </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default Main;
