import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Registration from './pages/RegPage';
import Login from './pages/LogPage';
import Home from './pages/HomePage';
import ChangePassword from './pages/ChangPassPage'; 
import EditDetails from './pages/UserEditPage';
import './App.css'; 

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [successMessage, setSuccessMessage] = useState('');

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const handleSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <Router>
      <div className="container">
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <Routes>
          <Route path="/register" element={!user ? <Registration switchToLogin={() => window.location.href = '/login'} /> : <Navigate to="/home" />} />
          <Route path="/login" element={!user ? <Login switchToRegister={() => window.location.href = '/register'} login={login} /> : <Navigate to="/home" />} />
          <Route path="/home" element={user ? <Home user={user} logout={logout} changePassword={() => window.location.href = '/change-password'} editDetails={() => window.location.href = '/edit-details'} /> : <Navigate to="/login" />} />
          <Route path="/change-password" element={user ? <ChangePassword user={user} updateUser={(updatedUser) => { updateUser(updatedUser); handleSuccessMessage('Password changed successfully'); }} /> : <Navigate to="/login" />} />
          <Route path="/edit-details" element={user ? <EditDetails user={user} updateUser={(updatedUser) => { updateUser(updatedUser); handleSuccessMessage('Details updated successfully'); }} /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={user ? "/home" : "/register"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
