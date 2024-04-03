import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LogIn } from './routes';

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
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
