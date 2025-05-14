import './LoginScreen.css';
import headphones from '../assets/headphones.png';

export default function LoginScreen() {
  return (
    <div className="login-screen">
      <div className="top-section">
        <img src={headphones} alt="headphones" className="hero-img" />
        <h2>
          <span className="black">Hello Saba.</span><br />
          <span className="white">Welcome back!</span>
        </h2>
      </div>

      <div className="form-container">
        <div className="drag-bar"></div>
        <p className="title">Enter to your account</p>
        
<form>
  <div className="input-wrapper">
    <input type="email" placeholder="E-mail" />
  </div>

  <div className="input-wrapper">
    <input type="password" placeholder="Enter your password..." />
    <span className="eye-icon">👁</span>
  </div>

  <a href="/" className="forgot">Forgot the password ?</a>
  <button type="submit">Login</button>
</form>


        <p className="signup">Don't have an account? <a href="/">Sign up</a></p>
       


        {/* ✅ Status Bar */}
      <div className="status-bar">
        <span className="time">9:41</span>
        <div className="indicators">
          {/* Signal Bars */}
          <svg viewBox="0 0 20 20" width="20" height="20" fill="white">
            <rect x="1" y="13" width="2" height="5" />
            <rect x="5" y="11" width="2" height="7" />
            <rect x="9" y="9" width="2" height="9" />
            <rect x="13" y="7" width="2" height="11" />
          </svg>

          {/* Wi-Fi */}
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <path d="M12 20h.01" />
          </svg>

          {/* Battery */}
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
            <line x1="23" y1="13" x2="23" y2="11" />
          </svg>
        </div>
      </div>


      </div>
    </div>
  );
}
