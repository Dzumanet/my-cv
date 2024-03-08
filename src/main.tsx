import React from 'react'
import ReactDOM from 'react-dom/client'
import CvPhoto from '../src/assets/cvAlien.webp'



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
 const CvData: CVData = {
  photo: CvPhoto,
  name: 'Konrad',
  lastName: 'Alien',
  experience: [
    { year: 2020, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quasi" },
    { year: 2021, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quasi" },
    { year: 2023, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, quasi" }
  ],
  education: [
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    "Placeat consequuntur",
    "Placeat consequuntur, impedit sapiente incidunt reprehenderit doloribus laboriosam.",
    "Placeat, autem enim? Ratione illum, facere porro adipisci alias aliquam tenetur iste reiciendis nobis",
  ]


 }


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <main className="cv-main">
    <aside className="cv-aside">

    </aside>
    <section className="cv-section">
      <section className="cv-section-experience"></section>
      <section className="cv-section-education"></section>
    </section>
   </main>
  </React.StrictMode>,
)
