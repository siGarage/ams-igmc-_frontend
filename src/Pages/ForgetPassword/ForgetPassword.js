import './ForgetPassword.css';
function ForgetPassword(props) {
    let toggleValueFunction=()=>{
        props.setToggleValue(0)
      }
  return (
    <>
    <div style={{color:'blue',cursor:'pointer'}} onClick={()=>toggleValueFunction()}>Back To Login</div>  
    </>
  );
}

export default ForgetPassword;