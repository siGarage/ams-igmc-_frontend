import './Attendance.css';
import { useState } from 'react';
function Attendance() {
  let a=1;
  const [studentcourse, setStudentCourse] = useState("");
  const [studentsubject, setStudentSubject] = useState("");
  const [facultycourse, setFacultyCourse] = useState("");
  const [facultysubject, setFacultySubject] = useState("");
  
  
  const handleStudentCourseChange = (e) => {
    setStudentCourse(e.target.value);
    setStudentSubject("");
  };
  const handleStudentSubjectChange = (e) => {
    setStudentSubject(e.target.value);
  };
  const handleFacultyCourseChange = (e) => {
    setFacultyCourse(e.target.value);
    setFacultySubject("");
  };
  const handleFacultySubjectChange = (e) => {
    setFacultySubject(e.target.value);
  };
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'50px'}}>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Student Attendance</div>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'14px',fontWeight:'600',color:'#989797'}}>Teack / Attendance</div>
    </div>
    <div style={{display:'flex',flexDirection:'row',margin:'30px 0px'}}>
      <form style={{backgroundColor:'white',display:'flex',flexDirection:'row',height:'100px',justifyContent:'center',alignItems:'center'}}>

  <select onChange={handleStudentCourseChange} value={studentcourse} id="Course" name="Course" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
    <option value="" disabled selected style={{color:'#444444'}}>COURSE</option>
    <option value="MBBS">MBBS</option>
    <option value="BDS">BDS</option>
    <option value="BSc. Para">BSc. Para</option>
      </select>
  

  <select value={studentsubject} onChange={handleStudentSubjectChange} disabled={studentcourse === ""} id="Subject" name="Subject" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
        <option value="" disabled selected >SUBJECT</option>
        {studentcourse === "MBBS" && (
          <><option key="Foundation Course" value='Foundation Course'>Foundation Course</option><option key="Anatomy" value='Anatomy'>Anatomy</option><option key="Physiology" value='Physiology'>Physiology</option><option key="Bio Chemistry" value='Bio Chemistry'>Bio Chemistry</option><option key="Community Medicine" value='Community Medicine'>Community Medicine</option></>
        )}
        {studentcourse === "BDS" && (
          <><option key="Anatomy" value="Anatomy">Anatomy</option><option key="Physiology" value='Physiology'>Physiology</option><option key="Bio Chemistry" value='Bio Chemistry'>Bio Chemistry</option></>
        )}
        {studentcourse === "BSc. Para" && (
          <><option key="Anatomy" value='Anatomy'>Anatomy</option><option key="Physiology" value='Physiology'>Physiology</option><option key="Bio Chemistry" value='Bio Chemistry'>Bio Chemistry</option><option key="Community Medicine" value='Community Medicine'>Community Medicine</option></>
        )}
      </select>


  <select id="Course-Type" name="Course-Type" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
  <option value="" disabled selected style={{color:'#444444'}}>TYPE</option>
    <option value="THEORY">THEORY</option>
    <option value="PRACTICAL">PRACTICAL</option>
  </select>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center',fontSize:'12px'}}>
    START DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent',height:'35px',width:'80%'}}/>
  </div>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center',fontSize:'12px'}}>
    END DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent',height:'35px',width:'80%'}}/>
  </div>
  <div style={{padding:'0px 10px'}}>
  <button style={{backgroundColor:'#4154F1',height:'40px',border:'none',borderRadius:'5px',color:'white',padding:'10px 5px',display:'flex',alignItems:'center',justifyContent:'center'}}>Generate Sheet</button>
  </div>
  </form>
    </div>
    
    
    {a===1 && <div>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Faculty Attendance</div>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'14px',fontWeight:'600',color:'#989797'}}>Teack / Attendance</div>
    </div>
    <div style={{display:'flex',flexDirection:'row',margin:'30px 0px'}}>
      <form style={{backgroundColor:'white',display:'flex',flexDirection:'row',height:'100px',justifyContent:'center',alignItems:'center'}}>
      <select onChange={handleFacultyCourseChange} value={facultycourse} id="Course" name="Course" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
    <option value="" disabled selected style={{color:'#444444'}}>COURSE</option>
    <option value="MBBS">MBBS</option>
    <option value="BDS">BDS</option>
    <option value="BSc. Para">BSc. Para</option>
      </select>
  

  <select value={facultysubject} onChange={handleFacultySubjectChange} disabled={facultycourse === ""} id="Subject" name="Subject" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
        <option value="" disabled selected >SUBJECT</option>
        {facultycourse === "MBBS" && (
          <><option key="Foundation Course" value='Foundation Course'>Foundation Course</option><option key="Anatomy" value='Anatomy'>Anatomy</option><option key="Physiology" value='Physiology'>Physiology</option><option key="Bio Chemistry" value='Bio Chemistry'>Bio Chemistry</option><option key="Community Medicine" value='Community Medicine'>Community Medicine</option></>
        )}
        {facultycourse === "BDS" && (
          <><option key="Anatomy" value="Anatomy">Anatomy</option><option key="Physiology" value='Physiology'>Physiology</option><option key="Bio Chemistry" value='Bio Chemistry'>Bio Chemistry</option></>
        )}
        {facultycourse === "BSc. Para" && (
          <><option key="Anatomy" value='Anatomy'>Anatomy</option><option key="Physiology" value='Physiology'>Physiology</option><option key="Bio Chemistry" value='Bio Chemistry'>Bio Chemistry</option><option key="Community Medicine" value='Community Medicine'>Community Medicine</option></>
        )}
      </select>
  <select id="Course-Type" name="Course-Type" style={{height:'50px',width:'150px',margin:'0px 10px',border:'1px solid #CED4DA',borderRadius:'5px'}}>
  <option value="" disabled selected style={{color:'#444444'}}>TYPE</option>
    <option value="THEORY">THEORY</option>
    <option value="PRACTICAL">PRACTICAL</option>
  </select>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center',fontSize:'12px'}}>
    START DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent',height:'35px',width:'80%'}}/>
  </div>
  <div style={{display:'flex',flexDirection:'column',height:'50px',width:'150px',margin:'0px 10px',backgroundColor:'white',border:'1px solid #CED4DA',borderRadius:'5px',justifyContent:'space-around',alignItems:'center',fontSize:'12px'}}>
    END DATE
  <input type='date' placeholder='Start Date' style={{border:'none',background:'transparent',height:'35px',width:'80%'}}/>
  </div>
  <div style={{padding:'0px 10px'}}>
  <button style={{backgroundColor:'#4154F1',height:'40px',border:'none',borderRadius:'5px',color:'white',padding:'10px 5px',display:'flex',alignItems:'center',justifyContent:'center'}}>Generate Sheet</button>
  </div>
  </form>
    </div>
    </div>}
    </div>
  );
}

export default Attendance;
