import './CreateGroup.css'
function CreateGroup() { 
  return (
    <>
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',margin:'50px'}}>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Super Access</div>
    </div>
    <form style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start',margin:'40px 0px 0px 0px'}}>
      <input type='Text' placeholder='Name Of The Group' style={{fontSize:'17px',height:'40px',width:'50%',border:'none',borderBottom:'2px solid #4154F1',color:'#899BBD',fontFamily:'Nunito'}}/>
      <div style={{margin:'20px 0px',display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
        <div style={{width:'50%',display:'flex',justifyContent:'flex-start',color:'#899BBD',fontFamily:'Nunito',fontSize:'18px'}}>Permissions</div>
        <div style={{display:'flex',flexDirection:'row',width:'100%',margin:'10px 0px'}}>
          <div style={{backgroundColor:'white',width:'15%',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',color:'#4154F1',borderRadius:'20px'}}>View</div>
          <div style={{backgroundColor:'white',width:'15%',height:'30px',margin:'0px 0px 0px 10px',display:'flex',justifyContent:'center',alignItems:'center',color:'#4154F1',borderRadius:'20px'}}>Edit</div>
        </div>
        
        <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{backgroundColor:'white',width:'15%',height:'30px',display:'flex',justifyContent:'center',alignItems:'center',color:'#4154F1',borderRadius:'20px'}}>Student</div>
          <div style={{backgroundColor:'white',width:'15%',height:'30px',margin:'0px 0px 0px 10px',display:'flex',justifyContent:'center',alignItems:'center',color:'#4154F1',borderRadius:'20px'}}>Faculty</div>
        </div>
      </div>
      <input type='Text' placeholder='Description' style={{fontSize:'17px',height:'40px',width:'50%',border:'none',borderBottom:'2px solid #4154F1',color:'#899BBD',margin:'10px 0px',fontFamily:'Nunito'}}/>
      <div style={{width:'20%',height:'20px',fontWeight:'400',backgroundColor:'#4154F1',color:'white',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'25px',fontSize:'20px',fontFamily:'Nunito',padding:'10px 0px',margin:'15px 0px'}}>Create Group</div>
    </form>
    </div>
    </>
  );
}

export default CreateGroup;

