import './AdminAccess.css';
import {Link} from 'react-router-dom'
function AdminAcess() { 

  return (
    <>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'50px'}}>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Super Access</div>
    </div>
    <div style={{display:'flex',alignItems:'flex-start',width:'100%',flexDirection:'row',margin:'30px 0px'}}>
      <Link to='/creategroup' style={{textDecoration:'none',margin:'0px 0px 0px 30px',width:'20%',height:'50px'}}><div style={{width:'100%',height:'100%',backgroundColor:'#4154F1',color:'white',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'25px',fontSize:'24px',fontFamily:'Nunito'}}>Create Group</div></Link>
      <div style={{width:'20%',height:'50px',backgroundColor:'#4154F1',color:'white',margin:'0px 0px 0px 30px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'25px',fontSize:'24px',fontFamily:'Nunito'}}>Show Groups</div>
    </div>
    

    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Upload</div>
    </div>
    <div style={{display:'flex',alignItems:'flex-start',width:'100%',flexDirection:'row',margin:'30px 0px'}}>
      <div style={{width:'20%',height:'50px',backgroundColor:'#4154F1',color:'white',margin:'0px 0px 0px 30px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'25px',fontSize:'24px',fontFamily:'Nunito'}}>Upload CSV</div>
    </div>
    </div>
    </>
  );
}

export default AdminAcess;
