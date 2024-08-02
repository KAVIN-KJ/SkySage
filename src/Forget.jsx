import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lightningGif from './assets/lighting.webp'; // Corrected asset path
import logo from './assets/SkySage_logo_light.png'; // Import your logo
import './Login.css';

const Forget = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (Object.keys(errors).length === 0) {
      alert(`Password reset link sent to ${email}`);
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
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="form-value">
            <h2>Forget Password</h2>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label><br></br>Email</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <br />
            <div>
              <button style={{ padding: '10px', borderRadius: '10px', marginLeft: '10px' }} type="submit">Submit</button>
            </div>
            <br />
            <div className="register">
              <p>
                Remember your password? <Link to="/">Log in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Forget;
