import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

type View = 'login' | 'signup' | 'dashboard';

function App() {
  const [currentView, setCurrentView] = useState<View>('login');

  const handleLoginSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleSignupSuccess = () => {
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setCurrentView('login');
  };

  const toggleToSignup = () => {
    setCurrentView('signup');
  };

  const toggleToLogin = () => {
    setCurrentView('login');
  };

  if (currentView === 'signup') {
    return <Signup onToggleLogin={toggleToLogin} onSignupSuccess={handleSignupSuccess} />;
  }

  if (currentView === 'dashboard') {
    return <Dashboard onLogout={handleLogout} />;
  }

  return <Login onToggleSignup={toggleToSignup} onLoginSuccess={handleLoginSuccess} />;
}

export default App;