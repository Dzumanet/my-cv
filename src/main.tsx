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
  position: string;
  experience: Experience[];
  education: string[];
}
 const CvData: CVData = {
  photo: CvPhoto,
  name: 'Konrad',
  lastName: 'Alien',
  position: 'Developer',
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
   <header>
    <h1>CV {CvData.name} {CvData.lastName}</h1>
   </header>
   <main className="cv-main">
    
    <aside className="cv-aside">
<h2>{CvData.name} {CvData.lastName}</h2>
<img className="cv-aside-foto" src={CvPhoto} alt="Cv Foto" />
<h2>{CvData.position}</h2>
    </aside>
    <section className="cv-section">
      <table className="cv-section-experience">
        <caption>Experience</caption>
        <tbody>
        {CvData.experience.map((experience, index) => (
          <tr key={index}>
           <th>{experience.year}</th>
           <th>{experience.description}</th>
          </tr>
        ))}
        </tbody>
      </table>
      <table className="cv-section-education">
        <caption>Education</caption>
        <tbody>
          {CvData.education.map((education, index) => (
            <tr key={index}>
              <th>{education}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
   </main>
  </React.StrictMode>,
)
