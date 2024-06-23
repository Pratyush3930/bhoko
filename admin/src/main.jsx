import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // browserRouter to support react router in project
  <BrowserRouter> 
    <App />
  </BrowserRouter>
)
