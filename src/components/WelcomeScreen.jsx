import './WelcomeScreen.css';
import headphones from '../assets/headphones.png';

export default function WelcomeScreen({ onSwipeUp }) {
  let startY = null;
  let isMouseDown = false;

  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (startY !== null && startY - e.changedTouches[0].clientY > 50) {
      onSwipeUp();
    }
  };

  const handleMouseDown = (e) => {
    isMouseDown = true;
    startY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    if (startY !== null && startY - e.clientY > 50) {
      onSwipeUp();
      isMouseDown = false;
    }
  };

  const handleMouseUp = () => {
    isMouseDown = false;
  };

  return (
    <div
      className="welcome-screen"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/*  Status Bar */}
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

      <img src={headphones} alt="headphones" className="hero-img" />
      <div className="overlay" />

      <div className="content">
       
<h2>
  <span className="text-black">Swipe up to</span><br />
  <span className="text-white">explore the world</span><br />
  <span className="text-white">of music</span>
</h2>

        <div className="swipe-indicator">
  <span>⌃</span><br />
  <span>⌃</span><br />
  <span>⌃</span>
</div>

      </div>

      <div className="bottom-curve" />
    </div>
  );
}
