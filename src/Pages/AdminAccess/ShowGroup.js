import './ShowGroup.css'
import {useEffect,useState} from 'react';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroupAPI from "../../API/groupapi";
import { useNavigate } from "react-router-dom";
function CreateGroup() {
    let [groups,setGroups]=useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        let validateForm=()=> {
            GroupAPI.getGroup().then((res) => {
              setGroups(res.data)
            })
        }
        validateForm()
        },[])

        let deleteGroup=(id)=> {
            GroupAPI.deleteGroup(id).then((res) => {
                if (res.data.status_code === 200) 
                {
                  toast.success(res.data.message)
                  window.location.reload();
                // navigate("/showgroups");
                }
                else {
                    toast.error(res.data.message)
                  }
            })
        }
  return (
    <>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',margin:'50px'}}>
    <ToastContainer/>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Show / Manage Group</div>
    </div>
    <table border="0" cellSpacing="0" cellPadding="0" style={{width:'100%',margin:'50px 0px'}} key={1}>
        <thead style={{backgroundColor:'#DFDFDF',height:'30px',borderCollapse:'collapse'}}>
          <tr style={{color:'black'}}>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Group Name</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Faculty View</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Faculty Update</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Student View</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Student Update</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Description</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Delete</th>
            </tr>
        </thead>
        <tbody >
    {groups.map((element)=>{ return <tr style={{lineHeight:'25px'}} key={element._id} >
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.group_name}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.facultyAttedenceViewPermission?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.facultyAttendeceUpdatePermission?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.studentAttendenceViewPermision?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.studentAttendenceUpdatePermission?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.description}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D',cursor:'pointer'}} onClick={()=>deleteGroup(element._id)}><span className="material-symbols-outlined">delete</span></td>

        </tr>
    })}
   </tbody>
</table>
    </div>
    </>
  );
}

export default CreateGroup;

