import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="login_form_container">
      <div className="form-container" onSubmit={handleSubmit}>
        <h1 className="title is-3">// USER LOG IN</h1>
        <form autoComplete="off" >
          <div>
            <label>Email</label><br/>
            <input className="input" type="text" name="email" value={credentials.email} onChange={handleChange} required />
          </div><br/>
          <div>
            <label>Password</label><br/>
            <input className="input" type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <p className="error-message">&nbsp;{error}</p>
          <br/>
          <button type="submit" className="button is-fullwidth is-info">LOG IN</button>
        </form>
      </div>
    </div>
  );
}