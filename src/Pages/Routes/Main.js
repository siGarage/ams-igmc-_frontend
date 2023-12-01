import './Main.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import * as React from 'react'
import {Link} from 'react-router-dom'
import Image1 from './Attendance.png'
import Image2 from './Dashboard.png'
import Image3 from './Report.png'
import Image4 from './Student.png'
import Image5 from './Logout.png'
import Image6 from './superadmin.png'

const Attendance = React.lazy(()=>import('../Attendance/Attendance'))
const Dashboard = React.lazy(()=>import('../Dashboard/Dashboard'))
const Student = React.lazy(()=>import('../Student/Student'))
const Report = React.lazy(()=>import('../Report/Report'))
const AdminAccess= React.lazy(()=>import('../AdminAccess/AdminAccess'))
const CreateGroup = React.lazy(()=>import('../AdminAccess/CreateGroup'))
const ShowGroup = React.lazy(()=>import('../AdminAccess/ShowGroup'))

function Main() {
  let a=1;
  let logOut=()=>{
    localStorage.clear()
    window.location.href='/';
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
            <Link to='/adminaccess' style={{textDecoration:'none'}}><div style={{fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image6} alt='adminaccess'/><div>&nbsp;Super Access</div></div></Link>
        </div>:<div style={{display:'none'}}></div>}
        <div style={{margin:'10px 0px'}}>
            <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Open Sans',fontSize:'11px',fontWeight:'600',color:'#899BBD'}}>EXIT</div>
            <div onClick={logOut} style={{cursor:'pointer',fontFamily:'Open Sans',fontWeight:'600',color:'#012970',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',margin:'10px 0px 0px 10px'}}><img src={Image5} alt='logout'/><div>&nbsp;&nbsp;&nbsp;Logout</div></div>
        </div>
    </div>
    <div style={{height:'100%',width:'85%'}}>   
        <Routes>
        <Route exact path="/" element={<React.Suspense fallback={<>...</>}>
        <Attendance/>
        </React.Suspense>
        }/>
         
         <Route exact path="/attendance" element={<React.Suspense fallback={<>...</>}>
        <Attendance/>
        </React.Suspense>
        }/>
        
        <Route exact path="/dashboard" element={<React.Suspense fallback={<>...</>}>
        <Dashboard/>
        </React.Suspense>
        }/>

        <Route exact path="/" element={<React.Suspense fallback={<>...</>}>
        <Report/>
        </React.Suspense>
        }/>

        <Route exact path="/student" element={<React.Suspense fallback={<>...</>}>
        <Student/>
        </React.Suspense>
        }/>  
        
        
        {a===1 &&
          <>
          <Route exact path="/adminaccess" element={<React.Suspense fallback={<>...</>}>
          <AdminAccess/>
        </React.Suspense>
        }/>
      <Route exact path="/creategroup" element={<React.Suspense fallback={<>...</>}>
        <CreateGroup/>
        </React.Suspense>
        }/>

      <Route exact path="/showgroups" element={<React.Suspense fallback={<>...</>}>
        <ShowGroup/>
        </React.Suspense>
        }/>
          </>}
        </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default Main;