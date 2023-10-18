
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
           
            <nav>
                <span>My website</span><br></br>
               <Link to={'/'}>Home</Link>
               <Link to={'/about'}>About</Link>
               <NavLink to={'/users'}>users</NavLink>
              
               <Link to={'/contact'}>Contact</Link>
               <NavLink to={'/posts'}>Posts</NavLink>
            
               
               <NavLink to={'/comments'}>Comments</NavLink>
               <Link to={'/todos'}>Todos</Link>
            </nav>
        </div>
    );
};

export default Header;