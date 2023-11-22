import './Navbar.css';
function Navbar() {
  return (
   <div style={{boxShadow:'0px 2px 8px 2px grey',position:'relative',zIndex:'100' }}>
   <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',height:'10vh',padding:'0px 0px 0px 50px'}}>
    <div style={{fontFamily:'Nunito',color:'#012970',fontWeight:'700',fontSize:'26px'}}>Attendify</div>
   </div>
   </div>
  );
}

export default Navbar;