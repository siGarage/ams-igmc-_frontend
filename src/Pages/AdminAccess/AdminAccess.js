import './AdminAccess.css';
import {Link} from 'react-router-dom'
function AdminAcess() { 

  return (
    <>
   <section className='AdminAccessPage'>
    <div className='AdminAccessPageBox1'>
      <div className='AdminAccessPageBox1Inner'>Super Access</div>
    </div>

    <div className='AdminAccessPageBox2'>
      <Link className='AdminAccessNavLinks' to='/creategroup' ><button className='AdminAccessButton'>Create Group</button></Link>
      <Link className='AdminAccessNavLinks' to='/showgroups' ><button className='AdminAccessButton' >Show Groups</button></Link>
    </div>
    

    <div  className='AdminAccessPageBox1'>
      <div className='AdminAccessPageBox1Inner'>Upload</div>
    </div>
    <div className='AdminAccessPageBox3'>
    <Link className='AdminAccessNavLinks' to='/uploadcsv' ><button className='AdminAccessButton' >Upload CSV</button></Link>
    </div>
    </section>
    </>
  );
}

export default AdminAcess;
