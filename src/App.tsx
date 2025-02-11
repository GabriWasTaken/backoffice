import { LogtoProvider, LogtoConfig } from '@logto/react';
import './App.css'
import AppRouter from './components/AppRouter';

function App() {
  const config: LogtoConfig = {
    endpoint: 'https://qrnd96.logto.app/',
    appId: 'h92vhil932vbro74vaxyo',
  };

  return (
    <LogtoProvider config={config}>
      <AppRouter />
    </LogtoProvider>
  )
}

export default App
