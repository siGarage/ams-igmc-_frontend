import './CreateGroup.css'
import {useState} from 'react'
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroupAPI from "../../API/groupapi";
import { useSelector} from 'react-redux'
function CreateGroup() {
  const auth = useSelector((state) => state.auth)
  const token=auth.user.token;
  let [facultyAttedenceViewPermission,setfacultyAttedenceViewPermission]=useState(false);
  let [studentAttendenceViewPermision,setstudentAttendenceViewPermision]=useState(false);
  let [facultyAttendeceUpdatePermission,setfacultyAttendeceUpdatePermission]=useState(false);
  let [studentAttendenceUpdatePermission,setstudentAttendenceUpdatePermission]=useState(false);
  
  const[groupData,setGroupData] = useState({group_name:"",description:"",facultyAttedenceViewPermission:facultyAttedenceViewPermission,studentAttendenceViewPermision:studentAttendenceViewPermision,facultyAttendeceUpdatePermission:facultyAttendeceUpdatePermission,studentAttendenceUpdatePermission:studentAttendenceUpdatePermission});
  const onChange=(e)=>{
    setGroupData({...groupData,[e.target.name]:e.target.value})
   }
 
  let validateForm=(groupData)=> {
    const {group_name,description,facultyAttedenceViewPermission,studentAttendenceViewPermision,facultyAttendeceUpdatePermission,studentAttendenceUpdatePermission}=groupData;
    if(!group_name){
      toast.error('Please Enter Group Name');
      return;
    }
    if(!description){
      toast.error('Please Enter Description');
      return;
    }

    else{
      const data= {group_name,description,facultyAttedenceViewPermission,studentAttendenceViewPermision,facultyAttendeceUpdatePermission,studentAttendenceUpdatePermission}
      GroupAPI.createGroup({ data: data },token).then((res) => {
        if (res.data.status_code === 200) 
        {
          toast.success(res.data.message)
        } 
        else {
          toast.error(res.data.message)
        }
      });
    }
  }
  return (
    <>
   <section style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',margin:'50px'}}>
    <ToastContainer/>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Create Group</div>
    </div>
    <form style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',margin:'40px 0px 0px 0px'}}>
      <input type='Text' name='group_name' onChange={onChange} placeholder='Name Of The Group' style={{fontSize:'17px',height:'40px',width:'50%',border:'none',borderBottom:'2px solid #4154F1',fontFamily:'Nunito'}}/>
      <div style={{margin:'20px 0px',display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
        <div style={{width:'50%',display:'flex',justifyContent:'flex-start',color:'#899BBD',fontFamily:'Nunito',fontSize:'18px'}}>Permissions</div>
        <div style={{width:'50%',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row',margin:'10px 0px'}}>



          <div style={{width:'15%',fontFamily:'Nunito',fontSize:'18px'}}>Faculty</div>
         <div className='checkbox-div' key='1' style={{width:'25%',height:'30px',display:'flex',backgroundColor:(facultyAttedenceViewPermission?'blue':'white'),borderRadius:'20px',color:(facultyAttedenceViewPermission?'white':'#4154F1'),justifyContent:'center',alignItems:'center',border:'2px solid blue'}}><label><input type='checkbox' onClick={() => setfacultyAttedenceViewPermission(!facultyAttedenceViewPermission)}  placeholder='View' onChange={onChange} name='facultyAttedenceViewPermission' value={!facultyAttedenceViewPermission}  style={{opacity:'0',width:'100%',height:'100%'}}/><span style={{height:'100%',width:'100%'}}>View</span></label></div>
         <div className='checkbox-div' key='2' style={{width:'25%',height:'30px',display:'flex',backgroundColor:(facultyAttendeceUpdatePermission?'blue':'white'),borderRadius:'20px',color:(facultyAttendeceUpdatePermission?'white':'#4154F1'),justifyContent:'center',alignItems:'center',border:'2px solid blue'}}><label><input type='checkbox' onClick={() => setfacultyAttendeceUpdatePermission(!facultyAttendeceUpdatePermission)}  placeholder='Edit' onChange={onChange} name='facultyAttendeceUpdatePermission' value={!facultyAttendeceUpdatePermission}  style={{opacity:'0',width:'100%',height:'100%'}}/><span style={{height:'100%',width:'100%'}}>Edit</span></label></div>
         
        </div>
        
        <div style={{width:'50%',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
          <div style={{width:'15%',fontFamily:'Nunito',fontSize:'18px'}}>Student</div>
  
        <div className='checkbox-div' key='3' style={{width:'25%',height:'30px',display:'flex',backgroundColor:(studentAttendenceViewPermision?'blue':'white'),borderRadius:'20px',color:(studentAttendenceViewPermision?'white':'#4154F1'),justifyContent:'center',alignItems:'center',border:'2px solid blue'}}><label><input type='checkbox' onClick={() => setstudentAttendenceViewPermision(!studentAttendenceViewPermision)}  placeholder='View' onChange={onChange} name='studentAttendenceViewPermision' value={!studentAttendenceViewPermision}  style={{opacity:'0',width:'100%',height:'100%'}}/><span style={{height:'100%',width:'100%'}}>View</span></label></div>
        <div className='checkbox-div' key='4' style={{width:'25%',height:'30px',display:'flex',backgroundColor:(studentAttendenceUpdatePermission?'blue':'white'),borderRadius:'20px',color:(studentAttendenceUpdatePermission?'white':'#4154F1'),justifyContent:'center',alignItems:'center',border:'2px solid blue'}}><label><input type='checkbox' onClick={()=> setstudentAttendenceUpdatePermission(!studentAttendenceUpdatePermission)}  placeholder='Edit' onChange={onChange} name='studentAttendenceUpdatePermission' value={!studentAttendenceUpdatePermission}  style={{opacity:'0',width:'100%',height:'100%'}}/><span style={{height:'100%',width:'100%'}}>Edit</span></label></div>
        </div>
      </div>
      <input type='Text' name='description' onChange={onChange} placeholder='Description' style={{fontSize:'17px',height:'40px',width:'50%',border:'none',borderBottom:'2px solid #4154F1',margin:'10px 0px',fontFamily:'Nunito'}}/>
      <div onClick={()=>validateForm(groupData)} style={{cursor:'pointer',width:'20%',height:'20px',fontWeight:'400',backgroundColor:'#4154F1',color:'white',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'25px',fontSize:'20px',fontFamily:'Nunito',padding:'10px 0px',margin:'15px 0px'}}>Create Group</div>
    </form>
    </section>
    </>
  );
}

export default CreateGroup;

