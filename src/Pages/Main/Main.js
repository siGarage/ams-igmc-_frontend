import './Main.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


import {Link} from 'react-router-dom'
import Image1 from './Attendance.png'
import Image2 from './Dashboard.png'
import Image3 from './Report.png'
import Image4 from './Student.png'
import Image5 from './Logout.png'
import Image6 from './superadmin.png'
import Attendance from '../Attendance/Attendance'
import AttendanceTeacher from '../Attendance/AttendanceTeacher';
import Dashboard from '../Dashboard/Dashboard'
import Student from '../Student/Student'
import Report from '../Report/Report'
import AdminAccess from '../AdminAccess/AdminAccess';
function Main() {
  let a=1;
  let AttendancePage;
if (a===1) {
  AttendancePage = <Attendance/>;
} 
else if(a===2) {
  AttendancePage = <AttendanceTeacher/>;
}
else if(a===3){
  AttendancePage = <AttendanceTeacher/>;
}
else{
  AttendancePage=<div>Error: Invalid User Role</div>
}
  let logOut=()=>{
    localStorage.removeItem('AmsIgmcLoginToken')
    localStorage.removeItem("AmsIgmcLoginUser")
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
            <Link to='/dashboard' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image2} alt='dashboard'/><div>&nbsp;&nbsp;Dashboard</div></div></Link>
            <Link to='/report' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image3} alt='report'/><div>&nbsp;&nbsp;&nbsp;Report</div></div></Link>
        </div>
        <div style={{margin:'10px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Open Sans',fontSize:'11px',fontWeight:'600',color:'#899BBD'}}>MANAGE</div>
            <Link to='/student' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image4} alt='student'/><div>&nbsp;&nbsp;Student</div></div></Link>
        </div>
        {a===1?<div style={{margin:'10px 0px'}}>
            <Link to='/adminaccess' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image6} alt='adminaccess'/><div>&nbsp;&nbsp;Super Access</div></div></Link>
        </div>:<div style={{display:'none'}}></div>}
        <div style={{margin:'10px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Open Sans',fontSize:'11px',fontWeight:'600',color:'#899BBD'}}>EXIT</div>
            <div onClick={logOut} style={{cursor:'pointer',fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image5} alt='logout'/><div>&nbsp;&nbsp;&nbsp;Logout</div></div>
        </div>
    </div>
    <div style={{height:'100%',width:'85%'}}>
        
        <Routes>
        <Route exact path="/" element={AttendancePage}/>
          <Route exact path="/attendance" element={AttendancePage}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/report" element={<Report/>}/>
          <Route exact path="/student" element={<Student/>}/>
          <Route exact path="/adminaccess" element={a===1?<AdminAccess/>:<div></div>}/>
        </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default Main;
