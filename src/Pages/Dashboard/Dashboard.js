import './Dashboard.css';
function Dashboard() {
  return (
    <>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',margin:'50px',fontFamily:'nunito'}}>
    <div style={{width:'94%',display:'flex',justifyContent:'flex-start',flexDirection:'column'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'24px',fontWeight:'600',color:'#4154F1'}}>Dashboard</div>
      <div style={{display:'flex',justifyContent:'flex-start',fontFamily:'Nunito',fontSize:'14px',fontWeight:'600',color:'#989797'}}>Home / Dashboard</div>
    </div>
    <div style={{display:'flex',flexDirection:'column',margin:'15px 0px',width:'94%'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontSize:'24px',color:'#4154F1',fontWeight:'700'}}>Foundation Course</div>
      <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',margin:'20px 0px'}}>
        <div style={{backgroundColor:'white',width:'20%',margin:'0px 10px 0px 0px',padding:'10px 10px'}}>
          <div style={{color:'#198754',fontWeight:'800'}}><span style={{color:'#4154F1'}}>Present </span>| Today</div>
          <div style={{margin:'10px 0px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'#F6F6FE'}}></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',margin:'0px 10px'}}>
              <div style={{fontWeight:'700',fontSize:'28px',color:'#4154F1'}}>145</div>
              <div style={{color:'#198754'}}><span style={{color:'black',fontWeight:'bold'}}>12%</span> increase</div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'white',width:'20%',margin:'0px 10px 0px 0px',padding:'10px 10px'}}>
          <div style={{color:'#198754',fontWeight:'800'}}><span style={{color:'#4154F1'}}>Absent </span>| Today</div>
          <div style={{margin:'10px 0px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'#F6F6FE'}}></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',margin:'0px 10px'}}>
              <div style={{fontWeight:'700',fontSize:'28px',color:'#4154F1'}}>145</div>
              <div style={{color:'#198754'}}><span style={{color:'black',fontWeight:'bold'}}>12%</span> increase</div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'white',width:'20%',margin:'0px 10px 0px 0px',padding:'10px 10px'}}>
          <div style={{color:'#198754',fontWeight:'800'}}><span style={{color:'#4154F1'}}>Attendance </span>| This Month</div>
          <div style={{margin:'10px 0px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'#F6F6FE'}}></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',margin:'0px 10px'}}>
              <div style={{fontWeight:'700',fontSize:'28px',color:'#4154F1'}}>145</div>
              <div style={{color:'#198754'}}><span style={{color:'black',fontWeight:'bold'}}>12%</span> increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div style={{display:'flex',flexDirection:'column',margin:'0px 0px',width:'94%'}}>
      <div style={{display:'flex',justifyContent:'flex-start',fontSize:'24px',color:'#4154F1',fontWeight:'700'}}>Anatomy Course</div>
      <div style={{display:'flex',justifyContent:'flex-start',flexDirection:'row',alignItems:'center',margin:'20px 0px'}}>
        <div style={{backgroundColor:'white',width:'20%',margin:'0px 10px 0px 0px',padding:'10px 10px'}}>
          <div style={{color:'#198754',fontWeight:'800'}}><span style={{color:'#4154F1'}}>Present </span>| Today</div>
          <div style={{margin:'10px 0px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'#F6F6FE'}}></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',margin:'0px 10px'}}>
              <div style={{fontWeight:'700',fontSize:'28px',color:'#4154F1'}}>145</div>
              <div style={{color:'#198754'}}><span style={{color:'black',fontWeight:'bold'}}>12%</span> increase</div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'white',width:'20%',margin:'0px 10px 0px 0px',padding:'10px 10px'}}>
          <div style={{color:'#198754',fontWeight:'800'}}><span style={{color:'#4154F1'}}>Absent </span>| Today</div>
          <div style={{margin:'10px 0px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'#F6F6FE'}}></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',margin:'0px 10px'}}>
              <div style={{fontWeight:'700',fontSize:'28px',color:'#4154F1'}}>145</div>
              <div style={{color:'#198754'}}><span style={{color:'black',fontWeight:'bold'}}>12%</span> increase</div>
            </div>
          </div>
        </div>

        <div style={{backgroundColor:'white',width:'20%',margin:'0px 10px 0px 0px',padding:'10px 10px'}}>
          <div style={{color:'#198754',fontWeight:'800'}}><span style={{color:'#4154F1'}}>Attendance </span>| This Month</div>
          <div style={{margin:'10px 0px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'#F6F6FE'}}></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',margin:'0px 10px'}}>
              <div style={{fontWeight:'700',fontSize:'28px',color:'#4154F1'}}>145</div>
              <div style={{color:'#198754'}}><span style={{color:'black',fontWeight:'bold'}}>12%</span> increase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Dashboard;