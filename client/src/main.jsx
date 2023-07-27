import React from 'react'
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
        domain="dev-fb5oiv4kt8vknb6t.us.auth0.com"
        clientId="VVlp4apmmYXaxUdKQ2RB4UzHx66c0xn8"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
    </Auth0Provider>,
);