import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
const Nav=()=>{
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout=()=>{
        
        localStorage.clear();
        navigate("/SignUp");
    }

    if (auth) {
        return(
            <div>
                <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                 <li><Link to="/add">add products</Link></li>
                 <li><Link to= "/update">update products</Link></li>
                 <li> <Link to ="/profile">profile</Link></li>
                 <li><Link to = "/SignUp" onClick={logout}>Logout</Link></li>
                </ul>
            </div>
        )
    } else {
        return(
            <div>
                <ul className='nav-ul'>
            <li><Link to="/SignUp">SignUp</Link></li>
            </ul>
            </div>
        )
        
    }


    // return(
    //     <div>
    //         <ul className='nav-ul'>
    //             if (auth) {
                    
    //             } else {
                    
    //             }
            
    //             {auth ?
    //             <li><Link to = "/logout">Logout</Link></li>
    //              : 
    //              <li><Link to="/SignUp">SignUp</Link></li>, 
    //              <li><Link to="/">Products</Link></li>,
    //             <li><Link to="/add">add products</Link></li>,
    //             <li><Link to= "/update">update products</Link></li>,
    //             <li> <Link to ="/profile">profile</Link></li>}
                
    //         </ul>
    //     </div>
    // )
}
export default Nav;