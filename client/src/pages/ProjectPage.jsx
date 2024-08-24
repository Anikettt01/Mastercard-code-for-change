import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
let projects = [];
axios.get('http://localhost:8000/project')
  .then(response => {
    projects = response.data; // Storing the JSON data into the array
    console.log(projects);    // Logging the array to see the stored data
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

const ProjectPage = () => {
  return (
    <div>
        <div className='header text-[4vh] mt-8' key={projects[0].id}>
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
                {projects[0].name}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                <p className="text-lg text-gray-800">{projects[0].amount}</p>
                </div>
            </div>
            <div>
            <label className="text-sm font-semibold text-gray-600">
                Type:
            </label>
            <p className="text-lg text-gray-800">{projects[0].type}</p>
            </div>

            <div className="mb-6">
                <label className="text-sm font-semibold text-gray-600">
                Description:
                </label>
                <p className="text-lg text-gray-800">
                {projects[0].description}
                </p>
            </div>
            <div className="mb-6">
                <label className="text-sm font-semibold text-gray-600">
                Key Requirements:
                </label>
                <p className="text-sm text-gray-800">
                    {projects[0].requirements}
                </p>
            </div>


            <div className="flex justify-end">
                <button className="bg-blue-600 text-white font-semibold py-1 px-5 rounded-md hover:bg-blue-700 transition duration-300">
                <Link to='/user'>
                     Apply
                   </Link>
               
                </button>
            </div>
            </div>
        </div>
    
    </div>
  )
}

export default ProjectPage