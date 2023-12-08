import './Login.css';
import Image from './DM 04.png'
import { useState } from 'react';
import {toast } from "react-toastify";
import Auth from "../../API/auth";
import constants from '../../constants';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
function Login() {
  const dispatch = useDispatch();
  const[credentials,setCredentials] = useState({email:"",password:""});
  let validateForm=(credentials)=> {
    const {email,password}=credentials;
    if(!email){
      toast.error('Please fill User ID');
      return;
    }
    if(!password){
      toast.error('Please fill Password');
      return;
    }

    if (!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
      toast.error('Enter Valid Email')
      return ;
    }
   
    else{
        const data = {
          email,
          password,
        };
        Auth.login({ data: data }).then((res) => {
          if (res.data.status_code === 1) 
          {
            dispatch({
              type: constants("auth").reducers.login.success,
              payload: { data: res.data.data },
            });
            window.location.href='/attendance';
          } 
          else {
            toast.error(res.data.message)
          }
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
      {/* <div style={{display:'flex',flexDirection:'row',width:'100%',margin:'0px 0px 10px 0px'}}>
        <div style={{width:'45%',display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #5F6EF1',borderRadius:'5px',height:'30px'}}><input type='radio' name='radio-check'/>&nbsp;&nbsp;&nbsp;Teacher</div>
        <div style={{width:'45%',display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #5F6EF1',borderRadius:'5px',height:'30px',margin:'0px 10px'}}><input type='radio' name='radio-check'/>&nbsp;&nbsp;&nbsp;Admin</div>
      </div> */}
      <div style={{width:'100%',margin:'5px 0px'}}>
        <label style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          User ID
        <input type='text' onChange={onChange} name='email' style={{width:'80%',margin:'5px 0px',height:'30px',borderRadius:'5px'}}/>
        </label>
      </div>
      
      <div style={{width:'100%',margin:'5px 0px'}}>
        <label style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          Password
        <input type='password' onChange={onChange} name='password' style={{width:'80%',margin:'5px 0px',height:'30px',borderRadius:'5px'}}/>
        </label>
      </div>

      {/* <div style={{width:'100%',margin:'5px 0px'}}>
        <label style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start',height:'40px'}}>
        <input type='checkbox' style={{margin:'0px 5px 0px 0px',borderRadius:'5px'}}/>
        Remember me
        </label>
      </div> */}
      <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <div onClick={()=>validateForm(credentials)}  style={{width:'20%',margin:'5px 0px',height:'30px',backgroundColor:'#3C4EF1',color:'white',fontSize:'18px',borderRadius:'5px',display:'flex',cursor:'pointer',justifyContent:'center',alignItems:'center'}}>Sign in</div>
      <Link to='/forgetpassword' style={{textDecoration:'none'}}><div style={{color:'blue',cursor:'pointer'}}>ForgetPassword?</div></Link>
      </div>
      </form>



      </div>
      </div>

    </div>
  );
}

export default Login;
