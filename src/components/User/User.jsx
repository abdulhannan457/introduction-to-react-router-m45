import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, username, email, phone} = user;
    const userStyle ={
        border: '2px solid purple',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={userStyle}>
           <h2>id: {id}</h2> 
           <h3>name: {name}</h3> 
           <h2>User Name: {username}</h2> 
           <h4>Email: {email}</h4>
           <h4>Phone: {phone}</h4>
          <Link to={`/user/${id}`}>Show Details</Link>
          <Link to={`/user/${id}`}><button>Click Me</button>
          </Link>
        </div>
    );
};
User.propTypes = {
    user:PropTypes.object
}
export default User;