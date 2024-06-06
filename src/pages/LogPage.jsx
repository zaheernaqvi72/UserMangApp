import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ switchToRegister, login }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && formData.username === storedUser.username && formData.email === storedUser.email && formData.password === storedUser.password) {
      login(storedUser);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="bordered-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
        <button type="button" className="btn btn-link mt-3" onClick={() => { switchToRegister(); }}>Do not have an account? Register</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  switchToRegister: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
