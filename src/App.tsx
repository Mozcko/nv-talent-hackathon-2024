import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { 
  LogIn,
  Feed
} from './routes';

import {
  Topbar
} from './components'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Topbar isLoggedIn={true} />
        
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
