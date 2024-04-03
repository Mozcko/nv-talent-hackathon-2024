import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { 
  LogIn,
  Feed,
  LogBook,
  LogBookForm,
  Dashboard
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
          <Route path="/" element={<Feed />} />
          <Route path="/logbook" element={<LogBook />} />
          <Route path="/logbookform" element={<LogBookForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
