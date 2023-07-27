import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './page';
import { useAuth0 } from '@auth0/auth0-react';

const App = () =>{ 
  const {isAuthenticated, user} = useAuth0();
  return (
    <BrowserRouter>
      <main className="sm: px-4 pt-0 pb-8 w-full min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          {isAuthenticated && <Route path="/create-post" element={<CreatePost />} />}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default App;
