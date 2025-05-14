import './App.css';
import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen'; // ✅ You need to create this

function App() {
  const [showLogin, setShowLogin] = useState(false); // 🔁 Toggle screen

  return (
    <div className="App">
      {showLogin ? (
        <LoginScreen />
      ) : (
        <WelcomeScreen onSwipeUp={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
