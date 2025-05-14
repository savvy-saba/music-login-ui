import { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return showLogin ? <LoginScreen /> : <WelcomeScreen onSwipeUp={() => setShowLogin(true)} />;
}

export default App;
