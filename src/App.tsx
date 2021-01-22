import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
