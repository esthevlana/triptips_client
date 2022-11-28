import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

function Navbar() {

    const { loggedIn, user, logout } = useContext(AuthContext);

    return (
    <nav>
      <Link to="/">
        <p>Home</p>
      </Link>
 
      {loggedIn && (
        <>
          <Link to="/profile">
            <p>Profile</p>
          </Link>

          <Link to="/addarticle">
            <p>How was your trip?</p>
          </Link>

          <Link to="/">
            <p>Community</p>
          </Link> {/* procurar como fazer um menu dropdown linkando à base de dados */}

          <button onClick={logout}>Logout</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;