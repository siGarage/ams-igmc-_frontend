import './Attendance.css';
function Attendance() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'50px'}}>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Student Attendance</div>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'14px',fontWeight:'600',color:'#989797'}}>Teack / Attendance</div>
    </div>
    <div style={{display:'flex',flexDirection:'row',margin:'30px 0px'}}>
      <form style={{backgroundColor:'white',display:'flex',flexDirection:'row',height:'100px',justifyContent:'center',alignItems:'center'}}>
    <select id="Degree" name="Degree" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
    <option value="" disabled selected style={{color:'#444444'}}>COURSE</option>
    <option value="MBBS">MBBS</option>
    <option value="BDS">BDS</option>
    <option value="BSc. Para">BSc. Para</option>
  </select>
  <select id="Course" name="Course" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
  <option value="" disabled selected style={{color:'#444444'}}>SUBJECT</option>
    <option value="FOUNDATION COURSE">FOUNDATION COURSE</option>
    <option value="ANATOMY">ANATOMY</option>
    <option value="PHYSIOLOGY">PHYSIOLOGY</option>
    <option value="BIO CHEMISTRY">BIO CHEMISTRY</option>
  </select>
  <select id="Course-Type" name="Course-Type" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
  <option value="" disabled selected style={{color:'#444444'}}>TYPE</option>
    <option value="THEORY">THEORY</option>
    <option value="PRACTICAL">PRACTICAL</option>
  </select>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center'}}>
    START DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent'}}/>
  </div>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center'}}>
    END DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent'}}/>
  </div>
  <div style={{padding:'0px 10px'}}>
  <button style={{backgroundColor:'#4154F1',height:'40px',border:'none',borderRadius:'5px',color:'white',padding:'10px 5px',display:'flex',alignItems:'center',justifyContent:'center'}}>Generate Sheet</button>
  </div>
  </form>
    </div>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Faculty Attendance</div>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'14px',fontWeight:'600',color:'#989797'}}>Teack / Attendance</div>
    </div>
    <div style={{display:'flex',flexDirection:'row',margin:'30px 0px'}}>
      <form style={{backgroundColor:'white',display:'flex',flexDirection:'row',height:'100px',justifyContent:'center',alignItems:'center'}}>
    <select id="Degree" name="Degree" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
    <option value="" disabled selected style={{color:'#444444'}}>COURSE</option>
    <option value="MBBS">MBBS</option>
    <option value="BDS">BDS</option>
    <option value="BSc. Para">BSc. Para</option>
  </select>
  <select id="Course" name="Course" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
  <option value="" disabled selected style={{color:'#444444'}}>SUBJECT</option>
    <option value="FOUNDATION COURSE">FOUNDATION COURSE</option>
    <option value="ANATOMY">ANATOMY</option>
    <option value="PHYSIOLOGY">PHYSIOLOGY</option>
    <option value="BIO CHEMISTRY">BIO CHEMISTRY</option>
  </select>
  <select id="Course-Type" name="Course-Type" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
  <option value="" disabled selected style={{color:'#444444'}}>TYPE</option>
    <option value="THEORY">THEORY</option>
    <option value="PRACTICAL">PRACTICAL</option>
  </select>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center'}}>
    START DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent'}}/>
  </div>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center'}}>
    END DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent'}}/>
  </div>
  <div style={{padding:'0px 10px'}}>
  <button style={{backgroundColor:'#4154F1',height:'40px',border:'none',borderRadius:'5px',color:'white',padding:'10px 5px',display:'flex',alignItems:'center',justifyContent:'center'}}>Generate Sheet</button>
  </div>
  </form>
    </div>
    </div>
  );
}

export default Attendance;
