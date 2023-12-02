import { memo } from 'react';
import { connect } from 'react-redux';
import './Navbar.css';
function Navbar(props) {
  const {name}=props;
  const CapitalizeFirstLetter=(str)=>{
      return str[0].toUpperCase() +str.slice(1)
  }
  return (
   <div style={{boxShadow:'0px 2px 8px 2px grey',position:'relative',zIndex:'100' }}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'10vh',padding:'0px 0px 0px 50px'}}>
    <div style={{fontFamily:'Nunito',color:'#012970',fontWeight:'700',fontSize:'26px'}}>Attendify</div>
    <div style={{margin:'0px 50px 0px 0px',fontFamily:'Nunito',fontSize:'20px',fontWeight:'700'}}>{CapitalizeFirstLetter(name)}</div>
   </div>
   </div>
  );
}

const mapStateToProps = (state) => ({
    name: state.auth.user.responseUser.name,
});
export default connect(mapStateToProps)(memo(Navbar));
