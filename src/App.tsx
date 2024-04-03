import { BrowserRouter } from 'react-router-dom';

import {
  Topbar
} from './components'

function App() {
  return (
    <BrowserRouter>
      <Topbar isLoggedIn={true} />
      {/* Render the rest of your components here */}
    </BrowserRouter>
  );
}

export default App;
