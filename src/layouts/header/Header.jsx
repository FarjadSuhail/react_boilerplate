import { Link } from 'react-router-dom'
// import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'
import "./Header.css"
const Navbar = () => {
//   const { logout } = useLogout()
//   const {isLoggedIn} = useAuthContext();
  
const isLoggedIn = false;
  const handleClick = () => {
    // logout()
  }


  return (
    <header>
      <div className="container">
        {/* <Link to="/">
          <h1>Workout Buddy</h1>
        </Link> */}
        <Link to="/">
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          />
          <span className="text-xl whitespace-pre">Fireball</span>
        </div>
        </Link>
        <nav>
          {isLoggedIn && (
            <div>
              <span>{isLoggedIn.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!isLoggedIn && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar