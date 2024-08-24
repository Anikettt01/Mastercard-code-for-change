import React from 'react'
import Card from './Card.jsx'
import Header from './Header.jsx'
import axios from 'axios'

let projects = [];

axios.get('http://localhost:8000/project')
  .then(response => {
    projects = response.data;
    console.log(projects)

  })
  .catch(error => {
    console.error('There was an error!', error);
  });

const Cards = () => {
    return (
        <>
        <Header/>
        <div className='flex  flex-wrap gap-4 mx-8 mt-16'>
            {
                projects.map((project, index) => {
                    return (
                        <Card 
                            key={index}
                            name={project.name} 
                            type={project.type} 
                            description={project.description} 
                            requirements={project.requirements} 
                        />
                    )
                 })
            }
        </div>
        </>
        
    )
}

export default Cards;
