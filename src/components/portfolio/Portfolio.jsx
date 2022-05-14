import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/project6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard&Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates&infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17610570-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps/attachments/12761503?mode=media'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17393929-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps/attachments/12518792?mode=media'
  },
  {
    id: 5,
    image: IMG5,
    title: 'High-quality dashboard templates for startups',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17096643-High-quality-dashboard-templates-for-startups/attachments/12188761?mode=media'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Orion UI kit - Charts templates & infographics in Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17557610-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12702648?mode=media'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (

              <article key={id} className="portfolio__item">
                <div className="portfolio-item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>

            )
          }) 
        }


      </div>
    </section>
  )
}

export default Portfolio