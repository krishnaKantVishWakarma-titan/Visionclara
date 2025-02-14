import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'preline/preline'
import { IStaticMethods } from 'preline/preline'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

// Wrap App component to handle Preline initialization
function AppWrapper() {
  useEffect(() => {
    // Initialize Preline
    window.HSStaticMethods.autoInit();
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<AppWrapper />);
