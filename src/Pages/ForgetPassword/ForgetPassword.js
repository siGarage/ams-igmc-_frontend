import './ForgetPassword.css';
import Image from './DM 04.png'
import { useState } from 'react';
import {toast } from "react-toastify";
import Auth from "../../API/auth";
import {Link} from 'react-router-dom';
function ForgetPassword() {
  const[credentials,setCredentials] = useState({email:""});
  let validateForm=(credentials)=> {
    const {email}=credentials;
    if(!email){
      toast.error('Please Enter Email');
      return;
    }
    if (!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
      toast.error('Enter Valid Email')
      return ;
    }
   
    else{
        const data = {
          email,
        };
        Auth.forgetPassword({ data: data }).then((res) => {
          // if (res.data.status_code === 1) 
          // {
          //   toast.error(res.data.message)
          // }
          console.log(res)
        });
      };
    }

  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
   }


  return (
    <div className="Login" style={{backgroundColor:'#F6F9FF',height:'90vh'}}>
      <div style={{height:'100%',display:'flex',flexDirection:'row'}}>
      <div style={{width:'60%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:'10px 20px'}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
          <div style={{fontSize:'60px'}}>Attendance</div> 
          <div style={{fontSize:'60px',color:'#012970'}}>for your College</div>
          </div>
          <div ><img src={Image} alt='something' style={{height:'300px',width:'300px'}}/></div>
        </div>
        <div style={{width:'100%'}}>
          <div style={{width:'80%',margin:'10px 25px',fontSize:'14px',color:'#757F8E',fontFamily:'Roboto',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum maiores libero veritatis? Dicta facilis sint aliquid ipsum atque?</div></div>
      </div>
      </div>
      <div style={{width:'40%',height:'100%' ,display:'flex',justifyContent:'flex-start',alignItems:'center'}}>



      <form style={{display:'flex',flexDirection:'column',width:'80%',justifyContent:'center',alignItems:'flex-start',padding:'30px 30px',backgroundColor:'white',fontFamily:'Roboto',borderRadius:'5px'}}>
      <div style={{width:'100%',margin:'5px 0px'}}>
        <label style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          Enter Email
        <input type='text' onChange={onChange} name='email' style={{width:'80%',margin:'5px 0px',height:'30px',borderRadius:'5px'}}/>
        </label>
      </div>
      

      <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <div onClick={()=>validateForm(credentials)}  style={{width:'60%',margin:'5px 0px',height:'30px',backgroundColor:'#3C4EF1',color:'white',fontSize:'15px',borderRadius:'5px',display:'flex',cursor:'pointer',justifyContent:'center',alignItems:'center'}}>Send Temporary Password</div>
      <Link to='/login' style={{textDecoration:'none'}}><div style={{color:'blue',cursor:'pointer'}}>Back To Login</div></Link>
      </div>
      </form>



      </div>
      </div>

    </div>
  );
}

export default ForgetPassword;
