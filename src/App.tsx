import { LogtoProvider, LogtoConfig } from '@logto/react';
import './App.css'
import { Route, Routes } from 'react-router';
import { LoginCallback } from './LoginCallback';
import Home from './Home';

function App() {
  const config: LogtoConfig = {
    endpoint: 'https://qrnd96.logto.app/',
    appId: 'h92vhil932vbro74vaxyo',
  };

  return (
    <>
    <LogtoProvider config={config}>
      <Routes>
        <Route path="/callback" element={<LoginCallback />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </LogtoProvider>
    </>
  )
}

export default App
