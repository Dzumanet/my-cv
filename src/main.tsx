import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  experience: Experience[];
  education: string[];
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   
  </React.StrictMode>,
)
