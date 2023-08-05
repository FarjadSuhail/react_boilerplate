import { useState } from "react"
// import { useLogin } from "../hooks/useLogin";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "../../store/slice/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
//   const {login, error, isLoading} = useLogin();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(email, password)
    // await login(email, password);

        setIsLoading(true)
        setError(null)


    //     const res = await fetch('http://localhost:4000/api/user/login', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({email, password})
    //     })
    //     const json = await res.json();

    //     if (!res.ok) {
    //         setIsLoading(false);
    //         setError(json.Error);
    //     }
    //     if (res.ok) {
            
    //         // save the user to local storage
    //         // localStorage.setItem('user', JSON.stringify(json));

    //         // update the auth context
    //         // dispatch({
    //         //     type: 'LOGIN',
    //         //     payload: json
    //         // })

    //         setIsLoading(false);
    //         setError(null);
    // }

    dispatch(authActions.login());
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button >Log in</button>
      {/* {error && <div className="error">{error}</div>} */}
    </form>
  )
}

export default Login