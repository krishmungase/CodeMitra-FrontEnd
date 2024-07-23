import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
// import { Provider } from 'react-redux'
// import store from "./Store/store"

{/* <Provider store={store}>
<BrowserRouter>
  <App />
  <Toaster />
</BrowserRouter>
</Provider> */}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>,
)
