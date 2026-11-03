import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import FeedApp from './feedback-app.jsx'
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename='/my-react-app/' future={{v7_startTransition:true,
    v7_relativeSplatPath:true}}>
    <FeedApp />
  </BrowserRouter>
);