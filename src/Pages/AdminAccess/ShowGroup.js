
import {useEffect} from 'react';
import {toast } from "react-toastify";

import GroupAPI from "../../API/groupapi";
import {memo} from 'react';
import {useDispatch, connect } from 'react-redux';
import constants from '../../constants';
function CreateGroup(props) {
  const dispatch=useDispatch();
  const {token,groupData}=props

    useEffect(()=>{
        const validateForm=(token)=> {
            GroupAPI.getGroup(token).then((res) => {
              dispatch({
                type: constants("group").reducers.group.success,
                payload: { data: res.data},
              });
            })
        }
        validateForm(token)
        },[token,dispatch])

        const deleteGroup=(id,token)=> {
          const data={
            token,
            id
          }  
          GroupAPI.deleteGroup(data).then((res) => {
                if (res.data.status_code === 200) 
                {
                  toast.success(res.data.message)
                }
                else {
                    toast.error(res.data.message)
                  }
            })
        }
  return (
    <>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',margin:'50px'}}>
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
    {groupData.length !==0 ? groupData?.map((element)=>{ return <tr style={{lineHeight:'25px'}} key={element._id} >
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.group_name}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.facultyAttedenceViewPermission?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.facultyAttendeceUpdatePermission?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.studentAttendenceViewPermision?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.studentAttendenceUpdatePermission?'True':'False'}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.description}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D',cursor:'pointer'}} onClick={()=>deleteGroup(element._id,token)}><span className="material-symbols-outlined">delete</span></td>

        </tr>
    }):<tr style={{display:'flex',justifyContent:'center',alignItems:'center',width:'685%',fontSize:'20px',fontFamily:'Roboto',fontWeight:'500',margin:'10px 0px'}}>No Data</tr>}
   </tbody>
</table>
    </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.auth.user.token,
  groupData:state.group.groupData

});
export default connect(mapStateToProps)(memo(CreateGroup));

