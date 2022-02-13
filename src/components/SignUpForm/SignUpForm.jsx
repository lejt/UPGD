import { Component } from "react";
import React from "react";
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';

class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleChange = (evt) => {
    // The object passed to setState is merged with the current state object
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or 'confirm' property,
      //  so let's make a copy of the state object, then delete them
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;

      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({error: 'Sign Up Failed - Try Again'})
    }
  }

  render() {
    
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="signup_form_container">
        <div className="form-container">
          <h1 className="title is-3">// USER SIGN UP</h1>
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label><br/>
              <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div><br/>
            <div>
              <label>Email</label><br/>
              <input className="input" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div><br/>
            <div>
              <label>Password</label><br/>
              <input className="input" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div><br/>
            <div>
              <label>Confirm</label><br/>
              <input className="input" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
            <br/>
            <button className="button is-info is-fullwidth" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUpForm;