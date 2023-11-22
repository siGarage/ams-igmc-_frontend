import './Student.css';
import Person from './Person.jpg'
function Student() {
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
      <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{width:'25%',margin:'0px 10px'}}><img src={Person} alt='Person' style={{height:'160px',width:'160px',borderRadius:'50%'}}/></div>
        <div style={{width:'25%',borderLeft:'2px solid black'}}>
         <div style={{margin:'0px 10px 0px 10px'}}>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',fontFamily:'Roboto',fontWeight:'700',fontSize:'36px',color:'#012970'}}>MAST RAM</div>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',margin:'10px 0px'}}>
            <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>CLASS ROLL NO.</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'24px'}}>2346454</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>EXAM ROLL NO.</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'24px'}}>2346454</div>
            </div>
          </div>
          <div>
          <div style={{fontSize:'12px',display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',color:'#2C2C2C'}}>FATHER'S NAME</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'24px'}}>MAST RAM SR.</div>
          </div>
        </div>
        </div>
        <div style={{width:'25%',borderLeft:'2px solid black'}}>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',margin:'10px 0px',margin:'10px 0px 0px 10px'}}>

            <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>MOBILE NO.</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'24px'}}>9418023456</div>
            </div>
            <div style={{display:'flex',flexDirection:'column',width:'100%',margin:'10px 0px'}}>
              <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>GUARDIAN'S MOBILE NO.</div>
              <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'24px'}}>9418023456</div>
            </div>
          </div>
        </div>
        <div style={{width:'25%',borderLeft:'2px solid black'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',margin:'10px 0px 0px 10px',width:'100%'}}>
<div style={{display:'flex',flexDirection:'column',width:'100%'}}>
  <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start',color:'#2C2C2C'}}>ADDRESS</div>
  <div style={{display:'flex',justifyContent:'flex-start',color:'#012970',fontSize:'16px',width:'100%'}}>HOLY LODGE SHIMLA</div>
</div>
</div>
        </div>
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
