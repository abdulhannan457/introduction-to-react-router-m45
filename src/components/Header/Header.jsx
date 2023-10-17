
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
           
            <nav>
                <span>My website</span><br></br>
               <Link to={'/'}>Home</Link>
               <Link to={'/about'}>About</Link>
               <Link to={'/users'}>Users</Link>
               <Link to={'/contact'}>Contact</Link>
               <Link to={'/posts'}>posts</Link>
               <Link to={'/comments'}>Comments</Link>
               <Link to={'/todos'}>Todos</Link>
            </nav>
        </div>
    );
};

export default Header;