import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lightningGif from './assests/lighting.webp'; 
import logo from './assests/SkySage_logo_light.png'; // Adjust the path to your logo file
import './Login.css';
import './Signup';
const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedPassword = localStorage.getItem('userPassword') || '';
    setEmail(storedEmail);
    setPassword(storedPassword);
  }, []);

  useEffect(() => {
    localStorage.setItem('userEmail', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('userPassword', password);
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!password.trim() || password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (Object.keys(errors).length === 0) {
     
      alert(`Login Successful!\nEmail: ${email}\nPassword: ${password}`);
      window.location.href = '/Info';
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="login-section">
      <div className="gif-container">
        <img src={lightningGif} alt="Weather GIF" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-value">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <h2>Login</h2>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div>
              <label>
                <input type="checkbox" /> Remember Me <Link to="/Forget">Forgot</Link>
              </label>
            </div>
            <br />
            <div>
              <button style={{ padding: '10px', borderRadius: '10px', marginLeft: '10px' }} type="submit">Log in</button>
            </div>
            <br />
            <div className="register">
              <p>
                Don't have an account? <Link to="/Signup">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
