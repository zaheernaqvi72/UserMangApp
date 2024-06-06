import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ChangePassword = ({ user, updateUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: user.email,
    phone: user.phone,
    newPassword: '',
    confirmNewPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("Passwords do not match!");
      return;
    }
    const updatedUser = { ...user, password: formData.newPassword };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    updateUser(updatedUser);
    navigate('/home');
  };

  return (
    <div className="bordered-container">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} readOnly />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" className="form-control" name="phone" value={formData.phone} onChange={handleChange} readOnly />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" className="form-control" name="newPassword" value={formData.newPassword} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input type="password" className="form-control" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Change Password</button>
      </form>
    </div>
  );
};

ChangePassword.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default ChangePassword;
