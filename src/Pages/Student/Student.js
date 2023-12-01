import './Student.css';
import Person from './Person.jpg'
import EmailImage from './email.png'
import PhoneImage from './phone.png'
import CourseImage from './course.png'
function Student() {
  let a=1;
  let array=[{
    'id':'1',
    'Subject':'Anatomy',
    'Attended Lecturers':'20',
    'Total Lectures':'24',
    'Percentage':'68%'
  },
  {
    'id':'2',
    'Subject':'Medicine',
    'Attended Lecturers':'20',
    'Total Lectures':'24',
    'Percentage':'68%'
  },
  {
    'id':'3',
    'Subject':'Physio',
    'Attended Lecturers':'20',
    'Total Lectures':'24',
    'Percentage':'68%'
  }
]
  return (
    <>
    <div style={{margin:'50px',fontFamily:'Roboto'}}>
      <div style={{display:'flex'}}>
        <div style={{width:'25%',backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',borderRadius:'9px'}}>
        <div style={{margin:'10px 10px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <div style={{width:'50%'}}><img src={Person} alt='Person' style={{height:'70px',width:'70px',borderRadius:'50%'}}/></div>
        <div style={{width:'50%',fontFamily:'Roboto',fontSize:'16px',fontWeight:'700',color:'#012970'}}>RAMDHARI SINGH DINKAR</div>
        </div>
        <div style={{fontSize:'12px',display:'flex',flexDirection:'column',alignItems:'flex-start',margin:'5px 0px',fontFamily:'Roboto',width:'90%'}}>
          <div style={{margin:'2px 0px',color:'#012970'}}><span style={{color:'black',fontWeight:'600'}}>CLASS ROLL NO:</span> 2346454</div>
          <div style={{margin:'2px 0px',color:'#012970'}}><span style={{color:'black',fontWeight:'600'}}>EXAM ROLL NO:</span> 2346454</div>
          <div style={{margin:'2px 0px',color:'#012970'}}><span><img src={PhoneImage} alt='Email'></img></span> 2346454</div>
          <div style={{margin:'2px 0px',color:'#012970'}}><span><img src={EmailImage} alt='Email'></img></span> beckham@gmail.com</div>
          <div style={{margin:'2px 0px',color:'#012970'}}><span><img src={CourseImage} alt='Email'></img></span> MBBS</div>
        </div>
        </div>
        <div style={{width:'25%',borderLeft:'2px solid black',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',padding:'0px 10px'}}>
        <div style={{fontFamily:'Roboto',fontSize:'16px',fontWeight:'600',color:'#012970'}}>PROFESSIONAL DETAILS</div>
        <div style={{display:'flex',flexDirection:'row',backgroundColor:'white',justifyContent:'space-between',alignItems:'center',fontFamily:'Roboto',width:'60%'}} >
          <div style={{margin:'0px 10px 0px 0px',fontSize:'12px',padding:'5px 5px 5px 5px',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            <div style={{color:'#2C2C2C',fontWeight:'500'}}>BATCH</div>
            <div style={{color:'#012970'}}>2019-23</div>
          </div>
          <div style={{fontSize:'12px',padding:'3px 0px',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          <div style={{color:'#2C2C2C',fontWeight:'500'}}>BATCH</div>
            <div style={{color:'#012970'}}>2019-23</div>
          </div>
        </div>
        <div style={{fontFamily:'Roboto',fontSize:'16px',fontWeight:'600',color:'#012970'}}>PERSONAL DETAILS</div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',backgroundColor:'white',padding:'5px 5px 5px 5px',width:'80%'}}> 
        <div style={{display:'flex',flexDirection:'row',backgroundColor:'white',justifyContent:'space-between',alignItems:'center',fontFamily:'Roboto',width:'80%'}} >
          <div style={{margin:'0px 10px 0px 0px',fontSize:'12px',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            <div style={{color:'#2C2C2C',fontWeight:'500'}}>GENDER</div>
            <div style={{color:'#012970'}}>MALE</div>
          </div>
          <div style={{fontSize:'12px',padding:'3px 0px',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
          <div style={{color:'#2C2C2C',fontWeight:'500'}}>DOB</div>
            <div style={{color:'#012970'}}>20-03-2000</div>
          </div>

        </div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',margin:'0px 10px 0px 0px',fontSize:'12px',padding:'3px 0px'}}>
          <div style={{color:'#2C2C2C',fontWeight:'500'}}><span><img src={PhoneImage} alt='Email'></img></span> GUARDIAN'S MOBILE NO</div>
          <div style={{color:'#012970'}}>+91 9213144555</div>
        </div>
        </div>
        </div>
        <div style={{width:'25%',borderLeft:'2px solid black'}}>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',margin:'10px 0px 0px 10px'}}>

            <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'0px 0px 10px 0px'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>FATHER'S NAME</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'16px'}}>MAST RAM</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'0px 0px 10px 0px'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>CURRENT ADDRESS</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'16px'}}>HOLY LODGE SHIMLA</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'0px 0px 10px 0px'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>PERMANENT ADDRESS</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'16px'}}>HOLY LODGE SHIMLA</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'0px 0px 10px 0px'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>STATUS</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'16px'}}>LOREM IPSUM</div>
            </div>
          </div>
        </div>
        {a===1 && <div style={{width:'25%',borderLeft:'2px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:'10px 0px 0px 10px',width:'90%'}}>
        <button style={{width:'50%',height:'30px',backgroundColor:'#4154F1',color:'white',borderRadius:'20px',border:'none'}}>Edit</button>
        </div>
        </div>}
      </div>
      <div style={{margin:'20px 0px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'white',padding:'20px'}}>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-start',fontSize:'18px',color:'#012970',fontWeight:'500',fontFamily:'Poppins',margin:'10px 0px'}}>Attendance Sheet Course Wise</div>
      <table border="0" cellspacing="0" cellpadding="0" style={{width:'100%'}}>
        <thead style={{backgroundColor:'#DFDFDF',height:'30px',borderCollapse:'collapse'}}>
          <tr style={{color:'black'}}>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Id</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Subject</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Attended Lectures</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Total Lectures</th>
            <th style={{padding:'0px 5px',textAlign:'left'}}>Percentage</th>
            </tr>
        </thead>
        <tbody >
    {array.map((element)=>{ return <tr style={{lineHeight:'25px'}} key={element.id} >
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.id}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element.Subject}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element['Attended Lecturers']}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element['Total Lectures']}</td>
        <td style={{padding:'0px 5px',textAlign:'left',color:'#7D7D7D'}}>{element['Percentage']}</td>
        </tr>
    })}
   </tbody>
</table>

      </div>
      <div style={{display:'flex',justifyContent:'flex-start'}}>
<button style={{backgroundColor:'#012970',color:'white',margin:'0px 10px 0px 0px',height:'40px',padding:'10px',borderRadius:'10px'}}>Download PDF</button>
<button style={{backgroundColor:'#012970',color:'white',margin:'0px 10px 0px 0px',height:'40px',padding:'10px',borderRadius:'10px'}}>Download CSV</button>
</div>
    </div>
    </>
  );
}

export default Student;
