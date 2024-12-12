import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import ContextShare from './ContextAPI/ContextShare.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextShare>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextShare>
  </StrictMode>,
)
