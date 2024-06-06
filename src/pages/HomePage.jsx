import PropTypes from 'prop-types';

const Home = ({ user, logout, changePassword, editDetails }) => {
  return (
    <div className="bordered-container">
      <h2>Welcome, {user.name}!</h2>
      <div className="mt-3">
        <h4>Your Details:</h4>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary btn-sm mr-2" onClick={editDetails}>Edit Details</button>
        <button className="btn btn-warning btn-sm mr-2" onClick={changePassword}>Change Password</button>
        <button className="btn btn-danger btn-sm" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  editDetails: PropTypes.func.isRequired,
};

export default Home;
